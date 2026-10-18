import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Photo } from './Photo'
import { Eyebrow, RevealLines } from './ui'
import { otherServices, services, type ServiceSlug, type ServiceSummary } from '@/content/services'

/* ── Pointer spotlight: a soft brass glow that follows the cursor ── */

export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(pointer: fine)').matches) return
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('pointermove', move)
    return () => el.removeEventListener('pointermove', move)
  }, [])
  return ref
}

/** Generic card surface with the cursor spotlight and a lift on hover. */
export function SpotCard({
  children,
  className = '',
  dark,
  delay = 0,
  reveal = true,
}: {
  children: React.ReactNode
  className?: string
  dark?: boolean
  delay?: number
  reveal?: boolean
}) {
  const ref = useSpotlight<HTMLDivElement>()
  return (
    <div {...(reveal ? { 'data-reveal': '' } : {})} style={{ ['--d' as string]: `${delay}s` }} className="h-full">
      <div
        ref={ref}
        className={`spot-card ${dark ? 'spot-card-dark' : ''} group relative h-full overflow-hidden rounded-3xl border transition-[translate,border-color,box-shadow] duration-700 ease-[var(--ease-silk)] hover:-translate-y-1.5 ${
          dark ? 'border-pearl/12 bg-pearl/[0.04] hover:border-brass/50' : 'border-teal/12 bg-pearl hover:border-brass/70 hover:shadow-[0_30px_60px_-30px_rgba(12,46,49,0.35)]'
        } ${className}`}
      >
        {children}
      </div>
    </div>
  )
}

/* ── Scroll progress → CSS variable --p (0‥1) on a container ──── */

export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '1')
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the top of the block reaches 70% of the viewport, 1 when the bottom reaches 55%
      const p = (vh * 0.7 - r.top) / (r.height + vh * 0.7 - vh * 0.55)
      el.style.setProperty('--p', String(Math.min(1, Math.max(0, p))))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return ref
}

/* ── Slowly turning mandala ornament (decorative) ───────────── */

export function Mandala({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={`spin-slow text-brass ${className}`} fill="none" stroke="currentColor" strokeWidth="0.6">
      {Array.from({ length: 16 }).map((_, i) => (
        <ellipse key={i} cx="100" cy="52" rx="9" ry="40" transform={`rotate(${i * 22.5} 100 100)`} />
      ))}
      <circle cx="100" cy="100" r="96" />
      <circle cx="100" cy="100" r="62" />
      <circle cx="100" cy="100" r="22" />
    </svg>
  )
}

/* ── Marquee of service names ───────────────────────────────── */

