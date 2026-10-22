import { Link, useRouterState } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { Eyebrow, RevealLines, type GalleryImage } from '@/components/ui'
import { educationPages } from '@/content/education'

/* ── Sticky sub-navigation across the Education pages ──────── */

export function EduSectionNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const links = [{ label: 'Overview', to: '/education' }, ...educationPages]
  return (
    <nav aria-label="Education section" className="sticky top-[4.5rem] z-30 border-b border-teal/10 bg-pearl/85 backdrop-blur-md">
      <ul className="rail mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-5 py-3 md:px-10">
        {links.map((l) => {
          const active = pathname === l.to || (l.to === '/blog' && pathname.startsWith('/blog/'))
          return (
            <li key={l.to} className="shrink-0">
              <Link
                to={l.to}
                aria-current={active ? 'page' : undefined}
                className={`block rounded-full px-4 py-2 text-[0.78rem] font-semibold tracking-wide transition-colors duration-500 ${
                  active ? 'bg-teal text-pearl' : 'text-teal/75 hover:bg-sand hover:text-teal'
                }`}
              >
                {l.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/* ── Decorative mandala that turns slowly ──────────────────── */

export function Mandala({ className = '' }: { className?: string }) {
  const petals = Array.from({ length: 16 })
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={`spin-slow ${className}`} fill="none" stroke="currentColor" strokeWidth="0.6">
      <circle cx="100" cy="100" r="96" />
      <circle cx="100" cy="100" r="78" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="18" />
      {petals.map((_, i) => (
        <g key={i} transform={`rotate(${(360 / petals.length) * i} 100 100)`}>
          <path d="M100 22c8 14 8 30 0 42-8-12-8-28 0-42Z" />
          <path d="M100 60c4 6 4 13 0 18-4-5-4-12 0-18Z" />
          <circle cx="100" cy="12" r="2" />
        </g>
      ))}
    </svg>
  )
}

/* ── Endless photo marquee ─────────────────────────────────── */

export function PhotoMarquee({ images, reverse, speed = 60 }: { images: GalleryImage[]; reverse?: boolean; speed?: number }) {
  const loop = [...images, ...images]
  return (
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`} style={{ ['--marquee-speed' as string]: `${speed}s` }}>
      <div className="marquee-track gap-4 py-2">
        {loop.map((img, i) => (
          <div key={i} aria-hidden={i >= images.length} className="h-56 w-80 shrink-0 overflow-hidden rounded-2xl bg-slate md:h-72 md:w-[26rem]">
            <Photo src={img.src} alt={i >= images.length ? '' : img.alt} ratio={0.68} widths={[400, 700]} width={600} sizes="420px" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Big-type marquee of words with lotus separators ───────── */

export function WordMarquee({ words, light, speed = 50 }: { words: string[]; light?: boolean; speed?: number }) {
  const loop = [...words, ...words]
  return (
    <div className="marquee" style={{ ['--marquee-speed' as string]: `${speed}s` }}>
      <div className="marquee-track items-center py-4">
        {loop.map((w, i) => (
          <span key={i} aria-hidden={i >= words.length} className={`flex shrink-0 items-center font-display text-[clamp(2.25rem,5vw,4.5rem)] italic ${light ? 'text-pearl' : 'text-teal'}`}>
            <span className="px-6 md:px-10">{w}</span>
            <span className="h-2.5 w-2.5 rotate-45 bg-brass" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Pinned horizontal gallery (desktop) / swipe rail (mobile) ─ */

export function HScrollGallery({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: React.ReactNode[]
  items: { img: string; title: string; text: string; tag?: string }[]
}) {
  return (
    <section data-hscroll className="grain relative overflow-hidden bg-teal-deep text-pearl">
      <div className="flex min-h-[100svh] flex-col justify-center py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <RevealLines lines={title} className="display mt-5 max-w-3xl text-[clamp(2.25rem,4.5vw,3.75rem)]" />
        </div>
        <div className="rail mt-12 overflow-x-auto md:overflow-visible">
          <div data-hscroll-track className="flex w-max gap-6 px-5 md:px-10">
            {items.map((it, i) => (
              <article key={it.title} className="group relative w-[80vw] shrink-0 overflow-hidden rounded-3xl bg-slate sm:w-[26rem] md:w-[30rem]">
                <Photo src={it.img} alt="" ratio={1.15} widths={[480, 800, 1000]} width={800} sizes="(min-width: 768px) 30rem, 80vw" className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="eyebrow text-brass">
                    {String(i + 1).padStart(2, '0')}
                    {it.tag ? ` · ${it.tag}` : ''}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-pearl">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-pearl/75">{it.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Stat band with counting numbers ───────────────────────── */

export function StatBand({ stats, dark }: { stats: { n: number; suffix?: string; label: string }[]; dark?: boolean }) {
  return (
    <div className={`grid grid-cols-2 gap-y-10 border-y py-10 md:grid-cols-4 ${dark ? 'border-pearl/15' : 'border-teal/15'}`}>
      {stats.map((s, i) => (
        <div key={s.label} data-reveal style={{ ['--d' as string]: `${i * 0.08}s` }} className="px-2 text-center">
          <p className={`display text-[clamp(3rem,6vw,5rem)] ${dark ? 'text-brass' : 'text-teal'}`}>
            <span data-count={s.n}>{s.n}</span>
            {s.suffix}
          </p>
          <p className={`eyebrow mt-3 ${dark ? 'text-pearl/70' : 'text-muted'}`}>{s.label}</p>
        </div>
      ))}
    </div>
  )
}

/* ── “Continue to” strip for the next Education page ───────── */

export function EduNext({ current }: { current: string }) {
  const i = educationPages.findIndex((p) => p.to === current)
  const next = educationPages[(i + 1) % educationPages.length]
  return (
    <section className="grain relative overflow-hidden bg-[#7a5f2e] text-pearl">
      <Link to={next.to} className="group relative block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-8 md:px-10 md:py-10">
          <div>
            <p className="eyebrow text-pearl/80">Continue in Education</p>
            <p className="display mt-2 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none transition-transform duration-700 ease-[var(--ease-silk)] group-hover:translate-x-2">{next.label}</p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-pearl/60 text-pearl transition-all duration-500 group-hover:rotate-45 group-hover:bg-pearl group-hover:text-[#7a5f2e] md:h-14 md:w-14">
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </span>
        </div>
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-pearl transition-transform duration-700 ease-[var(--ease-silk)] group-hover:scale-x-100" />
      </Link>
    </section>
  )
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}