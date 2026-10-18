import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Mail, Play } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ChipCloud, Mandala, MoreServices, SpotCard } from '@/components/services'
import { Eyebrow, PageHero, RevealLines } from '@/components/ui'
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
      <PageHero
        eyebrow="Services · 08"
        title={['Keynote', 'Speech']}
        intro="HG Bal Govind Prabhu is an expert in education, leadership and parenting, and has spoken at prestigious institutions."
        image="/img/slider/slider-1.jpg"
        imageAlt="Students and teachers of the Gurukula"
        position="center 40%"
      >
        <a data-reveal href={requestHref} className="btn btn-brass mt-10" style={{ ['--d' as string]: '0.45s' }}>
          <Mail className="h-4 w-4" aria-hidden /> Request a keynote
        </a>
      </PageHero>

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div data-reveal="mask" className="overflow-hidden rounded-3xl">
            <Photo src="/img/teachers/bal-govinda-das.jpg" alt="HG Bal Govind Prabhu" ratio={1.2} widths={[480, 800, 1100]} width={800} sizes="(min-width: 768px) 40vw, 100vw" className="h-full w-full object-cover object-top" />
          </div>
          <div>
            <Eyebrow>The speaker</Eyebrow>
            <RevealLines lines={['HG Bal Govind', <em key="p" className="text-[#8a6f3c]">Prabhu</em>]} className="display mt-5 text-[clamp(2.5rem,5vw,4.75rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-xl leading-relaxed text-muted">
              An educator and coach with 27+ years of experience, he has founded and managed 12 leadership training communities and directs Bhaktivedanta Gurukula.
            </p>
            <div className="mt-8">
              <p data-reveal className="eyebrow mb-4 text-[#8a6f3c]">Speaks on</p>
              <ChipCloud items={keynoteTopics} />
            </div>
          </div>
        </div>
      </section>

      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Mandala className="pointer-events-none absolute -left-40 -top-32 h-[540px] w-[540px] opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow light>Sample talks</Eyebrow>
          <RevealLines lines={['Hear him', <em key="s" className="text-brass">speak.</em>]} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-pearl" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {keynoteTalks.map((t, i) => (
              <SpotCard key={t.title} dark delay={i * 0.1}>
                <a href="https://www.youtube.com/@bhaktivedanta_education" target="_blank" rel="noreferrer" className="flex h-full flex-col p-8 md:p-10">
                  <span className="shine flex h-16 w-16 items-center justify-center rounded-full bg-brass text-teal-deep transition-transform duration-500 group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden />
                  </span>
                  <p className="eyebrow mt-8 text-brass">{t.where}</p>
                  <h3 className="display mt-3 text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-pearl">{t.title}</h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brass">
                    Watch on YouTube <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </a>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:px-10">
          <div>
            <Eyebrow>Invite him</Eyebrow>
            <RevealLines lines={['Bring a keynote', <em key="t" className="text-[#8a6f3c]">to your event.</em>]} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-teal" />
          </div>
          <div data-reveal className="rounded-3xl border border-teal/15 bg-pearl p-8 md:p-10">
            <p className="leading-relaxed text-muted">Organisations can request a keynote speech by email.</p>
            <a href={requestHref} className="btn btn-teal mt-6">
              <Mail className="h-4 w-4" aria-hidden /> {contact.email}
            </a>
          </div>
        </div>
      </section>

      <MoreServices current="keynote-speech" />
    </>
  )
}