import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/courses-certifications')({
  head: () => ({
    meta: [
      { title: 'Courses Certifications — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Courses Certifications at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Courses Certifications — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Courses Certifications at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Courses Certifications']} />
      <ComingSoon what="Courses Certifications" />
    </>
  )
}
