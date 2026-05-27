export default function Thesis() {
  return (
    <section className="s" id="thesis">
      <div className="angle-ornament" style={{ top: 80, right: -120, width: 540, height: 540 }} aria-hidden="true">
        <svg viewBox="0 0 540 540" preserveAspectRatio="xMidYMid meet">
          <polygon className="line-faint" points="270,30 470,150 470,390 270,510 70,390 70,150" />
          <polygon className="line" points="270,90 410,170 410,370 270,450 130,370 130,170" />
          <polygon className="line" points="270,150 350,200 350,340 270,390 190,340 190,200" />
          <circle className="dot" cx="270" cy="30" r="2.5" />
          <circle className="dot" cx="470" cy="150" r="2.5" />
          <circle className="dot" cx="470" cy="390" r="2.5" />
          <circle className="dot" cx="270" cy="510" r="2.5" />
          <circle className="dot" cx="70" cy="390" r="2.5" />
          <circle className="dot" cx="70" cy="150" r="2.5" />
          <circle className="dot pulse" cx="270" cy="270" r="4" />
          <line className="line-faint" x1="270" y1="30" x2="270" y2="510" />
          <line className="line-faint" x1="70" y1="270" x2="470" y2="270" />
        </svg>
      </div>
      <div className="shell">

        <div className="reveal">
          <div className="s-eyebrow"><span className="num">01</span> The bet</div>
          <h2 className="s-head">
            Stayd&apos;s edge isn&apos;t eight brands.<br />
            <span className="mint">It&apos;s eight brands run by one engine.</span>
          </h2>
        </div>

        <div className="thesis-grid" style={{ marginTop: 80 }}>
          <div className="thesis-pull reveal">
            Every solo PM in the country is forced to be their own marketer, designer, SEO writer, ads operator, CRM admin.{' '}
            <span className="mint">They&apos;re losing.</span>
          </div>
          <div className="thesis-body reveal">
            <p>
              The Stayd play is to build the engine once and theme it n ways. Eight brands today. Twenty-plus tomorrow.
              Each one keeps its local identity. The funnel, the CRM, the conquest data, the AI personalization, the
              analytics layer, the programmatic SEO — all centralized, all configurable,{' '}
              <strong>all running as one piece of infrastructure</strong>.
            </p>
            <p>
              I&apos;ve been doing exactly this — at smaller scale, in microcosm — at <strong>Renjoy</strong>. Three
              Colorado markets. One brand. One operator-marketer. Property-specific opportunity reports, branded
              acquisition funnels, conquest scraping on the entire Airbnb market, an AI research agent that briefs
              sales reps before every call, in-house e-signature, an owner portal that closes the gap between proposal
              and signed contract.
            </p>
            <p>
              The Stayd version is the same playbook with <span className="mint">50x the surface area</span>, a real
              budget, and AI infrastructure that lets one builder operate like a team of five.{' '}
              <strong>That&apos;s the bet.</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
