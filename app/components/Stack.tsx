const categories = [
  {
    name: 'Build',
    tools: [
      { label: 'Claude Code', key: true },
      { label: 'Cursor', key: false },
      { label: 'GitHub', key: false },
      { label: 'Linear', key: false },
      { label: 'Vercel', key: false },
    ],
  },
  {
    name: 'Sites & data',
    tools: [
      { label: 'Next.js', key: false },
      { label: 'Supabase', key: true },
      { label: 'Framer', key: false },
      { label: 'Webflow', key: false },
      { label: 'Tailwind', key: false },
    ],
  },
  {
    name: 'CRM & ops',
    tools: [
      { label: 'Renjoy OS', key: true },
      { label: 'GoHighLevel', key: false },
      { label: 'Supabase', key: false },
      { label: 'n8n', key: false },
    ],
  },
  {
    name: 'Outbound',
    tools: [
      { label: 'Instantly', key: false },
      { label: 'Smartlead', key: false },
      { label: 'Apollo', key: false },
      { label: 'Clay', key: false },
      { label: 'Pen Letters', key: false },
    ],
  },
  {
    name: 'Paid',
    tools: [
      { label: 'Meta Ads', key: false },
      { label: 'Google Ads', key: false },
      { label: 'Reddit Ads', key: false },
      { label: 'LinkedIn', key: false },
    ],
  },
  {
    name: 'AI infra',
    tools: [
      { label: 'Anthropic API', key: true },
      { label: 'Perplexity', key: false },
      { label: 'Granola', key: false },
      { label: 'Replicate', key: false },
    ],
  },
  {
    name: 'Scraping & data',
    tools: [
      { label: 'Playwright', key: true },
      { label: 'Apify', key: false },
      { label: 'PriceLabs Exports', key: false },
      { label: 'AirDNA', key: false },
    ],
  },
  {
    name: 'Analytics & SEO',
    tools: [
      { label: 'PostHog', key: false },
      { label: 'Ahrefs', key: false },
      { label: 'Semrush', key: false },
      { label: 'GSC', key: false },
    ],
  },
]

export default function Stack() {
  return (
    <section
      id="stack"
      className="py-28 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-4 reveal">
          <span className="text-mint">—</span>
          06 / Stack
        </div>
        <h2
          className="text-4xl xl:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-4 reveal"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tools I work in{' '}
          <span className="text-mint">daily.</span>
        </h2>
        <p className="text-text-2 text-lg mb-12 reveal reveal-d1">
          The full stack. No fluff. Everything listed is something I&apos;ve actually shipped with — not something I&apos;ve looked at a course about.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 reveal reveal-d2">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-6"
              style={{
                borderRight: i % 4 < 3 ? '1px solid var(--border)' : 'none',
                borderBottom: i < categories.length - 4 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div
                className="font-mono text-[10px] tracking-widest uppercase text-text-3 mb-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {cat.name}
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {cat.tools.map((t, j) => (
                  <span
                    key={j}
                    className="text-sm"
                    style={{
                      color: t.key ? '#00E89A' : '#B4B7BE',
                      fontWeight: t.key ? 600 : 400,
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {t.label}
                    {j < cat.tools.length - 1 && (
                      <span className="text-text-4 ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
