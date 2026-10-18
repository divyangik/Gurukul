import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Mandala, MoreServices } from '@/components/services'
import { ContactActions, Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { serviceHead } from '@/content/services'

export const Route = createFileRoute('/courses-certifications')({
  head: () => serviceHead('Courses & Certifications', 'Courses and certifications from Bhaktivedanta Gurukula are being prepared. Talks and classes are shared on our YouTube channels.', '/courses-certifications'),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services · 05"
        title={['Courses &', 'Certifications']}
        intro="Structured courses and certifications are being prepared. Until they open, there is already a lot to learn from."
        image="/img/academic-study/academic-study-2.jpg"
        imageAlt="Students in class"
        position="center 40%"
      />

      <section className="grain jali relative overflow-hidden bg-teal-deep py-24 text-pearl md:py-36">
        <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14]" />
        <div className="drift pointer-events-none absolute -right-24 top-10 h-[380px] w-[380px] rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
          <Eyebrow light className="justify-center">Page under construction</Eyebrow>
          <RevealLines lines={['Opening', <span key="s" className="text-flow">soon.</span>]} className="display mt-6 text-[clamp(3.5rem,10vw,8rem)] text-pearl" />
          <p data-reveal className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-pearl/75">
            We are shaping the courses with care. Write to us and we will tell you when they are ready.
          </p>
          <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/videos" className="btn btn-brass">
              Watch our videos <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden />
            </Link>
            <Link to="/podcasts" className="btn btn-ghost-light">
              Listen to podcasts
            </Link>
            <Link to="/seekers" className="btn btn-ghost-light">
              Start as a seeker
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-[1fr_1fr] md:px-10">
          <div>
            <Eyebrow>Be the first to know</Eyebrow>
            <RevealLines lines={['Ask us about', 'upcoming courses.']} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
          </div>
          <ContactActions label="Contact" />
        </div>
      </section>

      <MoreServices current="courses-certifications" />
    </>
  )
}