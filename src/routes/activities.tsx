import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent, PointerEvent as ReactPointerEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight, Drama, Flame, Leaf, Mountain, Music, Music2, Pause, PersonStanding, Play, Plus, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { AdmissionsCTA, Eyebrow, RevealLines, useLightbox, type GalleryImage } from '@/components/ui'
import { WordMarquee } from '@/components/education'
import { activityGroups, type ActivityGroup } from '@/content/activities'

const allImages: GalleryImage[] = activityGroups.flatMap((g) => g.images)

export const Route = createFileRoute('/activities')({
  head: () => ({
    meta: [
      { title: 'Activities — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Trekking, sports, yoga, drama, festivals, yajna and cow care — life beyond the classroom at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Activities — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Trekking, sports, yoga, drama, festivals, yajna and cow care — life beyond the classroom at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://gurukula-digital-twin.lovable.app/activities' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://gurukula-digital-twin.lovable.app/activities' }],
  }),
  component: Page,
})

function Page() {
  const { open, node } = useLightbox(allImages)
  let cursor = 0

  return (
    <>
      <ActivitiesHero />

      {/* Scrolling ribbon of what the students do */}
      <div className="border-y border-brass/20 bg-teal-deep py-2 text-pearl" aria-hidden>
        <WordMarquee light speed={55} words={['Trekking', 'Yoga', 'Drama', 'Kirtan', 'Yajna', 'Go-seva', 'Festivals']} />
      </div>

      {activityGroups.map((group, gi) => {
        const start = cursor
        cursor += group.images.length
        return group.id === 'arts' ? (
          <StageSection key={group.id} group={group} index={gi} start={start} onOpen={open} />
        ) : (
          <ActivitySection key={group.id} group={group} index={gi} start={start} onOpen={open} />
        )
      })}

      {/* Daily rhythm strip */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-2 md:px-10">
          <div>
            <Eyebrow>Every Day</Eyebrow>
            <RevealLines lines={['A rhythm of', <em key="s" className="text-[#8a6f3c]">study and sadhana.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-lg leading-relaxed text-muted">
              The day begins before sunrise in the temple with mangala-arati and sankirtan, flows through academic classes and Vedic study, and closes with evening arati — a rhythm that has formed character for centuries.
            </p>
          </div>
          <div data-reveal="mask" className="overflow-hidden rounded-3xl">
            <Photo src="/img/daily-schedule/temple-sankirtan.jpg" alt="Students at morning sankirtan in the temple" ratio={1.3} widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <AdmissionsCTA />
      {node}
    </>
  )
}

/* ── Hero: bright photo, pointer parallax, quick-jump chips ──── */

const heroLinks = [
  { id: 'adventure', label: 'Trekking', Icon: Mountain },
  { id: 'sports-yoga', label: 'Sports & Yoga', Icon: PersonStanding },
  { id: 'arts', label: 'Drama & Music', Icon: Drama },
  { id: 'festivals', label: 'Festivals', Icon: Sparkles },
  { id: 'yajna', label: 'Yajna', Icon: Flame },
  { id: 'goshala', label: 'Goshala', Icon: Leaf },
]

function ActivitiesHero() {
  const move = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    e.currentTarget.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  return (
    <section onPointerMove={move} className="act-hero grain relative isolate flex min-h-[88svh] items-end overflow-hidden bg-teal text-pearl">
      <div className="absolute inset-0 -z-10">
        <div data-parallax="0.16" className="absolute inset-[-8%_0]">
          <div className="act-hero__layer h-full w-full -scale-x-100">
            <Photo
              src="/img/activities/trekking.jpg"
              alt="Gurukula students waving together on a hilltop during a trek"
              priority
              widths={[640, 1024, 1600, 2200]}
              width={1600}
              className="kenburns h-full w-full object-cover"
              style={{ objectPosition: 'center 72%' }}
            />
          </div>
        </div>
        {/* Light overlays: only the text side, the bottom edge and the navbar strip are darkened */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/80 via-teal-deep/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-teal-deep/65 to-transparent" />
      </div>

      <div className="act-hero__ring pointer-events-none absolute -right-28 top-24 -z-0 hidden md:block" aria-hidden>
        <div className="spin-slow h-[520px] w-[520px] rounded-full border border-dashed border-brass/35" />
        <div className="absolute inset-12 rounded-full border border-brass/25" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 pt-36 md:px-10 md:pb-20">
        <Eyebrow light>Life at the Gurukula</Eyebrow>
        <RevealLines as="h1" lines={['Activities']} className="display mt-6 text-[clamp(3.25rem,9vw,8rem)] text-pearl" />
        <div data-reveal style={{ ['--d' as string]: '0.3s' } as CSSProperties} className="mt-6 max-w-xl text-lg leading-relaxed text-pearl/90">
          Learning here reaches far beyond the classroom — into the hills, onto the stage, around the sacred fire and into the goshala.
        </div>

        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Jump to an activity">
          {heroLinks.map(({ id, label, Icon }, i) => (
            <li key={id} data-reveal style={{ ['--d' as string]: `${0.45 + i * 0.07}s` } as CSSProperties}>
              <a
                href={`#${id}`}
                className="inline-flex items-center gap-2 rounded-full border border-pearl/30 bg-teal-deep/45 px-4 py-2 text-[0.8rem] font-semibold tracking-wide text-pearl backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-brass hover:bg-brass hover:text-teal-deep focus-visible:border-brass focus-visible:bg-brass focus-visible:text-teal-deep"
              >
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Small hooks ─────────────────────────────────────────────── */

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [seen, threshold])
  return [ref, seen] as const
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

/* ── Icons per activity group ────────────────────────────────── */

const groupIcons: Record<string, LucideIcon> = {
  adventure: Mountain,
  'sports-yoga': PersonStanding,
  arts: Drama,
  festivals: Sparkles,
  yajna: Flame,
  goshala: Leaf,
}

/** Section backgrounds, in page order. The stage (arts) always gets its own dark look. */
const tones = ['bg-pearl', 'bg-sand', 'stage', 'bg-pearl', 'dark', 'bg-sand'] as const

const pad = (n: number) => String(n).padStart(2, '0')

/* ── 3D tilt tile (small, crisp, opens the lightbox) ─────────── */

function TiltTile({
  image,
  onOpen,
  ar = '4 / 3',
  position = 'center 30%',
  variant = 'tile',
  rotate = 0,
}: {
  image: GalleryImage
  onOpen: () => void
  ar?: string
  position?: string
  variant?: 'tile' | 'polaroid'
  rotate?: number
}) {
  const move = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== 'mouse') return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${((x - 0.5) * 16).toFixed(2)}deg`)
    el.style.setProperty('--rx', `${((0.5 - y) * 16).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
  }
  const leave = (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      onPointerMove={move}
      onPointerLeave={leave}
      aria-label={`View larger: ${image.alt}`}
      className={`act-tile act-tile--${variant}`}
      style={{ ['--ar' as string]: ar, ['--rot' as string]: `${rotate}deg` } as CSSProperties}
    >
      <span className="act-tile__frame">
        <Photo
          src={image.src}
          alt={image.alt}
          width={800}
          widths={[400, 800, 1200]}
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="act-tile__img"
          style={{ objectPosition: position }}
        />
        <span className="act-tile__glare" aria-hidden />
        <span className="act-tile__plus" aria-hidden>
          <Plus className="h-4 w-4" />
        </span>
      </span>
    </button>
  )
}

/* ── Gallery: small centred tiles, or polaroids for 1–2 photos ─ */

function ActivityGallery({ images, start, onOpen }: { images: GalleryImage[]; start: number; onOpen: (i: number) => void }) {
  const n = images.length

  if (n <= 2) {
    return (
      <div className="mt-14 flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {images.map((img, i) => (
          <div
            key={img.src}
            data-reveal="scale"
            style={{ ['--d' as string]: `${i * 0.12}s`, width: n === 1 ? 'clamp(210px, 24vw, 280px)' : 'clamp(230px, 34vw, 380px)' } as CSSProperties}
          >
            <TiltTile image={img} onOpen={() => onOpen(start + i)} variant="polaroid" ar={n === 1 ? '3 / 4' : '4 / 3'} rotate={i % 2 === 0 ? -3 : 3} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className="act-grid mt-12" style={{ ['--cols-lg' as string]: n === 5 ? 5 : 4 } as CSSProperties}>
      {images.map((img, i) => (
        <li key={img.src} data-reveal="scale" style={{ ['--d' as string]: `${(i % 5) * 0.07}s` } as CSSProperties}>
          <TiltTile image={img} onOpen={() => onOpen(start + i)} />
        </li>
      ))}
    </ul>
  )
}

/* ── Standard activity section ───────────────────────────────── */

function ActivitySection({ group, index, start, onOpen }: { group: ActivityGroup; index: number; start: number; onOpen: (i: number) => void }) {
  const tone = tones[index % tones.length]
  const dark = tone === 'dark'
  const Icon = groupIcons[group.id] ?? Sparkles
  const bg = dark ? 'grain bg-slate text-pearl' : tone === 'stage' ? 'bg-pearl' : tone

  return (
    <section id={group.id} aria-label={group.title} className={`${bg} relative isolate overflow-hidden py-20 md:py-28`}>
      {dark && (
        <>
          <div className="drift pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" aria-hidden />
          <div className="drift pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-brass/10 blur-3xl" style={{ animationDelay: '-6s' }} aria-hidden />
        </>
      )}
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <span className="act-num pointer-events-none absolute right-5 top-[-1.5rem] md:right-10" data-parallax="0.3" aria-hidden>
          {pad(index + 1)}
        </span>

        <div className="relative grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="act-badge pulse-ring" aria-hidden>
                <Icon className="h-5 w-5" />
              </span>
              <Eyebrow light={dark}>
                {pad(index + 1)} · {group.title.split(' & ')[0]}
              </Eyebrow>
            </div>
            <RevealLines lines={[group.title]} className={`display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] ${dark ? 'text-pearl' : 'text-teal'}`} />
          </div>
          <p data-reveal className={`max-w-xl leading-relaxed md:justify-self-end ${dark ? 'text-pearl/70' : 'text-muted'}`}>
            {group.text}
          </p>
        </div>

        <ActivityGallery images={group.images} start={start} onOpen={onOpen} />
      </div>
    </section>
  )
}

/* ── 3D coverflow carousel ───────────────────────────────────── */

const focusPoint: Record<string, string> = {
  '/img/talentshow/drama3.jpg': 'center 25%',
  '/img/talentshow/student-presentations.jpg': 'center 35%',
  '/img/talentshow/talent-show1.jpg': 'center 40%',
}

function StageCarousel({
  images,
  start,
  onOpen,
  active,
  onActive,
  playing,
}: {
  images: GalleryImage[]
  start: number
  onOpen: (i: number) => void
  active: number
  onActive: (next: number) => void
  playing: boolean
}) {
  const n = images.length
  const [hover, setHover] = useState(false)
  const reduced = useReducedMotion()
  const [ref, seen] = useInView<HTMLDivElement>(0.3)
  const swipe = useRef({ x: 0, swiped: false })

  const go = useCallback((d: number) => onActive((active + d + n) % n), [active, n, onActive])

  useEffect(() => {
    if (!seen || !playing || hover || reduced) return
    const t = setTimeout(() => go(1), 4200)
    return () => clearTimeout(t)
  }, [seen, playing, hover, reduced, go])

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  }

  const down = (e: ReactPointerEvent<HTMLDivElement>) => {
    swipe.current = { x: e.clientX, swiped: false }
  }
  const up = (e: ReactPointerEvent<HTMLDivElement>) => {
    const dx = e.clientX - swipe.current.x
    if (Math.abs(dx) > 50) {
      swipe.current.swiped = true
      go(dx < 0 ? 1 : -1)
    }
  }

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="carousel"
      aria-label="Drama, music and talent show photos"
      onKeyDown={onKey}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onPointerDown={down}
      onPointerUp={up}
      className="cf touch-pan-y"
    >
      <div className="cf-stage">
        {images.map((img, i) => {
          let off = i - active
          if (off > n / 2) off -= n
          if (off < -n / 2) off += n
          const abs = Math.abs(off)
          const hidden = abs > 2
          return (
            <button
              key={img.src}
              type="button"
              aria-current={off === 0}
              aria-label={off === 0 ? `View larger: ${img.alt}` : `Show: ${img.alt}`}
              tabIndex={hidden ? -1 : 0}
              onClick={() => {
                if (swipe.current.swiped) {
                  swipe.current.swiped = false
                  return
                }
                if (off === 0) onOpen(start + i)
                else onActive(i)
              }}
              className="cf-card"
              style={{
                transform: `translate(-50%, -50%) translateX(${off * 58}%) translateZ(${-abs * 170}px) rotateY(${off * -34}deg) scale(${1 - abs * 0.04})`,
                opacity: hidden ? 0 : 1 - abs * 0.18,
                zIndex: 10 - abs,
                visibility: hidden ? 'hidden' : 'visible',
                filter: abs === 0 ? 'none' : 'brightness(0.86)',
              }}
            >
              <Photo src={img.src} alt={img.alt} width={800} widths={[400, 800, 1200]} sizes="300px" style={{ objectPosition: focusPoint[img.src] ?? 'center 30%' }} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ── Stage section: drama, music & talent shows ──────────────── */

const notes = Array.from({ length: 9 }, (_, i) => ({
  left: `${6 + i * 11}%`,
  delay: `${-i * 1.7}s`,
  dur: `${10 + (i % 3) * 2.5}s`,
  size: 18 + (i % 3) * 8,
  alt: i % 2 === 0,
}))

function StageSection({ group, index, start, onOpen }: { group: ActivityGroup; index: number; start: number; onOpen: (i: number) => void }) {
  const [ref, seen] = useInView<HTMLElement>(0.2)
  const [playing, setPlaying] = useState(true)
  const [active, setActive] = useState(0)
  const n = group.images.length
  const reduced = useReducedMotion()

  return (
    <section
      ref={ref}
      id={group.id}
      aria-label={group.title}
      className={`stage grain relative isolate overflow-hidden bg-teal-deep py-20 text-pearl md:py-28 ${seen ? 'is-open' : ''}`}
    >
      <div className="stage-beams -z-10" aria-hidden>
        <span className="stage-beam stage-beam--l" />
        <span className="stage-beam stage-beam--r" />
      </div>
      <div className="stage-notes -z-10" aria-hidden>
        {notes.map((note, i) => {
          const Note = note.alt ? Music2 : Music
          return (
            <span key={i} className="stage-note" style={{ left: note.left, ['--d' as string]: note.delay, ['--t' as string]: note.dur } as CSSProperties}>
              <Note style={{ width: note.size, height: note.size }} />
            </span>
          )
        })}
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <span className="act-num pointer-events-none absolute right-5 top-[-1.5rem] md:right-10" data-parallax="0.3" aria-hidden>
          {pad(index + 1)}
        </span>

        <div className="relative grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="act-badge pulse-ring" aria-hidden>
                <Drama className="h-5 w-5" />
              </span>
              <Eyebrow light>
                {pad(index + 1)} · {group.title.split(', ')[0]}
              </Eyebrow>
            </div>
            <RevealLines lines={[group.title]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-pearl" />
            <ul className="mt-6 flex flex-wrap items-center gap-2.5" aria-label="On the stage">
              {[
                { label: 'Drama', Icon: Drama },
                { label: 'Music', Icon: Music },
                { label: 'Talent Shows', Icon: Sparkles },
              ].map(({ label, Icon }) => (
                <li key={label} className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brass-soft">
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {label}
                </li>
              ))}
              <li aria-hidden className="eq ml-1 flex h-6 items-end gap-1 text-brass">
                <span />
                <span />
                <span />
                <span />
              </li>
            </ul>
          </div>
          <p data-reveal className="max-w-xl leading-relaxed text-pearl/75 md:justify-self-end">
            {group.text}
          </p>
        </div>

        <div className="stage-frame mt-12">
          <StageCarousel images={group.images} start={start} onOpen={onOpen} active={active} onActive={setActive} playing={playing} />
          <div className="stage-floor" aria-hidden />

          <div className="relative z-10 mt-2 flex flex-col items-center gap-3">
            <p className="min-h-[1.5rem] max-w-xl px-6 text-center text-sm text-pearl/70" aria-live={playing ? 'off' : 'polite'}>
              {group.images[active]?.alt}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActive((a) => (a - 1 + n) % n)}
                aria-label="Previous photo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pearl/25 text-pearl transition-colors hover:border-brass hover:text-brass"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                disabled={reduced}
                aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pearl/25 text-pearl transition-colors hover:border-brass hover:text-brass disabled:opacity-40"
              >
                {playing && !reduced ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
              </button>
              <button
                type="button"
                onClick={() => setActive((a) => (a + 1) % n)}
                aria-label="Next photo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pearl/25 text-pearl transition-colors hover:border-brass hover:text-brass"
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <span className="stage-curtain stage-curtain--l" aria-hidden />
          <span className="stage-curtain stage-curtain--r" aria-hidden />
        </div>
      </div>
    </section>
  )
}