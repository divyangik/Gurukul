import { useMemo, useState } from 'react'
import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { BookOpen, Download, GraduationCap, HeartPulse, Home, Search, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { DustField } from '@/components/campus/CampusScenes'
import { Accordion, AdmissionsCTA, ContactActions, Eyebrow, RevealLines } from '@/components/ui'

const pad = (n: number) => String(n).padStart(2, '0')
const d = (s: number) => ({ ['--d' as string]: `${s}s` }) as CSSProperties
const doc = (name: string) => `https://bhaktivedantaeducation.com/Documents/${encodeURIComponent(name)}`

type Item = { q: string; a: ReactNode; plain: string }
type Group = { id: string; title: string; blurb: string; Icon: LucideIcon; items: Item[] }

const ul = (rows: string[]) => (
  <ul className="space-y-2">
    {rows.map((r) => (
      <li key={r} className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" aria-hidden />
        <span>{r}</span>
      </li>
    ))}
  </ul>
)

const link = 'link-sweep font-semibold text-teal'

const groups: Group[] = [
  {
    id: 'admissions',
    title: 'Admissions',
    blurb: 'Who can join, and what we look for.',
    Icon: GraduationCap,
    items: [
      {
        q: 'What is the age group for Gurukula admissions?',
        plain: 'Age group for entry is 8 to 12 years old. Only for boys. Boys can stay till age 21 if they wish to.',
        a: 'The age group for entry is 8 to 12 years old. The Gurukula is only for boys. Boys can stay till age 21 if they wish to.',
      },
      {
        q: 'What are the other criteria for Gurukula admission?',
        plain: 'Most of the milk teeth have fallen, basic care of themselves bathing toilet training wearing dhoti washing own clothes. Language level must match the academic requirements.',
        a: 'Most of the milk teeth have fallen, and the boy can take basic care of himself — bathing, toilet training, wearing a dhoti and washing his own clothes. His language level must match the academic requirements.',
      },
      {
        q: 'What is the fee structure of Gurukula? What is the payment schedule?',
        plain: 'Please contact the administrator.',
        a: 'Please contact the administrator. You can reach the office on WhatsApp or by email using the buttons at the bottom of this page.',
      },
      {
        q: 'Is there any Gurukula for girls?',
        plain: 'Kanya Vidyashrama for girls Activities page',
        a: (
          <>
            We have Kanya Vidyashrama for girls. For more details, see the Kanya Vidyashrama section on the{' '}
            <Link to="/activities" className={link}>
              Activities page
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    blurb: 'What is taught, and the certificate at the end.',
    Icon: BookOpen,
    items: [
      {
        q: 'What all things will the child learn in the Gurukula?',
        plain: 'Krishna conscious training morning program bhakti shastri Vaishnava sadachara deity worship yajna outreach Veda varna shiksha 14 books 64 arts life skills farming goseva martial arts cooking communication leadership yoga music finance societal challenges media politics violence peer pressure addictions academic SSC board',
        a: ul([
          'Krishna conscious training — morning program, bhakti shastri, Vaishnava sadachara, deity worship, yajna, outreach and more.',
          'Veda and varna shiksha — teaching and training according to inclination, capacity and talent, from amongst 14 books of Vedic knowledge and 64 arts.',
          'Training in life skills — basic farming and goseva, martial arts, cooking, communication, leadership, yoga, music, finance management and more.',
          'Becoming compatible with and capable of responding to societal challenges — dealing with media, politics, violence, peer pressure, addictions and more.',
          'Academic training — academic subjects from the SSC board.',
        ]),
      },
      {
        q: 'What can we expect in terms of Vedic education?',
        plain: 'Depending on inclination capacity nyaya niti dharma sastras itihasa pancatantra hitopadesa goseva farming gardening',
        a: 'It depends on the inclination and capacity of the child. Currently we have nyaya, niti, dharma sastras, itihasa, pancatantra, hitopadesa, goseva, farming and gardening.',
      },
      {
        q: 'Does Gurukula education cover academics as well? Which syllabus does it follow?',
        plain: 'Yes SSC board of Maharashtra SSC books till 4th std CBSE books from std 5 onwards',
        a: 'Yes. We follow the SSC board of Maharashtra. SSC books are used till 4th standard, and CBSE books from 5th standard onwards.',
      },
      {
        q: 'Which certification does the child get?',
        plain: 'SSC board in English medium',
        a: 'SSC board, in English medium.',
      },
      {
        q: 'How do you ensure that the child is competent in the outside world?',
        plain: 'Principles and values day to day activities character and competence regular academic certification',
        a: ul([
          'Principles and values that govern life and its contribution are embedded in day-to-day activities and routines.',
          'Students get both character and competence.',
          'They receive regular academic certification, so they can continue to whatever they wish to pursue in the outside world.',
        ]),
      },
    ],
  },
  {
    id: 'daily-life',
    title: 'Daily Life',
    blurb: 'Routine, food, comforts and holidays.',
    Icon: Home,
    items: [
      {
        q: 'What is the daily routine of students in Gurukula?',
        plain: 'Daily schedule wake up 5 AM mangal aarti morning session yoga seva academics 9:30 skill development sports bath dinner evening session rest 7:30 PM',
        a: (
          <>
            The day runs from wake-up and Mangal Aarti between 4:00 and 5:30 AM, through morning seva, academics, skill development and sports, to rest at 7:30 PM. The full timed schedule is on the{' '}
            <Link to="/lifestyle-training" hash="day" className={link}>
              Lifestyle Training page
            </Link>
            .
          </>
        ),
      },
      {
        q: 'How are the basic living facilities in Gurukula?',
        plain: 'Rural setting city comfort hot water for bath solar electricity backup 2 full-time caretakers',
        a: ul(['Rural setting, city comfort', 'Hot water for bath', 'Solar for electricity backup', 'Campus well maintained by 2 full-time caretakers']),
      },
      {
        q: 'What is the food arrangement in Gurukula?',
        plain: 'satvik nutritious prasad cooked by person who practices spiritual culture seriously diet plan nutrition experts',
        a: ul(['Satvik, nutritious prasad', 'Cooked by a person who practises spiritual culture seriously', 'Diet plan prepared as per nutrition experts']),
      },
      {
        q: 'Holidays?',
        plain: 'kartika month 20 days summer 45 to 50 days',
        a: ul(['In the Kartika month: 20 days', 'In summer: 45 to 50 days']),
      },
      {
        q: 'What all things are necessary to bring to the Gurukula?',
        plain: 'checklist for parents download pdf',
        a: (
          <a href={doc('Checklist for parents_BVG.pdf')} target="_blank" rel="noreferrer" className={link}>
            Download the checklist for parents (PDF)
          </a>
        ),
      },
    ],
  },
  {
    id: 'parents',
    title: 'Parents & Care',
    blurb: 'Visits, calls, staff and health.',
    Icon: HeartPulse,
    items: [
      {
        q: 'When can the parents visit Gurukula?',
        plain: 'Sundays 7.30 am to 9.30 am or 4 pm to 6 pm',
        a: 'Sundays, 7:30 AM to 9:30 AM, or 4 PM to 6 PM.',
      },
      {
        q: 'Are phone calls allowed?',
        plain: 'Weekly once for 30 minutes at predetermined time emergency anytime',
        a: 'Weekly, once, for 30 minutes at a predetermined time. In case of emergency, we may call you at any time.',
      },
      {
        q: 'How many teachers or staff members are there in the Gurukula?',
        plain: '6 resident 4 visiting',
        a: '6 resident and 4 visiting.',
      },
      {
        q: 'What arrangements do we have when students fall sick?',
        plain: 'mild illness first aid teacher trained basic healthcare local doctor Dalimb Urulikanchan full body checkup every semester severe illness parents informed hospital 5 km devotee doctors video call',
        a: (
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-teal">In case of mild illness</p>
              <div className="mt-2">
                {ul([
                  'Basic first aid is kept ready.',
                  'A teacher trained in basic healthcare and medication is on campus.',
                  'Local doctors in Dalimb and Uruli Kanchan are identified and made favourable to prioritise our requirements.',
                  '2 experts conduct a full body check-up every semester.',
                ])}
              </div>
            </div>
            <div>
              <p className="font-semibold text-teal">In case of severe illness</p>
              <div className="mt-2">
                {ul([
                  'Parents are immediately informed and action is taken as per their decisions.',
                  'The local hospital is 5 km away and is favourable in responding to our needs.',
                  'Many devotee doctors, specialised in their own fields, in Pune offer quick consultation over a video call.',
                ])}
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
]

const keyFacts: { big: string; small: string }[] = [
  { big: '8 – 12', small: 'years — entry age, for boys' },
  { big: '21', small: 'years — boys may stay until' },
  { big: 'SSC', small: 'Maharashtra board, English medium' },
  { big: 'Sundays', small: '7:30 – 9:30 AM or 4 – 6 PM, parent visits' },
]

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: 'FAQ — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Answers to common questions about admissions, education, daily life and parent visits at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'FAQ — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Answers to common questions about admissions, education and daily life at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  const [cat, setCat] = useState<string>('all')
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const visible = useMemo(
    () =>
      groups
        .filter((g) => cat === 'all' || g.id === cat)
        .map((g) => ({ ...g, items: g.items.filter((i) => !q || (i.q + ' ' + i.plain).toLowerCase().includes(q)) }))
        .filter((g) => g.items.length > 0),
    [cat, q],
  )
  const count = visible.reduce((n, g) => n + g.items.length, 0)

  return (
    <>
      <Hero />
      <KeyFacts />

      <section id="questions" className="relative isolate overflow-hidden bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          {/* Filter bar */}
          <div className="rounded-3xl border border-teal/15 bg-sand/60 p-5 md:p-6">
            <label className="relative block">
              <span className="sr-only">Search the questions</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a6f3c]" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search — for example “fee”, “visit” or “food”"
                className="w-full rounded-2xl border border-teal/20 bg-pearl py-3 pl-11 pr-4 text-teal outline-none transition placeholder:text-muted/70 focus:border-brass focus:ring-2 focus:ring-brass/40"
              />
            </label>
            <div className="mt-4 flex flex-wrap gap-2.5" role="group" aria-label="Filter by topic">
              {[{ id: 'all', title: 'All questions', Icon: Users }, ...groups].map(({ id, title, Icon }) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={cat === id}
                  onClick={() => setCat(id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.8rem] font-semibold tracking-wide transition-all duration-500 ${
                    cat === id ? 'border-brass bg-brass text-teal-deep' : 'border-teal/25 text-teal hover:-translate-y-0.5 hover:border-brass'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {title}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted" aria-live="polite">
              {count} {count === 1 ? 'question' : 'questions'} shown
            </p>
          </div>

          {visible.length === 0 && (
            <p className="mt-14 text-center text-lg text-muted">
              Nothing matched “{query}”. Try another word, or ask us directly below.
            </p>
          )}

          {visible.map((g) => {
            const idx = groups.findIndex((x) => x.id === g.id)
            return (
              <div key={g.id} id={g.id} className="relative mt-16 scroll-mt-28">
                <span className="act-num pointer-events-none absolute -top-6 right-0 select-none" aria-hidden>
                  {pad(idx + 1)}
                </span>
                <div className="flex items-center gap-4">
                  <span className="act-badge pulse-ring" aria-hidden>
                    <g.Icon className="h-5 w-5" />
                  </span>
                  <Eyebrow>{pad(idx + 1)} · {g.title}</Eyebrow>
                </div>
                <RevealLines lines={[g.title]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
                <p data-reveal className="mt-3 text-muted">{g.blurb}</p>
                <span data-reveal="rule" className="mt-5 block h-px w-24 bg-brass" aria-hidden />
                <div className="mt-8">
                  <Accordion key={`${g.id}-${q}`} items={g.items.map((i) => ({ q: i.q, a: i.a }))} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="grain relative isolate overflow-hidden bg-teal-deep py-20 text-pearl md:py-24">
        <div className="drift pointer-events-none absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <div className="mx-auto grid max-w-[1100px] gap-6 px-5 md:grid-cols-2 md:px-10">
          <div data-reveal className="rounded-2xl border border-pearl/15 bg-pearl/5 p-6 md:p-8">
            <p className="eyebrow text-brass">More information</p>
            <p className="mt-4 text-pearl/80">Download the brochure FAQ or the checklist of things to bring.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={doc('BVG Brochure FAQ.pdf')} target="_blank" rel="noreferrer" className="btn btn-brass">
                <Download className="h-4 w-4" aria-hidden /> Brochure FAQ
              </a>
              <a href={doc('Checklist for parents_BVG.pdf')} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
                <Download className="h-4 w-4" aria-hidden /> Parent checklist
              </a>
            </div>
          </div>
          <ContactActions light label="Still have a question? Ask us directly" />
        </div>
      </section>

      <AdmissionsCTA />
    </>
  )
}

function Hero() {
  const move = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    e.currentTarget.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }
  return (
    <section onPointerMove={move} className="cp-hero grain relative isolate flex min-h-[72svh] items-end overflow-hidden bg-teal text-pearl">
      <div className="absolute inset-0 -z-10">
        <div data-parallax="0.16" className="absolute inset-[-8%_0]">
          <div className="cp-hero__layer h-full w-full">
            <Photo src="/img/academic-study/academic-study-1.jpg" alt="Students studying in a Gurukula classroom" priority widths={[640, 1024, 1600, 2200]} width={1600} className="kenburns h-full w-full object-cover" style={{ objectPosition: 'center 40%' }} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/90 via-teal-deep/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-teal-deep/65 to-transparent" />
      </div>
      <DustField />
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 pt-36 md:px-10 md:pb-20">
        <Eyebrow light>Questions & Answers</Eyebrow>
        <RevealLines as="h1" lines={['Frequently Asked', 'Questions']} className="display mt-6 text-[clamp(3rem,8vw,7rem)] text-pearl" />
        <div data-reveal style={d(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-pearl/90">
          Everything parents usually ask before visiting — about admissions, studies and daily life at the Gurukula.
        </div>
        <div data-reveal style={d(0.5)} className="mt-8">
          <a href="#questions" className="btn btn-brass">Browse the questions</a>
        </div>
      </div>
    </section>
  )
}

function KeyFacts() {
  return (
    <section className="grain relative isolate overflow-hidden bg-slate py-14 text-pearl md:py-16">
      <div className="mx-auto grid max-w-[1440px] gap-4 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
        {keyFacts.map((f, i) => (
          <div key={f.big} data-reveal="scale" style={d(i * 0.1)}>
            <div className="vc-chip !block" style={{ animationDelay: `${-i * 1.3}s` }}>
              <p className="font-display text-4xl leading-none text-brass-soft md:text-5xl">{f.big}</p>
              <p className="mt-2 text-sm leading-snug text-pearl/70">{f.small}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}