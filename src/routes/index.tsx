import { createFileRoute } from '@tanstack/react-router'
import { HeroCinematic } from '@/components/home/HeroCinematic'
import { AboutStory } from '@/components/home/AboutStory'
import { InspirationStory } from '@/components/home/InspirationStory'
import { ServicesShowcase } from '@/components/services'
import { AlumniSection, TeamSection, TestimonialsSection } from '@/components/home/PeopleSections'
import { AdmissionsCTA } from '@/components/ui'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Bhaktivedanta Gurukula — Where Wisdom Guides the Next Generation' },
      { name: 'description', content: 'Residential Gurukula in Dalimb, Pune blending modern academics with Vedic education and character.' },
      { property: 'og:title', content: 'Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Residential Gurukula in Dalimb, Pune blending modern academics with Vedic education and character.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <>
      <HeroCinematic />
      <AboutStory />
      <InspirationStory />
      <ServicesShowcase />
      <TeamSection />
      <AlumniSection />
      <TestimonialsSection />
      <AdmissionsCTA />
    </>
  )
}