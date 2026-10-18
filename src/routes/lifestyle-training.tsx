import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Dumbbell, Flame, Leaf, Moon, ShieldCheck, Sprout, Sunrise, Sunset } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { WordMarquee } from '@/components/education'
import { ButterflyScene, DustField, EmberScene, GrassScene, LetterScene, TrackScene } from '@/components/campus/CampusScenes'
import { AdmissionsCTA, Eyebrow, RevealLines } from '@/components/ui'
import { tones } from '@/lib/tones'

const pad = (n: number) => String(n).padStart(2, '0')
const d = (s: number) => ({ ['--d' as string]: `${s}s` }) as CSSProperties

export const Route = createFileRoute('/lifestyle-training')({
  head: () => ({
    meta: [
      { title: 'Lifestyle Training — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'A gurukula day at Bhaktivedanta Gurukula, Dalimb, Pune — from mangal aarti before sunrise to rest at 7:30 PM — and the training in life skills, Vedic study and service behind it.' },
      { property: 'og:title', content: 'Lifestyle Training — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'The daily schedule and lifestyle training that form character at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <Hero />
      <div className="border-y border-brass/20 bg-teal-deep py-2 text-pearl" aria-hidden>
        <WordMarquee light speed={55} words={['Discipline', 'Devotion', 'Service', 'Scripture']} />
      </div>
      {pillars.map((p, i) => (
        <Pillar key={p.id} p={p} index={i} />
      ))}
      <DaySchedule />
      <Learn />
      <AdmissionsCTA title={['Come and', 'see a day for yourself.']} />
    </>
  )
}

/* ── Hero ────────────────────────────────────────────────────── */

const heroLinks: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: 'brahmacarya', label: 'Discipline', Icon: ShieldCheck },
  { id: 'sadhana', label: 'Devotion', Icon: Flame },
  { id: 'seva', label: 'Service', Icon: Leaf },
  { id: 'sastra', label: 'Scripture', Icon: BookOpen },
  { id: 'day', label: 'A Day at the Gurukula', Icon: Sunrise },
  { id: 'learn', label: 'What They Learn', Icon: Sprout },
]

function Hero() {
  const move = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    e.currentTarget.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }
  return (
    <section onPointerMove={move} className="cp-hero grain relative isolate flex min-h-[88svh] items-end overflow-hidden bg-teal text-pearl">
      <div className="absolute inset-0 -z-10">
        <div data-parallax="0.16" className="absolute inset-[-8%_0]">
          <div className="cp-hero__layer h-full w-full">
            <Photo src="/img/festivals/deity-worship-2.jpg" alt="Students offering worship in the Gurukula temple" priority widths={[640, 1024, 1600, 2200]} width={1600} className="kenburns h-full w-full object-cover" style={{ objectPosition: 'center 30%' }} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/85 via-teal-deep/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-teal-deep/65 to-transparent" />
      </div>
      <DustField />
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 pt-36 md:px-10 md:pb-20">
        <Eyebrow light>Character Before Career</Eyebrow>
        <RevealLines as="h1" lines={['Lifestyle', 'Training']} className="display mt-6 text-[clamp(3.25rem,9vw,8rem)] text-pearl" />
        <div data-reveal style={d(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-pearl/90">
          The gurukula&rsquo;s real curriculum is a way of life. Discipline, devotion, service and scripture shape every day a student spends here.
        </div>
        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Jump to a section">
          {heroLinks.map(({ id, label, Icon }, i) => (
            <li key={id} data-reveal style={d(0.45 + i * 0.07)}>
              <a href={`#${id}`} className="inline-flex items-center gap-2 rounded-full border border-pearl/30 bg-teal-deep/45 px-4 py-2 text-[0.8rem] font-semibold tracking-wide text-pearl backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-brass hover:bg-brass hover:text-teal-deep focus-visible:border-brass focus-visible:bg-brass focus-visible:text-teal-deep">
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

/* ── Four pillars ────────────────────────────────────────────── */

type Pillar = { id: string; title: string; text: string; img: string; alt: string; Icon: LucideIcon; chips: string[]; tone: 'deep' | 'dark' | 'pearl' | 'sand'; scene: ReactNode }

const pillars: Pillar[] = [
  {
    id: 'brahmacarya',
    title: 'Brahmacarya — Disciplined Living',
    text: 'Students live a regulated life: rising before dawn, keeping simple dress and diet, and learning self-restraint — the foundation of all Vedic study.',
    img: '/img/daily-schedule/temple-sankirtan.jpg',
    alt: 'Students at morning sankirtan in the temple',
    Icon: ShieldCheck,
    chips: ['Early rising', 'Simple dress', 'Simple diet', 'Self-restraint'],
    tone: 'deep',
    scene: <TrackScene />,
  },
  {
    id: 'sadhana',
    title: 'Sadhana — Daily Spiritual Practice',
    text: 'Mangala-arati, japa meditation, kirtan and scripture study are woven into every day, so devotion becomes a habit rather than an occasion.',
    img: '/img/festivals/deity-worship.jpg',
    alt: 'Students engaged in deity worship',
    Icon: Flame,
    chips: ['Mangala-arati', 'Japa', 'Kirtan', 'Deity worship'],
    tone: 'dark',
    scene: <EmberScene />,
  },
  {
    id: 'seva',
    title: 'Seva — Service',
    text: 'From serving prasadam to caring for the cows in the goshala, students learn that leadership begins with the willingness to serve.',
    img: '/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg',
    alt: 'Cows at the Gurukula goshala',
    Icon: Leaf,
    chips: ['Go-seva', 'Garland seva', 'Cleaning seva', 'Serving prasadam'],
    tone: 'pearl',
    scene: (
      <>
        <ButterflyScene />
        <GrassScene />
      </>
    ),
  },
  {
    id: 'sastra',
    title: 'Sastra — Scriptural Study',
    text: 'Systematic study of Bhagavad-gita and Srimad Bhagavatam, with memorisation, recitation and discussion, alongside the modern academic syllabus.',
    img: '/img/vedic-study/yajna-preparation.jpg',
    alt: 'Students preparing offerings for a yajna',
    Icon: BookOpen,
    chips: ['Bhagavad-gita', 'Srimad Bhagavatam', 'Sanskrit', 'Recitation'],
    tone: 'sand',
    scene: <LetterScene />,
  },
]

const toneClass: Record<Pillar['tone'], string> = {
  deep: 'grain bg-teal-deep text-pearl',
  dark: 'grain bg-slate text-pearl',
  pearl: 'bg-pearl',
  sand: 'bg-sand',
}

function Pillar({ p, index }: { p: Pillar; index: number }) {
  const dark = p.tone === 'deep' || p.tone === 'dark'
  const flip = index % 2 === 1
  const { Icon } = p
  return (
    <section id={p.id} aria-label={p.title} className={`${toneClass[p.tone]} relative isolate overflow-hidden py-24 md:py-32 ${p.tone === 'pearl' ? 'pb-36 md:pb-48' : ''}`}>
      {dark && (
        <>
          <div className="drift pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" aria-hidden />
          <div className="drift pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-brass/10 blur-3xl" style={{ animationDelay: '-6s' }} aria-hidden />
        </>
      )}
      {p.scene}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <span className="act-num ab-num pointer-events-none absolute right-5 md:right-10" data-parallax="0.3" aria-hidden>
          {pad(index + 1)}
        </span>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div data-reveal="mask" className={`relative overflow-hidden rounded-[2rem] ${flip ? 'md:order-2' : ''}`}>
            <Photo src={p.img} alt={p.alt} ratio={1.25} widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <div className={flip ? 'md:order-1' : ''}>
            <div className="flex items-center gap-4">
              <span className="act-badge pulse-ring" aria-hidden>
                <Icon className="h-5 w-5" />
              </span>
              <Eyebrow light={dark}>
                {pad(index + 1)} · {p.title.split(' — ')[0]}
              </Eyebrow>
            </div>
            <RevealLines lines={[p.title.split(' — ')[1]]} className={`display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] ${dark ? 'text-pearl' : 'text-teal'}`} />
            <span data-reveal="rule" className="mt-5 block h-px w-24 bg-brass" aria-hidden />
            <p data-reveal className={`mt-6 max-w-lg leading-relaxed ${dark ? 'text-pearl/75' : 'text-muted'}`}>{p.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2.5" aria-label={`${p.title} — what it involves`}>
              {p.chips.map((c, i) => (
                <li key={c} data-reveal="scale" style={d(0.1 + i * 0.08)} className={`cp-chip ${dark ? 'cp-chip--dark' : 'cp-chip--light'}`}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── A day at the gurukula (the real schedule) ───────────────── */

const day: { Icon: LucideIcon; phase: string; note?: string; rows: { time: string; what: string }[] }[] = [
  {
    Icon: Sunrise,
    phase: 'Early morning',
    note: 'Wake-up is between 4:00 and 5:30 AM, depending on age.',
    rows: [{ time: '5:00 – 6:00 AM', what: 'Wake up, freshen up, chanting and Mangal Aarti' }],
  },
  {
    Icon: Leaf,
    phase: 'Morning training & seva',
    rows: [
      { time: '6:00 AM', what: 'Morning session: yoga, cleaning seva, goseva, garland seva and academic preparation' },
      { time: '8:30 AM', what: 'Breakfast' },
    ],
  },
  {
    Icon: BookOpen,
    phase: 'Academic learning',
    rows: [
      { time: '9:30 AM – 12:15 PM', what: 'Academics' },
      { time: '12:15 PM', what: 'Lunch' },
      { time: '1:15 – 2:45 PM', what: 'Academics' },
    ],
  },
  {
    Icon: Dumbbell,
    phase: 'Skill development & physical training',
    rows: [
      { time: '2:45 – 4:00 PM', what: 'Veda Siksa or life skills training: music, mridanga, Sanskrit, yoga, mallakhamb, lathikathi, Vedic maths and more' },
      { time: '4:00 – 5:30 PM', what: 'Sports and physical training' },
    ],
  },
  {
    Icon: Sunset,
    phase: 'Evening',
    rows: [
      { time: '5:30 PM', what: 'Bath' },
      { time: '5:45 PM', what: 'Dinner' },
      { time: '6:20 PM', what: 'Evening session' },
    ],
  },
  {
    Icon: Moon,
    phase: 'Night & rest',
    note: 'Younger boys rest for 9+ hours, older boys for 8+ hours.',
    rows: [
      { time: '7:20 PM', what: 'Wind down for rest' },
      { time: '7:30 PM', what: 'Rest' },
    ],
  },
]

function DaySchedule() {
  return (
    <section id="day" className="relative isolate overflow-hidden bg-pearl py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <span className="act-num ab-num pointer-events-none absolute right-5 md:right-10" data-parallax="0.3" aria-hidden>
          05
        </span>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="act-badge pulse-ring" aria-hidden>
                <Sunrise className="h-5 w-5" />
              </span>
              <Eyebrow>05 · The Daily Schedule</Eyebrow>
            </div>
            <RevealLines lines={['One day,', <em key="d" className="text-[#8a6f3c]">lived well.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <span data-reveal="rule" className="mt-5 block h-px w-24 bg-brass" aria-hidden />
          </div>
          <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
            This schedule maintains a balance between spiritual practice, academics, seva and skill development.
          </p>
        </div>

        <ol className="ab-timeline relative mt-16 pl-10 md:pl-14" aria-label="Daily schedule">
          <span data-reveal="draw" className="ab-timeline__line ls-line" aria-hidden />
          {day.map(({ Icon, phase, note, rows }, i) => (
            <li key={phase} data-reveal style={d(0.05 + (i % 3) * 0.08)} className="relative pb-10 last:pb-0">
              <span className="ab-step__dot" style={{ boxShadow: '0 0 0 5px var(--color-pearl)' }} aria-hidden />
              <div className="ls-phase rounded-3xl border border-teal/15 p-6 md:p-8" style={{ backgroundColor: i % 2 ? 'rgb(230 220 203 / 0.6)' : 'rgb(230 220 203 / 0.35)' }}>
                <div className="flex items-center gap-4">
                  <span className="ls-phase__icon" style={{ animationDelay: `${-i * 1.1}s` }}>
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-2xl text-teal md:text-3xl">{phase}</h3>
                </div>
                <ul className="mt-5 divide-y divide-teal/10">
                  {rows.map((r) => (
                    <li key={r.time + r.what} className="grid gap-1 py-3 md:grid-cols-[13rem_1fr] md:gap-6">
                      <span className="font-display text-xl text-[#8a6f3c]">{r.time}</span>
                      <span className="leading-relaxed text-muted">{r.what}</span>
                    </li>
                  ))}
                </ul>
                {note && <p className="mt-3 text-sm italic text-muted">{note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ── What the child learns ───────────────────────────────────── */

const learn = [
  { title: 'Krishna conscious training', text: 'Morning programme, bhakti shastri, Vaishnava sadachara, deity worship, yajna, outreach and more.' },
  { title: 'Veda and varna siksa', text: 'Teaching and training according to inclination, capacity and talent, from amongst 14 books of Vedic knowledge and 64 arts.' },
  { title: 'Life skills', text: 'Basic farming and goseva, martial arts, cooking, communication, leadership, yoga, music, finance management and more.' },
  { title: 'Responding to society', text: 'Becoming compatible with and capable of responding to societal challenges: dealing with media, politics, violence, peer pressure and addictions.' },
  { title: 'Academic training', text: 'Academic subjects from the SSC board.' },
]

function Learn() {
  return (
    <section id="learn" className="grain relative isolate overflow-hidden bg-teal-deep py-24 text-pearl md:py-32">
      <div className="drift pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <span className="act-num ab-num pointer-events-none absolute right-5 md:right-10" data-parallax="0.3" aria-hidden>
          06
        </span>
        <div className="flex items-center gap-4">
          <span className="act-badge pulse-ring" aria-hidden>
            <Sprout className="h-5 w-5" />
          </span>
          <Eyebrow light>06 · What They Learn</Eyebrow>
        </div>
        <RevealLines lines={['Five strands,', <em key="s" className="text-brass-soft">one education.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)]" />
        <span data-reveal="rule" className="mt-5 block h-px w-24 bg-brass" aria-hidden />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {learn.map((l, i) => (
            <article key={l.title} data-reveal className="ab-mission group relative overflow-hidden rounded-3xl p-7 md:p-8" style={{ ...d(i * 0.1), backgroundColor: tones[i % tones.length] }}>
              <span className="ab-mission__bar" aria-hidden />
              <p className="font-display text-5xl leading-none text-brass-soft">{i + 1}</p>
              <h3 className="mt-4 font-display text-2xl">{l.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-pearl/85">{l.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}