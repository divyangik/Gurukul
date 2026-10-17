import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/shop')({
  head: () => ({
    meta: [
      { title: 'Shop — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Shop at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Shop — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Shop at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Shop']} />
      <ComingSoon what="Shop" />
    </>
  )
}