export function ServiceMarquee({ dark, reverse }: { dark?: boolean; reverse?: boolean }) {
  const row = services.map((s) => s.title)
  return (
    <div aria-hidden className={`marquee ${reverse ? 'marquee-reverse' : ''} py-6 ${dark ? 'text-pearl/30' : 'text-teal/25'}`} style={{ ['--marquee-speed' as string]: '55s' }}>
      <div className="marquee-track">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="display flex items-center gap-8 whitespace-nowrap pr-8 text-[clamp(2rem,5vw,4rem)]">
            {t}
            <span className="h-2 w-2 rotate-45 bg-brass" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Service card (used on the hub and the homepage rail) ──── */

/** Card colours that sit apart from the teal-deep homepage band (none are white). */
export const serviceTones = ['#1f6a6e', '#6c2c3c', '#8a5a26', '#31507a'] as const

export function ServiceCard({ s, delay = 0, className = '', reveal = true, tone }: { s: ServiceSummary; delay?: number; className?: string; reveal?: boolean; tone?: string }) {
  const ref = useSpotlight<HTMLAnchorElement>()
  return (
    <div {...(reveal ? { 'data-reveal': '' } : {})} style={{ ['--d' as string]: `${delay}s` }} className={className}>
    <Link
      ref={ref}
      to={s.to}
      style={tone ? { ['--card' as string]: tone, backgroundColor: tone } : undefined}
      className={`spot-card spot-card-dark group relative block h-full overflow-hidden rounded-3xl border text-pearl transition-[translate,border-color] duration-700 ease-[var(--ease-silk)] hover:-translate-y-2 ${
        tone ? 'border-pearl/25 hover:border-brass-soft' : 'border-pearl/12 bg-teal-deep hover:border-brass/60'
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
        <Photo
          src={s.img}
          alt={s.imgAlt}
          ratio={0.75}
          widths={[480, 800, 1200]}
          width={800}
          sizes="(min-width: 1024px) 28rem, 80vw"
          className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-[1.08]"
        />
        <span className={`absolute inset-0 bg-gradient-to-t ${tone ? 'from-[var(--card)] via-transparent' : 'from-teal-deep via-teal-deep/20'} to-transparent`} />
        <span className="display absolute left-6 top-4 text-6xl text-pearl/90 [text-shadow:0_2px_18px_rgba(12,46,49,0.8)] transition-colors duration-500 group-hover:text-brass">{s.index}</span>
      </div>
      <div className="relative p-7 md:p-7">
        <p className={`eyebrow ${tone ? 'text-brass-soft' : 'text-brass'}`}>{s.for}</p>
        <h3 className="display mt-4 text-[2rem] leading-[1.02] text-pearl md:text-[2.25rem]">{s.title}</h3>
        <p className={`mt-3 text-[0.98rem] leading-relaxed ${tone ? 'text-pearl/90' : 'text-pearl/72'}`}>{s.summary}</p>
        <span className={`mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] ${tone ? 'text-pearl' : 'text-brass'}`}>
          Explore
          <span className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 group-hover:translate-x-1 group-hover:bg-brass group-hover:text-teal-deep ${tone ? 'border-pearl/60' : 'border-brass/50'}`}>
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </span>
      </div>
    </Link>
    </div>
  )
}

/* ── Homepage "Services" section — pinned sideways scroll ───── */

export function ServicesShowcase() {
  const outer = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  // Desktop: the section is made tall and its content sticks while the card track slides sideways.
  // Mobile / reduced motion: the track is a plain, natively scrollable rail.
  useEffect(() => {
    const section = outer.current
    const el = track.current
    if (!section || !el) return
    const desktop = window.matchMedia('(min-width: 768px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let distance = 0
    let raf = 0

    const measure = () => {
      if (!desktop.matches || reduced.matches) {
        section.style.height = ''
        el.style.transform = ''
        return
      }
      distance = Math.max(0, el.scrollWidth - window.innerWidth)
      section.style.height = `${window.innerHeight + distance}px`
      update()
    }
    const update = () => {
      raf = 0
      if (!desktop.matches || reduced.matches) return
      const r = section.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)))
      el.style.transform = `translate3d(${-p * distance}px,0,0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    desktop.addEventListener('change', measure)
    reduced.addEventListener('change', measure)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      desktop.removeEventListener('change', measure)
      reduced.removeEventListener('change', measure)
      if (raf) cancelAnimationFrame(raf)
      section.style.height = ''
      el.style.transform = ''
    }
  }, [])

  return (
    <section id="services" ref={outer} className="relative bg-teal-deep text-pearl">
      <div className="grain jali relative flex flex-col justify-center overflow-hidden py-20 md:sticky md:top-0 md:h-svh md:pb-6 md:pt-24">
        <Mandala className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] opacity-25" />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <Eyebrow light>Services</Eyebrow>
            <RevealLines lines={['Ways we', <em key="s" className="text-brass">serve you.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-pearl" />
          </div>
          <div data-reveal className="max-w-md md:pb-3">
            <p className="leading-relaxed text-pearl/72">Coaching, training, camps and sacred services — offered by the Gurukula to families, educators and institutions.</p>
            <Link to="/services" className="btn btn-ghost-light mt-6">
              All services <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="rail relative mt-10 overflow-x-auto md:mt-8 md:overflow-hidden">
          <div ref={track} className="flex w-max gap-5 px-5 pb-4 will-change-transform md:gap-7 md:px-10 md:pb-0">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} reveal={false} tone={serviceTones[i % serviceTones.length]} className="w-[78vw] shrink-0 sm:w-[24rem] md:w-[25rem]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Vertical timeline whose spine draws itself on scroll ───── */

export function ProcessTimeline({ steps, dark }: { steps: { title: string; meta?: string; text: string }[]; dark?: boolean }) {
  const ref = useScrollProgress<HTMLOListElement>()
  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className={`absolute bottom-3 left-[1.15rem] top-3 w-px md:left-[1.4rem] ${dark ? 'bg-pearl/15' : 'bg-teal/15'}`} />
      <span aria-hidden className="tl-fill absolute bottom-3 left-[1.15rem] top-3 w-px origin-top bg-brass md:left-[1.4rem]" />
      {steps.map((step, i) => (
        <li key={step.title} data-reveal="" style={{ ['--d' as string]: '0.05s' }} className="relative flex gap-6 pb-12 last:pb-0 md:gap-8">
          <span
            className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold md:h-12 md:w-12 ${
              dark ? 'border-brass/60 bg-teal-deep text-brass' : 'border-brass bg-pearl text-[#8a6f3c]'
            }`}
          >
            {i + 1}
          </span>
          <div className="pt-1.5">
            {step.meta && <p className={`eyebrow ${dark ? 'text-brass' : 'text-[#8a6f3c]'}`}>{step.meta}</p>}
            <h3 className={`display mt-2 text-[1.75rem] leading-tight md:text-[2.25rem] ${dark ? 'text-pearl' : 'text-teal'}`}>{step.title}</h3>
            <p className={`mt-3 max-w-xl leading-relaxed ${dark ? 'text-pearl/72' : 'text-muted'}`}>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ── Floating chip cloud ────────────────────────────────────── */

export function ChipCloud({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item, i) => (
        <li
          key={item}
          data-reveal="scale"
          style={{ ['--d' as string]: `${(i % 8) * 0.06}s` }}
          className={`rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-500 ${
            dark ? 'border-pearl/20 text-pearl hover:border-brass hover:bg-brass hover:text-teal-deep' : 'border-teal/20 text-teal hover:border-teal hover:bg-teal hover:text-pearl'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

/* ── "Continue exploring" strip at the foot of each service ─── */

export function MoreServices({ current }: { current: ServiceSlug }) {
  const list = otherServices(current)
  const idx = services.findIndex((s) => s.slug === current)
  const next = services[(idx + 1) % services.length]
  return (
    <>
      <section className="grain relative overflow-hidden bg-teal-deep text-pearl">
        <Link to={next.to} className="group relative block">
          <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-6 px-5 py-20 md:px-10 md:py-28">
            <div>
              <p className="eyebrow text-brass">Next service · {next.index}</p>
              <p className="display mt-5 text-[clamp(2.5rem,7vw,6.5rem)] leading-none transition-transform duration-700 ease-[var(--ease-silk)] group-hover:translate-x-3">{next.title}</p>
            </div>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brass/60 text-brass transition-all duration-500 group-hover:bg-brass group-hover:text-teal-deep md:h-24 md:w-24">
              <ArrowRight className="h-6 w-6 md:h-8 md:w-8" aria-hidden />
            </span>
          </div>
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brass transition-transform duration-700 ease-[var(--ease-silk)] group-hover:scale-x-100" />
        </Link>
      </section>
      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p data-reveal className="eyebrow text-[#8a6f3c]">All services</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {list.map((s, i) => (
              <li key={s.slug} data-reveal="scale" style={{ ['--d' as string]: `${i * 0.05}s` }}>
                <Link to={s.to} className="inline-flex rounded-full border border-teal/25 px-5 py-3 text-sm font-semibold text-teal transition-colors duration-500 hover:border-teal hover:bg-teal hover:text-pearl">
                  {s.title}
                </Link>
              </li>
            ))}
            <li data-reveal="scale">
              <Link to="/services" className="inline-flex rounded-full bg-teal px-5 py-3 text-sm font-semibold text-pearl transition-colors duration-500 hover:bg-brass hover:text-teal-deep">
                Overview
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}