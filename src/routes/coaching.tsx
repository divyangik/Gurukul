import { createFileRoute } from '@tanstack/react-router'
import { Mail, MessageCircle } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { ChipCloud, MoreServices, SpotCard } from '@/components/services'
import { ContactActions, Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { contact } from '@/content/site'
import { coachingAreas, coachingOfferings, coaches, serviceHead } from '@/content/services'

export const Route = createFileRoute('/coaching')({
  head: () => serviceHead('Coaching', 'Residential and online coaching for students, parents and teachers — vision, relationships, parenting, career and spiritual life.', '/coaching'),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services · 01"
        title={['Coaching for', 'a balanced life']}
        intro="Residential Gurukula and online coaching for students, parents and teachers — so that personal, professional and spiritual goals finally pull in the same direction."
        image="/img/talentshow/student-presentations.jpg"
        imageAlt="Students giving presentations"
        position="center 30%"
      />

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[1fr_1.3fr] md:px-10">
          <div>
            <Eyebrow>What we coach</Eyebrow>
            <RevealLines lines={['Every part', <em key="l" className="text-[#8a6f3c]">of life.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
          </div>
          <div>
            <p data-reveal className="max-w-xl text-lg leading-relaxed text-muted">
              Coaching here is not advice from the outside. It is a conversation that helps you see your own life clearly — and act on it.
            </p>
            <div className="mt-8">
              <ChipCloud items={coachingAreas} />
            </div>
          </div>
        </div>
      </section>

      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <div className="drift pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow light>Two ways to begin</Eyebrow>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {coachingOfferings.map((o, i) => (
              <SpotCard key={o.title} dark delay={i * 0.1}>
                <div className="flex h-full flex-col p-8 md:p-12">
                  <span className="display text-7xl text-brass/60">{`0${i + 1}`}</span>
                  <h3 className="display mt-6 text-[clamp(2rem,3.5vw,3rem)] text-pearl">{o.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-pearl/72">{o.text}</p>
                  <a
                    href={o.kind === 'email' ? `mailto:${contact.email}?subject=${encodeURIComponent(o.title)}` : contact.whatsappUrl}
                    target={o.kind === 'email' ? undefined : '_blank'}
                    rel="noreferrer"
                    className="btn btn-brass mt-8 self-start"
                  >
                    {o.kind === 'email' ? <Mail className="h-4 w-4" aria-hidden /> : <MessageCircle className="h-4 w-4" aria-hidden />}
                    {o.action}
                  </a>
                </div>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow>Your coaches</Eyebrow>
          <RevealLines lines={['Guided by those who', 'live what they teach.']} className="display mt-5 max-w-3xl text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coaches.map((c, i) => (
              <SpotCard key={c.name} delay={(i % 3) * 0.08}>
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo src={c.img} alt={c.name} ratio={0.75} widths={[480, 800, 1100]} width={800} sizes="(min-width: 1024px) 30vw, 90vw" className="h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-[var(--ease-silk)] group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <p className="eyebrow text-[#8a6f3c]">{c.role}</p>
                  <h3 className="display mt-3 text-3xl text-teal">{c.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{c.text}</p>
                </div>
              </SpotCard>
            ))}
          </div>
          <div className="mt-14 max-w-3xl">
            <ContactActions label="Book a session or join the community" />
          </div>
        </div>
      </section>

      <MoreServices current="coaching" />
    </>
  )
}