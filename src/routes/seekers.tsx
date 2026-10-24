import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ContactActions, Eyebrow, GalleryTile, NumberedList, RevealLines, YouTube, useLightbox, type GalleryImage } from '@/components/ui'
import { AfterHero, Petals, ServiceHero, StatBand } from '@/components/service-kit'
import { EduNext, EduSectionNav, WordMarquee } from '@/components/education'
import { pilgrimagePlaces, seekerPaths, videos } from '@/content/education'

const firstSteps = [
  'Visit the campus — walk around, meet the students, ask anything',
  'Attend a Sunday programme or festival at the temple',
  'Join a weekend workshop or a short residential camp',
  'Take a foundation course on the Bhagavad-gita',
  'Stay in touch through our videos, podcasts and blog',
]

const campImages: GalleryImage[] = [
  { src: '/img/sports/dhavaleshwar-trek.jpg', alt: 'Campers climbing towards the Dhavaleshwar temple' },
  { src: '/img/sports/yoga.jpg', alt: 'Morning yoga during a residential camp' },
  { src: '/img/festivals/festival2.jpg', alt: 'Evening kirtan with the Gurukula community' },
  { src: '/img/sports/dhavaleshwar-trek-2.jpg', alt: 'Trekking along the Sahyadri ridge' },
]

const seekerVideos = videos.filter((v) => v.tag === 'Seekers')

export const Route = createFileRoute('/seekers')({
  head: () => ({
    meta: [
      { title: 'For Seekers — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Spirituality for the modern age — talks, spiritual pilgrimages and residential camps at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'For Seekers — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Spirituality for the modern age — talks, spiritual pilgrimages and residential camps at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  const { open, node } = useLightbox(campImages)
  return (
    <>
      <ServiceHero
        slug="seekers"
        index="01"
        crumb="Seekers"
        parent={{ label: 'Education', to: '/education' }}
        wave="text-pearl"
        chips={['Talks', 'Pilgrimages', 'Camps']}
        title={['Every journey', 'begins with a question.']}
        intro="Whether you are curious about the Bhagavad-gita, searching for purpose, or simply drawn to a more meaningful way of life — there is a door open for you here."
        image="/img/festivals/jhulan-1.jpg"
        imageAlt="Jhulan Yatra festival celebration at the Gurukula"
        position="center 30%"
      />
      <EduSectionNav />
      <AfterHero />

      {/* Where to begin — three paths along one journey line */}
      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Petals />
        <div className="drift pointer-events-none absolute -left-40 top-10 -z-10 h-[460px] w-[460px] rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>Where to Begin</Eyebrow>
            <RevealLines lines={['Pathways for', <em key="s" className="text-brass-soft">the seeking heart.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-pearl" />
            <span data-reveal="rule" className="mx-auto mt-6 block h-px w-24 bg-brass" aria-hidden />
            <p data-reveal className="mx-auto mt-6 max-w-xl leading-relaxed text-pearl/72">
              You don't need any background or belief to begin. Start with a talk, a pilgrimage or a camp — and let experience do the convincing.
            </p>
          </div>

          <ol className="relative mt-16 grid gap-10 lg:grid-cols-3 lg:gap-7">
            {/* the journey line, drawn behind the step markers */}
            <span className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-6 hidden h-px bg-gradient-to-r from-transparent via-brass/60 to-transparent lg:block" aria-hidden />
            {seekerPaths.map((p, i) => (
              <li key={p.title} data-reveal="scale" style={{ ['--d' as string]: `${i * 0.12}s` }} className="relative flex flex-col items-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brass bg-teal-deep font-display text-xl text-brass shadow-[0_0_0_8px_rgba(12,46,49,1)]">
                  {i + 1}
                </span>
                <Link to={p.to} className="group relative mt-6 block aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-brass/25 bg-slate shadow-[0_40px_70px_-40px_rgba(0,0,0,0.85)] transition-all duration-700 ease-[var(--ease-silk)] hover:-translate-y-2 hover:border-brass">
                  <Photo src={p.img} alt="" widths={[640, 1024]} width={900} sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-[1.07]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/85 to-teal-deep/10" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <span className="mb-4 block h-px w-10 bg-brass transition-all duration-700 group-hover:w-24" aria-hidden />
                    <h3 className="font-display text-[1.9rem] leading-tight text-pearl">{p.title}</h3>
                    <p className="mt-3 line-clamp-5 text-[0.95rem] leading-relaxed text-pearl/78">{p.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brass-soft">
                      {p.cta} <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <StatBand items={[{ n: seekerPaths.length, label: 'Pathways to begin' }, { n: pilgrimagePlaces.length, label: 'Pilgrimage places' }, { n: firstSteps.length, label: 'First steps' }]} />

      {/* Talks */}
      <section className="grain relative isolate overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Petals />
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow light>Spirituality for the Modern Age</Eyebrow>
          <RevealLines lines={['Listen first,', <em key="l" className="text-brass-soft">then decide.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)]" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {seekerVideos.map((v, i) => (
              <div key={v.id} data-reveal="blur" style={{ ['--d' as string]: `${i * 0.12}s` }}>
                <YouTube id={v.id} title={v.title} />
                <p className="mt-4 max-w-lg text-pearl/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilgrimage marquee */}
      <section className="relative overflow-hidden bg-sand py-16 md:py-20">
        <div className="mx-auto mb-8 max-w-[1440px] px-5 md:px-10">
          <Eyebrow>Spiritual Pilgrimages · Places Visited</Eyebrow>
        </div>
        <WordMarquee words={pilgrimagePlaces} speed={70} />
      </section>

      {/* Residential camps */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <Eyebrow>Residential Camps</Eyebrow>
              <RevealLines lines={['A night in', <em key="n" className="text-[#8a6f3c]">the Sahyadris.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              An immersive overnight experience in the idyllic Sahyadri mountains of Maharashtra and the Gurukula culture. Learn the process of education, culture building and spiritual nourishment — and receive a home kit for effective homeschooling back at your place.
            </p>
          </div>
          <div className="mt-12 grid auto-rows-[14rem] gap-4 md:grid-cols-4 md:auto-rows-[16rem]">
            {campImages.map((img, i) => (
              <GalleryTile
                key={img.src}
                image={img}
                onOpen={() => open(i)}
                delay={i * 0.08}
                className={i === 0 ? 'md:col-span-2 md:row-span-2' : i === 3 ? 'md:col-span-2' : ''}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* First steps */}
      <section className="grain relative isolate overflow-hidden bg-slate py-20 text-pearl md:py-28">
        <Petals />
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-2 md:px-10">
          <div>
            <Eyebrow light>Five First Steps</Eyebrow>
            <RevealLines lines={['Start small,', <em key="b" className="text-brass-soft">start today.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)]" />
            <div className="mt-10">
              <NumberedList items={firstSteps} dark columns={1} />
            </div>
          </div>
          <div data-tilt="6" className="tilt">
            <div data-reveal="mask" className="overflow-hidden rounded-3xl">
              <Photo src="/img/daily-schedule/temple-sankirtan.jpg" alt="Morning sankirtan at the Gurukula temple" ratio={1.2} widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <RevealLines lines={['Not sure where', 'to start?']} className="display text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
          <p data-reveal className="mt-6 max-w-xl leading-relaxed text-muted">
            Write to us or send a WhatsApp message — tell us a little about yourself and we'll suggest the right first step.
          </p>
          <div className="mt-8">
            <ContactActions label="Talk to us" />
          </div>
        </div>
      </section>

      <EduNext current="/seekers" />
      {node}
    </>
  )
}