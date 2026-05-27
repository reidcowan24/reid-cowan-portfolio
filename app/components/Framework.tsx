const robotIcon = (
  <>
    <line x1="0" y1="-8" x2="0" y2="-5.5" stroke="var(--mint)" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="0" cy="-8.5" r="0.9" fill="var(--mint)"/>
    <rect x="-6" y="-5" width="12" height="10" rx="2" fill="none" stroke="var(--mint)" strokeWidth="1"/>
    <circle cx="-2.5" cy="-1.2" r="0.9" fill="var(--mint)"/>
    <circle cx="2.5" cy="-1.2" r="0.9" fill="var(--mint)"/>
    <line x1="-2.5" y1="2.2" x2="2.5" y2="2.2" stroke="var(--mint)" strokeWidth="0.8" strokeLinecap="round"/>
  </>
)

export default function Framework() {
  return (
    <section className="s" id="framework">
      <div className="angle-ornament" style={{ top: 100, left: -80, width: 360, height: 360 }} aria-hidden="true">
        <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid meet">
          <circle className="line-faint" cx="180" cy="180" r="170" fill="none" />
          <circle className="line" cx="180" cy="180" r="120" fill="none" />
          <circle className="line-faint" cx="180" cy="180" r="70" fill="none" />
          <line className="line-faint" x1="10" y1="180" x2="350" y2="180" />
          <line className="line-faint" x1="180" y1="10" x2="180" y2="350" />
          <circle className="dot pulse" cx="180" cy="180" r="4" />
          <circle className="dot" cx="350" cy="180" r="2.5" />
          <circle className="dot" cx="10" cy="180" r="2.5" />
          <circle className="dot" cx="180" cy="10" r="2.5" />
          <circle className="dot" cx="180" cy="350" r="2.5" />
        </svg>
      </div>
      <div className="shell">

        <div className="reveal">
          <div className="s-eyebrow"><span className="num">04</span> The framework</div>
          <h2 className="s-head">
            One Claude. <span className="mint">Eight brands.</span> A fleet of specialists.
          </h2>
        </div>

        <div className="framework-grid">

          <div className="framework-copy reveal">
            <h3>How the engine actually runs</h3>
            <p>
              Stayd isn&apos;t hiring eight marketing teams. It&apos;s spinning up eight instances of one engine — same
              model at the core, one shared specialist toolkit at the edge, themed per brand.
            </p>
            <p>
              <strong>Claude sits in the middle.</strong> Each brand gets its own orchestrator agent that knows that
              brand&apos;s voice, ICP, market, regulations. When an orchestrator needs work done, it routes the request
              through Claude to a <span className="mint">shared pool of specialist sub-agents</span> — design, SEO,
              copy, brand voice, ad ops, analyst — that all brands tap into.
            </p>
            <p>
              <strong>One builder maintains the central engine.</strong> Brand GMs configure their own orchestrators.
              The specialists ship the work.{' '}
              <span className="mint">Improve one specialist and every brand benefits instantly</span> — that&apos;s
              where the leverage is.
            </p>

            <div className="framework-legend">

              <div className="legend-item">
                <span className="legend-marker"><span className="ring"></span><span className="core"></span></span>
                <div>
                  <div className="legend-label">Core · Claude</div>
                  <div className="legend-text">The model. Shared infrastructure. Configured once, deployed everywhere.</div>
                </div>
              </div>

              <div className="legend-item">
                <span className="legend-marker brand"><span className="core"></span></span>
                <div>
                  <div className="legend-label">Brand orchestrators · 8</div>
                  <div className="legend-text">One per Stayd brand. Carries the brand&apos;s voice, market context, ICP, regulatory rules. Routes requests to the shared specialist pool.</div>
                </div>
              </div>

              <div className="legend-item">
                <span className="legend-marker specialist"><span className="core"></span></span>
                <div>
                  <div className="legend-label">Specialist sub-agents · 6 shared</div>
                  <div className="legend-text">Design · SEO · Copy · Brand voice · Ad ops · Analyst. <strong>One pool, accessed by all eight brands.</strong> Brand context passed in at runtime — voice, audience, market rules.</div>
                </div>
              </div>

            </div>
          </div>

          <div className="framework-diagram reveal">
            <svg viewBox="0 0 640 640" preserveAspectRatio="xMidYMid meet" aria-label="Multi-tenant agent architecture diagram">

              <path className="fd-hud-corner" d="M 8 28 L 8 8 L 28 8" />
              <path className="fd-hud-corner" d="M 612 8 L 632 8 L 632 28" />
              <path className="fd-hud-corner" d="M 632 612 L 632 632 L 612 632" />
              <path className="fd-hud-corner" d="M 28 632 L 8 632 L 8 612" />
              <text className="fd-hud-label" x="36" y="20">ENGINE / <tspan fill="var(--mint)">8-TENANT</tspan></text>
              <text className="fd-hud-label" x="604" y="20" textAnchor="end">FLEET / <tspan fill="var(--mint)">14 NODES</tspan></text>
              <text className="fd-hud-label" x="36" y="628">CORE / <tspan fill="var(--mint)">CLAUDE</tspan></text>
              <text className="fd-hud-label" x="604" y="628" textAnchor="end">ORCH / <tspan fill="var(--mint)">ACTIVE</tspan></text>

              <circle className="fd-trunk" cx="320" cy="320" r="210" />

              <line className="fd-trunk" x1="320" y1="320" x2="320" y2="110" />
              <line className="fd-trunk" x1="320" y1="320" x2="468.5" y2="171.5" />
              <line className="fd-trunk active" x1="320" y1="320" x2="530" y2="320" />
              <line className="fd-trunk" x1="320" y1="320" x2="468.5" y2="468.5" />
              <line className="fd-trunk" x1="320" y1="320" x2="320" y2="530" />
              <line className="fd-trunk" x1="320" y1="320" x2="171.5" y2="468.5" />
              <line className="fd-trunk" x1="320" y1="320" x2="110" y2="320" />
              <line className="fd-trunk" x1="320" y1="320" x2="171.5" y2="171.5" />

              <circle className="fd-pulse" r="3.5">
                <animateMotion dur="2.6s" repeatCount="indefinite" path="M 320 320 L 530 320" />
              </circle>
              <circle className="fd-pulse" r="3">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.8s" path="M 320 320 L 468.5 171.5" />
              </circle>
              <circle className="fd-pulse" r="3">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.6s" path="M 320 320 L 320 530" />
              </circle>

              <line className="fd-spec-link" x1="530" y1="320" x2="568" y2="255" />
              <line className="fd-spec-link" x1="530" y1="320" x2="591" y2="276" />
              <line className="fd-spec-link" x1="530" y1="320" x2="603" y2="304" />
              <line className="fd-spec-link" x1="530" y1="320" x2="603" y2="336" />
              <line className="fd-spec-link" x1="530" y1="320" x2="591" y2="364" />
              <line className="fd-spec-link" x1="530" y1="320" x2="568" y2="385" />

              <rect className="fd-spec-pool" x="545" y="233" width="80" height="174" rx="20" ry="20" />
              <text className="fd-spec-pool-label" x="585" y="225">— shared pool —</text>

              <path className="fd-pool-route" d="M 320 110 Q 480 130 545 290" />
              <path className="fd-pool-route" d="M 468.5 171.5 Q 540 220 555 270" />
              <path className="fd-pool-route" d="M 468.5 468.5 Q 540 420 555 370" />
              <path className="fd-pool-route" d="M 320 530 Q 480 510 545 350" />
              <path className="fd-pool-route" d="M 171.5 468.5 Q 290 540 545 380" />
              <path className="fd-pool-route" d="M 110 320 Q 250 240 545 310" />
              <path className="fd-pool-route" d="M 171.5 171.5 Q 320 130 545 290" />

              {/* Brand nodes */}
              <g transform="translate(320, 110)">
                <circle className="fd-brand-node" r="18" />
                <g pointerEvents="none">{robotIcon}</g>
              </g>
              <g transform="translate(468.5, 171.5)">
                <circle className="fd-brand-node" r="18" />
                <g pointerEvents="none">{robotIcon}</g>
              </g>
              <g transform="translate(530, 320)">
                <circle className="fd-brand-node exploded" r="20" />
              </g>
              <g transform="translate(468.5, 468.5)">
                <circle className="fd-brand-node" r="18" />
                <g pointerEvents="none">{robotIcon}</g>
              </g>
              <g transform="translate(320, 530)">
                <circle className="fd-brand-node" r="18" />
                <g pointerEvents="none">{robotIcon}</g>
              </g>
              <g transform="translate(171.5, 468.5)">
                <circle className="fd-brand-node" r="18" />
                <g pointerEvents="none">{robotIcon}</g>
              </g>
              <g transform="translate(110, 320)">
                <circle className="fd-brand-node" r="18" />
                <g pointerEvents="none">{robotIcon}</g>
              </g>
              <g transform="translate(171.5, 171.5)">
                <circle className="fd-brand-node" r="18" />
                <g pointerEvents="none">{robotIcon}</g>
              </g>

              <text className="fd-brand-label" x="320" y="80">B·01</text>
              <text className="fd-brand-label" x="488" y="144">B·02</text>
              <text className="fd-brand-label exploded" x="530" y="360">B·03</text>
              <text className="fd-brand-label" x="488" y="498">B·04</text>
              <text className="fd-brand-label" x="320" y="562">B·05</text>
              <text className="fd-brand-label" x="152" y="498">B·06</text>
              <text className="fd-brand-label" x="78" y="324">B·07</text>
              <text className="fd-brand-label" x="152" y="144">B·08</text>

              {/* Specialist nodes */}
              <g transform="translate(568, 255)">
                <circle className="fd-spec-node" r="22" />
                <g pointerEvents="none">
                  <line x1="-5.5" y1="5.5" x2="2" y2="-2" stroke="var(--text)" strokeWidth="1.3" strokeLinecap="round"/>
                  <path d="M 1,-3 L 5.5,1.5 L 3.5,5 L -0.5,2 Z" fill="var(--mint)"/>
                </g>
              </g>
              <g transform="translate(591, 276)">
                <circle className="fd-spec-node" r="22" />
                <g pointerEvents="none">
                  <path d="M -6,-4 L 6,-4 Q 7.5,-4 7.5,-2.5 L 7.5,1.5 Q 7.5,3 6,3 L -1.5,3 L -4,6 L -3,3 L -6,3 Q -7.5,3 -7.5,1.5 L -7.5,-2.5 Q -7.5,-4 -6,-4 Z" fill="none" stroke="var(--text)" strokeWidth="1.1" strokeLinejoin="round"/>
                </g>
              </g>
              <g transform="translate(603, 304)">
                <circle className="fd-spec-node" r="22" />
                <g pointerEvents="none">
                  <rect x="-4.5" y="-6" width="9" height="12" rx="0.8" fill="none" stroke="var(--text)" strokeWidth="1.1"/>
                  <line x1="-2.5" y1="-3" x2="2.5" y2="-3" stroke="var(--text)" strokeWidth="0.9" strokeLinecap="round"/>
                  <line x1="-2.5" y1="-0.5" x2="2.5" y2="-0.5" stroke="var(--text)" strokeWidth="0.9" strokeLinecap="round"/>
                  <line x1="-2.5" y1="2" x2="1" y2="2" stroke="var(--text)" strokeWidth="0.9" strokeLinecap="round"/>
                </g>
              </g>
              <g transform="translate(603, 336)">
                <circle className="fd-spec-node" r="22" />
                <g pointerEvents="none">
                  <circle cx="-1.5" cy="-1.5" r="4.5" fill="none" stroke="var(--text)" strokeWidth="1.3"/>
                  <line x1="2" y1="2" x2="5.5" y2="5.5" stroke="var(--text)" strokeWidth="1.6" strokeLinecap="round"/>
                </g>
              </g>
              <g transform="translate(591, 364)">
                <circle className="fd-spec-node" r="22" />
                <g pointerEvents="none">
                  <path d="M -5,-2.5 L 3.5,-5.5 L 3.5,5.5 L -5,2.5 Z" fill="none" stroke="var(--text)" strokeWidth="1.1" strokeLinejoin="round"/>
                  <line x1="-5" y1="-2.5" x2="-5" y2="2.5" stroke="var(--text)" strokeWidth="1.1" strokeLinecap="round"/>
                  <line x1="5.5" y1="-3.5" x2="7" y2="-4.5" stroke="var(--text)" strokeWidth="1" strokeLinecap="round"/>
                  <line x1="5.5" y1="0" x2="7.5" y2="0" stroke="var(--text)" strokeWidth="1" strokeLinecap="round"/>
                  <line x1="5.5" y1="3.5" x2="7" y2="4.5" stroke="var(--text)" strokeWidth="1" strokeLinecap="round"/>
                </g>
              </g>
              <g transform="translate(568, 385)">
                <circle className="fd-spec-node" r="22" />
                <g pointerEvents="none">
                  <line x1="-6" y1="5" x2="6" y2="5" stroke="var(--text)" strokeWidth="1.1" strokeLinecap="round"/>
                  <rect x="-5" y="0" width="2.4" height="5" fill="var(--mint)"/>
                  <rect x="-1.2" y="-3" width="2.4" height="8" fill="var(--mint)"/>
                  <rect x="2.6" y="-5.5" width="2.4" height="10.5" fill="var(--mint)"/>
                </g>
              </g>

              {/* Hub — Claude */}
              <circle className="fd-hub-glow" cx="320" cy="320" r="70" />
              <circle className="fd-hub-bg" cx="320" cy="320" r="58" />
              <g transform="translate(320, 297)" pointerEvents="none">
                <path d="M 0,-13 C 1.4,-3.5 3.5,-1.4 13,0 C 3.5,1.4 1.4,3.5 0,13 C -1.4,3.5 -3.5,1.4 -13,0 C -3.5,-1.4 -1.4,-3.5 0,-13 Z" fill="var(--mint)" filter="drop-shadow(0 0 6px var(--mint))"/>
              </g>
              <text className="fd-hub-label" x="320" y="328">Claude</text>
              <text className="fd-hub-sublabel" x="320" y="352">8-TENANT ENGINE</text>

            </svg>
          </div>

        </div>

      </div>
    </section>
  )
}
