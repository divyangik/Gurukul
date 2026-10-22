import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ContactActions, Eyebrow, RevealLines } from '@/components/ui'
import { AfterHero, ServiceHero, StatBand } from '@/components/service-kit'
import { EduNext, EduSectionNav, HScrollGallery, Mandala, WordMarquee } from '@/components/education'
import { adultProgrammes, anubhuti, openDay, pilgrimagePlaces } from '@/content/education'

const yatraStops = [
  { img: '/img/education/pilgrimage.jpg', title: 'Sacred hill temples', text: 'Adventure treks to hill shrines of the Sahyadris — Bhor, Panhala and Bhuleshwar.', tag: 'Maharashtra' },
  { img: '/img/sports/dhavaleshwar-trek-3.jpg', title: 'On the yatra trail', text: 'Pandharpur, Dehu and Kolhapur — walking in the footsteps of the Varkari saints, with kirtan along the way.', tag: 'Saint traditions' },
  { img: '/img/festivals/deity-worship-2.jpg', title: 'ISKCON Juhu & NVCC', text: 'Temple darshan, seva and association with devotees in Mumbai and Pune.', tag: 'Temples' },
  { img: '/img/talentshow/drama3.jpg', title: 'Balaji Mahanatya Drama', text: 'A grand theatrical retelling of sacred history — culture brought alive on stage.', tag: 'Culture' },
  { img: '/img/inspiration/13.jpg', title: 'ISKCON Mayapur', text: 'The world headquarters of ISKCON in the birthplace of Sri Chaitanya Mahaprabhu.', tag: 'West Bengal' },
  { img: '/img/inspiration/12.jpg', title: 'Jagannath Puri Yatra', text: 'The ancient home of Lord Jagannath and the original Ratha Yatra festival.', tag: 'Odisha' },
]

export const Route = createFileRoute('/parent-teacher-leaders')({
  head: () => ({
    meta: [
      { title: 'Parents, Teachers & Leaders — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Anubhuti immersion, teacher training, parenting and homeschoolers’ course, leadership training, pilgrimages and the Annual Open Day at Bhaktivedanta Gurukula.' },
      { property: 'og:title', content: 'Parents, Teachers & Leaders — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Programmes for parents, teachers and leaders at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <ServiceHero
        slug="parent-teacher-leaders"
        index="03"
        crumb="Parents · Teachers · Leaders"
        parent={{ label: 'Education', to: '/education' }}
        wave="text-pearl"
        chips={['Parents', 'Teachers', 'Leaders']}
        title={['Those who', 'shape the young.']}
        intro="Children become what the adults around them are. Our programmes for parents, teachers and leaders bring gurukula principles into homes, classrooms and communities."
        image="/img/vedic-study/yajna-preparation.jpg"
        imageAlt="Teachers and students preparing for a yajna"
        position="center 35%"
      />
      <EduSectionNav />
      <AfterHero />

      {/* Anubhuti */}
      <section className="relative overflow-hidden bg-pearl py-20 md:py-28">
        <Mandala className="pointer-events-none absolute -right-56 top-10 h-[36rem] w-[36rem] text-brass/15" />
        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 md:grid-cols-[1.05fr_1fr] md:px-10">
          <div className="relative">
            <div data-reveal="mask" className="overflow-hidden rounded-3xl">
              <Photo src="/img/academic-study/academic-study-1.jpg" alt="Visitors observing a Gurukula classroom" ratio={1.1} widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
            </div>
            <div data-reveal="mask" style={{ ['--d' as string]: '0.3s' }} className="float-y absolute -bottom-10 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-pearl shadow-2xl md:block lg:-right-10 lg:w-64">
              <Photo src="/img/festivals/festival2.jpg" alt="" ratio={1.2} widths={[400, 700]} width={500} sizes="260px" className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <Eyebrow>Experiential Learning Programme</Eyebrow>
            <RevealLines lines={[anubhuti.title]} className="display mt-5 text-[clamp(3rem,7vw,6rem)] text-teal" />
            <p data-reveal className="mt-3 font-display text-2xl italic text-[#8a6f3c]">{anubhuti.tagline}</p>
            <div data-reveal className="prose-gk mt-6 text-muted">
              {anubhuti.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {anubhuti.highlights.map((h, i) => (
                <li key={h} data-reveal="scale" style={{ ['--d' as string]: `${i * 0.06}s` }} className="rounded-full border border-teal/20 bg-sand/60 px-4 py-2 text-sm font-semibold text-teal">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <StatBand dark items={[{ n: adultProgrammes.length, label: 'Courses & programmes' }, { n: yatraStops.length, label: 'Pilgrimage journeys' }, { n: pilgrimagePlaces.length, label: 'Holy places visited' }]} />

      {/* Programmes */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <Eyebrow>Courses & Training</Eyebrow>
              <RevealLines lines={['Learn to raise,', <em key="t" className="text-[#8a6f3c]">teach and lead.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              Practical, experience-based courses grounded in Vedic wisdom and modern pedagogy — delivered on campus and, soon, online.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {adultProgrammes.map((p, i) => (
              <article
                key={p.title}
                data-reveal="scale"
                style={{ ['--d' as string]: `${(i % 2) * 0.1}s` }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-pearl shadow-[0_30px_60px_-45px_rgba(12,46,49,0.6)]"
              >
                <div className="relative overflow-hidden">
                  <Photo src={p.img} alt="" ratio={0.56} widths={[480, 800, 1200]} width={900} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-105" />
                  <span className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest ${p.audience === 'Coming soon' ? 'bg-brass text-teal-deep' : 'bg-pearl/90 text-teal'}`}>
                    {p.audience}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="font-display text-3xl font-medium text-teal">{p.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pilgrimages — pinned horizontal scroll */}
      <HScrollGallery eyebrow="Spiritual Pilgrimage" title={['Journeys to', <em key="h" className="text-brass-soft">holy places.</em>]} items={yatraStops} />

      <section className="overflow-hidden bg-teal py-8">
        <WordMarquee words={pilgrimagePlaces} light speed={65} />
      </section>

      {/* Open day */}
      <section className="relative isolate overflow-hidden bg-slate text-pearl">
        <div className="absolute inset-0 -z-10">
          <div data-parallax="0.15" className="absolute inset-[-10%_0]">
            <Photo src={openDay.img} alt="" widths={[640, 1024, 1600, 2200]} width={1600} className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/85 to-teal-deep/20" />
        </div>
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
          <div className="max-w-xl">
            <Eyebrow light>
              <CalendarDays className="h-4 w-4" aria-hidden /> Once a year
            </Eyebrow>
            <RevealLines lines={[openDay.title]} className="display mt-5 text-[clamp(2.75rem,6vw,5rem)]" />
            <p data-reveal className="mt-6 leading-relaxed text-pearl/80">{openDay.text}</p>
            <a data-reveal href="#contact" className="btn btn-brass mt-8">
              Get the next date <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-[1fr_1.2fr] md:items-center md:px-10">
          <div>
            <Eyebrow>Register Interest</Eyebrow>
            <RevealLines lines={['Join the next', 'batch.']} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-md leading-relaxed text-muted">
              Tell us which programme you are interested in — Anubhuti, teacher training, parenting, leadership or the Open Day — and we'll share dates and details.
            </p>
          </div>
          <ContactActions />
        </div>
      </section>

      <EduNext current="/parent-teacher-leaders" />
    </>
  )
}