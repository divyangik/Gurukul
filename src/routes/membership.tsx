import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, ClipboardCheck, FileText, Library, NotebookPen, Users } from 'lucide-react'
import { Mandala, MoreServices } from '@/components/services'
import { ContactActions } from '@/components/ui'
import { AfterHero, FeatureCard, PhotoDuo, Petals, SectionHead, ServiceEmblem, ServiceHero, Wave, WordBand } from '@/components/service-kit'
import { membershipBenefits, serviceHead } from '@/content/services'

export const Route = createFileRoute('/membership')({
  head: () => serviceHead('Membership', 'Curriculum, user manuals, lesson plans, assessments and a parents’ sangha for parents and teachers, for a small yearly donation.', '/membership'),
  component: Page,
})

const icons = [BookOpen, FileText, NotebookPen, ClipboardCheck, Library, Users]

function Page() {
  return (
    <>
      <ServiceHero
        slug="membership"
        index="03"
        crumb="Membership"
        title={['Membership', 'for families']}
        intro="A complete toolkit and a community for parents and teachers — available for a small yearly donation."
        image="/img/festivals/festival1.jpg"
        imageAlt="A festival at the Gurukula"
        position="center 40%"
        chips={['Parents', 'Teachers']}
      />
      <AfterHero />

      <section className="relative overflow-hidden bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto max-w-[1440px] px-5 pt-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <SectionHead eyebrow="What you receive" lines={['Everything to', <em key="e" className="text-[#8a6f3c]">teach well.</em>]} big />
            <p data-reveal className="max-w-xl text-lg leading-relaxed text-muted md:justify-self-end">
              Members get access to the curriculum and the resources that go with it, and join a sangha of parents on the same path.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((b, i) => (
              <FeatureCard key={b.title} n={i + 1} icon={icons[i]} title={b.title} text={b.text} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl">
        <WordBand words={membershipBenefits.map((b) => b.title)} />
      </section>

      <section className="relative overflow-hidden bg-sand py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 md:px-10 lg:grid-cols-2">
          <PhotoDuo sand a={{ src: '/img/festivals/festival2.jpg', alt: 'A festival gathering at the Gurukula' }} b={{ src: '/img/festivals/jhulan-1.jpg', alt: 'Jhulan festival at the Gurukula' }} slug="membership" />
          <div>
            <SectionHead
              eyebrow="Parents’ sangha"
              lines={['You do not', <em key="a" className="text-[#8a6f3c]">walk alone.</em>]}
              big
              intro="A parents’ association to learn and grow together — alongside the curriculum, manuals and lesson plans."
            />
          </div>
        </div>
      </section>

      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-24 text-pearl md:py-32">
        <Wave className="text-sand" />
        <Petals />
        <Mandala className="pointer-events-none absolute -right-32 top-1/2 h-[560px] w-[560px] -translate-y-1/2 opacity-25" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHead
              light
              eyebrow="A small yearly donation"
              lines={['Simple to join.', <span key="m" className="text-flow">Easy to keep.</span>]}
              big
              intro="Message us to learn how to become a member and to confirm the current yearly amount."
            />
            <div className="mt-10 max-w-lg">
              <ContactActions light label="Become a member" />
            </div>
          </div>
          <div className="sv-emblem-float relative mx-auto hidden w-[70%] max-w-sm lg:block" aria-hidden>
            <div className="sv-halo absolute -inset-10 rounded-full" />
            <ServiceEmblem slug="membership" className="relative h-auto w-full" />
          </div>
        </div>
      </section>

      <MoreServices current="membership" />
    </>
  )
}