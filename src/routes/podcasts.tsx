import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Headphones, Mic } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ContactActions, Eyebrow, RevealLines, YouTube } from '@/components/ui'
import { EduNext, EduSectionNav, Mandala } from '@/components/education'
import { AfterHero, Petals, ServiceHero } from '@/components/service-kit'
import { channels, podcastSeries, videos } from '@/content/education'

const lotusVoice = channels.find((c) => c.handle === '@LotusVoiceVideos')!

export const Route = createFileRoute('/podcasts')({
  head: () => ({
    meta: [
      { title: 'Podcasts — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Conversations on the art of parenting, applied spirituality, gurukula life and leadership from Bhaktivedanta Education.' },
      { property: 'og:title', content: 'Podcasts — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Conversations on parenting, applied spirituality, gurukula life and leadership.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <ServiceHero
        slug="podcasts"
        index="06"
        crumb="Podcasts"
        parent={{ label: 'Education', to: '/education' }}
        wave="text-pearl"
        title={['Wisdom', 'for the road.']}
        intro="Long-form conversations from Bhaktivedanta Education — on parenting, purpose and the gurukula way of life. Made for commutes, kitchens and quiet evenings."
        image="/img/education/podcast.jpg"
        imageAlt=""
        position="center 40%"
      >
        <div className="flex flex-wrap items-center gap-6">
          <a href={lotusVoice.href} target="_blank" rel="noreferrer" className="btn btn-brass">
            <Headphones className="h-4 w-4" aria-hidden /> Listen on YouTube
          </a>
          <span className="flex items-center gap-3 text-sm text-pearl/70">
            <span className="eq flex h-6 items-end gap-1 text-brass" aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </span>
            New episodes in production
          </span>
        </div>
      </ServiceHero>
      <EduSectionNav />
      <AfterHero />

      {/* Series */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <Eyebrow>Shows</Eyebrow>
              <RevealLines lines={['Four series,', <em key="f" className="text-[#8a6f3c]">many voices.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              Teachers, parents, alumni and guests explore one theme at a time. The first seasons are being recorded on campus now.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {podcastSeries.map((s, i) => (
              <article
                key={s.title}
                data-reveal="scale"
                style={{ ['--d' as string]: `${i * 0.08}s` }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-teal/10 bg-sand/50 shadow-[0_30px_60px_-45px_rgba(12,46,49,0.6)] transition-all duration-700 ease-[var(--ease-silk)] hover:-translate-y-1.5 hover:border-brass"
              >
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate">
                    <Photo src={s.img} alt="" widths={[400, 700]} width={600} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/70 via-teal-deep/10 to-transparent" aria-hidden />
                    <span className="absolute left-4 top-4 rounded-full border border-pearl/40 bg-teal-deep/45 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-pearl backdrop-blur-md">
                      Series {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="absolute -bottom-6 right-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#ece3d3] bg-brass text-teal-deep shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:bg-pearl">
                    <Mic className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-9">
                  <h3 className="font-display text-2xl leading-snug text-teal">{s.title}</h3>
                  <span className="mt-3 block h-px w-10 bg-brass transition-all duration-700 group-hover:w-20" aria-hidden />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-teal/10 pt-4">
                    {s.topics.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-teal">
                        <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" aria-hidden /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Listen now */}
      <section className="grain relative isolate overflow-hidden bg-slate py-20 text-pearl md:py-28">
        <Petals />
        <Mandala className="pointer-events-none absolute -right-52 -top-52 h-[38rem] w-[38rem] text-brass/15" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:grid-cols-[1fr_1.3fr] md:px-10">
          <div>
            <Eyebrow light>Listen While You Wait</Eyebrow>
            <RevealLines lines={['Start with', <em key="p" className="text-brass-soft">the Art of Parenting.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)]" />
            <p data-reveal className="mt-6 max-w-md leading-relaxed text-pearl/70">
              Until the first episodes are published, our lectures make perfect listening. Press play, put the phone in your pocket and go for a walk.
            </p>
            <a data-reveal href={lotusVoice.href} target="_blank" rel="noreferrer" className="btn btn-ghost-light mt-8">
              More on Lotus Voice <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </a>
          </div>
          <div data-reveal="blur">
            <YouTube id={videos[0].id} title={videos[0].title} />
          </div>
        </div>
      </section>

      {/* Suggest a topic */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-[1fr_1.2fr] md:items-center md:px-10">
          <div>
            <Eyebrow>Be Part of It</Eyebrow>
            <RevealLines lines={['Ask a question,', 'suggest a guest.']} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-md leading-relaxed text-muted">
              Questions from listeners shape every season. Send us yours — and we'll let you know when new episodes go live.
            </p>
          </div>
          <ContactActions label="Write to the podcast team" />
        </div>
      </section>

      <EduNext current="/podcasts" />
    </>
  )
}