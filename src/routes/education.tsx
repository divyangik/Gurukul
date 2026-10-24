import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { AdmissionsCTA, Eyebrow, RevealLines } from '@/components/ui'
import { AfterHero, Petals, ServiceHero } from '@/components/service-kit'
import { EduSectionNav, Mandala, PhotoMarquee, StatBand, WordMarquee } from '@/components/education'
import { educationPages, studentGallery } from '@/content/education'

const pillars = ['Sadhana', 'Seva', 'Sastra', 'Samskara', 'Sanga', 'Sadachara']

export const Route = createFileRoute('/education')({
  head: () => ({
    meta: [
      { title: 'Education — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Pathways for seekers, students, parents, teachers and leaders — plus stories, videos and podcasts from Bhaktivedanta Education.' },
      { property: 'og:title', content: 'Education — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Pathways for seekers, students, parents, teachers and leaders at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      {/* Hero — photo collage with turning mandala */}
      <ServiceHero
        slug="education"
        index="06"
        crumb="Overview"
        parent={{ label: 'Education', to: '/education' }}
        wave="text-pearl"
        title={['Education for', 'the whole person.']}
        intro="Six doors into one tradition. Whether you are searching, studying, raising a child or leading others — there is a pathway shaped for you."
        image="/img/academic-study/academic-study-1.jpg"
        imageAlt="Students studying at the Gurukula"
        position="center 40%"
        chips={['Seekers', 'Students', 'Parents', 'Teachers', 'Leaders']}
      >
        <div className="flex flex-wrap gap-3">
          <a href="#pathways" className="btn btn-brass">
            Explore pathways <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
          </a>
          <Link to="/videos" className="btn btn-ghost-light">
            Watch a talk
          </Link>
        </div>
      </ServiceHero>

      <EduSectionNav />
      <AfterHero />

      {/* Pathways */}
      <section id="pathways" className="relative isolate overflow-hidden bg-pearl py-20 md:py-28">
        <Mandala className="pointer-events-none absolute -left-64 top-24 -z-10 h-[40rem] w-[40rem] text-brass/15" />
        <div className="drift pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Six Pathways</Eyebrow>
            <RevealLines lines={['Where would you', <em key="b" className="text-[#8a6f3c]">like to begin?</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <span data-reveal="rule" className="mx-auto mt-6 block h-px w-24 bg-brass" aria-hidden />
            <p data-reveal className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
              Each pathway draws on the same roots — the teachings of Srila Prabhupada and the gurukula way of life — and meets you where you are.
            </p>
          </div>

          <ul className="mt-16 grid items-start gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {educationPages.map((p, i) => (
              <li key={p.to} data-reveal="scale" style={{ ['--d' as string]: `${(i % 3) * 0.1}s` }} className={i % 3 === 1 ? 'lg:mt-12' : ''}>
                <Link
                  to={p.to}
                  className="group relative block rounded-[2rem] border border-teal/10 bg-[#fbf8f2] p-3 shadow-[0_30px_60px_-45px_rgba(12,46,49,0.55)] transition-all duration-700 ease-[var(--ease-silk)] hover:-translate-y-2 hover:border-brass hover:shadow-[0_40px_70px_-40px_rgba(12,46,49,0.65)]"
                >
                  <div className="relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate">
                      <Photo src={p.img} alt="" widths={[480, 800, 1200]} width={900} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-[1.08]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/70 via-transparent to-teal-deep/10" aria-hidden />
                      <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-pearl/90 font-display text-lg text-teal backdrop-blur">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="absolute bottom-4 left-4 rounded-full border border-pearl/40 bg-teal-deep/45 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-pearl backdrop-blur-md">
                        {p.tag}
                      </span>
                    </div>
                    <span className="absolute -bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#fbf8f2] bg-brass text-teal-deep shadow-lg transition-all duration-500 group-hover:rotate-45 group-hover:bg-teal group-hover:text-pearl" aria-hidden>
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="px-4 pb-4 pt-9 md:px-5">
                    <h3 className="font-display text-[1.9rem] font-medium leading-tight text-teal">{p.label}</h3>
                    <span className="mt-3 block h-px w-12 bg-brass transition-all duration-700 group-hover:w-24" aria-hidden />
                    <p className="mt-4 leading-relaxed text-muted">{p.text}</p>
                    <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#8a6f3c]">Explore pathway</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Six S pillars marquee */}
      <section className="overflow-hidden border-y border-teal/10 bg-sand py-6">
        <WordMarquee words={pillars} />
      </section>

      {/* Values + stats */}
      <section className="grain relative isolate overflow-hidden bg-slate py-20 text-pearl md:py-28">
        <Petals />
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div data-reveal="mask" className="overflow-hidden rounded-3xl">
              <Photo src="/img/education/scripture-study.jpg" alt="A student turning the pages of a Sanskrit manuscript" ratio={0.8} widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
            </div>
            <div>
              <Eyebrow light>Our Approach</Eyebrow>
              <RevealLines lines={['Timeless roots,', <em key="m" className="text-brass-soft">modern reach.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)]" />
              <div data-reveal className="prose-gk mt-6 max-w-lg text-pearl/75">
                <p>
                  The Bhagavad-gita calls skill in action <em>yogaḥ karmasu kauśalam</em>. Our education aims at exactly that: competence and devotion growing together, so that a person can lead and inspire others.
                </p>
                <p>Modern pedagogy meets Vedic wisdom across five streams of training — spiritual, Vedic, life skills, academics and social resilience.</p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <StatBand
              dark
              stats={[
                { n: 2017, label: 'Founded in Pune' },
                { n: 5, label: 'Shiksha stages' },
                { n: 64, label: 'Traditional arts' },
                { n: 14, suffix: '+', label: 'Pilgrimage places' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Photo marquees */}
      <section className="space-y-4 overflow-hidden bg-pearl py-20 md:py-24" aria-label="Life at the Gurukula in pictures">
        <PhotoMarquee images={studentGallery} />
        <PhotoMarquee
          reverse
          speed={70}
          images={[
            { src: '/img/festivals/deity-worship-2.jpg', alt: 'Temple worship' },
            { src: '/img/sports/dhavaleshwar-trek-1.jpg', alt: 'Trekking' },
            { src: '/img/education/pilgrimage.jpg', alt: 'Pilgrimage illustration' },
            { src: '/img/talentshow/drama3.jpg', alt: 'Student drama' },
            { src: '/img/vedic-study/yajna-3.jpg', alt: 'Yajna' },
            { src: '/img/slider/slider-2.jpg', alt: 'Campus life' },
          ]}
        />
      </section>

      <AdmissionsCTA title={['See the learning', 'for yourself.']} />
    </>
  )
}