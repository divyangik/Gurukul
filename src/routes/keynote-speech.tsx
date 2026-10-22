import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Mail, Play } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ChipCloud, Mandala, MoreServices, SpotCard } from '@/components/services'
import { AfterHero, ClosingCTA, Petals, SectionHead, ServiceEmblem, ServiceHero, StatBand, Wave } from '@/components/service-kit'
import { contact } from '@/content/site'
import { keynoteTalks, keynoteTopics, serviceHead } from '@/content/services'

export const Route = createFileRoute('/keynote-speech')({
  head: () => serviceHead('Keynote Speech', 'Invite HG Bal Govind Prabhu, an expert in education, leadership and parenting, to speak at your institution or event.', '/keynote-speech'),
  component: Page,
})

const requestHref = `mailto:${contact.email}?subject=${encodeURIComponent('Keynote speech request')}`

function Page() {
  return (
    <>
      <ServiceHero
        slug="keynote-speech"
        index="08"
        crumb="Keynote Speech"
        title={['Keynote', 'Speech']}
        intro="HG Bal Govind Prabhu is an expert in education, leadership and parenting, and has spoken at prestigious institutions."
        image="/img/slider/slider-1.jpg"
        imageAlt="Students and teachers of the Gurukula"
        position="center 40%"
        chips={['Institutions', 'Universities']}
      >
        <a href={requestHref} className="btn btn-brass">
          <Mail className="h-4 w-4" aria-hidden /> Request a keynote
        </a>
      </ServiceHero>
      <AfterHero />

      <section className="relative overflow-hidden bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-5 pt-6 md:grid-cols-[0.85fr_1.15fr] md:px-10">
          <div className="relative">
            <div data-reveal="mask" className="overflow-hidden rounded-[2rem] shadow-[0_40px_70px_-40px_rgba(12,46,49,0.55)]">
              <div data-parallax="0.08">
                <Photo src="/img/teachers/bal-govinda-das.jpg" alt="HG Bal Govind Prabhu" ratio={1.2} widths={[480, 800, 1100]} width={800} sizes="(min-width: 768px) 40vw, 100vw" className="h-full w-full object-cover object-top" />
              </div>
            </div>
            <span className="sv-seal !left-auto !right-[-1rem] md:!right-[-2rem]" aria-hidden>
              <ServiceEmblem slug="keynote-speech" className="h-full w-full p-3" />
            </span>
          </div>
          <div>
            <SectionHead
              eyebrow="The speaker"
              lines={['HG Bal Govind', <em key="p" className="text-[#8a6f3c]">Prabhu</em>]}
              big
              intro="An educator and coach with 27+ years of experience, he has founded and managed 12 leadership training communities and directs Bhaktivedanta Gurukula."
            />
            <div className="mt-8">
              <p data-reveal className="eyebrow mb-4 text-[#8a6f3c]">Speaks on</p>
              <ChipCloud items={keynoteTopics} />
            </div>
          </div>
        </div>
      </section>

      <StatBand items={[{ n: 27, suffix: '+', label: 'Years of experience' }, { n: 12, label: 'Leadership communities founded' }, { n: 3, label: 'Keynote topics' }, { n: 2, label: 'Sample talks to watch' }]} />

      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-24 text-pearl md:py-32">
        <Petals />
        <Mandala className="pointer-events-none absolute -left-40 -top-32 h-[540px] w-[540px] opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHead light eyebrow="Sample talks" lines={['Hear him', <em key="s" className="text-brass">speak.</em>]} big />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {keynoteTalks.map((t, i) => (
              <SpotCard key={t.title} dark delay={i * 0.1}>
                <a href="https://www.youtube.com/@bhaktivedanta_education" target="_blank" rel="noreferrer" className="relative flex h-full flex-col p-8 md:p-10">
                  <span className="relative inline-flex h-20 w-20 items-center justify-center">
                    <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden />
                    <span className="shine flex h-16 w-16 items-center justify-center rounded-full bg-brass text-teal-deep transition-transform duration-500 group-hover:scale-110">
                      <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden />
                    </span>
                  </span>
                  <p className="eyebrow mt-8 text-brass">{t.where}</p>
                  <h3 className="display mt-3 text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-pearl">{t.title}</h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brass">
                    Watch on YouTube <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="sv-card-line" aria-hidden />
                </a>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA eyebrow="Invite him" lines={['Bring a keynote', <em key="t" className="text-[#8a6f3c]">to your event.</em>]}>
        <div data-reveal className="rounded-3xl border border-teal/15 bg-pearl p-8 md:p-10">
          <p className="leading-relaxed text-muted">Organisations can request a keynote speech by email.</p>
          <a href={requestHref} className="btn btn-teal mt-6">
            <Mail className="h-4 w-4" aria-hidden /> {contact.email}
          </a>
        </div>
      </ClosingCTA>

      <MoreServices current="keynote-speech" />
    </>
  )
}