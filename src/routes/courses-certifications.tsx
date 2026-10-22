import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Headphones, PlayCircle, Compass } from 'lucide-react'
import { Mandala, MoreServices } from '@/components/services'
import { ContactActions } from '@/components/ui'
import { AfterHero, ClosingCTA, FeatureCard, Petals, SectionHead, ServiceEmblem, ServiceHero, Wave } from '@/components/service-kit'
import { serviceHead } from '@/content/services'

export const Route = createFileRoute('/courses-certifications')({
  head: () => serviceHead('Courses & Certifications', 'Courses and certifications from Bhaktivedanta Gurukula are being prepared. Talks and classes are shared on our YouTube channels.', '/courses-certifications'),
  component: Page,
})

const start = [
  { title: 'Watch our videos', text: 'Talks and classes are already shared on our YouTube channels.', to: '/videos', cta: 'Watch now', icon: PlayCircle },
  { title: 'Listen to podcasts', text: 'Conversations on education, parenting and life at the Gurukula.', to: '/podcasts', cta: 'Listen now', icon: Headphones },
  { title: 'Start as a seeker', text: 'New to the Gurukula? Begin with the seekers’ path.', to: '/seekers', cta: 'Begin', icon: Compass },
] as const

function Page() {
  return (
    <>
      <ServiceHero
        slug="courses-certifications"
        index="05"
        crumb="Courses & Certifications"
        title={['Courses &', 'Certifications']}
        intro="Structured courses and certifications are being prepared. Until they open, there is already a lot to learn from."
        image="/img/academic-study/academic-study-2.jpg"
        imageAlt="Students in class"
        position="center 40%"
        chips={['Seekers', 'Educators']}
      />
      <AfterHero />

      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-28 text-pearl md:py-40">
        <Petals />
        <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14]" />
        <div className="drift pointer-events-none absolute -right-24 top-10 h-[380px] w-[380px] rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
          <div className="sv-emblem-float relative mx-auto mb-10 w-40 md:w-52" aria-hidden>
            <div className="sv-halo absolute -inset-8 rounded-full" />
            <ServiceEmblem slug="courses-certifications" className="relative h-auto w-full" />
          </div>
          <p data-reveal className="eyebrow inline-flex items-center gap-3 rounded-full border border-brass/40 px-4 py-2 text-brass">
            <span className="pulse-ring h-2 w-2 rounded-full bg-brass" aria-hidden /> Page under construction
          </p>
          <h2 className="display mt-8 text-[clamp(3.5rem,10vw,8rem)] text-pearl">
            <span data-reveal="line"><span>Opening</span></span>
            <span data-reveal="line" style={{ ['--d' as string]: '0.12s' }}><span className="text-flow">soon.</span></span>
          </h2>
          <p data-reveal className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-pearl/75">
            We are shaping the courses with care. Write to us and we will tell you when they are ready.
          </p>
        </div>
      </section>

      <section className="relative bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto max-w-[1440px] px-5 pt-6 md:px-10">
          <SectionHead eyebrow="While you wait" lines={['Begin learning', <em key="b" className="text-[#8a6f3c]">today.</em>]} big />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {start.map((s, i) => (
              <FeatureCard key={s.title} n={i + 1} icon={s.icon} title={s.title} text={s.text} delay={i * 0.1}>
                <Link to={s.to} className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8a6f3c] after:absolute after:inset-0 after:content-['']">
                  {s.cta} <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA eyebrow="Be the first to know" lines={['Ask us about', <em key="u" className="text-[#8a6f3c]">upcoming courses.</em>]}>
        <ContactActions label="Contact" />
      </ClosingCTA>

      <MoreServices current="courses-certifications" />
    </>
  )
}