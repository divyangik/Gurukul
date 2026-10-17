import { cdn, srcSet } from '@/lib/img'

type PhotoProps = {
  src: string
  alt: string
  /** Width used for the default src. */
  width?: number
  /** Candidate widths for srcset. */
  widths?: number[]
  /** height / width — crops via the Image CDN when given. */
  ratio?: number
  sizes?: string
  position?: string
  priority?: boolean
  className?: string
  style?: React.CSSProperties
}

/** Responsive, CDN-optimised photograph. */
export function Photo({
  src,
  alt,
  width = 1200,
  widths = [480, 800, 1200, 1600],
  ratio,
  sizes = '100vw',
  position,
  priority,
  className,
  style,
}: PhotoProps) {
  return (
    <img
      src={cdn(src, width, ratio ? Math.round(width * ratio) : undefined, { position })}
      srcSet={srcSet(src, widths, ratio, position)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
      style={style}
    />
  )
}
