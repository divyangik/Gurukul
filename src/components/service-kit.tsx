import { useEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Photo } from './Photo'
import { DustField } from './campus/CampusScenes'
import { Mandala, SpotCard } from './services'
import { Eyebrow, RevealLines } from './ui'
import { SectionSubNav } from './education'
import { services, type ServiceSlug } from '@/content/services'

/**
 * Shared visual kit for the Services pages: cinematic hero, line-art emblems that draw
 * themselves, count-up stats, wave dividers and an orbiting chip ring.
 * Styles live in styles.css under the `sv-` prefix.
 */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

/* ── Emblems: one line drawing per service ───────────────────── */

const r1 = (n: number) => Math.round(n * 10) / 10
const circle = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`
const rays = (cx: number, cy: number, r1_: number, r2_: number, from: number, to: number, n: number) =>
  Array.from({ length: n }, (_, i) => {
    const a = ((from + ((to - from) * i) / (n - 1)) * Math.PI) / 180
    return `M${r1(cx + Math.cos(a) * r1_)} ${r1(cy + Math.sin(a) * r1_)}L${r1(cx + Math.cos(a) * r2_)} ${r1(cy + Math.sin(a) * r2_)}`
  })

type EmblemPath = string | { d: string; kind: 'fill' | 'soft' }

export type EmblemKey = ServiceSlug | 'education' | 'seekers' | 'student' | 'parent-teacher-leaders' | 'blog' | 'videos' | 'podcasts'

const emblems: Record<EmblemKey, EmblemPath[]> = {
  // Mortarboard over a lotus base — education as a whole
  education: [
    { d: 'M120 50L24 96L120 142L216 96Z', kind: 'fill' },
    'M66 118V162C92 182 148 182 174 162V118',
    'M216 96V152M216 152L208 172H224Z',
    { d: circle(120, 96, 6), kind: 'soft' },
    'M44 208H196',
  ],
  // A compass — the seeker's question
  seekers: [
    circle(120, 120, 102),
    { d: circle(120, 120, 86), kind: 'soft' },
    { d: 'M120 38L142 120L120 202L98 120Z', kind: 'fill' },
    { d: 'M38 120L120 98L202 120L120 142Z', kind: 'soft' },
    circle(120, 120, 8),
    ...rays(120, 120, 92, 102, 0, 360 - 360 / 12, 12),
  ],
  // A sapling growing from an open book — the student
  student: [
    'M120 192V104',
    { d: 'M120 122C90 122 68 102 66 74C98 76 118 94 120 122Z', kind: 'fill' },
    { d: 'M120 100C152 100 174 80 176 50C144 52 122 72 120 100Z', kind: 'fill' },
    { d: 'M30 198C66 186 98 188 120 202C142 188 174 186 210 198V224C174 214 142 216 120 230C98 216 66 214 30 224Z', kind: 'fill' },
    'M120 202V230',
    circle(120, 120, 104),
  ],
  // Three figures of different size — parents, teachers, leaders
  'parent-teacher-leaders': [
    { d: circle(120, 74, 20), kind: 'fill' },
    { d: 'M78 196C78 136 162 136 162 196Z', kind: 'fill' },
    circle(54, 112, 14),
    'M20 196C20 158 88 158 88 196',
    circle(186, 112, 14),
    'M152 196C152 158 220 158 220 196',
    'M12 212H228',
  ],
  // A page and a quill — stories
  blog: [
    { d: 'M56 28H156L188 60V212H56Z', kind: 'fill' },
    'M156 28V60H188',
    { d: 'M78 100H168M78 126H168M78 152H138', kind: 'soft' },
    'M168 176L198 140L220 160L190 196L162 204Z',
    'M198 140L212 124',
  ],
  // A screen with a play button — videos
  videos: [
    { d: 'M44 52H196a16 16 0 0 1 16 16V162a16 16 0 0 1-16 16H44a16 16 0 0 1-16-16V68a16 16 0 0 1 16-16Z', kind: 'fill' },
    { d: 'M102 86L156 115L102 144Z', kind: 'fill' },
    'M120 178V202M82 208H158',
    { d: 'M44 70H70M170 160H196', kind: 'soft' },
  ],
  // Headphones around a microphone — podcasts
  podcasts: [
    'M40 138V118a80 80 0 0 1 160 0V138',
    { d: 'M40 138H70V196H50a10 10 0 0 1-10-10Z', kind: 'fill' },
    { d: 'M200 138H170V196H190a10 10 0 0 0 10-10Z', kind: 'fill' },
    { d: 'M104 80a16 16 0 0 1 32 0V122a16 16 0 0 1-32 0Z', kind: 'fill' },
    'M90 118a30 30 0 0 0 60 0',
    'M120 148V176M100 180H140',
  ],

  // Lotus rising from a ring — a balanced life
  coaching: [
    circle(120, 120, 104),
    { d: circle(120, 120, 88), kind: 'soft' },
    { d: 'M120 190C95 160 95 120 120 76C145 120 145 160 120 190Z', kind: 'fill' },
    'M120 190C80 185 55 150 60 108C92 118 113 150 120 190Z',
    'M120 190C160 185 185 150 180 108C148 118 127 150 120 190Z',
    'M120 190C66 200 30 172 28 134C66 134 105 156 120 190Z',
    'M120 190C174 200 210 172 212 134C174 134 135 156 120 190Z',
    'M70 204H170',
  ],
  // A school with a flag — building values-based schools
  consulting: [
    'M26 192H214',
    'M42 192V208H198V192',
    { d: 'M52 104L120 58L188 104Z', kind: 'fill' },
    'M72 104V192M104 104V192M136 104V192M168 104V192',
    'M120 58V28M120 28L150 38L120 48',
    { d: circle(120, 84, 9), kind: 'soft' },
  ],
  // An open book with a spark — a library to grow from
  membership: [
    { d: 'M120 74C92 58 56 58 30 68V184C56 174 92 174 120 190C148 174 184 174 210 184V68C184 58 148 58 120 74Z', kind: 'fill' },
    'M120 74V190',
    { d: 'M50 98C70 95 90 97 106 103M50 120C70 117 90 119 106 125M50 142C70 139 90 141 106 147', kind: 'soft' },
    { d: 'M134 103C150 97 170 95 190 98M134 125C150 119 170 117 190 120M134 147C150 141 170 139 190 142', kind: 'soft' },
    'M120 22L126 38L142 44L126 50L120 66L114 50L98 44L114 38Z',
  ],
  // Tent under a rising sun — camps and weekends away
  'camp-workshop': [
    'M8 192H232',
    { d: 'M44 192L120 82L196 192Z', kind: 'fill' },
    'M120 82L98 192M120 82L142 192',
    'M120 82V54M120 54L140 61L120 68',
    circle(190, 52, 18),
    ...rays(190, 52, 26, 34, 0, 360 - 360 / 8, 8),
    { d: 'M8 192L40 146L66 176L82 156L100 192', kind: 'soft' },
  ],
  // Sunrise over an open book — learning on its way
  'courses-certifications': [
    { d: 'M60 150A60 60 0 0 1 180 150Z', kind: 'fill' },
    ...rays(120, 150, 72, 94, 180, 360, 9),
    { d: 'M34 160H206V196H34Z', kind: 'soft' },
    'M120 160V196',
    'M34 160C70 152 100 154 120 160C140 154 170 152 206 160',
    'M56 214H184',
  ],
  // A sacred flame within a kunda — yajna
  'samskaras-yajnas': [
    { d: 'M120 26C152 78 188 100 178 152C170 188 146 204 120 204C94 204 70 188 62 152C52 110 92 92 120 26Z', kind: 'fill' },
    'M120 98C140 130 154 142 148 166C144 184 133 192 120 192C107 192 96 184 92 166C86 142 104 128 120 98Z',
    { d: circle(120, 164, 9), kind: 'soft' },
    'M62 214H178L168 226H72Z',
    'M80 232L160 224M80 224L160 232',
  ],
  // A tree of growth — a place to put down roots
  career: [
    'M50 214H190',
    'M120 214V112',
    'M120 168C98 160 82 142 78 116',
    'M120 146C144 138 160 120 164 92',
    { d: circle(120, 84, 34), kind: 'fill' },
    { d: circle(76, 108, 22), kind: 'soft' },
    { d: circle(166, 84, 20), kind: 'soft' },
    'M120 214C106 220 94 224 80 226M120 214C134 220 146 224 160 226',
  ],
  // Microphone with sound waves — the keynote
  'keynote-speech': [
    { d: 'M100 40a20 20 0 0 1 40 0V108a20 20 0 0 1-40 0Z', kind: 'fill' },
    'M76 100a44 44 0 0 0 88 0',
    'M120 144V196M88 200H152',
    'M178 76q22 32 0 64M200 58q36 50 0 100',
    'M62 76q-22 32 0 64M40 58q-36 50 0 100',
  ],
}

export function ServiceEmblem({ slug, className = '', flame }: { slug: EmblemKey; className?: string; flame?: boolean }) {
  const paths = emblems[slug]
  return (
    <svg viewBox="0 0 240 240" aria-hidden className={`sv-emblem ${className}`}>
      <g className={slug === 'samskaras-yajnas' || flame ? 'sv-flicker' : undefined}>
        {paths.map((p, i) => {
          const d = typeof p === 'string' ? p : p.d
          const kind = typeof p === 'string' ? undefined : p.kind
          return <path key={i} d={d} pathLength={1} className={kind ? `sv-${kind}` : undefined} style={v({ '--i': i })} />
        })}
      </g>
    </svg>
  )
}

/* ── Cinematic service hero ──────────────────────────────────── */

export function ServiceHero({
  slug,
  index,
  title,
  intro,
  image,
  imageAlt,
  position = 'center',
  chips = [],
  children,
  crumb,
  aside,
  parent = { label: 'Services', to: '/services' },
  wave,
}: {
  slug?: EmblemKey
  index: string
  title: string[]
  intro: ReactNode
  image: string
  imageAlt: string
  position?: string
  chips?: string[]
  children?: ReactNode
  crumb: string
  /** Replaces the default emblem in the right-hand column (desktop). */
  aside?: ReactNode
  /** Breadcrumb parent; defaults to Services. */
  parent?: { label: string; to: '/services' | '/education' }
  /** Colour class (e.g. text-pearl) of a curved edge along the bottom of the hero. */
  wave?: string
}) {
  let word = 0
  return (
    <section className="grain relative isolate flex min-h-[92svh] items-end overflow-hidden bg-teal-deep text-pearl">
      <div className="absolute inset-0 -z-20">
        <div data-parallax="0.16" className="absolute inset-[-8%_0]">
          <Photo src={image} alt={imageAlt} priority className="kenburns h-full w-full object-cover" widths={[640, 1024, 1600, 2200]} width={1600} style={{ objectPosition: position }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/65 to-teal-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/85 via-teal-deep/40 to-transparent" />
      </div>
      <div className="jali absolute inset-0 -z-10 opacity-60" aria-hidden />
      <ReadingBar />
      <DustField />
      <Mandala className="pointer-events-none absolute -left-52 -top-40 -z-10 h-[640px] w-[640px] opacity-[0.16]" />
      <div className="drift pointer-events-none absolute -right-24 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-brass/15 blur-3xl" aria-hidden />

      <div className="mx-auto grid w-full max-w-[1440px] items-end gap-10 px-5 pb-14 pt-40 md:px-10 md:pb-20 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <nav aria-label="Breadcrumb" className="hero-fade mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-pearl/70">
            <Link to={parent.to} className="link-sweep hover:text-brass">{parent.label}</Link>
            <span className="h-1.5 w-1.5 rotate-45 bg-brass" aria-hidden />
            <span className="text-brass" aria-current="page">{crumb}</span>
          </nav>
          <h1 className="display text-[clamp(3rem,8.4vw,8rem)] text-pearl">
            {title.map((line, li) => (
              <span key={li} className="block">
                {line.split(' ').map((w) => {
                  const d = 0.15 + word++ * 0.12
                  return (
                    <span key={`${li}-${w}-${d}`} className="hero-word mr-[0.22em]">
                      <span style={v({ '--d': `${d}s` })} className={li === title.length - 1 && title.length > 1 ? 'italic text-brass-soft' : ''}>
                        {w}
                      </span>
                    </span>
                  )
                })}
              </span>
            ))}
          </h1>
          <div className="hero-rule mt-8 h-px w-40 origin-left bg-brass" aria-hidden />
          <p className="hero-fade mt-8 max-w-2xl text-lg leading-relaxed text-pearl/82 md:text-xl" style={v({ '--d': '0.7s' })}>
            {intro}
          </p>
          {chips.length > 0 && (
            <ul className="hero-fade mt-8 flex flex-wrap gap-2.5" style={v({ '--d': '0.9s' })} aria-label="Who this is for">
              {chips.map((c) => (
                <li key={c} className="rounded-full border border-pearl/25 bg-pearl/[0.06] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-pearl/90 backdrop-blur">
                  {c}
                </li>
              ))}
            </ul>
          )}
          {children && (
            <div className="hero-fade mt-9" style={v({ '--d': '1.05s' })}>
              {children}
            </div>
          )}
        </div>

        <div className="relative hidden lg:block" aria-hidden>
          <span className="sv-ghost pointer-events-none absolute -right-2 -top-24 text-[16rem]" data-parallax="0.25">
            {index}
          </span>
          {aside ??
            (slug && (
              <div className="sv-emblem-float relative mx-auto w-[78%] max-w-[22rem]">
                <div className="sv-halo absolute -inset-10 rounded-full" />
                <ServiceEmblem slug={slug} className="relative h-auto w-full" />
              </div>
            ))}
        </div>
      </div>

      <a href="#after-hero" className="absolute bottom-6 right-5 z-[3] hidden items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-pearl/70 hover:text-brass md:flex md:right-10" aria-label="Scroll to content">
        Scroll <ArrowDown className="cp-cue__arrow h-4 w-4" aria-hidden />
      </a>
      {wave && <Wave bottom className={wave} />}
    </section>
  )
}

/** Sticky sub-navigation across the Services pages — same pattern as the Education pages. */
export function ServiceSectionNav() {
  return <SectionSubNav label="Services section" links={[{ label: 'Overview', to: '/services' }, ...services.map((s) => ({ label: s.title, to: s.to }))]} />
}

/** Anchor target placed right after the hero. */
export function AfterHero() {
  return <span id="after-hero" className="block h-0" aria-hidden />
}

/* ── Wave divider ────────────────────────────────────────────── */

export function Wave({ className = 'text-pearl', bottom }: { className?: string; bottom?: boolean }) {
  return (
    <div className={`sv-wave ${bottom ? 'sv-wave--bottom' : ''} ${className}`} aria-hidden>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path d="M0 0H1440V30C1240 82 1010 82 760 44C520 8 260 6 0 62Z" fill="currentColor" />
        <path d="M0 62C260 6 520 8 760 44C1010 82 1240 82 1440 30" fill="none" stroke="#b79a61" strokeOpacity="0.55" strokeWidth="1.2" />
      </svg>
    </div>
  )
}

/* ── Count-up stat band ──────────────────────────────────────── */

export function StatBand({ items, dark }: { items: { n: number; suffix?: string; label: string }[]; dark?: boolean }) {
  return (
    <section className={`relative overflow-hidden border-y ${dark ? 'border-brass/20 bg-teal-deep text-pearl' : 'border-teal/10 bg-sand text-teal'}`}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-8 px-5 py-10 md:px-10 md:py-14" style={{ gridTemplateColumns: `repeat(${items.length > 3 ? 2 : items.length}, minmax(0, 1fr))` }}>
        <ul className={`col-span-full grid gap-y-8 ${items.length === 2 ? 'grid-cols-2' : items.length === 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}>
          {items.map((s, i) => (
            <li key={s.label} data-reveal style={v({ '--d': `${i * 0.1}s` })} className={`px-3 text-center md:px-6 ${i > 0 ? (dark ? 'md:border-l md:border-pearl/15' : 'md:border-l md:border-teal/15') : ''}`}>
              <p className="display text-[clamp(2.75rem,6vw,5rem)] leading-none">
                <span data-count={s.n}>{s.n}</span>
                <span className="text-brass">{s.suffix}</span>
              </p>
              <p className={`eyebrow mt-3 !text-[0.65rem] ${dark ? 'text-pearl/70' : 'text-[#8a6f3c]'}`}>{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Orbiting chips around a lotus emblem (desktop); plain wrap on mobile ── */

export function OrbitCloud({ items, slug, centre }: { items: string[]; slug: ServiceSlug; centre?: ReactNode }) {
  return (
    <>
      <div className="sv-orbit hidden md:block" role="list" aria-label="Areas">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-brass" fill="none" stroke="currentColor" strokeWidth="0.25" aria-hidden>
          <circle cx="50" cy="50" r="46" strokeDasharray="1 2.4" />
          <circle cx="50" cy="50" r="30" opacity="0.6" />
        </svg>
        <div className="absolute left-1/2 top-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="sv-emblem-float">
            <ServiceEmblem slug={slug} className="h-auto w-full" />
          </div>
          {centre}
        </div>
        <div className="sv-orbit-ring">
          {items.map((it, i) => {
            const a = (i / items.length) * Math.PI * 2 - Math.PI / 2
            const x = r1(50 + Math.cos(a) * 46)
            const y = r1(50 + Math.sin(a) * 46)
            return (
              <div key={it} role="listitem" className="sv-orbit-item" style={{ left: `${x}%`, top: `${y}%` }}>
                <span className="rounded-full border border-teal/20 bg-pearl px-4 py-2.5 text-sm font-semibold text-teal shadow-[0_10px_30px_-12px_rgba(12,46,49,0.35)] transition-colors hover:border-brass hover:bg-brass hover:text-teal-deep">{it}</span>
              </div>
            )
          })}
        </div>
      </div>
      <ul className="flex flex-wrap gap-3 md:hidden">
        {items.map((it, i) => (
          <li key={it} data-reveal="scale" style={v({ '--d': `${(i % 8) * 0.06}s` })} className="rounded-full border border-teal/20 bg-pearl px-5 py-3 text-sm font-semibold text-teal">
            {it}
          </li>
        ))}
      </ul>
    </>
  )
}

/* ── Section heading used across the pages ───────────────────── */

export function SectionHead({
  eyebrow,
  lines,
  light,
  intro,
  className = '',
  big,
}: {
  eyebrow: string
  lines: ReactNode[]
  light?: boolean
  intro?: ReactNode
  className?: string
  big?: boolean
}) {
  return (
    <div className={className}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <RevealLines
        lines={lines}
        className={`display mt-5 ${big ? 'text-[clamp(2.5rem,5.5vw,5rem)]' : 'text-[clamp(2.25rem,4.5vw,4rem)]'} ${light ? 'text-pearl' : 'text-teal'}`}
      />
      {intro && (
        <p data-reveal className={`mt-6 max-w-xl text-lg leading-relaxed ${light ? 'text-pearl/72' : 'text-muted'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}

/* ── Reading progress hairline ───────────────────────────────── */

export function ReadingBar() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      el.style.setProperty('--sv-p', String(max > 0 ? Math.min(1, window.scrollY / max) : 0))
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
  return <div ref={ref} className="sv-progress" aria-hidden />
}

/* ── Rising petals for dark chapters (deterministic) ─────────── */

const petals = Array.from({ length: 12 }, (_, i) => ({
  left: `${6 + ((i * 53) % 88)}%`,
  size: 10 + (i % 4) * 5,
  delay: `${-(i * 2.3)}s`,
  dur: `${17 + (i % 5) * 3}s`,
  sway: `${(i % 2 ? 1 : -1) * (30 + (i % 3) * 25)}px`,
}))

export function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {petals.map((p, i) => (
        <span key={i} className="sv-petal" style={v({ left: p.left, '--s': `${p.size}px`, '--d': p.delay, '--t': p.dur, '--sway': p.sway })} />
      ))}
    </div>
  )
}

/* ── Feature card with an icon medallion ─────────────────────── */

export function FeatureCard({
  n,
  icon: Icon,
  title,
  text,
  dark,
  delay = 0,
  children,
}: {
  n?: number
  icon?: LucideIcon
  title: string
  text?: ReactNode
  dark?: boolean
  delay?: number
  children?: ReactNode
}) {
  return (
    <SpotCard dark={dark} delay={delay}>
      <div className="relative flex h-full flex-col p-8 md:p-9">
        <div className="flex items-start justify-between">
          {Icon ? (
            <span className="sv-medal">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
          ) : (
            <span />
          )}
          {n !== undefined && <span className="sv-outline-num text-6xl">{String(n).padStart(2, '0')}</span>}
        </div>
        <h3 className={`display mt-7 text-[clamp(1.75rem,2.6vw,2.4rem)] leading-[1.05] ${dark ? 'text-pearl' : 'text-teal'}`}>{title}</h3>
        {text && <p className={`mt-3 leading-relaxed ${dark ? 'text-pearl/72' : 'text-muted'}`}>{text}</p>}
        {children}
      </div>
      <span className="sv-card-line" aria-hidden />
    </SpotCard>
  )
}

/* ── Marquee of words (service areas, topics) ────────────────── */

export function WordBand({ words, dark, reverse }: { words: string[]; dark?: boolean; reverse?: boolean }) {
  return (
    <div aria-hidden className={`marquee ${reverse ? 'marquee-reverse' : ''} py-5 ${dark ? 'text-pearl/25' : 'text-teal/20'}`} style={v({ '--marquee-speed': '48s' })}>
      <div className="marquee-track">
        {[...words, ...words, ...words, ...words].map((t, i) => (
          <span key={i} className="display flex items-center gap-8 whitespace-nowrap pr-8 text-[clamp(1.75rem,4vw,3.25rem)] italic">
            {t}
            <span className="h-2 w-2 rotate-45 bg-brass" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Two overlapping photographs with a turning seal ─────────── */

export function PhotoDuo({
  a,
  b,
  sand,
  slug,
}: {
  a: { src: string; alt: string; position?: string }
  b: { src: string; alt: string; position?: string }
  sand?: boolean
  slug?: ServiceSlug
}) {
  return (
    <div className={`sv-duo ${sand ? 'sv-duo--sand' : ''}`}>
      <div data-reveal="mask" className="sv-duo__a">
        <div data-parallax="0.08">
          <Photo src={a.src} alt={a.alt} ratio={1.15} widths={[480, 800, 1100]} width={800} sizes="(min-width: 768px) 38vw, 90vw" className="h-full w-full object-cover" style={{ objectPosition: a.position }} />
        </div>
      </div>
      <div data-reveal="mask" style={v({ '--d': '0.2s' })} className="sv-duo__b">
        <Photo src={b.src} alt={b.alt} ratio={1} widths={[320, 600, 800]} width={600} sizes="(min-width: 768px) 24vw, 50vw" className="h-full w-full object-cover" style={{ objectPosition: b.position }} />
      </div>
      <Mandala className="sv-seal" />
      {slug && (
        <span className="absolute left-[62%] top-[-1.5rem] z-[3] flex h-[6.5rem] w-[6.5rem] items-center justify-center max-md:h-20 max-md:w-20" aria-hidden>
          <ServiceEmblem slug={slug} className="h-1/2 w-1/2" />
        </span>
      )}
    </div>
  )
}

/* ── Closing call-to-action panel ────────────────────────────── */

export function ClosingCTA({ eyebrow, lines, text, children, dark }: { eyebrow: string; lines: ReactNode[]; text?: ReactNode; children: ReactNode; dark?: boolean }) {
  return (
    <section className={`relative isolate overflow-hidden py-24 md:py-32 ${dark ? 'grain jali bg-teal-deep text-pearl' : 'bg-sand text-teal'}`}>
      {dark && <Petals />}
      <Mandala className={`pointer-events-none absolute -left-44 top-1/2 h-[700px] w-[700px] -translate-y-1/2 ${dark ? 'opacity-[0.16]' : 'opacity-[0.22]'}`} />
      <div className={`drift pointer-events-none absolute -right-24 -top-10 h-[420px] w-[420px] rounded-full blur-3xl ${dark ? 'bg-brass/12' : 'bg-brass/20'}`} aria-hidden />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Eyebrow light={dark}>{eyebrow}</Eyebrow>
          <RevealLines lines={lines} className={`display mt-6 text-[clamp(2.5rem,6vw,5.5rem)] ${dark ? 'text-pearl' : 'text-teal'}`} />
          {text && (
            <p data-reveal className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? 'text-pearl/75' : 'text-muted'}`}>
              {text}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

/* ── Hub hero: all eight emblems on a slowly turning ring ────── */

export function ServiceRing({ slugs }: { slugs: ServiceSlug[] }) {
  return (
    <div className="sv-ring">
      <div className="sv-halo absolute -inset-8 rounded-full" />
      <Mandala className="absolute inset-[18%] h-[64%] w-[64%] opacity-40" />
      <div className="sv-ring__turn">
        {slugs.map((slug, i) => {
          const a = (i / slugs.length) * Math.PI * 2 - Math.PI / 2
          return (
            <div key={slug} className="sv-ring__item" style={{ left: `${r1(50 + Math.cos(a) * 40)}%`, top: `${r1(50 + Math.sin(a) * 40)}%` }}>
              <ServiceEmblem slug={slug} className="h-auto w-full" />
            </div>
          )
        })}
      </div>
    </div>
  )
}