import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ContactActions, Eyebrow, GalleryTile, NumberedList, PageHero, RevealLines, YouTube, useLightbox, type GalleryImage } from '@/components/ui'
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
      <PageHero
        eyebrow="Education · For Seekers"
        title={['Every journey', 'begins with a question.']}
        intro="Whether you are curious about the Bhagavad-gita, searching for purpose, or simply drawn to a more meaningful way of life — there is a door open for you here."
        image="/img/festivals/jhulan-1.jpg"
        imageAlt="Jhulan Yatra festival celebration at the Gurukula"
        position="center 30%"
      />
      <EduSectionNav />

      {/* Three pathways — alternating editorial rows */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <Eyebrow>Where to Begin</Eyebrow>
              <RevealLines lines={['Pathways for', <em key="s" className="text-[#8a6f3c]">the seeking heart.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              You don't need any background or belief to begin. Start with a talk, a pilgrimage or a camp — and let experience do the convincing.
            </p>
          </div>

          <div className="mt-16 space-y-20 md:space-y-28">
            {seekerPaths.map((p, i) => {
              const flip = i % 2 === 1
              return (
                <article key={p.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <div data-reveal="mask" className={`relative overflow-hidden rounded-3xl ${flip ? 'md:order-2' : ''}`}>
                    <div data-parallax="0.1" className="absolute inset-[-6%_0]">
                      <Photo src={p.img} alt="" widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
                    </div>
                    <div className="aspect-[5/4]" />
                  </div>
                  <div className={flip ? 'md:order-1' : ''}>
                    <span data-reveal className="block font-display text-[5rem] leading-none text-brass/40">{String(i + 1).padStart(2, '0')}</span>
                    <RevealLines as="h3" lines={[p.title]} className="display mt-2 text-[clamp(2rem,3.6vw,3rem)] text-teal" />
                    <p data-reveal className="mt-5 max-w-lg leading-relaxed text-muted">{p.text}</p>
                    <Link data-reveal to={p.to} className="btn btn-ghost-dark mt-8">
                      {p.cta} <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className="grain relative bg-teal-deep py-20 text-pearl md:py-28">
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
      <section className="grain relative bg-slate py-20 text-pearl md:py-28">
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
