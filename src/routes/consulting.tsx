import { createFileRoute } from '@tanstack/react-router'
import { Photo } from '@/components/Photo'
import { ChipCloud, Mandala, MoreServices, ProcessTimeline } from '@/components/services'
import { ContactActions, Eyebrow, NumberedList, PageHero, RevealLines } from '@/components/ui'
import { consultingProjects, holisticServices, partnerSteps, serviceHead } from '@/content/services'

export const Route = createFileRoute('/consulting')({
  head: () => serviceHead('Consulting', 'Training, curriculum and roadmaps for gurukulas, support schools, homeschool groups and values-based schools.', '/consulting'),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services · 02"
        title={['Consulting for', 'educators']}
        intro="We help educators and parents raise children aged 7 to 18 into service-minded people — and help the institutions that serve them to do it well."
        image="/img/academic-study/academic-study-1.jpg"
        imageAlt="Students studying at the Gurukula"
        position="center 40%"
      />

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-2 md:px-10">
          <div>
            <Eyebrow>Educational projects</Eyebrow>
            <RevealLines lines={['We support', <em key="w" className="text-[#8a6f3c]">every kind</em>, 'of school.']} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-lg leading-relaxed text-muted">Wherever children are being educated with universal values at the centre, we can help.</p>
            <div className="mt-8">
              <ChipCloud items={consultingProjects} />
            </div>
          </div>
          <div data-reveal="mask" className="overflow-hidden rounded-3xl">
            <Photo src="/img/academic-study/academic-study-2.jpg" alt="A classroom session at the Gurukula" ratio={0.85} widths={[640, 1024, 1400]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Mandala className="pointer-events-none absolute -left-40 -top-32 h-[520px] w-[520px] opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow light>Holistic education</Eyebrow>
              <RevealLines lines={['Growth for parents,', <em key="t" className="text-brass">teachers</em>, 'and schools.']} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-pearl" />
            </div>
            <div className="self-end">
              <NumberedList dark columns={1} items={holisticServices} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[1fr_1.4fr] md:px-10">
          <div className="md:sticky md:top-32 md:self-start">
            <Eyebrow>Partner with us</Eyebrow>
            <RevealLines lines={['Six steps,', <em key="s" className="text-[#8a6f3c]">one journey.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-sm leading-relaxed text-muted">From a first conversation to a school that runs on its own strength.</p>
          </div>
          <ProcessTimeline steps={partnerSteps} />
        </div>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <p data-reveal className="display mb-8 text-center text-[clamp(1.75rem,3.5vw,2.75rem)] text-teal">Let’s work together to shape a world where our children thrive.</p>
          <ContactActions label="Start a conversation" />
        </div>
      </section>

      <MoreServices current="consulting" />
    </>
  )
}