import { createFileRoute } from '@tanstack/react-router'
import { Photo } from '@/components/Photo'
import { AdmissionsCTA, Eyebrow, NumberedList, PageHero, RevealLines } from '@/components/ui'

const pillars = [
  {
    title: 'Brahmacarya — Disciplined Living',
    text: 'Students live a regulated life: rising before dawn, keeping simple dress and diet, and learning self-restraint — the foundation of all Vedic study.',
    img: '/img/daily-schedule/temple-sankirtan.jpg',
    alt: 'Students at morning sankirtan in the temple',
  },
  {
    title: 'Sadhana — Daily Spiritual Practice',
    text: 'Mangala-arati, japa meditation, kirtan and scripture study are woven into every day, so devotion becomes a habit rather than an occasion.',
    img: '/img/festivals/deity-worship.jpg',
    alt: 'Students engaged in deity worship',
  },
  {
    title: 'Seva — Service',
    text: 'From serving prasadam to caring for the cows in the goshala, students learn that leadership begins with the willingness to serve.',
    img: '/img/campus/goshala/whatsapp-image-2025-02-05-at-3.46.54-am.jpg',
    alt: 'Cows at the Gurukula goshala',
  },
  {
    title: 'Sastra — Scriptural Study',
    text: 'Systematic study of Bhagavad-gita and Srimad Bhagavatam, with memorisation, recitation and discussion, alongside the modern academic syllabus.',
    img: '/img/vedic-study/yajna-preparation.jpg',
    alt: 'Students preparing offerings for a yajna',
  },
]

const dailyRhythm = [
  'Rise before sunrise and attend mangala-arati in the temple',
  'Japa meditation and personal chanting',
  'Morning yoga and physical exercise',
  'Academic classes through the morning',
  'Prasadam — sanctified vegetarian meals taken together',
  'Vedic study: scripture, Sanskrit, kirtan and instrument training',
  'Evening games on the sports ground',
  'Evening arati, study hour and lights out',
]

export const Route = createFileRoute('/lifestyle-training')({
  head: () => ({
    meta: [
      { title: 'Lifestyle Training — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Brahmacarya, sadhana, seva and sastra — the daily lifestyle training that forms character at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Lifestyle Training — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Brahmacarya, sadhana, seva and sastra — the daily lifestyle training that forms character at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://gurukula-digital-twin.lovable.app/lifestyle-training' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://gurukula-digital-twin.lovable.app/lifestyle-training' }],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Character Before Career"
        title={['Lifestyle', 'Training']}
        intro="The gurukula's real curriculum is a way of life. Four pillars — discipline, devotion, service and scripture — shape every day a student spends here."
        image="/img/festivals/deity-worship-2.jpg"
        imageAlt="Students offering worship in the Gurukula temple"
        position="center 30%"
      />

      {pillars.map((p, i) => {
        const dark = i % 2 === 1
        const flip = i % 2 === 1
        return (
          <section key={p.title} className={`${dark ? 'grain relative bg-slate text-pearl' : i === 0 ? 'bg-pearl' : 'bg-sand'} py-20 md:py-28`}>
            <div className={`mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:grid-cols-2 md:px-10`}>
              <div data-reveal="mask" className={`overflow-hidden rounded-3xl ${flip ? 'md:order-2' : ''}`}>
                <Photo src={p.img} alt={p.alt} ratio={1.3} widths={[640, 1024, 1600]} width={1024} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
              </div>
              <div className={flip ? 'md:order-1' : ''}>
                <Eyebrow light={dark}>{String(i + 1).padStart(2, '0')}</Eyebrow>
                <RevealLines lines={[p.title]} className={`display mt-5 text-[clamp(2rem,4vw,3.25rem)] ${dark ? 'text-pearl' : 'text-teal'}`} />
                <p data-reveal className={`mt-6 max-w-lg leading-relaxed ${dark ? 'text-pearl/70' : 'text-muted'}`}>{p.text}</p>
              </div>
            </div>
          </section>
        )
      })}

      {/* Daily rhythm */}
      <section className="bg-pearl py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <Eyebrow>The Daily Rhythm</Eyebrow>
              <RevealLines lines={['One day,', <em key="d" className="text-[#8a6f3c]">lived well.</em>]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            </div>
            <p data-reveal className="max-w-xl leading-relaxed text-muted md:justify-self-end">
              A gurukula day is full but never frantic. The same rhythm, kept day after day, is what slowly builds extraordinary character.
            </p>
          </div>
          <div className="mt-12">
            <NumberedList items={dailyRhythm} columns={2} />
          </div>
        </div>
      </section>

      <AdmissionsCTA />
    </>
  )
}
