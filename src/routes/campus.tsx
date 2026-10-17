import { createFileRoute } from '@tanstack/react-router'
import { Photo } from '@/components/Photo'
import { AdmissionsCTA, Eyebrow, GalleryTile, PageHero, RevealLines, useLightbox, type GalleryImage } from '@/components/ui'
import { contact } from '@/content/site'

const spaces: { title: string; text: string; images: GalleryImage[] }[] = [
  {
    title: 'The Temple',
    text: 'The heart of the campus. Every day begins and ends here — mangala-arati before dawn, darshan and kirtan through the day, and evening arati as the sun sets over the fields.',
    images: [
      { src: '/img/daily-schedule/temple-sankirtan.jpg', alt: 'Students at morning sankirtan in the Gurukula temple' },
      { src: '/img/festivals/deity-photo-2.jpg', alt: 'The presiding deities of the Gurukula temple' },
    ],
  },
  {
    title: 'Classrooms',
    text: 'Simple, light-filled learning spaces where students study the modern academic curriculum alongside Vedic texts — seated close to their teachers, in the gurukula tradition.',
    images: [
      { src: '/img/academic-study/academic-study.jpg', alt: 'Gurukula students studying on floor mats in a classroom with a teacher' },
      { src: '/img/academic-study/academic-study-1.jpg', alt: 'A wider view of students studying in the classroom' },
      { src: '/img/academic-study/academic-study-2.jpg', alt: 'Students reading and writing with a teacher nearby' },
    ],
  },
  {
    title: 'Sports Ground',
    text: 'Open grounds for kabaddi, kho-kho, football and athletics — where the evening games hour keeps bodies strong and spirits high.',
    images: [{ src: '/img/campus/sports-ground/sports.jpg', alt: 'Students playing on the Gurukula sports ground' }],
  },
  {
    title: 'Goshala',
    text: 'Home to the campus cows, the goshala is where students learn go-seva — feeding, grooming and caring for the cows as part of daily life.',
    images: [{ src: '/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg', alt: 'Cows at the Gurukula goshala' }],
  },
]

const allImages: GalleryImage[] = spaces.flatMap((s) => s.images)

export const Route = createFileRoute('/campus')({
  head: () => ({
    meta: [
      { title: 'Campus — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'The five-acre residential campus of Bhaktivedanta Gurukula at Dalimb, Uruli Kanchan, Pune — temple, classrooms, sports ground and goshala.' },
      { property: 'og:title', content: 'Campus — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'The five-acre residential campus of Bhaktivedanta Gurukula at Dalimb, Uruli Kanchan, Pune.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://gurukula-digital-twin.lovable.app/campus' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://gurukula-digital-twin.lovable.app/campus' }],
  }),
  component: Page,
})

function Page() {
  const { open, node } = useLightbox(allImages)
  let cursor = 0

  return (
    <>
      <PageHero
        eyebrow="Dalimb · Uruli Kanchan · Pune"
        title={['The Campus']}
        intro="Five acres of open sky, fields and quiet — a residential campus designed for simple living and deep learning, an hour from Pune city."
        image="/img/slider/slider-1.jpg"
        imageAlt="The Bhaktivedanta Gurukula campus at Dalimb"
        position="center"
      />

      {/* Location strip */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-[1fr_1.4fr] md:items-end md:px-10">
          <div>
            <Eyebrow>Where We Are</Eyebrow>
            <RevealLines lines={['Away from the noise,', <em key="c" className="text-[#8a6f3c]">close to nature.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
          </div>
          <div data-reveal className="space-y-5 md:justify-self-end">
            <p className="max-w-xl leading-relaxed text-muted">
              The Gurukula sits in the village of Dalimb near Uruli Kanchan, surrounded by farmland and open hills. The setting is deliberate: clean air, home-grown food, and the unhurried pace of village life.
            </p>
            <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="link-sweep font-semibold text-teal">
              Find us on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Spaces */}
      {spaces.map((space, si) => {
        const start = cursor
        cursor += space.images.length
        const dark = si % 2 === 0
        return (
          <section key={space.title} aria-labelledby={`space-${si}`} className={`${dark ? 'grain relative bg-slate text-pearl' : 'bg-sand'} py-20 md:py-28`}>
            <div className="mx-auto max-w-[1440px] px-5 md:px-10">
              <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
                <div>
                  <Eyebrow light={dark}>{String(si + 1).padStart(2, '0')}</Eyebrow>
                  <RevealLines lines={[space.title]} className={`display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] ${dark ? 'text-pearl' : 'text-teal'}`} />
                </div>
                <p data-reveal className={`max-w-xl leading-relaxed md:justify-self-end ${dark ? 'text-pearl/70' : 'text-muted'}`}>{space.text}</p>
              </div>
              <div className={`mt-12 grid gap-4 ${space.images.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
                {space.images.map((img, i) => (
                  <GalleryTile key={img.src} image={img} onOpen={() => open(start + i)} ratio={1.4} delay={i * 0.08} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Residential life */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-2 md:px-10">
          <div data-reveal="mask" className="overflow-hidden rounded-3xl">
            <Photo src="/img/slider/slider-2.jpg" alt="Students on the Gurukula campus" ratio={1.3} widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <div>
            <Eyebrow>Residential Life</Eyebrow>
            <RevealLines lines={['A home,', <em key="h" className="text-[#8a6f3c]">not a hostel.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <p data-reveal className="mt-6 max-w-lg leading-relaxed text-muted">
              Students live together in ashram-style accommodation, cook and serve prasadam together, and grow up as one family under the care of their teachers — the way a gurukula has always been.
            </p>
          </div>
        </div>
      </section>

      <AdmissionsCTA title={['Come and', 'see it yourself.']} />
      {node}
    </>
  )
}
