import { createFileRoute } from '@tanstack/react-router'
import { PageHero, ComingSoon } from '@/components/ui'

export const Route = createFileRoute('/career')({
  head: () => ({
    meta: [
      { title: 'Career — Bhaktivedanta Gurukula' },
      { name: 'description', content: 'Career at Bhaktivedanta Gurukula, Dalimb, Pune.' },
      { property: 'og:title', content: 'Career — Bhaktivedanta Gurukula' },
      { property: 'og:description', content: 'Career at Bhaktivedanta Gurukula, Dalimb, Pune.' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <PageHero eyebrow="Bhaktivedanta Gurukula" title={['Career']} />
      <ComingSoon what="Career" />
    </>
  )
}
