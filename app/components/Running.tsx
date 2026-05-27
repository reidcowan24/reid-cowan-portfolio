'use client'
import { useState } from 'react'

export default function Running() {
  const [expanded, setExpanded] = useState(false)

  function toggle() {
    setExpanded((prev) => {
      if (prev) {
        const section = document.getElementById('running')
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
      return !prev
    })
  }

  return (
    <section className="s" id="running">
      <div className="angle-ornament" style={{ top: 120, left: -100, width: 380, height: 480 }} aria-hidden="true">
        <svg viewBox="0 0 380 480" preserveAspectRatio="xMidYMid meet">
          <line className="line" x1="40" y1="60" x2="280" y2="100" />
          <line className="line" x1="280" y1="100" x2="180" y2="240" />
          <line className="line" x1="180" y1="240" x2="40" y2="60" />
          <line className="line-faint" x1="40" y1="60" x2="80" y2="240" />
          <line className="line-faint" x1="80" y1="240" x2="180" y2="240" />
          <line className="line-faint" x1="80" y1="240" x2="280" y2="100" />
          <line className="line" x1="80" y1="240" x2="40" y2="400" />
          <line className="line" x1="40" y1="400" x2="220" y2="380" />
          <line className="line" x1="220" y1="380" x2="80" y2="240" />
          <line className="line-faint" x1="220" y1="380" x2="280" y2="100" />
          <circle className="dot" cx="40" cy="60" r="2.5" />
          <circle className="dot" cx="280" cy="100" r="2.5" />
          <circle className="dot" cx="180" cy="240" r="2.5" />
          <circle className="dot" cx="80" cy="240" r="2.5" />
          <circle className="dot" cx="40" cy="400" r="2.5" />
          <circle className="dot pulse" cx="220" cy="380" r="3" />
        </svg>
      </div>
      <div className="shell">

        <div className="reveal">
          <div className="s-eyebrow"><span className="num">02</span> In motion</div>
          <h2 className="s-head">
            What I&apos;m <span className="mint">shipping</span> right now.
          </h2>
          <p className="s-sub">
            Active builds at Renjoy as of this week. These become the first plays I&apos;d port to Stayd on day one —
            and the ones I&apos;d hand off to brand teams as fully productized systems within ninety days.
          </p>
        </div>

        <div className={`grid cols-3 reveal-stagger${expanded ? '' : ' collapsed'}`} id="running-grid">

          <div className="card">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— Active / 01</div><span className="pill live">Shipping</span></div>
            <h3 className="card-title">Trigger-based <span className="mint">AI outbound</span></h3>
            <p className="card-desc">The conquest engine flags listings in distress — rating drop, calendar dark, response rate falling, lost Guest Favorite badge. An agent writes a personalized intro referencing the prospect&apos;s actual property. SDRs reach owners at peak motivation, not at random.</p>
            <div className="card-stack"><span className="tag">Claude API</span><span className="tag">Playwright</span><span className="tag">Supabase triggers</span><span className="tag">Instantly</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>Every distressed listing in eight markets, ranked daily, routed to the right brand&apos;s SDR with the message already written.</div>
          </div>

          <div className="card">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— Active / 02</div><span className="pill live">Shipping</span></div>
            <h3 className="card-title">Programmatic <span className="mint">SEO foundations</span></h3>
            <p className="card-desc">Neighborhood pages, regulatory-by-jurisdiction pages, revenue calculator pages. AI-drafted, human-edited, schema-marked. The compounding asset that takes paid spend off the critical path.</p>
            <div className="card-stack"><span className="tag">Next.js</span><span className="tag">Claude API</span><span className="tag">Ahrefs</span><span className="tag">Supabase</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>Templates × 8 markets × hundreds of neighborhoods = thousands of indexed pages, brand-specific, in 90 days.</div>
          </div>

          <div className="card">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— Active / 03</div><span className="pill live">Shipping</span></div>
            <h3 className="card-title">AI Sales <span className="mint">Handoff Briefs</span></h3>
            <p className="card-desc">The moment a lead moves to &quot;qualified,&quot; an agent writes a 600-word brief on the prospect, property, and market. Brian walks into every call already prepared.</p>
            <div className="card-stack"><span className="tag">Claude Sonnet</span><span className="tag">Supabase MCP</span><span className="tag">n8n</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>One brief generator, brand-aware, serving every AE across every market. Standardized handoff.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— Active / 04</div><span className="pill live">Shipping</span></div>
            <h3 className="card-title">RMaaS <span className="mint">productization</span></h3>
            <p className="card-desc">Revenue Management as a Service as a standalone offer with its own funnel, landing pages, and sales motion — for owners who want to stay self-managed but outsource pricing strategy.</p>
            <div className="card-stack"><span className="tag">PriceLabs</span><span className="tag">Slack alerts</span><span className="tag">RPI / Comp Gap</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>A second product line for owners not ready for full management. Wider top-of-funnel, more conversions later.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— Active / 05</div><span className="pill live">Shipping</span></div>
            <h3 className="card-title">Owner-side <span className="mint">retention engine</span></h3>
            <p className="card-desc">The other side of acquisition: building churn-risk detection, owner-NPS pulses, and proactive performance reporting into the owner portal so we don&apos;t lose what we sign.</p>
            <div className="card-stack"><span className="tag">Next.js</span><span className="tag">Supabase</span><span className="tag">Resend</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>Acquisition without retention is a leaky bucket. Same engine watches 2,500+ Stayd owners across brands.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— Active / 06</div><span className="pill live">Shipping</span></div>
            <h3 className="card-title">Property <span className="mint">Revenue Estimates</span></h3>
            <p className="card-desc">Owners enter their property details and contact info — then get an instant onsite revenue estimate built from real Renjoy comps. The gate is the conversion lever: fair value exchange, captured leads come in qualified and primed. Embeds anywhere, lives on every funnel.</p>
            <div className="card-stack"><span className="tag">Next.js</span><span className="tag">market_listings</span><span className="tag">Supabase RLS</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>The universal top-of-funnel hook across all eight brands. Live on every brand site, embeddable in any campaign — captured leads routed to the right brand&apos;s SDR.</div>
          </div>

        </div>

        <div className="show-more-wrap">
          <button
            className={`show-more${expanded ? ' expanded' : ''}`}
            type="button"
            aria-expanded={expanded}
            aria-controls="running-grid"
            onClick={toggle}
          >
            <span className="label">{expanded ? 'Show less' : 'Show all 6 active builds'}</span>
            <span className="arrow">▾</span>
            <span className="count-pill"><span className="visible-count">{expanded ? '6' : '3'}</span> / 6</span>
          </button>
        </div>

      </div>
    </section>
  )
}
