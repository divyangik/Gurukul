import type { CSSProperties } from 'react'

/**
 * Decorative, purely CSS-driven backdrops — one "vibe" per campus space.
 * Everything is deterministic (no Math.random) so server and client render
 * identically, and every layer is aria-hidden + pointer-events-none.
 * Styles live in styles.css under the `cp-` prefix.
 */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

/* ── Hero: golden dust drifting up over the photograph ───────── */

const motes = Array.from({ length: 16 }, (_, i) => ({
  left: `${4 + ((i * 37) % 92)}%`,
  size: 3 + (i % 4) * 2,
  delay: `${-(i * 1.3)}s`,
  dur: `${11 + (i % 5) * 2.4}s`,
  sway: `${(i % 2 ? 1 : -1) * (14 + (i % 4) * 8)}px`,
}))

export function DustField() {
  return (
    <div className="cp-layer" aria-hidden>
      {motes.map((m, i) => (
        <span key={i} className="cp-mote" style={v({ left: m.left, '--s': `${m.size}px`, '--d': m.delay, '--t': m.dur, '--sway': m.sway })} />
      ))}
    </div>
  )
}

/* ── Where We Are: sunrise over hills and fields ─────────────── */

export function SunriseScene() {
  return (
    <div className="cp-sunrise" role="img" aria-label="Illustration of the sun rising over hills and fields">
      <div className="cp-sky" />
      <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMax slice" className="cp-sunrise__svg" aria-hidden>
        <defs>
          <radialGradient id="cp-sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f4dca4" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#d4bf94" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#d4bf94" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="cp-sun">
          <circle cx="300" cy="250" r="150" fill="url(#cp-sun-glow)" className="cp-sun__halo" />
          <circle cx="300" cy="250" r="46" fill="#f4dca4" />
        </g>
        <g className="cp-bird" style={v({ '--d': '0s' })}>
          <path d="M0 0 q8 -9 16 0 q8 -9 16 0" fill="none" stroke="#123f43" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="cp-bird" style={v({ '--d': '-5s', '--y': '70px' })}>
          <path d="M0 0 q6 -7 12 0 q6 -7 12 0" fill="none" stroke="#123f43" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path className="cp-hill cp-hill--far" d="M0 300 C70 240 130 250 200 280 C280 310 330 230 410 235 C490 240 540 285 600 270 V420 H0Z" fill="#3b6a68" />
        <path className="cp-hill cp-hill--mid" d="M0 340 C90 290 160 310 240 330 C330 350 400 290 480 300 C530 306 570 325 600 320 V420 H0Z" fill="#245457" />
        <path className="cp-hill cp-hill--near" d="M0 380 C100 350 200 372 300 380 C400 388 500 360 600 372 V420 H0Z" fill="#123f43" />
        {[0, 1, 2, 3, 4, 5].map((r) => (
          <path key={r} className="cp-furrow" d={`M${-20 + r * 4} ${392 + r * 6} Q300 ${384 + r * 6} ${620 - r * 4} ${392 + r * 6}`} fill="none" stroke="#b79a61" strokeOpacity={0.35 - r * 0.04} strokeWidth="1.5" style={v({ '--d': `${r * 0.12}s` })} />
        ))}
      </svg>
    </div>
  )
}

/* ── Temple: lamp glow and rising embers ─────────────────────── */

const embers = Array.from({ length: 22 }, (_, i) => ({
  left: `${3 + ((i * 29) % 94)}%`,
  size: 2 + (i % 3) * 2,
  delay: `${-(i * 0.9)}s`,
  dur: `${7 + (i % 6) * 1.6}s`,
  sway: `${(i % 2 ? 1 : -1) * (10 + (i % 5) * 7)}px`,
}))

export function EmberScene() {
  return (
    <div className="cp-layer" aria-hidden>
      <span className="cp-lamp cp-lamp--l" />
      <span className="cp-lamp cp-lamp--r" />
      {embers.map((e, i) => (
        <span key={i} className="cp-ember" style={v({ left: e.left, '--s': `${e.size}px`, '--d': e.delay, '--t': e.dur, '--sway': e.sway })} />
      ))}
    </div>
  )
}

