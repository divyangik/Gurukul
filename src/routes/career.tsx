import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, BookHeart, Flower2, GraduationCap, Mail, Sprout, Users } from 'lucide-react'
import { Mandala, MoreServices } from '@/components/services'
import { AfterHero, ClosingCTA, FeatureCard, Petals, SectionHead, ServiceHero, StatBand, Wave } from '@/components/service-kit'
import { contact } from '@/content/site'
import { careerReasons, openings, serviceHead } from '@/content/services'

export const Route = createFileRoute('/career')({
  head: () => serviceHead('Jobs & Career', 'Careers at Bhaktivedanta Gurukula — teachers, residential mentors and administrative staff for a Krishna-conscious residential school in Pune.', '/career'),
  component: Page,
})

const applyHref = `mailto:${contact.email}?subject=${encodeURIComponent('Application — Bhaktivedanta Gurukula')}`
const icons = [GraduationCap, Users, Flower2, Sprout, BookHeart]

function Page() {
  return (
    <>
      <ServiceHero
        slug="career"
        index="07"
        crumb="Jobs & Career"
        title={['Join our team']}
        intro="Careers at Bhaktivedanta Gurukula are for people who care about holistic education and about raising spiritually aware future leaders."
        image="/img/slider/slider-2.jpg"
        imageAlt="The Gurukula community"
        position="center 40%"
        chips={['Teachers', 'Mentors', 'Administration']}
      >
        <a href={applyHref} className="btn btn-brass">
          <Mail className="h-4 w-4" aria-hidden /> Apply by email
        </a>
      </ServiceHero>
      <AfterHero />

      <section className="relative overflow-hidden bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto max-w-[1440px] px-5 pt-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <SectionHead eyebrow="Why work here" lines={['A way of working', <em key="l" className="text-[#8a6f3c]">that is a way of life.</em>]} big />
            <p data-reveal className="max-w-xl text-lg leading-relaxed text-muted md:justify-self-end">
              We are a residential Gurukula based on Krishna consciousness, combining traditional values, academics and character development.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {careerReasons.map((r, i) => (
              <FeatureCard key={r.title} n={i + 1} icon={icons[i]} title={r.title} text={r.text} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <StatBand items={[{ n: 4, label: 'Kinds of role' }, { n: 5, label: 'Reasons to join' }, { n: 3, suffix: ' hrs', label: 'Morning sadhana, 6 to 9 AM' }]} />

      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-24 text-pearl md:py-32">
        <Petals />
        <Mandala className="pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px] opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHead light eyebrow="Current openings" lines={['Where you', <em key="f" className="text-brass">could fit.</em>]} big />
          <ul className="mt-14 border-t border-pearl/15">
            {openings.map((o, i) => (
              <li key={o.title} data-reveal="left" style={{ ['--d' as string]: `${i * 0.06}s` }}>
                <a href={`mailto:${contact.email}?subject=${encodeURIComponent(`Application — ${o.title}`)}`} className="group relative flex items-center gap-6 overflow-hidden border-b border-pearl/15 py-7 md:gap-10 md:py-9">
                  <span aria-hidden className="absolute inset-y-0 left-0 w-0 bg-brass/10 transition-[width] duration-700 ease-[var(--ease-silk)] group-hover:w-full" />
                  <span className="sv-outline-num relative w-12 text-4xl md:w-20 md:text-6xl">{String(i + 1).padStart(2, '0')}</span>
                  <span className="relative flex-1 transition-transform duration-500 ease-[var(--ease-silk)] group-hover:translate-x-3">
                    <span className="display block text-[clamp(1.75rem,3.5vw,3rem)] leading-none text-pearl">{o.title}</span>
                    <span className="mt-2 block max-w-xl text-sm leading-relaxed text-pearl/65">{o.text}</span>
                  </span>
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/50 text-brass transition-all duration-500 group-hover:rotate-45 group-hover:bg-brass group-hover:text-teal-deep">
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p data-reveal className="mt-8 max-w-xl text-pearl/70">Don’t see a role that fits? Send your resume anyway — we keep it for future consideration.</p>
        </div>
      </section>

      <ClosingCTA eyebrow="How to apply" lines={['Write to us', <em key="w" className="text-[#8a6f3c]">today.</em>]}>
        <div data-reveal className="rounded-3xl border border-teal/15 bg-pearl p-8 md:p-10">
          <p className="leading-relaxed text-muted">
            Send your resume and a cover letter to <a href={applyHref} className="link-sweep font-semibold text-teal">{contact.email}</a>. In the cover letter, tell us your qualifications, why you want to join, the role you are applying for and your relevant experience.
          </p>
          <a href={applyHref} className="btn btn-teal mt-8">
            <Mail className="h-4 w-4" aria-hidden /> Email your application
          </a>
        </div>
      </ClosingCTA>

      <MoreServices current="career" />
    </>
  )
}