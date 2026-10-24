import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight, CalendarCheck, ChevronLeft, ChevronRight, Clock, Leaf, Mail, MessageCircle, Play, Plus, Users, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Photo } from './Photo'
import { contact } from '@/content/site'

/* ── Headline that reveals line by line ─────────────────────── */

export function RevealLines({ lines, className = '', as: Tag = 'h2' }: { lines: React.ReactNode[]; className?: string; as?: 'h1' | 'h2' | 'h3' }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} data-reveal="line" style={{ ['--d' as string]: `${i * 0.12}s` }}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  )
}

export function Eyebrow({ children, light, className = '' }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p data-reveal className={`eyebrow flex items-center gap-3 ${light ? 'text-brass' : 'text-[#8a6f3c]'} ${className}`}>
      <span className="h-px w-8 bg-current" aria-hidden />
      {children}
    </p>
  )
}

/* ── Inner page hero ─────────────────────────────────────────── */

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = '',
  position = 'center',
  children,
}: {
  eyebrow: string
  title: React.ReactNode[]
  intro?: React.ReactNode
  image?: string
  imageAlt?: string
  position?: string
  children?: React.ReactNode
}) {
  return (
    <section className="grain relative isolate flex min-h-[78svh] items-end overflow-hidden bg-teal text-pearl">
      {image ? (
        <div className="absolute inset-0 -z-10">
          <div data-parallax="0.18" className="absolute inset-[-8%_0]">
            <Photo src={image} alt={imageAlt} priority className="h-full w-full object-cover" style={{ objectPosition: position }} widths={[640, 1024, 1600, 2200]} width={1600} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/70 to-teal-deep/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/70 to-transparent" />
        </div>
      ) : (
        <div className="jali absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full border border-brass/15" />
          <div className="absolute -right-20 -top-20 h-[440px] w-[440px] rounded-full border border-brass/10" />
        </div>
      )}
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 md:px-10 md:pb-24">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <RevealLines as="h1" lines={title} className="display mt-6 max-w-5xl text-[clamp(2.9rem,8vw,7.5rem)] text-pearl" />
        {intro && (
          <div data-reveal style={{ ['--d' as string]: '0.3s' }} className="mt-8 max-w-2xl text-lg leading-relaxed text-pearl/80">
            {intro}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/* ── Admissions call-to-action: "Begin with a visit" ─────────── */

const visitFacts: { Icon: LucideIcon; label: string; sub: string }[] = [
  { Icon: Clock, label: '4 – 6 PM', sub: 'Visiting hours' },
  { Icon: CalendarCheck, label: 'By appointment', sub: 'Any time of year' },
  { Icon: Users, label: 'Student-guided', sub: 'Your walk-through' },
  { Icon: Leaf, label: 'Five acres', sub: 'Open campus' },
]

export function AdmissionsCTA({ title = ['Begin with', ' a visit.'], text }: { title?: string[]; text?: string }) {
  return (
    <section id="visit" className="grain relative isolate overflow-hidden bg-teal-deep text-pearl">
      {/* Slowly turning mandala behind everything */}
      <svg className="vc-mandala spin-slow pointer-events-none absolute -left-40 top-1/2 -z-10 h-[780px] w-[780px] -translate-y-1/2 text-brass" viewBox="0 0 400 400" fill="none" stroke="currentColor" aria-hidden>
        <circle cx="200" cy="200" r="196" strokeWidth="0.6" strokeDasharray="3 7" />
        <circle cx="200" cy="200" r="150" strokeWidth="0.6" />
        <circle cx="200" cy="200" r="104" strokeWidth="0.6" strokeDasharray="1 5" />
        {Array.from({ length: 12 }, (_, i) => (
          <ellipse key={i} cx="200" cy="82" rx="22" ry="62" strokeWidth="0.7" transform={`rotate(${i * 30} 200 200)`} />
        ))}
      </svg>
      <div className="drift pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Eyebrow light>Admissions</Eyebrow>
          <RevealLines lines={title} className="display mt-6 text-[clamp(2.75rem,7vw,6.5rem)] text-pearl" />
          <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed text-pearl/80">
            {text ??
              'Visit anytime during the year by prior appointment between 4 PM to 6 PM. Walk around the five-acre campus, guided by a student, and have your questions answered.'}
          </p>

          <ul className="mt-8 grid max-w-xl grid-cols-2 gap-3" aria-label="About a visit">
            {visitFacts.map(({ Icon, label, sub }, i) => (
              <li key={label} data-reveal="scale" style={{ ['--d' as string]: `${0.1 + i * 0.1}s` }}>
                <div className="vc-chip" style={{ animationDelay: `${-i * 1.4}s` }}>
                  <span className="vc-chip__icon">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[0.95rem] font-semibold leading-tight text-pearl">{label}</span>
                    <span className="mt-0.5 block text-xs text-pearl/60">{sub}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-10 flex flex-wrap gap-3">
            <Link to="/book-visit" className="btn btn-brass">
              Book a Visit <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </Link>
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
            <Link to="/faq" className="btn btn-ghost-light">
              Read the FAQ
            </Link>
          </div>
        </div>

        {/* Photo collage with a pulsing appointment badge */}
        <div className="vc-collage relative mx-auto h-[420px] w-full max-w-[34rem] md:h-[520px]">
          <div data-reveal="mask" className="absolute right-0 top-0 h-[74%] w-[70%] overflow-hidden rounded-[1.75rem]">
            <div data-parallax="0.1" className="absolute inset-[-8%_0]">
              <Photo src="/img/slider/slider-1.jpg" alt="Smiling Gurukula students with their arms around each other" sizes="(min-width: 1024px) 28vw, 70vw" className="h-full w-full object-cover" />
            </div>
          </div>
          <div data-reveal="mask" style={{ ['--d' as string]: '0.25s' }} className="absolute bottom-0 left-0 h-[52%] w-[52%] overflow-hidden rounded-2xl border-[6px] border-teal-deep">
            <Photo src="/img/campus/sports-ground/sports.jpg" alt="Students on the sports ground" widths={[400, 800]} width={700} sizes="20vw" className="h-full w-full object-cover" />
          </div>
          <div data-reveal="mask" style={{ ['--d' as string]: '0.4s' }} className="absolute bottom-[6%] right-[4%] h-[30%] w-[34%] overflow-hidden rounded-2xl border-[6px] border-teal-deep">
            <Photo src="/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg" alt="A cow at the Gurukula goshala" widths={[300, 600]} width={400} sizes="14vw" className="h-full w-full object-cover" />
          </div>
          <div className="vc-badge" aria-hidden>
            <span className="font-display text-2xl leading-none">4 – 6 PM</span>
            <span className="mt-1 text-[0.62rem] font-bold tracking-[0.16em]">BY APPOINTMENT</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── WhatsApp + email enquiry pair, used on service pages ───── */

export function ContactActions({ light, label = 'To register / know more, contact' }: { light?: boolean; label?: string }) {
  return (
    <div data-reveal className={`rounded-2xl border p-6 md:p-8 ${light ? 'border-pearl/15 bg-pearl/5' : 'border-teal/15 bg-pearl'}`}>
      <p className={`eyebrow ${light ? 'text-brass' : 'text-[#8a6f3c]'}`}>{label}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className={`btn ${light ? 'btn-brass' : 'btn-teal'}`}>
          <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp {contact.whatsappDisplay}
        </a>
        <a href={`mailto:${contact.email}`} className={`btn ${light ? 'btn-ghost-light' : 'btn-ghost-dark'} normal-case tracking-normal`}>
          <Mail className="h-4 w-4" aria-hidden /> {contact.email}
        </a>
      </div>
    </div>
  )
}

/* ── Accessible accordion ────────────────────────────────────── */

export function Accordion({ items, dark }: { items: { q: string; a: React.ReactNode }[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className={`border-t ${dark ? 'border-pearl/15' : 'border-teal/15'}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        const id = `acc-${i}-${item.q.slice(0, 12).replace(/\W/g, '')}`
        return (
          <div key={item.q} className={`border-b ${dark ? 'border-pearl/15' : 'border-teal/15'}`}>
            <h3>
              <button
                type="button"
                id={`${id}-btn`}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start gap-6 py-6 text-left"
              >
                <span className={`mt-1 font-display text-lg ${dark ? 'text-brass' : 'text-[#8a6f3c]'}`}>{String(i + 1).padStart(2, '0')}</span>
                <span className={`flex-1 font-display text-2xl leading-snug md:text-[1.75rem] ${dark ? 'text-pearl' : 'text-teal'}`}>{item.q}</span>
                <span
                  className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                    isOpen ? 'rotate-45 border-brass bg-brass text-teal-deep' : dark ? 'border-pearl/30 text-pearl' : 'border-teal/25 text-teal'
                  }`}
                >
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </h3>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-btn`}
              className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-silk)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <div className={`pb-8 pl-12 pr-4 text-[1.02rem] leading-relaxed md:pl-14 ${dark ? 'text-pearl/80' : 'text-muted'}`} inert={!isOpen}>
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ── YouTube embed that loads only when asked ───────────────── */

export function YouTube({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false)
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate">
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full" aria-label={`Play video: ${title}`}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          <span className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brass text-teal-deep shadow-xl transition-transform duration-500 group-hover:scale-110">
            <Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden />
          </span>
          <span className="absolute bottom-5 left-6 right-6 text-left font-display text-2xl text-pearl">{title}</span>
        </button>
      )}
    </div>
  )
}

/* ── Gallery with accessible lightbox ───────────────────────── */

export type GalleryImage = { src: string; alt: string }

export function useLightbox(images: GalleryImage[]) {
  const [index, setIndex] = useState<number | null>(null)
  const open = useCallback((i: number) => setIndex(i), [])
  const node =
    index === null ? null : <Lightbox images={images} index={index} onIndex={setIndex} onClose={() => setIndex(null)} />
  return { open, node }
}

function Lightbox({ images, index, onIndex, onClose }: { images: GalleryImage[]; index: number; onIndex: (i: number) => void; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const returnFocus = useRef<Element | null>(null)
  const img = images[index]
  const prev = () => onIndex((index - 1 + images.length) % images.length)
  const next = () => onIndex((index + 1) % images.length)

  useEffect(() => {
    returnFocus.current = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      ;(returnFocus.current as HTMLElement | null)?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[80] flex flex-col bg-teal-deep/97 backdrop-blur" onClick={onClose}>
      <div className="flex items-center justify-between px-5 py-4 text-pearl" onClick={(e) => e.stopPropagation()}>
        <p className="eyebrow text-brass">
          {index + 1} / {images.length}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close photo viewer" className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/30">
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-20" onClick={(e) => e.stopPropagation()}>
        <Photo key={img.src} src={img.src} alt={img.alt} widths={[800, 1400, 2000]} width={1600} sizes="90vw" priority className="max-h-[78svh] w-auto max-w-full rounded-lg object-contain" />
        {images.length > 1 && (
          <>
            <button type="button" onClick={prev} aria-label="Previous photo" className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-pearl/10 text-pearl hover:bg-brass hover:text-teal-deep md:left-6">
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button type="button" onClick={next} aria-label="Next photo" className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-pearl/10 text-pearl hover:bg-brass hover:text-teal-deep md:right-6">
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </>
        )}
      </div>
      <p className="px-5 pb-6 text-center text-sm text-pearl/75" onClick={(e) => e.stopPropagation()}>
        {img.alt}
      </p>
    </div>
  )
}

/** Thumbnail button that opens the lightbox. */
export function GalleryTile({
  image,
  onOpen,
  className = '',
  ratio,
  sizes = '(min-width: 768px) 33vw, 100vw',
  delay = 0,
}: {
  image: GalleryImage
  onOpen: () => void
  className?: string
  ratio?: number
  sizes?: string
  delay?: number
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      data-reveal="mask"
      style={{ ['--d' as string]: `${delay}s` }}
      className={`group relative block overflow-hidden rounded-xl bg-slate text-left ${className}`}
      aria-label={`View larger: ${image.alt}`}
    >
      <Photo src={image.src} alt={image.alt} ratio={ratio} sizes={sizes} widths={[400, 700, 1000, 1400]} width={900} className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:scale-[1.05]" />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-deep/60 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="pointer-events-none absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-pearl/90 text-teal opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
        <Plus className="h-4 w-4" aria-hidden />
      </span>
    </button>
  )
}

/* ── Page still in preparation ──────────────────────────────── */

export function ComingSoon({ what, children }: { what: string; children?: React.ReactNode }) {
  return (
    <section className="bg-pearl">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-32">
        <div>
          <Eyebrow>In preparation</Eyebrow>
          <RevealLines lines={[`${what} are`, 'being prepared.']} className="display mt-6 text-[clamp(2.5rem,5vw,4.5rem)] text-teal" />
        </div>
        <div data-reveal className="space-y-6 text-lg leading-relaxed text-muted">
          <p>This page is under construction. Until it opens, our talks and classes are shared regularly on our YouTube channels.</p>
          {children}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://www.youtube.com/@bhaktivedanta_education" target="_blank" rel="noreferrer" className="btn btn-teal">
              Bhaktivedanta Education <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </a>
            <a href="https://www.youtube.com/@LotusVoiceVideos" target="_blank" rel="noreferrer" className="btn btn-ghost-dark">
              Lotus Voice Videos <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Numbered editorial list ────────────────────────────────── */

export function NumberedList({ items, dark, columns = 2 }: { items: React.ReactNode[]; dark?: boolean; columns?: 1 | 2 | 3 }) {
  const cols = columns === 3 ? 'md:grid-cols-3' : columns === 2 ? 'md:grid-cols-2' : ''
  return (
    <ol className={`grid gap-x-12 ${cols}`}>
      {items.map((item, i) => (
        <li
          key={i}
          data-reveal
          style={{ ['--d' as string]: `${(i % 6) * 0.05}s` }}
          className={`flex gap-5 border-b py-4 ${dark ? 'border-pearl/12 text-pearl/85' : 'border-teal/12 text-teal'}`}
        >
          <span className={`w-7 shrink-0 pt-0.5 font-display text-base ${dark ? 'text-brass' : 'text-[#8a6f3c]'}`}>{String(i + 1).padStart(2, '0')}</span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  )
}