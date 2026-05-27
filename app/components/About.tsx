const timeline = [
  {
    years: '2012–2021',
    badge: 'Team of 5',
    company: 'Dental manufacturer · national scale',
    bullets: ['~$500K budget', 'National distribution', 'Field rep network'],
    body: 'Promotions, advertising, rep engagement at national scale. Learned to deploy a centralized marketing engine through field reps — structurally identical to Stayd\'s brand-GM structure.',
    result: null,
  },
  {
    years: '2021–2023',
    badge: 'Founder',
    company: 'My own marketing agency',
    bullets: ['SEO / brand / web', 'Local SMB clients', 'Full P&L ownership'],
    body: 'Quit and built my own thing. Full-service marketing for local SMBs — sold the work and delivered it. Running a P&L makes you ruthless about ROI.',
    result: null,
  },
  {
    years: '2023–Now',
    badge: 'AI-Leveraged',
    company: 'Renjoy · the AI chapter',
    bullets: ['3 markets', '1 brand', '10 systems shipped'],
    body: 'Same instinct, brand new leverage. What used to need a team of 5, I now ship solo with Claude Code and a fleet of sub-agents.',
    result: '$300K+ in contract value the first year.',
    isMint: true,
  },
]

const alsoTrue = [
  { icon: '🎣', color: '#00E89A', label: 'Fly fishing when the hatch is on' },
  { icon: '🔵', color: '#4A90E2', label: 'Blue is the favorite color' },
  { icon: '🧦', color: '#00E89A', label: 'Wool socks, even in July' },
  { icon: '✦', color: '#00E89A', label: 'Maxing Claude tokens, like it\'s my job' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-4 reveal">
          <span className="text-mint">—</span>
          01.5 / About
        </div>
        <h2
          className="text-4xl xl:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-12 reveal"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          14+ years of marketing.{' '}
          <span className="text-mint">6 months of AI changed everything.</span>
        </h2>

        {/* Timeline cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`hud-card rounded-lg p-6 flex flex-col reveal reveal-d${i + 1}`}
              style={{
                background: '#14171F',
                border: item.isMint
                  ? '1px solid rgba(0,232,154,0.2)'
                  : '1px solid var(--border)',
              }}
            >
              <span className="hud-tl" />
              <span className="hud-tr" />
              <span className="hud-bl" />
              <span className="hud-br-c" />

              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-[10px] tracking-widest text-text-3 uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {item.years}
                </span>
                <span
                  className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: item.isMint ? '#00E89A' : '#B4B7BE',
                    background: item.isMint ? 'rgba(0,232,154,0.08)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${item.isMint ? 'rgba(0,232,154,0.2)' : 'var(--border)'}`,
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <div className="text-white font-medium text-sm mb-3">{item.company}</div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.bullets.map((b, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-mono text-text-3 px-2 py-0.5 rounded"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-text-2 text-sm leading-relaxed flex-1">{item.body}</p>

              {item.result && (
                <div
                  className="mt-5 pt-4 rounded"
                  style={{ borderTop: '1px solid rgba(0,232,154,0.2)' }}
                >
                  <div
                    className="font-mono text-[10px] tracking-widest text-text-3 uppercase mb-1"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    <span className="text-mint">—</span> Result
                  </div>
                  <div className="text-mint font-display font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.result}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Also True strip */}
        <div
          className="relative rounded-lg p-6 reveal"
          style={{ background: '#14171F', border: '1px solid var(--border)' }}
        >
          <span className="hud-tl" />
          <span className="hud-tr" />
          <span className="hud-bl" />
          <span className="hud-br-c" />
          <div
            className="font-mono text-[10px] tracking-widest text-text-3 uppercase mb-5"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="text-mint">—</span> Also true
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {alsoTrue.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-lg leading-none mt-0.5">{item.icon}</span>
                <span className="text-text-2 text-sm leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
