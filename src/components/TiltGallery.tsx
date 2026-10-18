import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react'
import { Plus } from 'lucide-react'
import { Photo } from '@/components/Photo'
import type { GalleryImage } from '@/components/ui'

/* ── 3D tilt tile (small, crisp, opens the lightbox) ─────────── */

export function TiltTile({
  image,
  onOpen,
  ar = '4 / 3',
  position = 'center 30%',
  variant = 'tile',
  rotate = 0,
}: {
  image: GalleryImage
  onOpen: () => void
  ar?: string
  position?: string
  variant?: 'tile' | 'polaroid'
  rotate?: number
}) {
  const move = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== 'mouse') return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${((x - 0.5) * 16).toFixed(2)}deg`)
    el.style.setProperty('--rx', `${((0.5 - y) * 16).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
  }
  const leave = (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      onPointerMove={move}
      onPointerLeave={leave}
      aria-label={`View larger: ${image.alt}`}
      className={`act-tile act-tile--${variant}`}
      style={{ ['--ar' as string]: ar, ['--rot' as string]: `${rotate}deg` } as CSSProperties}
    >
      <span className="act-tile__frame">
        <Photo
          src={image.src}
          alt={image.alt}
          width={800}
          widths={[400, 800, 1200]}
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="act-tile__img"
          style={{ objectPosition: position }}
        />
        <span className="act-tile__glare" aria-hidden />
        <span className="act-tile__plus" aria-hidden>
          <Plus className="h-4 w-4" />
        </span>
      </span>
    </button>
  )
}

/* ── Gallery: small centred tiles, or polaroids for 1–2 photos ─ */

export function ActivityGallery({
  images,
  start,
  onOpen,
  landscapeSingle = false,
}: {
  images: GalleryImage[]
  start: number
  onOpen: (i: number) => void
  /** A lone landscape photo gets the wider polaroid size instead of the portrait one. */
  landscapeSingle?: boolean
}) {
  const n = images.length

  if (n <= 2) {
    return (
      <div className="mt-14 flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {images.map((img, i) => (
          <div
            key={img.src}
            data-reveal="scale"
            style={{ ['--d' as string]: `${i * 0.12}s`, width: n === 1 && !landscapeSingle ? 'clamp(210px, 24vw, 280px)' : 'clamp(230px, 34vw, 380px)' } as CSSProperties}
          >
            <TiltTile image={img} onOpen={() => onOpen(start + i)} variant="polaroid" ar={n === 1 && !landscapeSingle ? '3 / 4' : '4 / 3'} rotate={i % 2 === 0 ? -3 : 3} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className="act-grid mt-12" style={{ ['--cols-lg' as string]: n === 5 ? 5 : 4 } as CSSProperties}>
      {images.map((img, i) => (
        <li key={img.src} data-reveal="scale" style={{ ['--d' as string]: `${(i % 5) * 0.07}s` } as CSSProperties}>
          <TiltTile image={img} onOpen={() => onOpen(start + i)} />
        </li>
      ))}
    </ul>
  )
}