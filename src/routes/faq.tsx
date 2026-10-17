import { createFileRoute } from '@tanstack/react-router'
import { Accordion, AdmissionsCTA, ContactActions, Eyebrow, PageHero, RevealLines } from '@/components/ui'
import { contact } from '@/content/site'

const faqGroups: { title: string; items: { q: string; a: React.ReactNode }[] }[] = [
  {
    title: 'Admissions',
    items: [
      {
        q: 'How do I apply for admission?',
        a: (
          <>
            Admissions begin with a visit to the campus and a conversation with our team. You can fill in the{' '}
            <a href={contact.admissionForm} target="_blank" rel="noreferrer" className="link-sweep font-semibold text-teal">
              admission enquiry form
            </a>
            , or reach us directly on WhatsApp at {contact.whatsappDisplay}.
          </>
        ),
      },
      {
        q: 'Can we visit the campus before applying?',
        a: 'Yes — we encourage it. Visits are welcome any time of year by prior appointment, between 4 PM and 6 PM. A student will walk you around the five-acre campus and answer your questions. Use the Book a Visit page to schedule.',
      },
      {
        q: 'What is the right age to join?',
        a: 'The gurukula is a residential school for boys. The best time to join is in the younger school years, when the daily rhythm and lifestyle become second nature. Contact us to discuss your child’s specific situation.',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        q: 'Do students follow a recognised academic curriculum?',
        a: 'Yes. Alongside Vedic study, students follow the modern academic curriculum and are prepared for recognised examinations, so pathways to higher education remain fully open — our alumni have gone on to universities in India and abroad.',
      },
      {
        q: 'What does Vedic education include?',
        a: 'Systematic study of Bhagavad-gita and Srimad Bhagavatam, Sanskrit, memorisation and recitation, kirtan and musical instruments, deity worship, and the performance of yajnas — integrated with, not instead of, modern academics.',
      },
      {
        q: 'How many students and teachers are there?',
        a: 'The gurukula currently has around 50 students and 10 teachers, keeping the teacher-to-student ratio personal — closer to a family than an institution.',
      },
    ],
  },
  {
    title: 'Campus Life',
    items: [
      {
        q: 'Where is the gurukula located?',
        a: 'In the village of Dalimb, near Uruli Kanchan, Pune district, Maharashtra — a five-acre residential campus surrounded by farmland, about an hour from Pune city.',
      },
      {
        q: 'What is daily life like for a student?',
        a: 'Students rise before dawn for mangala-arati, practise japa and yoga, attend academic and Vedic classes, take prasadam together, play on the sports ground in the evening, and close the day with evening arati.',
      },
      {
        q: 'What food is served?',
        a: 'Simple, wholesome vegetarian prasadam, cooked and served by the community — much of it from the campus’s own goshala and kitchen garden.',
      },
      {
        q: 'How can parents stay in touch?',
        a: 'Parents are welcome to visit by appointment and can reach the office any time on WhatsApp or by email. Regular updates and photos are shared through our social channels.',
      },
    ],
  },
]

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: 'FAQ — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Answers to common questions about admissions, education and campus life at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'FAQ — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Answers to common questions about admissions, education and campus life at Bhaktivedanta Gurukula.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://gurukula-digital-twin.lovable.app/faq' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: 'https://gurukula-digital-twin.lovable.app/faq' }],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Questions & Answers"
        title={['Frequently Asked', 'Questions']}
        intro="Everything parents usually ask before visiting — about admissions, studies and daily life at the gurukula."
      />

      {faqGroups.map((group, gi) => (
        <section key={group.title} className={`${gi % 2 === 1 ? 'bg-sand' : 'bg-pearl'} py-20 md:py-28`}>
          <div className="mx-auto max-w-[1100px] px-5 md:px-10">
            <Eyebrow>{String(gi + 1).padStart(2, '0')}</Eyebrow>
            <RevealLines lines={[group.title]} className="display mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal" />
            <div className="mt-10">
              <Accordion items={group.items} />
            </div>
          </div>
        </section>
      ))}

      <section className="bg-pearl pb-24 md:pb-32">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <ContactActions label="Still have a question? Ask us directly" />
        </div>
      </section>

      <AdmissionsCTA />
    </>
  )
}
