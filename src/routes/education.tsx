import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { AdmissionsCTA, Eyebrow, RevealLines } from '@/components/ui'
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
      <section className="grain jali relative isolate overflow-hidden bg-teal text-pearl">
        <Mandala className="pointer-events-none absolute -right-48 -top-48 -z-10 h-[46rem] w-[46rem] text-brass/20" />
        <div className="mx-auto grid min-h-[92svh] max-w-[1440px] items-center gap-12 px-5 pb-20 pt-36 md:grid-cols-[1.1fr_1fr] md:px-10">
          <div>
            <Eyebrow light>Bhaktivedanta Education</Eyebrow>
            <RevealLines as="h1" lines={['Education for', <em key="e" className="text-brass-soft">the whole person.</em>]} className="display mt-6 text-[clamp(2.9rem,7vw,6.5rem)]" />
            <p data-reveal style={{ ['--d' as string]: '0.3s' }} className="mt-8 max-w-xl text-lg leading-relaxed text-pearl/80">
              Six doors into one tradition. Whether you are searching, studying, raising a child or leading others — there is a pathway shaped for you.
            </p>
            <div data-reveal style={{ ['--d' as string]: '0.45s' }} className="mt-10 flex flex-wrap gap-3">
              <a href="#pathways" className="btn btn-brass">
                Explore pathways <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
              </a>
              <Link to="/videos" className="btn btn-ghost-light">
                Watch a talk
              </Link>
            </div>
          </div>
          <div className="relative hidden h-[34rem] md:block" aria-hidden>
            <div data-reveal="mask" className="float-y absolute left-0 top-6 h-72 w-56 overflow-hidden rounded-[2rem] shadow-2xl" style={{ ['--d' as string]: '0.1s' }}>
              <Photo src="/img/academic-study/academic-study.jpg" alt="" ratio={1.3} widths={[400, 700]} width={500} sizes="240px" className="h-full w-full object-cover" />
            </div>
            <div data-reveal="mask" className="float-y absolute right-0 top-0 h-80 w-64 overflow-hidden rounded-[2rem] shadow-2xl" style={{ ['--d' as string]: '0.25s' }}>
              <Photo src="/img/festivals/jhulan-1.jpg" alt="" ratio={1.25} widths={[400, 700]} width={500} sizes="260px" className="h-full w-full object-cover" />
            </div>
            <div data-reveal="mask" className="float-y absolute bottom-0 left-24 h-64 w-72 overflow-hidden rounded-[2rem] shadow-2xl" style={{ ['--d' as string]: '0.4s' }}>
              <Photo src="/img/education/teacher-training.jpg" alt="" ratio={0.9} widths={[400, 700]} width={600} sizes="300px" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <EduSectionNav />

      {/* Pathways */}
      <section id="pathways" className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <Eyebrow>Six Pathways</Eyebrow>
              <RevealLines lines={['Where would you', <em key="b" className="text-[#8a6f3c]">like to begin?</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              Each pathway draws on the same roots — the teachings of Srila Prabhupada and the gurukula way of life — and meets you where you are.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-6">
            {educationPages.map((p, i) => {
              const span = i === 0 || i === 1 ? 'md:col-span-3' : 'md:col-span-2'
              return (
                <Link
                  key={p.to}
                  to={p.to}
                  data-reveal="scale"
                  style={{ ['--d' as string]: `${(i % 3) * 0.08}s` }}
                  className={`group relative isolate block min-h-[22rem] overflow-hidden rounded-3xl bg-slate text-pearl ${span} ${i < 2 ? 'md:min-h-[30rem]' : ''}`}
                >
                  <Photo src={p.img} alt="" widths={[480, 800, 1200]} width={900} sizes="(min-width: 768px) 50vw, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-[1.07]" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-deep via-teal-deep/45 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                  <div className="flex h-full flex-col justify-end p-7 md:p-9">
                    <span className="font-display text-base text-brass">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2 font-display text-3xl leading-tight md:text-4xl">{p.label}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-pearl/75 md:text-base">{p.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brass-soft">
                      Explore <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Six S pillars marquee */}
      <section className="overflow-hidden border-y border-teal/10 bg-sand py-6">
        <WordMarquee words={pillars} />
      </section>

      {/* Values + stats */}
      <section className="grain relative bg-slate py-20 text-pearl md:py-28">
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