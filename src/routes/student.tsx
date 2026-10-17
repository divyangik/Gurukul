import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { AdmissionsCTA, Eyebrow, GalleryTile, PageHero, RevealLines, useLightbox } from '@/components/ui'
import { EduNext, EduSectionNav, Mandala, PhotoMarquee, StatBand } from '@/components/education'
import { shikshaStages, studentGallery, trainingTypes } from '@/content/education'

export const Route = createFileRoute('/student')({
  head: () => ({
    meta: [
      { title: 'Students — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'The five Shiksha stages and five streams of training that shape every student at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Students — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'The five Shiksha stages and five streams of training at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  const { open, node } = useLightbox(studentGallery)
  return (
    <>
      <PageHero
        eyebrow="Education · Students"
        title={['Growing,', 'stage by stage.']}
        intro="A gurukula education is a journey of the whole person. Five Shiksha stages mark how a student matures — in practice, character, learning and service."
        image="/img/academic-study/academic-study.jpg"
        imageAlt="Gurukula students studying with their teacher"
        position="center 40%"
      />
      <EduSectionNav />

      <StageJourney />

      {/* Training streams — stacking cards */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div className="md:sticky md:top-40 md:self-start">
              <Eyebrow>Types of Training</Eyebrow>
              <RevealLines lines={['Five streams,', <em key="o" className="text-[#8a6f3c]">one river.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
              <p data-reveal className="mt-6 max-w-md leading-relaxed text-muted">
                Spiritual practice, Vedic learning, life skills, academics and social resilience are not separate subjects here — they flow through every day.
              </p>
            </div>
            <div className="space-y-6">
              {trainingTypes.map((t, i) => (
                <article
                  key={t.title}
                  className="stack-card grid overflow-hidden rounded-3xl border border-teal/10 bg-pearl shadow-[0_30px_60px_-40px_rgba(12,46,49,0.5)] sm:grid-cols-[0.9fr_1.1fr]"
                  style={{ ['--i' as string]: i }}
                >
                  <div className="relative min-h-56 overflow-hidden">
                    <Photo src={t.img} alt="" ratio={0.85} widths={[400, 700, 1000]} width={700} sizes="(min-width: 768px) 25vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="p-7 md:p-9">
                    <span className="font-display text-5xl text-brass/50">{i + 1}</span>
                    <h3 className="mt-2 font-display text-2xl font-medium text-teal md:text-3xl">{t.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{t.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-pearl py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <StatBand
            stats={[
              { n: 16, label: 'Rounds of japa at maturity' },
              { n: 14, label: 'Books of Vedic knowledge' },
              { n: 64, label: 'Arts to choose from' },
              { n: 5, label: 'Acre residential campus' },
            ]}
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-pearl pb-20 md:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <Eyebrow>Student Life</Eyebrow>
              <RevealLines lines={['A day full,', <em key="f" className="text-[#8a6f3c]">never frantic.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              Classes, kirtan, sports, drama, treks and service — tap any photo to see it larger.
            </p>
          </div>
          <div className="mt-12 grid auto-rows-[12rem] grid-cols-2 gap-4 md:auto-rows-[15rem] md:grid-cols-4">
            {studentGallery.map((img, i) => (
              <GalleryTile
                key={img.src}
                image={img}
                onOpen={() => open(i)}
                delay={(i % 4) * 0.07}
                className={i === 0 ? 'col-span-2 row-span-2' : i === 5 ? 'col-span-2' : ''}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-teal-deep py-10" aria-hidden>
        <PhotoMarquee
          speed={80}
          images={[
            { src: '/img/festivals/deity-worship-5.jpg', alt: '' },
            { src: '/img/talentshow/drama2.jpg', alt: '' },
            { src: '/img/sports/dhavaleshwar-trek-1.jpg', alt: '' },
            { src: '/img/academic-study/academic-study-2.jpg', alt: '' },
            { src: '/img/festivals/festival2.jpg', alt: '' },
            { src: '/img/vedic-study/yajna-preparation.jpg', alt: '' },
          ]}
        />
      </section>

      <AdmissionsCTA title={['Begin the', 'journey here.']} />
      <EduNext current="/student" />
      {node}
    </>
  )
}

/* ── Interactive Shiksha stage ladder ──────────────────────── */

function StageJourney() {
  const [active, setActive] = useState(0)
  const stage = shikshaStages[active]
  const progress = (active / (shikshaStages.length - 1)) * 100

  return (
    <section className="grain jali relative overflow-hidden bg-teal py-20 text-pearl md:py-28">
      <Mandala className="pointer-events-none absolute -left-60 bottom-[-18rem] h-[40rem] w-[40rem] text-brass/15" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <Eyebrow light>Shiksha Stages</Eyebrow>
            <RevealLines lines={['Five stages of', <em key="g" className="text-brass-soft">a gurukula life.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)]" />
          </div>
          <p data-reveal className="max-w-xl leading-relaxed text-pearl/70 md:justify-self-end">
            Each stage describes who the student is becoming — not just what they know. Select a stage to see what is expected.
          </p>
        </div>

        {/* Ladder */}
        <div className="relative mt-14" role="tablist" aria-label="Shiksha stages">
          <div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-pearl/15 md:block" aria-hidden />
          <div className="stage-fill absolute left-[10%] top-9 hidden h-px bg-brass md:block" style={{ width: `${progress * 0.8}%` }} aria-hidden />
          <div className="rail flex gap-3 overflow-x-auto md:grid md:grid-cols-5 md:gap-0 md:overflow-visible">
            {shikshaStages.map((s, i) => {
              const on = i === active
              const done = i < active
              return (
                <button
                  key={s.name}
                  type="button"
                  role="tab"
                  id={`stage-tab-${i}`}
                  aria-selected={on}
                  aria-controls="stage-panel"
                  onClick={() => setActive(i)}
                  className={`group relative flex min-w-[11rem] shrink-0 flex-col items-start rounded-2xl p-3 text-left transition-colors md:min-w-0 md:items-center md:text-center ${on ? 'bg-pearl/5 md:bg-transparent' : ''}`}
                >
                  <span
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border font-display text-xl transition-all duration-700 ease-[var(--ease-silk)] ${
                      on ? 'scale-110 border-brass bg-brass text-teal-deep shadow-[0_0_0_8px_rgba(183,154,97,0.15)]' : done ? 'border-brass bg-teal text-brass' : 'border-pearl/30 bg-teal text-pearl/70 group-hover:border-brass'
                    }`}
                  >
                    {done ? <Check className="h-5 w-5" aria-hidden /> : i + 1}
                  </span>
                  <span className={`mt-4 font-display text-2xl transition-colors ${on ? 'text-pearl' : 'text-pearl/60 group-hover:text-pearl'}`}>{s.name}</span>
                  <span className="eyebrow mt-1 !text-[0.6rem] text-brass">{s.subtitle}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Panel */}
        <div id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${active}`} className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div key={`img-${active}`} className="relative overflow-hidden rounded-3xl" style={{ animation: 'fade-up 0.9s var(--ease-silk)' }}>
            <Photo src={stage.img} alt={`${stage.name} stage`} ratio={0.85} widths={[640, 1024]} width={900} sizes="(min-width: 768px) 40vw, 100vw" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="eyebrow text-brass">
                Stage {active + 1} of {shikshaStages.length}
              </p>
              <p className="mt-2 font-display text-4xl">{stage.name}</p>
            </div>
          </div>
          <div key={`txt-${active}`} style={{ animation: 'fade-up 0.9s var(--ease-silk) 0.1s both' }}>
            <p className="font-display text-2xl leading-snug text-brass-soft md:text-3xl">{stage.summary}</p>
            <p className="eyebrow mt-8 text-pearl/60">At this stage, the student</p>
            <ul className="mt-4 divide-y divide-pearl/10 border-y border-pearl/10">
              {stage.outcomes.map((o) => (
                <li key={o} className="flex gap-4 py-3.5 text-pearl/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" aria-hidden />
                  <span className="leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <button type="button" disabled={active === 0} onClick={() => setActive(active - 1)} className="btn btn-ghost-light disabled:pointer-events-none disabled:opacity-30">
                Previous
              </button>
              <button type="button" disabled={active === shikshaStages.length - 1} onClick={() => setActive(active + 1)} className="btn btn-brass disabled:pointer-events-none disabled:opacity-30">
                Next stage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
