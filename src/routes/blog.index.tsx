import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Clock } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { Eyebrow, RevealLines } from '@/components/ui'
import { AfterHero, ServiceHero } from '@/components/service-kit'
import { EduNext, EduSectionNav, formatDate } from '@/components/education'
import { postCategories, posts } from '@/content/education'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: 'Blog — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Stories and reflections from life at Bhaktivedanta Gurukula — festivals, treks, Vedic study and the art of education.' },
      { property: 'og:title', content: 'Blog — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Stories and reflections from life at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  const [category, setCategory] = useState('All')
  const [featured, ...rest] = posts
  const list = category === 'All' ? rest : posts.filter((p) => p.category === category)

  return (
    <>
      <ServiceHero
        slug="blog"
        index="04"
        crumb="Blog"
        parent={{ label: 'Education', to: '/education' }}
        wave="text-pearl"
        chips={['Festivals', 'Treks', 'Classrooms']}
        title={['Stories from', 'the ashram.']}
        intro="Festivals, treks, classrooms and quiet mornings at the goshala — notes on the life and ideas that shape a gurukula education."
        image="/img/sports/dhavaleshwar-trek-2.jpg"
        imageAlt="Students walking along a Sahyadri ridge"
      />
      <EduSectionNav />
      <AfterHero />

      {/* Featured */}
      <section className="bg-pearl py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow>Featured Story</Eyebrow>
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group mt-8 grid items-center gap-10 md:grid-cols-[1.25fr_1fr]">
            <div data-reveal="mask" className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate">
              <Photo src={featured.img} alt="" widths={[640, 1024, 1600]} width={1200} sizes="(min-width: 768px) 60vw, 100vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-silk)] group-hover:scale-105" />
            </div>
            <div>
              <p data-reveal className="eyebrow text-[#8a6f3c]">
                {featured.category} · {formatDate(featured.date)}
              </p>
              <h2 data-reveal className="display mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-teal">
                {featured.title}
              </h2>
              <p data-reveal className="mt-5 max-w-lg leading-relaxed text-muted">{featured.excerpt}</p>
              <span data-reveal className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-teal">
                Read the story <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All stories */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <RevealLines lines={['All stories']} className="display text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
              {postCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-500 ${
                    category === c ? 'border-teal bg-teal text-pearl' : 'border-teal/20 text-teal hover:border-teal'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Link
                key={`${category}-${p.slug}`}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-teal/10 bg-pearl shadow-[0_30px_60px_-45px_rgba(12,46,49,0.6)] transition-all duration-700 ease-[var(--ease-silk)] hover:-translate-y-1.5 hover:border-brass hover:shadow-[0_40px_70px_-40px_rgba(12,46,49,0.7)]"
                style={{ animation: `fade-up 0.9s var(--ease-silk) ${(i % 3) * 0.08}s both` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate">
                  <Photo src={p.img} alt="" widths={[400, 700, 1000]} width={700} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:scale-[1.07]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/50 via-transparent to-transparent" aria-hidden />
                  <span className="absolute left-4 top-4 rounded-full bg-pearl/90 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-teal backdrop-blur">{p.category}</span>
                  <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-pearl/40 bg-teal-deep/45 px-3 py-1.5 text-xs font-semibold text-pearl backdrop-blur-md">
                    <Clock className="h-3.5 w-3.5" aria-hidden /> {p.readMins} min read
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="eyebrow text-[#8a6f3c]">{formatDate(p.date)}</p>
                  <h3 className="mt-3 font-display text-[1.65rem] leading-snug text-teal transition-colors group-hover:text-[#8a6f3c]">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 flex-1 leading-relaxed text-muted">{p.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-teal/10 pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Read the story</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-teal/25 text-teal transition-all duration-500 group-hover:rotate-45 group-hover:border-brass group-hover:bg-brass group-hover:text-teal-deep" aria-hidden>
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EduNext current="/blog" />
    </>
  )
}