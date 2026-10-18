import { createFileRoute } from '@tanstack/react-router'
import { ContactActions, Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { Mandala, ServiceCard, ServiceMarquee } from '@/components/services'
import { serviceHead, services } from '@/content/services'

export const Route = createFileRoute('/services')({
  head: () => serviceHead('Services', 'Coaching, consulting, membership, camps, courses, samskaras, careers and keynotes from Bhaktivedanta Gurukula, Dalimb, Pune.', '/services'),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Bhaktivedanta Gurukula"
        title={['Our', 'Services']}
        intro="Eight ways the Gurukula serves families, educators and institutions — from personal coaching to sacred rites, from weekend camps to keynote talks."
        image="/img/festivals/deity-worship-3.jpg"
        imageAlt="Worship at the Gurukula temple"
        position="center 35%"
      />

      <section className="bg-pearl">
        <ServiceMarquee />
      </section>

      <section className="grain jali relative overflow-hidden bg-teal-deep py-20 md:py-28">
        <div className="drift pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-brass/10 blur-3xl" aria-hidden />
        <Mandala className="pointer-events-none absolute -right-48 bottom-0 h-[620px] w-[620px] opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="max-w-2xl">
            <Eyebrow light>What we offer</Eyebrow>
            <RevealLines lines={['Choose where', <em key="b" className="text-brass">to begin.</em>]} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-pearl" />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} delay={(i % 4) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:px-10">
          <div>
            <Eyebrow>Not sure which fits?</Eyebrow>
            <RevealLines lines={['Tell us what', 'you need.']} className="display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-lg leading-relaxed text-muted">
              Write or message us — we will point you to the right programme and answer any question about dates, venue or registration.
            </p>
          </div>
          <ContactActions label="Reach us" />
        </div>
      </section>
    </>
  )
}