import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, Clock, Users } from 'lucide-react'
import { ChipCloud, MoreServices, SpotCard } from '@/components/services'
import { ContactActions } from '@/components/ui'
import { AfterHero, ClosingCTA, PhotoDuo, Petals, SectionHead, ServiceHero, StatBand, Wave } from '@/components/service-kit'
import { camps, serviceHead, weekendWorkshops } from '@/content/services'

export const Route = createFileRoute('/camp-workshop')({
  head: () => serviceHead('Camps & Workshops', 'Orientation, winter and summer camps and weekend workshops with lodging and boarding at Bhaktivedanta Gurukula, Uruli Kanchan, Pune.', '/camp-workshop'),
  component: Page,
})

function Page() {
  return (
    <>
      <ServiceHero
        slug="camp-workshop"
        index="04"
        crumb="Camps & Workshops"
        title={['Camps &', 'Workshops']}
        intro="Camps run throughout the year, with lodging and boarding on the Gurukula campus. Come for a weekend and live the rhythm of Vedic culture."
        image="/img/sports/dhavaleshwar-trek-1.jpg"
        imageAlt="Children trekking near Dhavaleshwar"
        position="center 55%"
        chips={['Children', 'Parents', 'Educators']}
      />
      <AfterHero />

      <section className="relative overflow-hidden bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto max-w-[1440px] px-5 pt-6 md:px-10">
          <SectionHead eyebrow="Through the year" lines={['Four camps,', <em key="c" className="text-[#8a6f3c]">one campus.</em>]} big />
          <div className="relative mt-14 grid gap-6 md:grid-cols-2">
            {camps.map((c, i) => (
              <SpotCard key={c.title} delay={(i % 2) * 0.1}>
                <div className="relative flex h-full flex-col p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="sv-outline-num text-7xl">{String(i + 1).padStart(2, '0')}</span>
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-brass/50 bg-brass/10 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#8a6f3c]">
                      <span className="pulse-ring h-2 w-2 rounded-full bg-brass" aria-hidden /> {c.when.split(' · ')[0]}
                    </span>
                  </div>
                  <h3 className="display mt-4 text-[clamp(1.9rem,3vw,2.6rem)] leading-tight text-teal">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{c.text}</p>
                  <dl className="mt-6 space-y-3 border-t border-teal/12 pt-6 text-sm text-teal">
                    <div className="flex items-start gap-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-[#8a6f3c]" aria-hidden />
                      <div><dt className="sr-only">For</dt><dd>{c.for}</dd></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#8a6f3c]" aria-hidden />
                      <div><dt className="sr-only">When</dt><dd>{c.when}</dd></div>
                    </div>
                    {c.time && (
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#8a6f3c]" aria-hidden />
                        <div><dt className="sr-only">Timing</dt><dd>{c.time}</dd></div>
                      </div>
                    )}
                  </dl>
                  <span className="sv-card-line" aria-hidden />
                </div>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      <StatBand
        items={[
          { n: 4, label: 'Camps through the year' },
          { n: 3, label: 'Day orientation camp' },
          { n: 2, label: 'Day weekend camps' },
          { n: 8, label: 'Weekend workshop themes' },
        ]}
      />

      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-24 text-pearl md:py-32">
        <Petals />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHead light eyebrow="Weekend camps for everyone · on demand" lines={['Workshops', <em key="w" className="text-brass">for family life.</em>]} big />
            <div className="mt-10">
              <ChipCloud dark items={weekendWorkshops} />
            </div>
          </div>
          <PhotoDuo a={{ src: '/img/sports/dhavaleshwar-trek-2.jpg', alt: 'Children on a trek' }} b={{ src: '/img/sports/yoga.jpg', alt: 'Yoga on campus' }} slug="camp-workshop" />
        </div>
      </section>

      <ClosingCTA eyebrow="Join a camp" lines={['Come for a weekend,', <em key="s" className="text-[#8a6f3c]">stay for the rhythm.</em>]} text="Lodging and boarding are available on campus at Uruli Kanchan.">
        <ContactActions label="To register / know more, contact" />
      </ClosingCTA>

      <MoreServices current="camp-workshop" />
    </>
  )
}