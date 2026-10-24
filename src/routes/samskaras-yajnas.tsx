import { createFileRoute } from '@tanstack/react-router'
import { Flame, Music2, Flower2 } from 'lucide-react'
import { ChipCloud, Mandala, MoreServices, useScrollProgress } from '@/components/services'
import { ContactActions } from '@/components/ui'
import { AfterHero, ClosingCTA, FeatureCard, PhotoDuo, Petals, SectionHead, ServiceEmblem, ServiceHero, StatBand, Wave, ServiceSectionNav } from '@/components/service-kit'
import { communityService, sacredServices, samskaras, serviceHead } from '@/content/services'

export const Route = createFileRoute('/samskaras-yajnas')({
  head: () => serviceHead('Samskaras, Yajnas & Pujas', 'Harinam sankirtan, śrāddha, yajna-puja vidhi and the Vedic samskaras, performed by Bhaktivedanta Gurukula at your home, office or event.', '/samskaras-yajnas'),
  component: Page,
})

const icons = [Music2, Flower2, Flame]

function Page() {
  const path = useScrollProgress<HTMLOListElement>()
  return (
    <>
      <ServiceHero
        slug="samskaras-yajnas"
        index="06"
        crumb="Samskaras, Yajnas & Pujas"
        title={['Samskaras,', 'Yajnas & Pujas']}
        intro="Sacred rites that mark the great moments of life, and the congregational chanting that sanctifies a home, an office or an event."
        image="/img/vedic-study/yajna-3.jpg"
        imageAlt="A yajna at the Gurukula"
        position="center 40%"
        chips={['Families', 'Offices', 'Events']}
      />
      <ServiceSectionNav />
      <AfterHero />

      <section className="relative overflow-hidden bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto max-w-[1440px] px-5 pt-6 md:px-10">
          <SectionHead eyebrow="We come to you" lines={['Three sacred', <em key="s" className="text-[#8a6f3c]">services.</em>]} big />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {sacredServices.map((s, i) => (
              <FeatureCard key={s.title} n={i + 1} icon={icons[i]} title={s.title} text={s.text} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <StatBand items={[{ n: 14, label: 'Vedic samskaras' }, { n: 3, label: 'Sacred services' }, { n: 5, label: 'Community services' }]} />

      {/* Fourteen samskaras — a path of life that lights up as you scroll */}
      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-24 text-pearl md:py-32">
        <Petals />
        <Mandala className="pointer-events-none absolute -right-48 top-24 h-[640px] w-[640px] opacity-[0.18]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[1fr_1.5fr] md:px-10">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionHead light eyebrow="The Vedic Samskaras" lines={['Fourteen rites,', <em key="j" className="text-brass">one life.</em>]} big intro="From conception to the last rites, and the remembrance of ancestors — each samskara sanctifies a turning point." />
            <div className="sv-emblem-float relative mt-10 hidden w-44 md:block" aria-hidden>
              <div className="sv-halo absolute -inset-8 rounded-full" />
              <ServiceEmblem slug="samskaras-yajnas" className="relative h-auto w-full" />
            </div>
          </div>

          <ol ref={path} className="relative">
            <span aria-hidden className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-pearl/15" />
            <span aria-hidden className="tl-fill absolute bottom-4 left-[1.15rem] top-4 w-px origin-top bg-brass" />
            {samskaras.map((s, i) => (
              <li key={s.name} data-reveal="left" className="group relative flex items-center gap-6 py-4">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brass/60 bg-teal-deep text-xs font-bold text-brass transition-all duration-500 group-hover:scale-110 group-hover:bg-brass group-hover:text-teal-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-pearl/10 pb-4 transition-transform duration-500 ease-[var(--ease-silk)] group-hover:translate-x-2">
                  <h3 className="display text-[1.75rem] leading-none text-pearl md:text-[2.1rem]">{s.name}</h3>
                  <p className="text-sm text-pearl/65">{s.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 pt-6 md:px-10 lg:grid-cols-2">
          <PhotoDuo a={{ src: '/img/vedic-study/yajna-preparation.jpg', alt: 'Students preparing offerings for a yajna' }} b={{ src: '/img/vedic-study/yajna-3.jpg', alt: 'A yajna in progress' }} slug="samskaras-yajnas" />
          <div>
            <SectionHead eyebrow="Community service" lines={['Service beyond', <em key="s" className="text-[#8a6f3c]">the campus.</em>]} big />
            <div className="mt-8">
              <ChipCloud items={communityService} />
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA eyebrow="Invite us" lines={['Sanctify your', <em key="m" className="text-[#8a6f3c]">moment.</em>]} text="Call us to your home, office or event.">
        <ContactActions label="Call us to your home, office or event" />
      </ClosingCTA>

      <MoreServices current="samskaras-yajnas" />
    </>
  )
}