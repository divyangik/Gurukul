import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ContactActions } from '@/components/ui'
import { Mandala, ServiceCard, ServiceMarquee, serviceTones } from '@/components/services'
import { AfterHero, ClosingCTA, Petals, SectionHead, ServiceHero, ServiceRing, StatBand, Wave } from '@/components/service-kit'
import { serviceHead, services, type ServiceSlug } from '@/content/services'

export const Route = createFileRoute('/services')({
  head: () => serviceHead('Services', 'Coaching, consulting, membership, camps, courses, samskaras, careers and keynotes from Bhaktivedanta Gurukula, Dalimb, Pune.', '/services'),
  component: Page,
})

type Audience = { key: string; label: string; slugs: ServiceSlug[] }

// Taken from each service's own "for" line in content/services.ts
const audiences: Audience[] = [
  { key: 'all', label: 'Everything', slugs: services.map((s) => s.slug) },
  { key: 'parents', label: 'Parents & families', slugs: ['coaching', 'membership', 'camp-workshop', 'samskaras-yajnas'] },
  { key: 'children', label: 'Children & students', slugs: ['coaching', 'camp-workshop'] },
  { key: 'educators', label: 'Teachers & educators', slugs: ['coaching', 'consulting', 'membership', 'camp-workshop', 'courses-certifications', 'career'] },
  { key: 'institutions', label: 'Schools & institutions', slugs: ['consulting', 'keynote-speech', 'samskaras-yajnas'] },
]

function Page() {
  const [active, setActive] = useState('all')
  const current = audiences.find((a) => a.key === active) ?? audiences[0]

  return (
    <>
      <ServiceHero
        index="08"
        crumb="Overview"
        title={['Our', 'Services']}
        intro="Eight ways the Gurukula serves families, educators and institutions — from personal coaching to sacred rites, from weekend camps to keynote talks."
        image="/img/festivals/deity-worship-3.jpg"
        imageAlt="Worship at the Gurukula temple"
        position="center 35%"
        chips={['Parents', 'Teachers', 'Students', 'Institutions']}
        aside={<ServiceRing slugs={services.map((s) => s.slug)} />}
      />
      <AfterHero />

      <section className="relative bg-pearl pt-8">
        <Wave className="text-teal-deep" />
        <div className="pt-10">
          <ServiceMarquee />
        </div>
      </section>

      <StatBand
        items={[
          { n: 8, label: 'Ways to engage' },
          { n: 14, label: 'Vedic samskaras' },
          { n: 4, label: 'Camps through the year' },
          { n: 27, suffix: '+', label: 'Years of educator experience' },
        ]}
      />

      <section id="choose" className="grain jali relative isolate overflow-hidden bg-teal-deep py-20 md:py-28">
        <Petals />
        <div className="drift pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <Mandala className="pointer-events-none absolute -right-48 bottom-0 h-[620px] w-[620px] opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead light eyebrow="What we offer" lines={['Choose where', <em key="b" className="text-brass">to begin.</em>]} big />
            <div data-reveal className="max-w-xl">
              <p className="eyebrow mb-4 text-brass">Show me what is for…</p>
              <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter services by audience">
                {audiences.map((a) => (
                  <button key={a.key} type="button" aria-pressed={active === a.key} onClick={() => setActive(a.key)} className="sv-pill">
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const match = current.slugs.includes(s.slug)
              return (
                <div key={s.slug} className={`transition-all duration-700 ease-[var(--ease-silk)] ${match ? '' : 'pointer-events-none scale-[0.96] opacity-25 saturate-0'}`} aria-hidden={!match}>
                  <ServiceCard s={s} delay={(i % 4) * 0.08} tone={serviceTones[i % serviceTones.length]} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ClosingCTA eyebrow="Not sure which fits?" lines={['Tell us what', <em key="y" className="text-[#8a6f3c]">you need.</em>]} text="Write or message us — we will point you to the right programme and answer any question about dates, venue or registration.">
        <ContactActions label="Reach us" />
      </ClosingCTA>
    </>
  )
}