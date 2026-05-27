'use client'
import dynamic from 'next/dynamic'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

export default function Hero() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero-grid hero-load">

          {/* LEFT: copy */}
          <div>
            <div className="hero-eyebrow">
              <span className="badge">Mission brief</span>
              Director of GTM · Homeowner Acquisition
            </div>

            <h1 className="hero-head">
              Taking Stayd<br />to the <span className="mint">moon.</span>
            </h1>

            <p className="hero-lede">
              One builder. One engine. Eight brands launching simultaneously.{' '}
              <span className="em">A multi-tenant homeowner acquisition machine</span> — built and proven
              across three Colorado markets at Renjoy, ready to deploy at 50x the surface area.
            </p>

            <div className="hero-cta-row">
              <a href="#receipts" className="cta-primary">
                See the receipts
                <span className="arrow">→</span>
              </a>
              <a href="#contact" className="cta-secondary">
                Talk to me
              </a>
            </div>

            <div className="hero-presenter">
              <span>From <span className="name">Reid Cowan</span></span>
              <span className="pip"></span>
              <span>Operator &amp; marketing engineer</span>
              <span className="pip"></span>
              <span>Colorado · Renjoy</span>
            </div>
          </div>

          {/* RIGHT: 3D scene */}
          <div className="hero-scene" id="hero-scene">
            <ThreeScene />
            <div className="scene-hud">
              <div className="corner tl"></div>
              <div className="corner tr"></div>
              <div className="corner bl"></div>
              <div className="corner br"></div>
              <div className="label tl-l">ENGINE / <span className="mint-v">ACTIVE</span></div>
              <div className="label tr-l">08 NODES · <span className="mint-v">SYNCED</span></div>
              <div className="label bl-l">STAYD / <span className="mint-v">T-0</span></div>
              <div className="label br-l">ORBIT / <span className="mint-v">STABLE</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
