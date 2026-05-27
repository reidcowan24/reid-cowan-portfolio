export default function Stack() {
  return (
    <section className="s" id="stack">
      <div className="angle-ornament" style={{ top: 100, right: -100, width: 420, height: 420 }} aria-hidden="true">
        <svg viewBox="0 0 420 420" preserveAspectRatio="xMidYMid meet">
          <line className="line-faint" x1="60" y1="60" x2="360" y2="60" />
          <line className="line-faint" x1="60" y1="180" x2="360" y2="180" />
          <line className="line-faint" x1="60" y1="300" x2="360" y2="300" />
          <line className="line-faint" x1="60" y1="60" x2="60" y2="360" />
          <line className="line-faint" x1="180" y1="60" x2="180" y2="360" />
          <line className="line-faint" x1="300" y1="60" x2="300" y2="360" />
          <line className="line" x1="60" y1="60" x2="180" y2="180" />
          <line className="line" x1="180" y1="180" x2="300" y2="60" />
          <line className="line" x1="180" y1="180" x2="300" y2="300" />
          <line className="line" x1="60" y1="300" x2="180" y2="180" />
          <circle className="dot" cx="60" cy="60" r="2.5" />
          <circle className="dot" cx="180" cy="60" r="2.5" />
          <circle className="dot" cx="300" cy="60" r="2.5" />
          <circle className="dot pulse" cx="180" cy="180" r="3" />
          <circle className="dot" cx="300" cy="180" r="2.5" />
          <circle className="dot" cx="60" cy="300" r="2.5" />
          <circle className="dot" cx="180" cy="300" r="2.5" />
          <circle className="dot" cx="300" cy="300" r="2.5" />
        </svg>
      </div>
      <div className="shell">

        <div className="reveal">
          <div className="s-eyebrow"><span className="num">06</span> The stack</div>
          <h2 className="s-head">
            Tools I work in <span className="mint">daily.</span>
          </h2>
          <p className="s-sub">
            The build environment that lets one operator do the work of a team. Eight categories. Every name below either
            has my fingerprints on it from the last twelve months or sits on the roadmap for the next ninety days.
          </p>
        </div>

        <div className="stack-grid reveal-stagger">

          <div className="stack-cat">
            <div className="stack-cat-label">— Build</div>
            <div className="stack-tools">
              <span className="key">Claude Code</span>
              <span>Cursor</span>
              <span>GitHub</span>
              <span>Linear</span>
              <span>Vercel</span>
            </div>
          </div>

          <div className="stack-cat">
            <div className="stack-cat-label">— Sites &amp; data</div>
            <div className="stack-tools">
              <span>Next.js</span>
              <span className="key">Supabase</span>
              <span>Framer</span>
              <span>Webflow</span>
              <span>Tailwind</span>
            </div>
          </div>

          <div className="stack-cat">
            <div className="stack-cat-label">— CRM &amp; ops</div>
            <div className="stack-tools">
              <span className="key">Renjoy OS</span>
              <span>GoHighLevel</span>
              <span>Supabase</span>
              <span>n8n</span>
            </div>
          </div>

          <div className="stack-cat">
            <div className="stack-cat-label">— Outbound</div>
            <div className="stack-tools">
              <span>Instantly</span>
              <span>Smartlead</span>
              <span>Apollo</span>
              <span>Clay</span>
              <span>Pen Letters</span>
            </div>
          </div>

          <div className="stack-cat">
            <div className="stack-cat-label">— Paid</div>
            <div className="stack-tools">
              <span>Meta Ads</span>
              <span>Google Ads</span>
              <span>Reddit Ads</span>
              <span>LinkedIn</span>
            </div>
          </div>

          <div className="stack-cat">
            <div className="stack-cat-label">— AI infra</div>
            <div className="stack-tools">
              <span className="key">Anthropic API</span>
              <span>Perplexity</span>
              <span>Granola</span>
              <span>Replicate</span>
            </div>
          </div>

          <div className="stack-cat">
            <div className="stack-cat-label">— Scraping &amp; data</div>
            <div className="stack-tools">
              <span className="key">Playwright</span>
              <span>Apify</span>
              <span>PriceLabs Exports</span>
              <span>AirDNA</span>
            </div>
          </div>

          <div className="stack-cat">
            <div className="stack-cat-label">— Analytics &amp; SEO</div>
            <div className="stack-tools">
              <span>PostHog</span>
              <span>Ahrefs</span>
              <span>Semrush</span>
              <span>GSC</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
