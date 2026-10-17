/**
 * Image helpers. Photos are served directly from /public/img (the previous
 * Netlify Image CDN is not available here), so width/crop hints are ignored.
 */
export function cdn(src: string, _w: number, _h?: number, _opts: { q?: number; position?: string } = {}) {
  return src
}

export function srcSet(_src: string, _widths: number[], _ratio?: number, _position?: string) {
  return undefined as unknown as string
}
