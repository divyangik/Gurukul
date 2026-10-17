import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/camp-workshop')({
  head: () => ({
    meta: [
      { title: 'Camp Workshop — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Camp Workshop at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Camp Workshop — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Camp Workshop at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Camp Workshop']} />
      <ComingSoon what="Camp Workshop" />
    </>
  )
}
