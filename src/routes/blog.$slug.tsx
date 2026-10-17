import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { Eyebrow, GalleryTile, useLightbox } from '@/components/ui'
import { EduSectionNav, formatDate } from '@/components/education'
import { posts } from '@/content/education'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return { post }
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post
    const title = post ? `${post.title} — Bhaktivedanta Gurukula` : 'Blog — Bhaktivedanta Gurukula'
    return {
      meta: [
        { title },
        { name: 'description', content: post?.excerpt ?? '' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: post?.excerpt ?? '' },
        { property: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  component: Page,
})

function Page() {
  const { post } = Route.useLoaderData()
  const gallery = post.gallery ?? []
  const { open, node } = useLightbox(gallery)
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <article>
        <header className="grain relative isolate flex min-h-[86svh] items-end overflow-hidden bg-teal text-pearl">
          <div className="absolute inset-0 -z-10">
            <div data-parallax="0.18" className="absolute inset-[-8%_0]">
              <Photo src={post.img} alt="" priority widths={[640, 1024, 1600, 2200]} width={1600} className="kenburns h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/60 to-teal-deep/20" />
          </div>
          <div className="mx-auto w-full max-w-[1100px] px-5 pb-16 pt-36 md:px-10 md:pb-24">
            <Link to="/blog" className="link-sweep inline-flex items-center gap-2 text-sm font-semibold text-pearl/80">
              <ArrowLeft className="h-4 w-4" aria-hidden /> All stories
            </Link>
            <p className="eyebrow mt-8 flex flex-wrap items-center gap-3 text-brass">
              {post.category} · {formatDate(post.date)}
              <span className="flex items-center gap-1 normal-case tracking-normal text-pearl/70">
                <Clock className="h-3.5 w-3.5" aria-hidden /> {post.readMins} min read
              </span>
            </p>
            <h1 className="display hero-fade mt-5 max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)]">{post.title}</h1>
          </div>
        </header>
        <EduSectionNav />

        <div className="bg-pearl py-16 md:py-24">
          <div className="mx-auto max-w-[760px] px-5">
            <p data-reveal className="font-display text-2xl leading-snug text-teal md:text-3xl">
              {post.excerpt}
            </p>
            <div data-reveal="rule" className="brass-rule my-10" />
            <div className="prose-gk text-[#2c4a4c]">
              {post.body.map((para, i) => (
                <p key={i} data-reveal className={i === 0 ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-[#8a6f3c]' : ''}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {gallery.length > 0 && (
            <div className="mx-auto mt-16 max-w-[1200px] px-5 md:px-10">
              <div className={`grid gap-4 ${gallery.length > 2 ? 'sm:grid-cols-3' : gallery.length === 2 ? 'sm:grid-cols-2' : ''}`}>
                {gallery.map((img, i) => (
                  <GalleryTile key={img.src} image={img} onOpen={() => open(i)} ratio={0.8} delay={i * 0.08} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* More stories */}
      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <Eyebrow>More Stories</Eyebrow>
            <Link to="/blog" className="link-sweep text-sm font-semibold text-teal">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {more.map((p, i) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} data-reveal style={{ ['--d' as string]: `${i * 0.08}s` }} className="group block">
                <div className="overflow-hidden rounded-2xl bg-slate">
                  <Photo src={p.img} alt="" ratio={0.68} widths={[400, 700]} width={600} sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:scale-[1.06]" />
                </div>
                <p className="eyebrow mt-4 text-[#8a6f3c]">{p.category}</p>
                <h3 className="mt-2 flex items-start justify-between gap-3 font-display text-2xl leading-snug text-teal">
                  {p.title}
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 opacity-0 transition-all duration-500 group-hover:opacity-100" aria-hidden />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {node}
    </>
  )
}
