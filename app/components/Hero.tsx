'use client'
import dynamic from 'next/dynamic'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#08090D' }}
    >
      {/* HUD corner brackets on entire hero */}
      <span className="hud-tl" style={{ width: 18, height: 18 }} />
      <span className="hud-tr" style={{ width: 18, height: 18 }} />
      <span className="hud-bl" style={{ width: 18, height: 18 }} />
      <span className="hud-br-c" style={{ width: 18, height: 18 }} />

      {/* HUD status labels */}
      <div
        className="absolute top-5 right-8 font-mono text-[10px] tracking-widest text-text-3 hidden md:flex flex-col items-end gap-1"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        <span>SYS / ONLINE</span>
        <span className="text-mint">READY</span>
      </div>
      <div
        className="absolute bottom-5 left-8 font-mono text-[10px] tracking-widest text-text-3 hidden md:block"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        GTM / HOMEOWNER ACQ
      </div>
      <div
        className="absolute bottom-5 right-8 font-mono text-[10px] tracking-widest text-text-4 hidden md:block"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        STAYD COLLECTIVE · 2026
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        {/* Text content */}
        <div>
          <div
            className="section-label mb-6"
            style={{ animationDelay: '0.1s', animation: 'hero-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}
          >
            <span className="text-mint">—</span>
            Director of GTM · Homeowner Acquisition · Stayd Collective
          </div>

          <h1
            className="text-5xl sm:text-6xl xl:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              animation: 'hero-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both',
            }}
          >
            Taking Stayd
            <br />
            to the{' '}
            <span className="text-mint">moon.</span>
          </h1>

          <p
            className="text-text-2 text-lg leading-relaxed max-w-md mb-8"
            style={{ animation: 'hero-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s both' }}
          >
            One builder. One engine. Eight brands launching simultaneously.
            AI-native operator who ships production systems, not decks.
          </p>

          <div
            className="flex items-center gap-4"
            style={{ animation: 'hero-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s both' }}
          >
            <a
              href="#thesis"
              className="bg-mint text-bg font-semibold rounded-full px-6 py-3 text-sm hover:bg-mint-2 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              See the engine →
            </a>
            <a
              href="#receipts"
              className="text-text-2 hover:text-white transition-colors text-sm font-mono"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}
            >
              10 systems shipped ↓
            </a>
          </div>
        </div>

        {/* Three.js sphere */}
        <div className="relative h-[400px] lg:h-[520px] w-full">
          <ThreeScene className="absolute inset-0 w-full h-full" />
          {/* Faint glow behind sphere */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,232,154,0.06) 0%, transparent 70%)',
            }}
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #08090D)' }}
      />
    </section>
  )
}
