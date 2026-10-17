import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Headphones, Mic } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ContactActions, Eyebrow, RevealLines, YouTube } from '@/components/ui'
import { EduNext, EduSectionNav, Mandala } from '@/components/education'
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
      {/* Hero — studio illustration with live equaliser */}
      <section className="grain relative isolate overflow-hidden bg-teal-deep text-pearl">
        <div className="absolute inset-0 -z-10">
          <div data-parallax="0.15" className="absolute inset-[-8%_0]">
            <Photo src="/img/education/podcast.jpg" alt="" priority widths={[640, 1024, 1600, 2200]} width={1600} className="kenburns h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/85 to-teal-deep/10" />
        </div>
        <div className="mx-auto flex min-h-[86svh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-36 md:px-10 md:pb-24">
          <Eyebrow light>Education · Podcasts</Eyebrow>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.9rem,8vw,7.5rem)]">
            {['Wisdom', 'for the road.'].map((w, i) => (
              <span key={w} className="hero-word block" style={{ ['--d' as string]: `${0.1 + i * 0.15}s` }}>
                <span>{w}</span>
              </span>
            ))}
          </h1>
          <p className="hero-fade mt-8 max-w-xl text-lg leading-relaxed text-pearl/80" style={{ ['--d' as string]: '0.5s' }}>
            Long-form conversations from Bhaktivedanta Education — on parenting, purpose and the gurukula way of life. Made for commutes, kitchens and quiet evenings.
          </p>
          <div className="hero-fade mt-10 flex flex-wrap items-center gap-6" style={{ ['--d' as string]: '0.7s' }}>
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
        </div>
      </section>
      <EduSectionNav />

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
                className="group flex flex-col overflow-hidden rounded-3xl border border-teal/10 bg-sand/50 transition-colors duration-500 hover:border-brass"
              >
                <div className="relative overflow-hidden">
                  <Photo src={s.img} alt="" ratio={1} widths={[400, 700]} width={600} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:scale-105" />
                  <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-pearl text-teal shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:bg-brass">
                    <Mic className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow text-[#8a6f3c]">Series {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug text-teal">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-teal/10 pt-4">
                    {s.topics.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-teal">
                        <span className="h-1.5 w-1.5 rotate-45 bg-brass" aria-hidden /> {t}
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
      <section className="grain relative overflow-hidden bg-slate py-20 text-pearl md:py-28">
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
