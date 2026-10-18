import { createFileRoute } from '@tanstack/react-router'
import { Mandala, MoreServices, SpotCard } from '@/components/services'
import { ContactActions, Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { membershipBenefits, serviceHead } from '@/content/services'

export const Route = createFileRoute('/membership')({
  head: () => serviceHead('Membership', 'Curriculum, user manuals, lesson plans, assessments and a parents’ sangha for parents and teachers, for a small yearly donation.', '/membership'),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services · 03"
        title={['Membership', 'for families']}
        intro="A complete toolkit and a community for parents and teachers — available for a small yearly donation."
        image="/img/festivals/festival1.jpg"
        imageAlt="A festival at the Gurukula"
        position="center 40%"
      />

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <Eyebrow>What you receive</Eyebrow>
              <RevealLines lines={['Everything to', <em key="e" className="text-[#8a6f3c]">teach well.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              Members get access to the curriculum and the resources that go with it, and join a sangha of parents on the same path.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((b, i) => (
              <SpotCard key={b.title} delay={(i % 3) * 0.08}>
                <div className="p-8">
                  <span className="display text-5xl text-brass">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="display mt-5 text-3xl text-teal">{b.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{b.text}</p>
                </div>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Mandala className="pointer-events-none absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 opacity-25" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:px-10">
          <div>
            <Eyebrow light>A small yearly donation</Eyebrow>
            <RevealLines lines={['Simple to join.', <span key="m" className="text-flow">Easy to keep.</span>]} className="display mt-5 text-[clamp(2.5rem,5.5vw,5rem)] text-pearl" />
            <p data-reveal className="mt-6 max-w-lg leading-relaxed text-pearl/72">Message us to learn how to become a member and to confirm the current yearly amount.</p>
          </div>
          <ContactActions light label="Become a member" />
        </div>
      </section>

      <MoreServices current="membership" />
    </>
  )
}