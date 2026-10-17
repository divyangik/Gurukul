import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/consulting')({
  head: () => ({
    meta: [
      { title: 'Consulting — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Consulting at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Consulting — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Consulting at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Consulting']} />
      <ComingSoon what="Consulting" />
    </>
  )
}
