import { useState } from 'react'
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, BookOpen, CalendarCheck, ClipboardCheck, FileText, Flame, Footprints, Leaf, MapPin, MessageCircle, Mail, Sprout, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { DustField, SunriseScene } from '@/components/campus/CampusScenes'
import { Eyebrow, RevealLines } from '@/components/ui'
import { contact } from '@/content/site'

const d = (s: number) => ({ ['--d' as string]: `${s}s` }) as CSSProperties

export const Route = createFileRoute('/book-visit')({
  head: () => ({
    meta: [
      { title: 'Book a Visit — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Visit the five-acre Bhaktivedanta Gurukula campus at Dalimb, Pune — any time of year, by appointment, 4 PM to 6 PM, guided by a student.' },
      { property: 'og:title', content: 'Book a Visit — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Walk the campus with a student guide and have your questions answered.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <VisitHero />
      <Steps />
      <WhatYouSee />
      <RequestForm />
      <FindUs />
    </>
  )
}

/* ── Hero ────────────────────────────────────────────────────── */

const heroFacts = ['4 – 6 PM', 'By appointment', 'Any time of year', 'Student-guided']

function VisitHero() {
  const move = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    e.currentTarget.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }
  return (
    <section onPointerMove={move} className="cp-hero grain relative isolate flex min-h-[84svh] items-end overflow-hidden bg-teal text-pearl">
      <div className="absolute inset-0 -z-10">
        <div data-parallax="0.16" className="absolute inset-[-8%_0]">
          <div className="cp-hero__layer h-full w-full">
            <Photo src="/img/slider/slider-1.jpg" alt="Gurukula students smiling together" priority widths={[640, 1024, 1600, 2200]} width={1600} className="kenburns h-full w-full object-cover" style={{ objectPosition: 'center 30%' }} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/90 via-teal-deep/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-teal-deep/65 to-transparent" />
      </div>
      <DustField />
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 pt-36 md:px-10 md:pb-20">
        <Eyebrow light>Dalimb · Uruli Kanchan · Pune</Eyebrow>
        <RevealLines as="h1" lines={['Come and', 'see it for yourself.']} className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,7rem)] text-pearl" />
        <div data-reveal style={d(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-pearl/90">
          Walk around the five-acre campus, guided by a student, and have your questions answered. Visit anytime during the year by prior appointment between 4 PM and 6 PM.
        </div>
        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Visit details">
          {heroFacts.map((f, i) => (
            <li key={f} data-reveal="scale" style={d(0.45 + i * 0.08)} className="cp-chip cp-chip--dark !bg-teal-deep/55 backdrop-blur-md">
              {f}
            </li>
          ))}
        </ul>
        <div data-reveal style={d(0.8)} className="mt-9 flex flex-wrap gap-3">
          <a href="#request" className="btn btn-brass">
            Request a visit <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
          </a>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
            <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── How it works (from the official Contact / Book a visit page) ─ */

const steps: { Icon: LucideIcon; title: string; text: string; list?: string[] }[] = [
  { Icon: MapPin, title: 'Visit the school', text: 'Bhaktivedanta Gurukula is situated in the serene atmosphere of Dalimb, Uruli Kanchan — free from the hustle and bustle of city life and pollution, and centred around a temple. The atmosphere is divine and surcharged with chanting and Harinam sankirtan, which will nourish your child physically as well as spiritually.' },
  { Icon: Footprints, title: 'Walk around the school', text: 'Walk around the five-acre campus and have a glimpse of some of the activities, guided by a student. You can also get your doubts and queries answered.' },
  { Icon: ClipboardCheck, title: 'Undergo the eligibility test', text: '', list: ['Reading speed and comprehension of the student', 'Parents’ understanding about Gurukula and their home culture', 'Physical fitness and social ability of the student', 'Parent’s interview with the Gurukula Upadhyaya (teacher)'] },
  { Icon: CalendarCheck, title: '3 days trial', text: 'The student can come for a 3 days trial, where he can experience the Gurukula environment, education, facilities and residents. This helps him understand the Gurukula’s essence, mood and lifestyle, and then take an informed decision about joining.' },
  { Icon: FileText, title: 'Fill the admission form', text: 'Once the decision is made by the parents and the school, the parents can proceed with filling the admission form. Fill up the Google form, sign the indemnity bond and pay the school fees (or talk to the authorities if you want to pay in installments). This completes the admission process.', list: ['PDF of the leaving certificate, if available (Std. 1 to 10)', 'PDF of the Aadhaar card — compulsory (if none, talk to our team)', 'Latest digital passport-size photo of your child, plus two hard copies', 'Parents’ Aadhaar card and photo'] },
  { Icon: Sprout, title: '30-300 formula', text: 'Even after joining, the student is observed for his behaviour and adaptability for the first 30 days. His admission for the academic year is confirmed thereafter.' },
]

const schedule = [
  'Visit anytime during the year by prior appointment between 4 PM to 6 PM',
  'Check for student eligibility between December to March',
  'Admission process — before 25th May',
  'Complete admission formality — 1st week of June',
  '3 days trial can be taken anytime between 1st Dec to 30th Mar',
]

function Steps() {
  return (
    <section className="relative isolate overflow-hidden bg-pearl py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <RevealLines lines={['From a first visit,', <em key="s" className="text-[#8a6f3c]">to admission.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <span data-reveal="rule" className="mt-5 block h-px w-24 bg-brass" aria-hidden />
          </div>
          <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
            Admission follows six steps. It starts with a visit, and the decision is taken together by the parents and the school.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map(({ Icon, title, text, list }, i) => (
            <li key={title} data-reveal style={d((i % 3) * 0.12)} className="bv-step relative rounded-3xl border border-teal/15 bg-sand/60 p-7">
              <div className="flex items-center justify-between">
                <span className="bv-step__icon" style={{ animationDelay: `${-i * 1.2}s` }}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-display text-5xl leading-none text-[#8a6f3c]/60">{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl text-teal">{title}</h3>
              {text && <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{text}</p>}
              {list && (
                <ul className="mt-3 space-y-2 text-[0.92rem] leading-relaxed text-muted">
                  {list.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" aria-hidden />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-10 rounded-3xl bg-teal p-8 text-pearl md:p-10">
          <p className="eyebrow text-brass">Admission schedule</p>
          <ul className="mt-5 grid gap-x-12 gap-y-3 md:grid-cols-2">
            {schedule.map((s) => (
              <li key={s} className="flex gap-3 leading-relaxed text-pearl/85">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" aria-hidden />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <a href={contact.admissionForm} target="_blank" rel="noreferrer" className="btn btn-brass mt-8">
            Admission form <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── What you will see ───────────────────────────────────────── */

const places: { Icon: LucideIcon; title: string; text: string; src: string; alt: string }[] = [
  { Icon: Flame, title: 'The Temple', text: 'Where every day begins and ends.', src: '/img/daily-schedule/temple-sankirtan.jpg', alt: 'Students at morning sankirtan in the temple' },
  { Icon: BookOpen, title: 'Classrooms', text: 'Modern curriculum beside Vedic texts.', src: '/img/academic-study/academic-study.jpg', alt: 'Students studying on floor mats with a teacher' },
  { Icon: Trophy, title: 'Sports Ground', text: 'Kabaddi, kho-kho, football and athletics.', src: '/img/campus/sports-ground/sports.jpg', alt: 'Students on the sports ground' },
  { Icon: Leaf, title: 'Goshala', text: 'Go-seva — caring for the campus cows.', src: '/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg', alt: 'Cows at the goshala' },
]

function WhatYouSee() {
  return (
    <section className="grain relative isolate overflow-hidden bg-slate py-24 text-pearl md:py-32">
      <div className="drift pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Eyebrow light>On your walk</Eyebrow>
        <RevealLines lines={['What you will', <em key="s" className="text-brass-soft">see.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)]" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {places.map(({ Icon, title, text, src, alt }, i) => (
            <article key={title} data-reveal style={d(i * 0.1)} className="bv-place group relative overflow-hidden rounded-3xl">
              <Photo src={src} alt={alt} ratio={1.3} widths={[400, 700]} width={600} sizes="(min-width: 1024px) 22vw, 90vw" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:scale-[1.06]" />
              <span className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/30 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="act-badge mb-3" aria-hidden>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-1 text-sm text-pearl/75">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Request form: composes a WhatsApp or email message ──────── */

function RequestForm() {
  const [f, setF] = useState({ name: '', phone: '', date: '', guests: '', note: '' })
  const [tried, setTried] = useState(false)
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF((p) => ({ ...p, [k]: e.target.value }))
  const ok = f.name.trim().length > 1 && f.phone.trim().length > 5

  const message = [
    'Namaste! I would like to book a campus visit at Bhaktivedanta Gurukula.',
    '',
    `Name: ${f.name.trim()}`,
    `Phone: ${f.phone.trim()}`,
    f.date ? `Preferred date: ${f.date} (4 PM – 6 PM)` : 'Preferred date: to be discussed (4 PM – 6 PM)',
    f.guests ? `Number of visitors: ${f.guests}` : '',
    f.note.trim() ? `Note: ${f.note.trim()}` : '',
  ]
    .filter((l, i, a) => l !== '' || a[i - 1] !== '')
    .join('\n')

  const go = (kind: 'wa' | 'mail') => {
    setTried(true)
    if (!ok) return
    const url = kind === 'wa' ? `${contact.whatsappUrl}?text=${encodeURIComponent(message)}` : `mailto:${contact.email}?subject=${encodeURIComponent('Campus visit request')}&body=${encodeURIComponent(message)}`
    if (kind === 'wa') window.open(url, '_blank', 'noopener,noreferrer')
    else window.location.href = url
  }
  const today = new Date().toISOString().slice(0, 10)
  const field = 'mt-2 w-full rounded-xl border border-teal/20 bg-pearl px-4 py-3 text-teal outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/40'

  return (
    <section id="request" className="relative isolate overflow-hidden bg-sand py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Request a visit</Eyebrow>
          <RevealLines lines={['Tell us when', <em key="w" className="text-[#8a6f3c]">you would like to come.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
          <p data-reveal className="mt-6 max-w-md leading-relaxed text-muted">
            Fill in a few details and we will open WhatsApp or your email app with the message already written. Your visit is confirmed once our team replies.
          </p>
          <ul data-reveal className="mt-8 space-y-3 text-teal">
            <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-[#8a6f3c]" aria-hidden /> WhatsApp {contact.whatsappDisplay}</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#8a6f3c]" aria-hidden /> {contact.email}</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#8a6f3c]" aria-hidden /> {contact.location}</li>
          </ul>
        </div>

        <div data-reveal className="rounded-[2rem] border border-teal/15 bg-pearl p-6 shadow-[0_30px_60px_-40px_rgba(18,63,67,0.5)] md:p-9">
          <form onSubmit={(e) => e.preventDefault()} noValidate className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-teal">
              Your name
              <input className={field} value={f.name} onChange={set('name')} autoComplete="name" aria-invalid={tried && f.name.trim().length < 2} />
            </label>
            <label className="text-sm font-semibold text-teal">
              Phone / WhatsApp
              <input className={field} value={f.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" aria-invalid={tried && f.phone.trim().length < 6} />
            </label>
            <label className="text-sm font-semibold text-teal">
              Preferred date
              <input type="date" min={today} className={field} value={f.date} onChange={set('date')} />
            </label>
            <label className="text-sm font-semibold text-teal">
              Number of visitors
              <input className={field} value={f.guests} onChange={set('guests')} inputMode="numeric" />
            </label>
            <label className="text-sm font-semibold text-teal sm:col-span-2">
              Anything we should know? <span className="font-normal text-muted">(optional)</span>
              <textarea rows={3} className={field} value={f.note} onChange={set('note')} />
            </label>
            {tried && !ok && (
              <p role="alert" className="text-sm font-semibold text-[#7a5f2e] sm:col-span-2">
                Please add your name and phone number so we can reply.
              </p>
            )}
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <button type="button" onClick={() => go('wa')} className="btn btn-teal">
                <MessageCircle className="h-4 w-4" aria-hidden /> Send on WhatsApp
              </button>
              <button type="button" onClick={() => go('mail')} className="btn btn-ghost-dark normal-case tracking-normal">
                <Mail className="h-4 w-4" aria-hidden /> Send by email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ── Find us ─────────────────────────────────────────────────── */

function FindUs() {
  return (
    <section className="relative isolate overflow-hidden bg-pearl py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-[1.05fr_1fr] md:px-10">
        <div>
          <Eyebrow>Find us</Eyebrow>
          <RevealLines lines={['An hour from Pune,', <em key="c" className="text-[#8a6f3c]">a world apart.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
          <span data-reveal="rule" className="mt-6 block h-px w-24 bg-brass" aria-hidden />
          <p data-reveal className="mt-6 max-w-xl leading-relaxed text-muted">
            The Gurukula sits in the village of Dalimb near Uruli Kanchan, surrounded by farmland and open hills.
          </p>
          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-teal">
              Open in Google Maps <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </a>
            <Link to="/faq" className="btn btn-ghost-dark">
              Read the FAQ
            </Link>
          </div>
        </div>
        <div data-reveal="blur" className="cp-scene-card">
          <SunriseScene />
          <span className="cp-scene-pin">
            <MapPin className="h-4 w-4" aria-hidden /> Dalimb
          </span>
        </div>
      </div>
    </section>
  )
}