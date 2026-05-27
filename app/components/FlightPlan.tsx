export default function FlightPlan() {
  return (
    <section className="s" id="flight">
      <div className="angle-ornament" style={{ top: 80, right: -60, width: 360, height: 540 }} aria-hidden="true">
        <svg viewBox="0 0 360 540" preserveAspectRatio="xMidYMid meet">
          <line className="line" x1="180" y1="20" x2="180" y2="520" />
          <line className="line-faint" x1="100" y1="80" x2="180" y2="120" />
          <line className="line-faint" x1="180" y1="120" x2="260" y2="80" />
          <line className="line-faint" x1="100" y1="280" x2="180" y2="320" />
          <line className="line-faint" x1="180" y1="320" x2="260" y2="280" />
          <line className="line-faint" x1="100" y1="460" x2="180" y2="500" />
          <line className="line-faint" x1="180" y1="500" x2="260" y2="460" />
          <circle className="dot" cx="180" cy="120" r="3" />
          <circle className="dot" cx="180" cy="320" r="3" />
          <circle className="dot pulse" cx="180" cy="500" r="4" />
          <circle className="dot-faint" cx="100" cy="80" r="2" />
          <circle className="dot-faint" cx="260" cy="80" r="2" />
          <circle className="dot-faint" cx="100" cy="280" r="2" />
          <circle className="dot-faint" cx="260" cy="280" r="2" />
          <circle className="dot-faint" cx="100" cy="460" r="2" />
          <circle className="dot-faint" cx="260" cy="460" r="2" />
        </svg>
      </div>
      <div className="shell">

        <div className="reveal">
          <div className="s-eyebrow"><span className="num">05</span> Flight plan</div>
          <h2 className="s-head">
            Not a plan. <span className="mint">A re-deployment.</span>
          </h2>
          <p className="s-sub">
            The same arc I ran at Renjoy, ported to Stayd&apos;s surface area.{' '}
            <strong>Same operator. Same playbook. 50x bigger.</strong>
          </p>
        </div>

        <div className="flight-grid reveal-stagger" style={{ marginTop: 40 }}>

          <div className="flight-card">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="flight-card-header">
              <div className="flight-card-num">01</div>
              <div className="flight-card-meta">
                <div className="flight-card-label">Boost</div>
                <div className="flight-card-days">Days 1—14</div>
              </div>
            </div>
            <h4>Audit, listen, <span className="mint">ship one win.</span></h4>
            <p className="flight-card-frame">Two weeks of listening, then a <strong>credibility deposit</strong> before I touch the engine.</p>
            <ul className="flight-checklist">
              <li>Sit with every brand GM</li>
              <li>Audit every funnel, ad account, CRM</li>
              <li>Pull call transcripts → pain-point map</li>
              <li><span className="mint">Ship</span> one revamped landing page</li>
            </ul>
          </div>

          <div className="flight-card">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="flight-card-header">
              <div className="flight-card-num">02</div>
              <div className="flight-card-meta">
                <div className="flight-card-label">Orbit</div>
                <div className="flight-card-days">Days 15—45</div>
              </div>
            </div>
            <h4>Stand up the <span className="mint">engine.</span></h4>
            <p className="flight-card-frame">Multi-tenant foundation goes live. The systems that <strong>compound</strong> from day 30 on.</p>
            <ul className="flight-checklist">
              <li>Unified CRM, brand-routed</li>
              <li>Landing pages live, <strong>4+ brands</strong></li>
              <li>Conquest scraper, <strong>2 markets</strong></li>
              <li>Property Revenue Estimates, brand-aware</li>
              <li>Programmatic SEO templates ready</li>
            </ul>
          </div>

          <div className="flight-card is-final">
            <span className="corner-tl"></span><span className="corner-tr"></span><span className="corner-bl"></span><span className="corner-br"></span>
            <div className="flight-card-header">
              <div className="flight-card-num">03</div>
              <div className="flight-card-meta">
                <div className="flight-card-label">Lunar approach</div>
                <div className="flight-card-days">Days 46—90</div>
              </div>
            </div>
            <h4>Saturate the <span className="mint">funnel.</span></h4>
            <p className="flight-card-frame"><strong>All eight brands</strong> on the system. Engine at scale, documented for handoff.</p>
            <ul className="flight-checklist">
              <li>Conquest engine, <strong>every market</strong></li>
              <li>Programmatic SEO past <strong>2,000 pages</strong></li>
              <li>AI outbound at scale, brand-routed</li>
              <li>Quarterly market reports shipped</li>
              <li><span className="mint">Documented playbook</span> a hire can run</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