/* ── Classrooms: Devanagari letters floating up like chalk dust ─ */

const letters = ['ॐ', 'अ', 'क', 'श्री', 'आ', 'ग', 'म', 'ज्ञ', 'ध', 'ॐ', 'त', 'र']

export function LetterScene() {
  return (
    <div className="cp-layer cp-ruled" aria-hidden>
      {letters.map((ch, i) => (
        <span
          key={i}
          className="cp-letter"
          style={v({ left: `${4 + i * 8.2}%`, '--d': `${-i * 2.1}s`, '--t': `${16 + (i % 4) * 3}s`, '--fs': `${1.6 + (i % 4) * 0.7}rem`, '--rot': `${(i % 2 ? 1 : -1) * (6 + (i % 3) * 5)}deg` })}
        >
          {ch}
        </span>
      ))}
    </div>
  )
}

/* ── Sports ground: racing track, speed lines and a bouncing ball ─ */

export function TrackScene() {
  return (
    <div className="cp-layer" aria-hidden>
      <svg viewBox="0 0 800 400" className="cp-track" preserveAspectRatio="xMidYMid meet">
        {[0, 1, 2, 3].map((l) => (
          <rect
            key={l}
            className="cp-lane"
            x={40 + l * 26}
            y={40 + l * 26}
            width={720 - l * 52}
            height={320 - l * 52}
            rx={160 - l * 26}
            fill="none"
            stroke="#d4bf94"
            strokeOpacity={0.5 - l * 0.08}
            strokeWidth="2"
            style={v({ '--d': `${l * 0.25}s` })}
          />
        ))}
        <circle r="7" fill="#d4bf94" className="cp-runner">
          <animateMotion dur="9s" repeatCount="indefinite" path="M200 53 H600 A147 147 0 0 1 600 347 H200 A147 147 0 0 1 200 53Z" />
        </circle>
      </svg>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="cp-speed" style={v({ top: `${14 + i * 16}%`, '--d': `${-i * 0.9}s`, '--w': `${90 + (i % 3) * 60}px` })} />
      ))}
    </div>
  )
}

export function BouncingBall() {
  return (
    <span className="cp-ball-wrap" aria-hidden>
      <span className="cp-ball" />
      <span className="cp-ball-shadow" />
    </span>
  )
}

/* ── Goshala: swaying grass and drifting butterflies ─────────── */

const blades = Array.from({ length: 64 }, (_, i) => ({
  left: `${(i / 64) * 100}%`,
  h: 26 + ((i * 17) % 46),
  delay: `${-((i * 7) % 30) / 10}s`,
  dur: `${2.6 + (i % 5) * 0.5}s`,
  tone: i % 3,
}))

export function GrassScene() {
  return (
    <div className="cp-grass" aria-hidden>
      {blades.map((b, i) => (
        <span key={i} className={`cp-blade cp-blade--${b.tone}`} style={v({ left: b.left, '--h': `${b.h}px`, '--d': b.delay, '--t': b.dur })} />
      ))}
    </div>
  )
}

export function ButterflyScene() {
  return (
    <div className="cp-layer" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span key={i} className="cp-butterfly" style={v({ top: `${22 + i * 20}%`, '--d': `${-i * 7}s`, '--t': `${24 + i * 5}s` })}>
          <i />
          <i />
        </span>
      ))}
    </div>
  )
}

/* ── Residential life: warm window light and lamp flicker ────── */

export function HomeGlow() {
  return (
    <div className="cp-layer" aria-hidden>
      <span className="cp-window" style={v({ left: '8%', top: '18%' })} />
      <span className="cp-window" style={v({ left: '15%', top: '42%', '--d': '-1.4s' })} />
      <span className="cp-window" style={v({ right: '10%', top: '24%', '--d': '-2.6s' })} />
      <span className="cp-window" style={v({ right: '18%', top: '58%', '--d': '-0.7s' })} />
    </div>
  )
}