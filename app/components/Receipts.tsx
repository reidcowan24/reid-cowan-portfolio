'use client'
import { useState } from 'react'

const receipts = [
  {
    title: 'Multi-location landing pages',
    domain: 'try.renjoy.com',
    desc: 'City-specific landing pages with dynamic copy, local proof, and direct lead capture. Built and deployed in 3 markets.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    result: '$31–46 CPL vs $75–198 generic',
    stayd: 'Drop-in for all 8 brands. Shared template, brand-specific tokens.',
  },
  {
    title: 'Lead-to-owner portal',
    domain: 'owners.renjoy.com',
    desc: 'Self-serve owner portal with Supabase RLS row-level access, inline e-sign, and automated onboarding flow.',
    tags: ['Next.js', 'Supabase RLS', 'In-house e-sign'],
    result: 'Closed deals without sales calls',
    stayd: 'One portal architecture. Route owners to their brand at login.',
  },
  {
    title: 'GHL lead-to-customer flow',
    domain: 'os.renjoy.com · GHL',
    desc: 'Full CRM pipeline from lead capture → owner nurture → close, automated with n8n + GoHighLevel workflows.',
    tags: ['GoHighLevel', 'n8n', 'Supabase'],
    result: 'Full funnel automated end-to-end',
    stayd: 'Multi-brand routing. One CRM, 8 brand pipelines.',
  },
  {
    title: 'Airbnb conquest engine',
    domain: 'MS-01 · headless · weekly cron',
    desc: 'Scrapes Airbnb listings in target markets, enriches with ownership data, and feeds qualified prospects to outbound.',
    tags: ['Playwright', 'n8n cron', 'Supabase'],
    result: 'Weekly fresh prospect list, zero manual work',
    stayd: 'Run against all 8 markets. Shared scraper, brand-routed output.',
  },
  {
    title: 'Meta Ads research engine',
    domain: 'os.renjoy.com/MetaAds',
    desc: 'Automated competitive ad research: scrapes Meta Ad Library, clusters copy patterns, surfaces winning angles.',
    tags: ['Meta Ads API', 'Claude API', 'Playwright', 'Supabase'],
    result: 'Weekly competitive intel, automated',
    stayd: 'One research engine. 8 brand perspectives from the same data.',
  },
  {
    title: 'Owner pain-point research',
    domain: '15+ transcripts analyzed',
    desc: 'Used Fireflies + Claude to synthesize 15+ owner call transcripts into a ranked pain-point map that shaped every subsequent product decision.',
    tags: ['Fireflies', 'Claude API', 'Supabase'],
    result: 'Product roadmap grounded in real owner voice',
    stayd: 'Run across all 8 brands. Each GM gets brand-specific insight.',
  },
  {
    title: 'Marketing analytics dashboard',
    domain: 'os.renjoy.com/Marketing',
    desc: 'Unified view of all paid + organic + direct channels. Real-time CPL tracking, channel attribution, and spend efficiency.',
    tags: ['Next.js', 'Supabase', 'PostHog', 'Meta API'],
    result: 'Full funnel visibility in one place',
    stayd: 'Multi-brand view with brand-level drill-down.',
  },
  {
    title: 'Cold email infrastructure',
    domain: 'myrenjoy.com',
    desc: 'Spun up dedicated sending domain with full SPF/DKIM/DMARC, warmed inboxes, and multi-step sequences.',
    tags: ['Instantly', 'GHL', 'SPF/DKIM/DMARC'],
    result: '~40% open rates on warmed sequences',
    stayd: 'Deploy per brand. Shared sequence logic, brand-specific voice.',
  },
  {
    title: 'Direct mail at scale',
    domain: 'Pen Letters · LettrLabs · Figma',
    desc: 'Handwritten-feel postcards and letters with QR-tracked response URLs, A/B tested across neighborhoods.',
    tags: ['Pen Letters', 'LettrLabs', 'Figma', 'QR tracking'],
    result: 'Trackable offline-to-online attribution',
    stayd: 'Brand-specific mailer templates from a shared creative system.',
  },
  {
    title: 'Renjoy Intelligence',
    domain: '/research — market intel engine',
    desc: 'Internal research agent combining Claude Sonnet + Perplexity sonar-pro + Playwright to generate weekly market reports.',
    tags: ['Claude Sonnet', 'Perplexity sonar-pro', 'Playwright'],
    result: 'Weekly market reports, zero analyst hours',
    stayd: 'Scale to all 8 markets. One engine, 8 branded outputs.',
  },
]

export default function Receipts() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? receipts : receipts.slice(0, 3)

  return (
    <section
      id="receipts"
      className="py-28 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-4 reveal">
          <span className="text-mint">—</span>
          03 / Receipts
        </div>
        <h2
          className="text-4xl xl:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-4 reveal"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Ten systems{' '}
          <span className="text-mint">already</span> built.
        </h2>
        <p className="text-text-2 text-lg mb-12 reveal reveal-d1">
          Every system below is live in production at Renjoy. Not demos. Not prototypes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {visible.map((r, i) => (
            <div
              key={i}
              className="hud-card rounded-lg p-6 flex flex-col reveal"
              style={{
                background: '#14171F',
                border: '1px solid var(--border)',
                transitionDelay: `${(i % 3) * 0.08}s`,
              }}
            >
              <span className="hud-tl" />
              <span className="hud-tr" />
              <span className="hud-bl" />
              <span className="hud-br-c" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="font-mono text-[10px] text-text-4 tracking-widest"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: '#B4B7BE',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border)',
                  }}
                >
                  Shipped
                </span>
              </div>

              <h3
                className="text-white font-semibold font-display mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {r.title}
              </h3>
              <div
                className="text-text-3 text-xs font-mono mb-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {r.domain}
              </div>
              <p className="text-text-2 text-sm leading-relaxed flex-1 mb-4">{r.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {r.tags.map((t, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-mono text-text-3 px-1.5 py-0.5 rounded"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div
                className="pt-3"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div
                  className="text-mint text-xs font-mono mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  ✓ {r.result}
                </div>
                <div className="text-text-3 text-xs leading-snug">
                  <span
                    className="text-text-4 font-mono text-[10px] uppercase tracking-widest block mb-1"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Stayd translation
                  </span>
                  {r.stayd}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-mono text-xs text-text-3 hover:text-mint transition-colors flex items-center gap-2 py-2 px-4 rounded"
            style={{
              fontFamily: 'var(--font-mono)',
              border: '1px solid var(--border)',
            }}
          >
            {expanded
              ? `Hide receipts ▴ | ${receipts.length} / ${receipts.length}`
              : `Show all ${receipts.length} shipped receipts ▾ | 3 / ${receipts.length}`}
          </button>
        </div>
      </div>
    </section>
  )
}
