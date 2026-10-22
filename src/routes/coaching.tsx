import { createFileRoute } from '@tanstack/react-router'
import { Mail, MessageCircle, Sprout, Users } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { MoreServices, SpotCard } from '@/components/services'
import { ContactActions } from '@/components/ui'
import { AfterHero, ClosingCTA, FeatureCard, OrbitCloud, Petals, SectionHead, ServiceHero, StatBand, Wave } from '@/components/service-kit'
import { contact } from '@/content/site'
import { coachingAreas, coachingOfferings, coaches, serviceHead } from '@/content/services'

export const Route = createFileRoute('/coaching')({
  head: () => serviceHead('Coaching', 'Residential and online coaching for students, parents and teachers — vision, relationships, parenting, career and spiritual life.', '/coaching'),
  component: Page,
})

function Page() {
  return (
    <>
      <ServiceHero
        slug="coaching"
        index="01"
        crumb="Coaching"
        title={['Coaching for', 'a balanced life']}
        intro="Residential Gurukula and online coaching for students, parents and teachers — so that personal, professional and spiritual goals finally pull in the same direction."
        image="/img/talentshow/student-presentations.jpg"
        imageAlt="Students giving presentations"
        position="center 30%"
        chips={['Students', 'Parents', 'Teachers']}
      >
        <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Coaching')}`} className="btn btn-brass">
          <Mail className="h-4 w-4" aria-hidden /> Book a session
        </a>
      </ServiceHero>
      <AfterHero />

      <section className="relative overflow-hidden bg-pearl py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pt-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              eyebrow="What we coach"
              lines={['Every part', <em key="l" className="text-[#8a6f3c]">of life.</em>]}
              big
              intro="Coaching here is not advice from the outside. It is a conversation that helps you see your own life clearly — and act on it."
            />
          </div>
          <OrbitCloud items={coachingAreas} slug="coaching" />
        </div>
      </section>

      <StatBand
        items={[
          { n: 6, label: 'Coaches' },
          { n: 8, label: 'Areas of life' },
          { n: 2, label: 'Ways to begin' },
          { n: 27, suffix: '+', label: 'Years of coaching experience' },
        ]}
      />

      <section className="grain jali relative isolate overflow-hidden bg-teal-deep py-24 text-pearl md:py-32">
        <Petals />
        <div className="drift pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHead light eyebrow="Two ways to begin" lines={['Start alone,', <em key="t" className="text-brass">or together.</em>]} big />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {coachingOfferings.map((o, i) => (
              <FeatureCard key={o.title} dark n={i + 1} icon={i === 0 ? Sprout : Users} title={o.title} text={o.text} delay={i * 0.1}>
                <a
                  href={o.kind === 'email' ? `mailto:${contact.email}?subject=${encodeURIComponent(o.title)}` : contact.whatsappUrl}
                  target={o.kind === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="btn btn-brass mt-8 self-start"
                >
                  {o.kind === 'email' ? <Mail className="h-4 w-4" aria-hidden /> : <MessageCircle className="h-4 w-4" aria-hidden />}
                  {o.action}
                </a>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-sand py-24 md:py-32">
        <Wave className="text-teal-deep" />
        <div className="mx-auto max-w-[1440px] px-5 pt-6 md:px-10">
          <SectionHead eyebrow="Your coaches" lines={['Guided by those who', <em key="c" className="text-[#8a6f3c]">live what they teach.</em>]} />
          <div className="mx-auto mt-14 grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((c, i) => (
              <SpotCard key={c.name} delay={(i % 3) * 0.08} className="shadow-[0_24px_50px_-30px_rgba(12,46,49,0.35)]">
                <div className="relative flex h-full flex-col items-center px-6 pb-8 pt-10 text-center">
                  <span aria-hidden className="display absolute right-5 top-3 text-5xl text-brass/30">{String(i + 1).padStart(2, '0')}</span>
                  <div className="relative">
                    <span aria-hidden className="absolute -inset-2 rounded-full border border-dashed border-brass/60 transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:rotate-90" />
                    <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-pearl shadow-[0_18px_40px_-18px_rgba(12,46,49,0.55)]">
                      <Photo src={c.img} alt={c.name} ratio={1} widths={[240, 400, 600]} width={400} sizes="144px" className="h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="display mt-7 text-[1.65rem] leading-tight text-teal">{c.name}</h3>
                  <p className="eyebrow mt-3 text-[#8a6f3c]">{c.role}</p>
                  <span aria-hidden className="my-5 h-px w-12 bg-brass" />
                  <p className="text-sm leading-relaxed text-muted">{c.text}</p>
                  <span className="sv-card-line" aria-hidden />
                </div>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA dark eyebrow="Begin" lines={['Ready for a', <em key="c" className="text-[#8a6f3c]">clearer path?</em>]} text="Book a session or join the community — we will reply personally.">
        <ContactActions label="Book a session or join the community" />
      </ClosingCTA>

      <MoreServices current="coaching" />
    </>
  )
}