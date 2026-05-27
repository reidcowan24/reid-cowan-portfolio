'use client'
import { useState, useRef, useEffect } from 'react'

export default function Receipts() {
  const [expanded, setExpanded] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gridRef.current?.classList.add('collapsed')
  }, [])

  function toggle() {
    const grid = gridRef.current
    if (!grid) return
    const isCollapsed = grid.classList.contains('collapsed')
    if (isCollapsed) {
      grid.classList.remove('collapsed')
      setExpanded(true)
    } else {
      grid.classList.add('collapsed')
      setExpanded(false)
      const section = document.getElementById('receipts')
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="s" id="receipts">
      <div className="angle-ornament" style={{ top: 60, right: -140, width: 460, height: 400 }} aria-hidden="true">
        <svg viewBox="0 0 460 400" preserveAspectRatio="xMidYMid meet">
          <polygon className="line" points="100,80 180,40 260,80 260,160 180,200 100,160" />
          <polygon className="line-faint" points="260,80 340,40 420,80 420,160 340,200 260,160" />
          <polygon className="line" points="180,200 260,160 340,200 340,280 260,320 180,280" />
          <polygon className="line-faint" points="100,160 180,200 180,280 100,320 20,280 20,200" />
          <polygon className="line-faint" points="340,200 420,160 420,240 340,280" />
          <circle className="dot-faint" cx="100" cy="80" r="2" />
          <circle className="dot" cx="180" cy="40" r="2.5" />
          <circle className="dot" cx="260" cy="80" r="2.5" />
          <circle className="dot-faint" cx="340" cy="40" r="2" />
          <circle className="dot" cx="180" cy="200" r="2.5" />
          <circle className="dot pulse" cx="260" cy="160" r="3" />
          <circle className="dot" cx="340" cy="200" r="2.5" />
          <circle className="dot" cx="260" cy="320" r="2.5" />
          <circle className="dot-faint" cx="180" cy="280" r="2" />
        </svg>
      </div>
      <div className="shell">

        <div className="reveal">
          <div className="s-eyebrow"><span className="num">03</span> The receipts</div>
          <h2 className="s-head">
            Ten systems <span className="mint">already</span> built.
          </h2>
          <p className="s-sub">
            The Renjoy stack, end to end. Funnels, data, AI, CRM, brand. Every system below is in production today —
            running quietly under the hood of a property management company you&apos;ve never heard of, generating
            leads, briefing sales reps, signing contracts, kicking off onboarding.
          </p>
        </div>

        <div className="grid cols-3 reveal-stagger" ref={gridRef} id="receipts-grid">

          <div className="card">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 01</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Multi-location <span className="mint">landing pages</span></h3>
            <div className="card-domain">try.renjoy.com</div>
            <p className="card-desc">Replaced the Perspective.co subscription with a Claude Code-built page system. County-routed at clean URLs. Same component library, local copy &amp; comps per market. UTM-enforced.</p>
            <div className="card-stack"><span className="tag">Next.js</span><span className="tag">Tailwind</span><span className="tag">Vercel</span></div>
            <div className="card-foot"><span className="label">Result</span>$31–46 cost per lead vs $75–198 on generic pain-point ads. Same audience. Page is the lever.</div>
          </div>

          <div className="card">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 02</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Lead-to-owner <span className="mint">portal</span></h3>
            <div className="card-domain">owners.renjoy.com</div>
            <p className="card-desc">The portal IS the pitch. Progressive unlock: Welcome → Proforma → Contract → Onboarding. In-house e-signature with signature pad, full audit trail. Lead experiences being a Renjoy owner before they sign.</p>
            <div className="card-stack"><span className="tag">Next.js</span><span className="tag">Supabase RLS</span><span className="tag">In-house e-sign</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>One portal, branded per market. Closes the gap between proposal and signed contract.</div>
          </div>

          <div className="card">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 03</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">GHL <span className="mint">lead-to-customer flow</span></h3>
            <div className="card-domain">GoHighLevel · os.renjoy.com · n8n</div>
            <p className="card-desc">Built the full flow of leads, opportunities, prospective properties, and owner handoff in GHL — wired to os.renjoy.com and n8n for analytics and automation. One complete lead-to-customer pipeline: measurable, trackable, customizable per market.</p>
            <div className="card-stack"><span className="tag">GHL workflows</span><span className="tag">n8n</span><span className="tag">Supabase</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>Consolidate eight brand CRMs into one unified pipeline. Brand as a property. Same lifecycle model, multi-tenant routing.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 04</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Airbnb <span className="mint">conquest engine</span></h3>
            <div className="card-domain">MS-01 · headless · weekly cron</div>
            <p className="card-desc">The moat. Headless Playwright on our own Linux server, session-cookie persistence, 60s+ delays on backfill, Slack alerts on failures &amp; cookie expiration. Every self-managed listing tracked, scored, ranked.</p>
            <div className="card-stack"><span className="tag">Playwright</span><span className="tag">n8n cron</span><span className="tag">Supabase</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>Every Airbnb in 8 markets, enriched, scored, surfaced to the right brand&apos;s SDR queue each morning.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 05</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Meta Ads <span className="mint">research engine</span></h3>
            <div className="card-domain">os.renjoy.com/MetaAds · auto-research</div>
            <p className="card-desc">Meta Ads spend, performance, and creative variants piped into Renjoy OS — paired with an AI research layer that scrapes high-performing ads across the STR industry. The dashboard doesn&apos;t just show what we&apos;ve shipped, it surfaces what&apos;s working outside our walls and feeds it back into the next ad cycle.</p>
            <div className="card-stack"><span className="tag">Meta Ads API</span><span className="tag">Claude API</span><span className="tag">Playwright</span><span className="tag">Supabase</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>Eight brand ad accounts, eight markets of competitor intel. Per-brand insights routed to the shared Ads specialist — what&apos;s winning in each market, surfaced weekly.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 06</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Owner <span className="mint">pain-point research</span></h3>
            <div className="card-domain">15+ call transcripts analyzed</div>
            <p className="card-desc">Took every recorded sales call, ran them through Claude, distilled the ten ranked owner pain points that now drive every ad, page, email, and letter. Top three: poor service from current PM, time-value, out-of-state anxiety.</p>
            <div className="card-stack"><span className="tag">Claude</span><span className="tag">Granola</span><span className="tag">Google Docs</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>Day-1 task: same analysis across all 2,500+ Stayd onboarding calls. Per-market pain-point maps.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 07</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Marketing <span className="mint">analytics dashboard</span></h3>
            <div className="card-domain">os.renjoy.com / Marketing</div>
            <p className="card-desc">Unified view of Meta Ads, Google Ads, direct mail, email — with full UTM attribution down to creative-variant level. Per-market CPL, conversion funnel, time-to-convert. Bad sources flagged red automatically.</p>
            <div className="card-stack"><span className="tag">Supabase views</span><span className="tag">Recharts</span><span className="tag">Meta &amp; Google APIs</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>The central scoreboard the CRO needs. Brand becomes a top-level dimension. Public weekly review.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 08</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Cold email <span className="mint">infrastructure</span></h3>
            <div className="card-domain">myrenjoy.com · dedicated send domain</div>
            <p className="card-desc">Separate sending domain from primary brand, two warmed mailboxes, deliverability ramp, Brian Ferguson voice. 7-email Teller County sequence in GHL, each email mapped to a verified pain point.</p>
            <div className="card-stack"><span className="tag">Instantly</span><span className="tag">GoHighLevel</span><span className="tag">SPF/DKIM/DMARC</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>One backend, n branded outbound identities, each with its own sequence.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 09</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Direct mail <span className="mint">at scale</span></h3>
            <div className="card-domain">postcards + handwritten letters</div>
            <p className="card-desc">Two formats, both QR-tracked. 6×11 postcards in the Renjoy brand guide with real local photography. Handwritten letters via robotic services — Brian&apos;s voice, under 800 chars, P.S. lines, dedicated short-link QR for attribution.</p>
            <div className="card-stack"><span className="tag">Pen Letters</span><span className="tag">LettrLabs</span><span className="tag">Figma / SVG</span></div>
            <div className="card-foot"><span className="label">Stayd translation</span>Hilton Head retirees &amp; Hill Country second-home owners respond to physical mail. Brand-routed at scale.</div>
          </div>

          <div className="card over-limit">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="card-head"><div className="card-num">— 10</div><span className="pill shipped">Shipped</span></div>
            <h3 className="card-title">Renjoy <span className="mint">Intelligence</span></h3>
            <div className="card-domain">research agent · /research</div>
            <p className="card-desc">Templated research per lead: bedroom-matched comps from internal data, Perplexity on the owner, Airbnb scrape for review trend, permit status check, revenue gap math, synthesized brief. Cited. Consistent. Comparable.</p>
            <div className="card-stack"><span className="tag">Claude Sonnet</span><span className="tag">Perplexity sonar-pro</span><span className="tag">Playwright</span></div>
            <div className="card-foot"><span className="label">Result</span>Pre-call prep dropped from 30 min/lead to ~3. Connect rates up.</div>
          </div>

        </div>

        <div className="show-more-wrap">
          <button
            className={`show-more${expanded ? ' expanded' : ''}`}
            type="button"
            aria-expanded={expanded}
            aria-controls="receipts-grid"
            onClick={toggle}
          >
            <span className="label">{expanded ? 'Show less' : 'Show all 10 shipped receipts'}</span>
            <span className="arrow">▾</span>
            <span className="count-pill"><span className="visible-count">{expanded ? '10' : '3'}</span> / 10</span>
          </button>
        </div>

      </div>
    </section>
  )
}
