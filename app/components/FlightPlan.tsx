const phases = [
  {
    num: '01',
    label: 'Boost',
    days: 'Days 1–14',
    headline: 'Audit, listen, ship one win.',
    framing: 'Two weeks of listening, then a credibility deposit before I touch the engine.',
    deliverables: [
      'Sit with every brand GM',
      'Audit every funnel, ad account, CRM',
      'Pull call transcripts → pain-point map',
      'Ship one revamped landing page',
    ],
    isFinal: false,
  },
  {
    num: '02',
    label: 'Orbit',
    days: 'Days 15–45',
    headline: 'Stand up the engine.',
    framing: 'Multi-tenant foundation goes live. Systems that compound from day 30 on.',
    deliverables: [
      'Unified CRM, brand-routed',
      'Landing pages live, 4+ brands',
      'Conquest scraper, 2 markets',
      'Property Revenue Estimates, brand-aware',
      'Programmatic SEO templates ready',
    ],
    isFinal: false,
  },
  {
    num: '03',
    label: 'Lunar approach',
    days: 'Days 46–90',
    headline: 'Saturate the funnel.',
    framing: 'All eight brands on the system. Engine at scale, documented for handoff.',
    deliverables: [
      'Conquest engine, every market',
      'Programmatic SEO past 2,000 pages',
      'AI outbound at scale, brand-routed',
      'Quarterly market reports shipped',
      'Documented playbook a hire can run',
    ],
    isFinal: true,
  },
]

export default function FlightPlan() {
  return (
    <section
      id="flight-plan"
      className="py-28 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-4 reveal">
          <span className="text-mint">—</span>
          05 / Flight plan
        </div>
        <h2
          className="text-4xl xl:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-3 reveal"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Not a plan.{' '}
          <span className="text-mint">A re-deployment.</span>
        </h2>
        <p className="text-text-2 text-lg mb-12 reveal reveal-d1">
          The same arc I ran at Renjoy, ported to Stayd&apos;s surface area. Same operator. Same playbook. 50× bigger.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {phases.map((p, i) => (
            <div
              key={i}
              className={`hud-card rounded-lg p-7 flex flex-col reveal reveal-d${i + 1}`}
              style={{
                background: p.isFinal ? 'rgba(0,232,154,0.03)' : '#14171F',
                border: p.isFinal
                  ? '1px solid rgba(0,232,154,0.2)'
                  : '1px solid var(--border)',
              }}
            >
              <span className="hud-tl" />
              <span className="hud-tr" />
              <span className="hud-bl" />
              <span className="hud-br-c" />

              {/* Stage number + phase label */}
              <div className="flex items-baseline justify-between mb-2">
                <span
                  className="font-display font-bold text-5xl leading-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: p.isFinal ? 'rgba(0,232,154,0.25)' : 'rgba(255,255,255,0.08)',
                  }}
                >
                  {p.num}
                </span>
                <div className="text-right">
                  <div
                    className="font-mono text-[10px] tracking-widest uppercase"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: p.isFinal ? '#00E89A' : '#6F7480',
                    }}
                  >
                    {p.label}
                  </div>
                  <div
                    className="font-mono text-[10px] text-text-4 tracking-widest"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {p.days}
                  </div>
                </div>
              </div>

              {/* Dashed divider */}
              <div
                className="mb-5"
                style={{
                  borderTop: `1px dashed ${p.isFinal ? 'rgba(0,232,154,0.3)' : 'var(--border)'}`,
                }}
              />

              <h3
                className="font-display font-bold text-xl mb-2 leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: p.isFinal ? '#00E89A' : '#ffffff' }}
              >
                {p.headline}
              </h3>
              <p className="text-text-3 text-sm leading-relaxed mb-5">{p.framing}</p>

              <ul className="space-y-2 mt-auto">
                {p.deliverables.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-text-2">
                    <span className="text-mint mt-0.5 shrink-0">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
