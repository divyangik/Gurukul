import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/membership')({
  head: () => ({
    meta: [
      { title: 'Membership — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Membership at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Membership — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Membership at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Membership']} />
      <ComingSoon what="Membership" />
    </>
  )
}
