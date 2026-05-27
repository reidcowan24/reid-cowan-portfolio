export default function About() {
  return (
    <section className="s about-section" id="about">
      <div className="shell">

        <div className="reveal">
          <div className="s-eyebrow"><span className="num">01.5</span> About</div>
          <h2 className="s-head">
            14+ years of marketing. <span className="mint">6 months of AI changed everything.</span>
          </h2>
        </div>

        <div className="about-row reveal-stagger">

          <div className="about-card">
            <span className="node"></span>
            <div className="meta">
              <span className="years">2012 — 2021</span>
              <span>·</span>
              <span>Team of 5</span>
            </div>
            <h3>Dental manufacturer · <span className="mint">national scale</span></h3>
            <div className="role-line">$500K budget · promotions · advertising · rep engagement</div>
            <p>
              <strong>~$500K budget, team of 5, national distribution network.</strong> Learned how to deploy a
              centralized marketing engine through field reps who own the relationships — structurally identical to
              Stayd&apos;s brand-GM structure.
            </p>
          </div>

          <div className="about-card">
            <span className="node"></span>
            <div className="meta">
              <span className="years">2021 — 2023</span>
              <span>·</span>
              <span>Founder</span>
            </div>
            <h3>My own <span className="mint">marketing agency</span></h3>
            <div className="role-line">SEO · brand · web · local SMB</div>
            <p>
              Quit and built my own thing. Full-service marketing for local SMBs — sold the work and delivered it.
              Running a P&amp;L makes you ruthless about ROI in a way no salaried role ever does.
            </p>
          </div>

          <div className="about-card current">
            <span className="node"></span>
            <div className="meta">
              <span className="years">2023 — Now</span>
              <span>·</span>
              <span>AI-leveraged</span>
            </div>
            <h3>Renjoy · <span className="mint">the AI chapter</span></h3>
            <div className="role-line">3 markets · 1 brand · 10 systems shipped</div>
            <p>
              Same instinct, brand new leverage. What used to need a team of 5 and a real budget,{' '}
              <span className="mint">I now ship solo with Claude Code and a fleet of sub-agents</span>. Stayd is where
              that leverage meets a holdco surface area.
            </p>
            <div className="about-result">
              <span className="about-result-label">— Result</span>
              <div className="about-result-body">
                Drove <span className="num">$300K+</span> in contract value the first year.
              </div>
            </div>
          </div>

        </div>

        <div className="about-fun reveal">
          <div className="about-fun-label">— ALSO <span className="mint-v">TRUE</span></div>
          <div className="fun-items">
            <span className="fun-item">
              <svg className="fun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 12c2-4 6-6 10-6 3 0 5 1 6 2"/>
                <path d="M19 8l3-2-3-2"/>
                <path d="M3 12c2 4 6 6 10 6 3 0 5-1 6-2"/>
                <circle cx="16" cy="11" r="0.6" fill="currentColor"/>
              </svg>
              <em>Fly fishing</em> when the hatch is on
            </span>
            <span className="fun-item">
              <svg className="fun-icon is-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="12" r="8"/>
              </svg>
              <em>Blue</em> is the favorite color
            </span>
            <span className="fun-item">
              <svg className="fun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 3h6v8l3 4v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2l-3-4V9z"/>
                <path d="M9 11h6"/>
              </svg>
              <em>Wool socks</em>, even in July
            </span>
            <span className="fun-item">
              <svg className="fun-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M 12,2 C 13.1,8.3 14.7,10.9 22,12 C 14.7,13.1 13.1,15.7 12,22 C 10.9,15.7 9.3,13.1 2,12 C 9.3,10.9 10.9,8.3 12,2 Z"/>
              </svg>
              <em>Maxing Claude tokens</em>, like it&apos;s my job
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
