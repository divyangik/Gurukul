import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/donation')({
  head: () => ({
    meta: [
      { title: 'Donation — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Donation at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Donation — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Donation at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Donation']} />
      <ComingSoon what="Donation" />
    </>
  )
}
