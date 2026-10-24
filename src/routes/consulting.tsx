import { createFileRoute } from '@tanstack/react-router'
import { MoreServices, ProcessTimeline } from '@/components/services'
import { ChipCloud } from '@/components/services'
import { ContactActions, NumberedList } from '@/components/ui'
import { AfterHero, ClosingCTA, PhotoDuo, Petals, SectionHead, ServiceEmblem, ServiceHero, StatBand, Wave, ServiceSectionNav } from '@/components/service-kit'
import { consultingProjects, holisticServices, partnerSteps, serviceHead } from '@/content/services'

export const Route = createFileRoute('/consulting')({
  head: () => serviceHead('Consulting', 'Training, curriculum and roadmaps for gurukulas, support schools, homeschool groups and values-based schools.', '/consulting'),
  component: Page,
})

function Page() {
  return (
    <>
      <ServiceHero
        slug="consulting"
        index="02"
        crumb="Consulting"
        title={['Consulting for', 'educators']}
        intro="We help educators and parents raise children aged 7 to 18 into service-minded people — and help the institutions that serve them to do it well."
        image="/img/academic-study/academic-study-1.jpg"
        imageAlt="Students studying at the Gurukula"
        position="center 40%"
        chips={['Educators', 'Schools', 'Homeschoolers']}
      />
      <ServiceSectionNav />
      <AfterHero />

      <section className="relative overflow-hidden bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 pt-6 md:px-10 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Educational projects"
              lines={['We support', <em key="w" className="text-[#8a6f3c]">every kind</em>, 'of school.']}
              big
              intro="Wherever children are being educated with universal values at the centre, we can help."
            />
            <div className="mt-8">
              <ChipCloud items={consultingProjects} />
            </div>
          </div>
          <PhotoDuo a={{ src: '/img/academic-study/academic-study-2.jpg', alt: 'A classroom session at the Gurukula' }} b={{ src: '/img/academic-study/academic-study.jpg', alt: 'Students at their studies' }} slug="consulting" />
        </div>
      </section>

      <StatBand
        items={[
          { n: 4, label: 'Kinds of school we serve' },
          { n: 5, label: 'Holistic services' },
          { n: 6, label: 'Steps in the journey' },
          { n: 24, suffix: '/7', label: 'On-demand learning' },
        ]}
      />

      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-24 text-pearl md:py-32">
        <Petals />
        <div className="pointer-events-none absolute -right-10 top-10 hidden w-[24rem] opacity-60 lg:block" aria-hidden>
          <ServiceEmblem slug="consulting" className="h-auto w-full" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHead light eyebrow="Holistic education" lines={['Growth for parents,', <em key="t" className="text-brass">teachers</em>, 'and schools.']} />
            <div className="self-end">
              <NumberedList dark columns={1} items={holisticServices} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 pt-6 md:grid-cols-[1fr_1.4fr] md:px-10">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionHead eyebrow="Partner with us" lines={['Six steps,', <em key="s" className="text-[#8a6f3c]">one journey.</em>]} big intro="From a first conversation to a school that runs on its own strength." />
          </div>
          <ProcessTimeline steps={partnerSteps} />
        </div>
      </section>

      <ClosingCTA eyebrow="Let’s begin" lines={['A world where', <em key="c" className="text-[#8a6f3c]">children thrive.</em>]} text="Let’s work together to shape it. Start with a conversation.">
        <ContactActions label="Start a conversation" />
      </ClosingCTA>

      <MoreServices current="consulting" />
    </>
  )
}