import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, Clock, Users } from 'lucide-react'
import { ChipCloud, Mandala, MoreServices, SpotCard } from '@/components/services'
import { ContactActions, Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { camps, serviceHead, weekendWorkshops } from '@/content/services'

export const Route = createFileRoute('/camp-workshop')({
  head: () => serviceHead('Camps & Workshops', 'Orientation, winter and summer camps and weekend workshops with lodging and boarding at Bhaktivedanta Gurukula, Uruli Kanchan, Pune.', '/camp-workshop'),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services · 04"
        title={['Camps &', 'Workshops']}
        intro="Camps run throughout the year, with lodging and boarding on the Gurukula campus. Come for a weekend and live the rhythm of Vedic culture."
        image="/img/sports/dhavaleshwar-trek-1.jpg"
        imageAlt="Children trekking near Dhavaleshwar"
        position="center 55%"
      />

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow>Through the year</Eyebrow>
          <RevealLines lines={['Four camps,', <em key="c" className="text-[#8a6f3c]">one campus.</em>]} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-teal" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {camps.map((c, i) => (
              <SpotCard key={c.title} delay={(i % 2) * 0.1}>
                <div className="flex h-full flex-col p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="display text-6xl text-brass">{String(i + 1).padStart(2, '0')}</span>
                    <span className="pulse-ring mt-3 h-3 w-3 rounded-full bg-brass" aria-hidden />
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
                </div>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Mandala className="pointer-events-none absolute -left-40 -bottom-40 h-[560px] w-[560px] opacity-20" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-[1fr_1.4fr] md:px-10">
          <div>
            <Eyebrow light>Weekend camps for everyone · on demand</Eyebrow>
            <RevealLines lines={['Workshops', <em key="w" className="text-brass">for family life.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-pearl" />
          </div>
          <div className="self-end">
            <ChipCloud dark items={weekendWorkshops} />
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <ContactActions label="To register / know more, contact" />
        </div>
      </section>

      <MoreServices current="camp-workshop" />
    </>
  )
}