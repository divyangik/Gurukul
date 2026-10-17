import { useEffect, useRef, useState } from 'react'
import { Photo } from '../Photo'
import { Eyebrow, RevealLines } from '../ui'
import { about, facts, history, mission, vision } from '@/content/home'

const chapters = [
  { id: 'about', label: 'Discover' },
  { id: 'vision', label: 'Vision' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'experience', label: 'Experience' },
  { id: 'continues', label: 'Continues' },
]

/** Five-chapter scroll story built from the official About, Vision, Mission, History and Facts content. */
export function AboutStory() {
  const [active, setActive] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(els.indexOf(e.target as HTMLElement))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="relative">
      {/* Chapter progress rail */}
      <div className="pointer-events-none absolute inset-y-0 left-5 z-20 hidden 2xl:block">
        <nav aria-label="About chapters" className="pointer-events-auto sticky top-[38vh]">
          <ol className="space-y-3">
            {chapters.map((c, i) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="group flex items-center gap-3" aria-current={active === i ? 'step' : undefined}>
                  <span className={`h-px bg-brass transition-all duration-700 ${active === i ? 'w-10' : 'w-4 opacity-50 group-hover:w-7'}`} />
                  <span
                    className={`eyebrow !text-[0.6rem] transition-all duration-500 ${
                      active === i ? 'text-brass opacity-100' : 'text-brass opacity-0 group-hover:opacity-80 group-focus-visible:opacity-80'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')} {c.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <ChapterDiscover />
      <ChapterVision />
      <ChapterPhilosophy />
      <ChapterExperience />
      <ChapterContinues />
    </div>
  )
}

function ChapterNumber({ n, light }: { n: number; light?: boolean }) {
  return (
    <p data-reveal className={`font-display text-sm italic ${light ? 'text-pearl/60' : 'text-muted'}`}>
      Chapter {['One', 'Two', 'Three', 'Four', 'Five'][n - 1]}
    </p>
  )
}

/* Chapter 1 — Discover the Gurukula */
function ChapterDiscover() {
  return (
    <section id="about" className="relative overflow-hidden bg-teal-deep pb-28 pt-24 text-pearl md:pb-40 md:pt-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:pt-10">
          <ChapterNumber n={1} light />
          <Eyebrow light className="mt-4">
            About Us
          </Eyebrow>
          <RevealLines
            lines={['Discover an', <em key="e" className="text-brass-soft">exceptional</em>, 'residential school.']}
            className="display mt-6 text-[clamp(2.75rem,6vw,5.75rem)]"
          />
          <div data-reveal className="prose-gk mt-10 max-w-xl text-pearl/80">
            <p>{about.replace('Discover an exceptional residential school where', 'A school where')}</p>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div data-reveal="mask" className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:ml-10">
            <div data-parallax="0.14" className="absolute inset-[-10%_0]">
              <Photo
                src="/img/slider/slider-1.jpg"
                alt="Four smiling Gurukula boys in white kurtas, arms around one another, with tilak on their foreheads."
                ratio={1.25}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div data-reveal style={{ ['--d' as string]: '0.4s' }} className="absolute -bottom-10 left-0 w-[46%] overflow-hidden rounded-2xl border-4 border-teal-deep shadow-2xl md:-left-6">
            <Photo src="/img/daily-schedule/temple-sankirtan.jpg" alt="Students in white dhotis leading kirtan with mridanga drums and kartals." ratio={0.75} widths={[400, 700]} width={600} sizes="25vw" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Chapter 2 — Vision & Mission */
function ChapterVision() {
  return (
    <section id="vision" className="relative bg-pearl py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <ChapterNumber n={2} />
            <Eyebrow className="mt-4">Our Vision</Eyebrow>
          </div>
          <blockquote className="lg:col-span-9">
            <RevealLines
              lines={[
                'We empower our members to lead a',
                <em key="kc" className="text-[#8a6f3c]">Krishna conscious way of life</em>,
                'and to perform welfare activities for the',
                'benefit of others with their life, wealth,',
                'intelligence and words.',
              ]}
              as="h3"
              className="display text-[clamp(1.9rem,3.7vw,3.6rem)] !leading-[1.12] text-teal"
            />
            <p className="sr-only">{vision}</p>
          </blockquote>
        </div>

        <div data-reveal="rule" className="brass-rule my-20 md:my-28" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Eyebrow>Our Mission</Eyebrow>
            <div data-reveal="mask" className="mt-8 hidden aspect-[3/4] overflow-hidden rounded-t-full lg:block">
              <Photo src="/img/festivals/deity-worship.jpg" alt="The Gurukula's deities adorned with flowers on the altar." ratio={1.333} widths={[400, 700]} width={500} sizes="20vw" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="grid gap-10 md:grid-cols-3 lg:col-span-9">
            {mission.map((p, i) => (
              <div key={i} data-reveal style={{ ['--d' as string]: `${i * 0.12}s` }} className="border-t border-teal/20 pt-6">
                <p className="font-display text-4xl text-[#8a6f3c]">{['i', 'ii', 'iii'][i]}.</p>
                <p className="mt-4 leading-relaxed text-muted">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* Chapter 3 — Educational philosophy & history (scroll-scrubbed image transition) */
function ChapterPhilosophy() {
  const ref = useRef<HTMLElement>(null)
  const topImg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ctx: { revert: () => void } | undefined
    let cancelled = false
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled || !ref.current) return
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.matchMedia().add('(min-width: 1024px)', () => {
          gsap.fromTo(
            topImg.current,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              ease: 'none',
              scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom bottom', scrub: true },
            },
          )
        })
      }, ref)
    })
    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <section id="philosophy" ref={ref} className="relative bg-sand">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-28 md:px-10 md:py-40 lg:grid-cols-12 lg:py-0">
        {/* Sticky image pair */}
        <div className="lg:col-span-7 lg:py-24">
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-[calc(100svh-12rem)]">
              <Photo src="/img/academic-study/academic-study-1.jpg" alt="Students studying at their desks in a classroom while a teacher guides them." sizes="(min-width: 1024px) 55vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
              <div ref={topImg} className="absolute inset-0 hidden lg:block" style={{ clipPath: 'inset(100% 0 0 0)' }}>
                <Photo src="/img/vedic-study/yajna-preparation.jpg" alt="Students preparing the yajna kund and offerings together under a teacher's guidance." sizes="55vw" className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-teal-deep/80 to-transparent p-6 pt-16 text-pearl">
                <span className="eyebrow">Modern academics</span>
                <span className="eyebrow text-brass-soft">Vedic wisdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 lg:py-[22vh]">
          <ChapterNumber n={3} />
          <Eyebrow className="mt-4">History & Philosophy</Eyebrow>
          <RevealLines lines={['Founded in 2017', 'by a team of', <em key="t" className="text-[#8a6f3c]">dedicated teachers.</em>]} className="display mt-6 text-[clamp(2.5rem,4.6vw,4.5rem)] text-teal" />
          <div data-reveal className="prose-gk mt-10 text-muted">
            <p>{history.split('The Bhagavad Gita')[0].trim()}</p>
          </div>

          <figure data-reveal className="my-14 border-l-2 border-brass pl-8">
            <p className="font-display text-[clamp(2.2rem,4vw,3.5rem)] italic leading-none text-teal">yogaḥ karmasu kauśalam</p>
            <figcaption className="mt-4 text-sm leading-relaxed text-muted">
              The Bhagavad Gita gives natural art of work. By practising these principles, one receives opulence abundance and loving harmonious relationships.
            </figcaption>
          </figure>

          <div data-reveal className="prose-gk text-muted">
            <p>
              Based on teachings of HDG Srila Prabhupada, Founder of ISKCON, they envisioned to create perfect ladies and gentlemen who are competent and devoted, and can lead and inspire others.
            </p>
            <p>
              The curriculum integrates teachings from the Bhagavat, Pancharatra, Vedic, and contemporary education, so that graduates are well-prepared for practical life and equipped to make meaningful contributions to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Chapter 4 — The Gurukula experience: layered photography + facts & figures */
function ChapterExperience() {
  return (
    <section id="experience" className="grain relative overflow-hidden bg-slate py-28 text-pearl md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ChapterNumber n={4} light />
            <Eyebrow light className="mt-4">
              Facts & Figures
            </Eyebrow>
            <RevealLines lines={['From five students', 'to a living', <em key="c" className="text-brass-soft">community.</em>]} className="display mt-6 text-[clamp(2.5rem,5vw,4.75rem)]" />
          </div>

          {/* Layered photographs, each drifting at its own depth */}
          <div className="relative h-[420px] md:h-[560px] lg:col-span-7">
            <div data-reveal="mask" className="absolute right-0 top-0 h-[78%] w-[68%] overflow-hidden rounded-2xl">
              <div data-parallax="0.1" className="absolute inset-[-8%_0]">
                <Photo src="/img/slider/slider-2.jpg" alt="The whole Gurukula family — students, teachers and parents — gathered together for a group photograph." sizes="40vw" className="h-full w-full object-cover" />
              </div>
            </div>
            <div data-reveal="mask" style={{ ['--d' as string]: '0.25s' }} className="absolute bottom-0 left-0 h-[55%] w-[46%] overflow-hidden rounded-2xl border-[6px] border-slate">
              <div data-parallax="0.28" className="absolute inset-[-12%_0]">
                <Photo src="/img/campus/sports-ground/sports.jpg" alt="Students in white dhotis exercising together in rows on the sports ground." sizes="30vw" widths={[400, 800]} width={700} className="h-full w-full object-cover" />
              </div>
            </div>
            <div data-reveal="mask" style={{ ['--d' as string]: '0.4s' }} className="absolute bottom-[8%] right-[6%] h-[30%] w-[26%] overflow-hidden rounded-2xl border-[6px] border-slate">
              <Photo src="/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg" alt="A cow adorned with a marigold garland at the Gurukula goshala." sizes="20vw" widths={[300, 600]} width={400} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <dl className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-pearl/10 md:grid-cols-3">
          {facts.map((f, i) => (
            <div key={f.title} data-reveal style={{ ['--d' as string]: `${i * 0.12}s` }} className="bg-slate p-8 md:p-10">
              <dt>
                <span className="display block text-[clamp(3.5rem,6vw,5.5rem)] text-brass-soft">{f.figure}</span>
                <span className="eyebrow mt-2 block text-pearl/60">{f.unit}</span>
                <span className="mt-6 block font-display text-2xl text-pearl">{f.title}</span>
              </dt>
              <dd className="mt-3 text-[0.95rem] leading-relaxed text-pearl/70">{f.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* Chapter 5 — The story continues (colour transition into Inspiration) */
function ChapterContinues() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ctx: { revert: () => void } | undefined
    let cancelled = false
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled || !ref.current) return
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { backgroundColor: '#e6dccb', color: '#123f43' },
          {
            backgroundColor: '#123f43',
            color: '#f5f0e7',
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top 75%', end: 'center center', scrub: true },
          },
        )
      }, ref)
    })
    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <section id="continues" ref={ref} className="relative overflow-hidden bg-teal py-32 text-pearl md:py-48">
      <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10">
        <p data-reveal className="font-display text-sm italic opacity-70">
          Chapter Five
        </p>
        <RevealLines
          lines={['The story continues', 'with the one who', <em key="i" className="text-brass">inspired it all.</em>]}
          className="display mx-auto mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]"
        />
        <p data-reveal className="mx-auto mt-10 max-w-xl text-lg leading-relaxed opacity-80">
          Our training is based on the teachings of ISKCON founder Acharya — His Divine Grace Abhayacharanaravinda Bhaktivedanta Swami Prabhupada.
        </p>
        <a href="#inspiration" data-reveal className="mt-12 inline-flex flex-col items-center gap-3 text-brass">
          <span className="eyebrow">Inspiration</span>
          <span className="relative block h-16 w-px overflow-hidden bg-brass/30">
            <span className="scroll-cue absolute inset-0 bg-brass" />
          </span>
        </a>
      </div>
    </section>
  )
}
