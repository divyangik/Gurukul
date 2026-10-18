import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Mandala, MoreServices, SpotCard } from '@/components/services'
import { Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { contact } from '@/content/site'
import { careerReasons, openings, serviceHead } from '@/content/services'

export const Route = createFileRoute('/career')({
  head: () => serviceHead('Jobs & Career', 'Careers at Bhaktivedanta Gurukula — teachers, residential mentors and administrative staff for a Krishna-conscious residential school in Pune.', '/career'),
  component: Page,
})

const applyHref = `mailto:${contact.email}?subject=${encodeURIComponent('Application — Bhaktivedanta Gurukula')}`

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services · 07"
        title={['Join our team']}
        intro="Careers at Bhaktivedanta Gurukula are for people who care about holistic education and about raising spiritually aware future leaders."
        image="/img/slider/slider-2.jpg"
        imageAlt="The Gurukula community"
        position="center 40%"
      >
        <a data-reveal href={applyHref} className="btn btn-brass mt-10" style={{ ['--d' as string]: '0.45s' }}>
          <Mail className="h-4 w-4" aria-hidden /> Apply by email
        </a>
      </PageHero>

      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <Eyebrow>Why work here</Eyebrow>
              <RevealLines lines={['A way of working', <em key="l" className="text-[#8a6f3c]">that is a way of life.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,4rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              We are a residential Gurukula based on Krishna consciousness, combining traditional values, academics and character development.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {careerReasons.map((r, i) => (
              <SpotCard key={r.title} delay={(i % 3) * 0.08} className={i === 2 ? 'lg:row-span-1' : ''}>
                <div className="p-8">
                  <span className="display text-5xl text-brass">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="display mt-5 text-3xl text-teal">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{r.text}</p>
                </div>
              </SpotCard>
            ))}
          </div>
        </div>
      </section>

      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 text-pearl md:py-28">
        <Mandala className="pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px] opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <Eyebrow light>Current openings</Eyebrow>
          <RevealLines lines={['Where you', <em key="f" className="text-brass">could fit.</em>]} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-pearl" />
          <ul className="mt-12 border-t border-pearl/15">
            {openings.map((o, i) => (
              <li key={o.title} data-reveal="left" style={{ ['--d' as string]: `${i * 0.06}s` }}>
                <a href={`mailto:${contact.email}?subject=${encodeURIComponent(`Application — ${o.title}`)}`} className="group flex items-center gap-6 border-b border-pearl/15 py-7 md:gap-10 md:py-9">
                  <span className="display w-10 text-2xl text-brass md:w-16 md:text-4xl">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 transition-transform duration-500 ease-[var(--ease-silk)] group-hover:translate-x-3">
                    <span className="display block text-[clamp(1.75rem,3.5vw,3rem)] leading-none text-pearl">{o.title}</span>
                    <span className="mt-2 block max-w-xl text-sm leading-relaxed text-pearl/65">{o.text}</span>
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/50 text-brass transition-all duration-500 group-hover:bg-brass group-hover:text-teal-deep">
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p data-reveal className="mt-8 max-w-xl text-pearl/70">Don’t see a role that fits? Send your resume anyway — we keep it for future consideration.</p>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-[1fr_1.2fr] md:px-10">
          <div>
            <Eyebrow>How to apply</Eyebrow>
            <RevealLines lines={['Write to us', <em key="w" className="text-[#8a6f3c]">today.</em>]} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-teal" />
          </div>
          <div data-reveal className="rounded-3xl border border-teal/15 bg-pearl p-8 md:p-10">
            <p className="leading-relaxed text-muted">
              Send your resume and a cover letter to <a href={applyHref} className="link-sweep font-semibold text-teal">{contact.email}</a>. In the cover letter, tell us your qualifications, why you want to join, the role you are applying for and your relevant experience.
            </p>
            <a href={applyHref} className="btn btn-teal mt-8">
              <Mail className="h-4 w-4" aria-hidden /> Email your application
            </a>
          </div>
        </div>
      </section>

      <MoreServices current="career" />
    </>
  )
}