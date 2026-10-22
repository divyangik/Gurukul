import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, MonitorPlay, Play } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { Eyebrow, RevealLines, YouTube } from '@/components/ui'
import { AfterHero, Petals, ServiceHero, StatBand } from '@/components/service-kit'
import { EduNext, EduSectionNav, PhotoMarquee } from '@/components/education'
import { channels, videos } from '@/content/education'

export const Route = createFileRoute('/videos')({
  head: () => ({
    meta: [
      { title: 'Videos — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Lectures, seminars and campus films from Bhaktivedanta Education and Lotus Voice Videos — the art of parenting, applied spirituality and gurukula life.' },
      { property: 'og:title', content: 'Videos — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Lectures, seminars and campus films from Bhaktivedanta Education and Lotus Voice Videos.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  const [current, setCurrent] = useState(0)
  const video = videos[current]

  return (
    <>
      <ServiceHero
        slug="videos"
        index="05"
        crumb="Videos"
        parent={{ label: 'Education', to: '/education' }}
        wave="text-pearl"
        chips={['Parenting', 'Spirituality', 'Campus life']}
        title={['Watch, listen,', 'reflect.']}
        intro="Talks on the art of parenting, spirituality for the modern age and life at the Gurukula — shared freely on our two YouTube channels."
        image="/img/talentshow/drama3.jpg"
        imageAlt="Students performing a drama at the Gurukula"
        position="center 35%"
      />
      <EduSectionNav />
      <AfterHero />

      {/* Player + playlist */}
      <section className="grain relative isolate overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Petals />
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow light>Featured Talks</Eyebrow>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div data-reveal="blur">
              <YouTube key={video.id} id={video.id} title={video.title} />
              <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-brass">{video.tag}</p>
                  <h2 className="mt-2 font-display text-3xl md:text-4xl">{video.title}</h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-pearl/70">{video.text}</p>
                </div>
                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
                  Open on YouTube <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>

            <ol className="space-y-3" aria-label="Playlist">
              {videos.map((v, i) => {
                const on = i === current
                return (
                  <li key={v.id} data-reveal="right" style={{ ['--d' as string]: `${i * 0.1}s` }}>
                    <button
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-current={on ? 'true' : undefined}
                      className={`group flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-colors duration-500 ${on ? 'border-brass bg-pearl/10' : 'border-pearl/10 hover:border-pearl/30 hover:bg-pearl/5'}`}
                    >
                      <span className="relative block h-20 w-32 shrink-0 overflow-hidden rounded-xl bg-slate">
                        <img src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <span className={`absolute inset-0 flex items-center justify-center transition-colors ${on ? 'bg-teal-deep/40' : 'bg-teal-deep/20'}`}>
                          {on ? (
                            <span className="eq flex h-5 items-end gap-0.5 text-brass" aria-hidden>
                              <span />
                              <span />
                              <span />
                              <span />
                            </span>
                          ) : (
                            <Play className="h-6 w-6 text-pearl" fill="currentColor" aria-hidden />
                          )}
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="eyebrow block !text-[0.6rem] text-brass">
                          {String(i + 1).padStart(2, '0')} · {v.tag}
                        </span>
                        <span className="mt-1 block font-display text-xl leading-snug">{v.title}</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      <StatBand items={[{ n: videos.length, label: 'Featured talks' }, { n: channels.length, label: 'YouTube channels' }]} />

      {/* Channels */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <Eyebrow>Subscribe</Eyebrow>
              <RevealLines lines={['Two channels,', <em key="o" className="text-[#8a6f3c]">one mission.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              Subscribe to both of our channels for new lectures, seminars and films from the Gurukula.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {channels.map((c, i) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                data-reveal="scale"
                style={{ ['--d' as string]: `${i * 0.1}s` }}
                className="group relative isolate block min-h-[24rem] overflow-hidden rounded-3xl bg-teal text-pearl"
              >
                <Photo src={c.img} alt="" widths={[640, 1024, 1400]} width={1000} sizes="(min-width: 768px) 50vw, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60 transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-deep via-teal-deep/60 to-transparent" />
                <div className="flex h-full min-h-[24rem] flex-col justify-between p-8 md:p-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brass text-teal-deep transition-transform duration-700 group-hover:rotate-[-8deg] group-hover:scale-110">
                    <MonitorPlay className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="eyebrow text-brass">{c.handle}</p>
                    <h3 className="mt-3 font-display text-4xl">{c.name}</h3>
                    <p className="mt-3 max-w-md text-pearl/75">{c.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brass-soft">
                      Visit channel <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-sand py-12" aria-hidden>
        <PhotoMarquee
          speed={70}
          images={[
            { src: '/img/talentshow/talent-show1.jpg', alt: '' },
            { src: '/img/festivals/jhulan-1.jpg', alt: '' },
            { src: '/img/talentshow/student-playing-mridanga.jpg', alt: '' },
            { src: '/img/festivals/deity-worship.jpg', alt: '' },
            { src: '/img/sports/yoga.jpg', alt: '' },
            { src: '/img/talentshow/drama2.jpg', alt: '' },
          ]}
        />
      </section>

      <EduNext current="/videos" />
    </>
  )
}