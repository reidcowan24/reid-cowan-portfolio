'use client'
import { useState } from 'react'

const builds = [
  {
    title: 'Trigger-based AI outbound',
    meta: 'Intent signal → personalized outreach',
    desc: 'Scrapes ownership-change signals and routes personalized outbound copy through Claude. No manual prospecting.',
    tags: ['Claude API', 'n8n', 'Supabase', 'GHL'],
    stayd: 'One system, all 8 brand voices. Fire across every market simultaneously.',
  },
  {
    title: 'Programmatic SEO foundations',
    meta: 'Template → 2,000+ pages at scale',
    desc: 'City/neighborhood landing page engine. One template, unlimited market expansion. GSC-verified indexing.',
    tags: ['Next.js', 'Supabase', 'Vercel', 'GSC'],
    stayd: '8 brands × 8 markets = 64 content clusters, each SEO-native from day one.',
  },
  {
    title: 'AI Sales Handoff Briefs',
    meta: 'Lead context → closer-ready brief',
    desc: 'Synthesizes lead history, call transcripts, and property data into a 60-second handoff document before every close call.',
    tags: ['Claude API', 'Fireflies', 'GHL', 'n8n'],
    stayd: 'Every Stayd brand GM walks into calls with full context. No dropped leads.',
  },
  {
    title: 'RMaaS productization',
    meta: 'Revenue management as a product',
    desc: 'Building the revenue management offer into a productized service with automated pricing, reporting, and owner comms.',
    tags: ['PriceLabs', 'Supabase', 'n8n', 'Claude'],
    stayd: 'Stayd\'s 2,500-unit portfolio becomes a pricing intelligence flywheel.',
  },
  {
    title: 'Owner-side retention engine',
    meta: 'Proactive churn prevention',
    desc: 'Monitors owner satisfaction signals, triggers personalized outreach at risk moments, and routes escalations automatically.',
    tags: ['Claude API', 'Supabase', 'n8n', 'GHL'],
    stayd: 'Brand-specific owner personas with shared retention infrastructure.',
  },
  {
    title: 'Property Revenue Estimates',
    meta: 'Gate-as-conversion-lever framing',
    desc: 'Generates hyper-local revenue projections as the primary conversion mechanic — owners get real numbers, we get qualified leads.',
    tags: ['AirDNA', 'PriceLabs', 'Claude', 'Next.js'],
    stayd: 'Deploy to all 8 brands at once. Shared data layer, brand-specific UX.',
  },
]

export default function Running() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? builds : builds.slice(0, 3)

  return (
    <section
      id="running"
      className="py-28 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-4 reveal">
          <span className="text-mint">—</span>
          02 / Running
        </div>
        <h2
          className="text-4xl xl:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-4 reveal"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          What I&apos;m{' '}
          <span className="text-mint">shipping</span> right now.
        </h2>
        <p className="text-text-2 text-lg mb-12 reveal reveal-d1">
          Six active builds in flight. Each one ports directly to Stayd&apos;s surface area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {visible.map((b, i) => (
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
                  className="text-[10px] font-mono px-2 py-0.5 rounded text-mint"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(0,232,154,0.08)',
                    border: '1px solid rgba(0,232,154,0.2)',
                  }}
                >
                  Active
                </span>
              </div>

              <h3
                className="text-white font-semibold font-display mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {b.title}
              </h3>
              <div
                className="text-text-3 text-xs font-mono mb-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {b.meta}
              </div>
              <p className="text-text-2 text-sm leading-relaxed flex-1 mb-4">{b.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {b.tags.map((t, j) => (
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
                className="pt-3 text-xs text-text-3 leading-snug"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <span className="text-text-4 font-mono text-[10px] uppercase tracking-widest block mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                  Stayd translation
                </span>
                {b.stayd}
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
              ? `Hide builds ▴ | ${builds.length} / ${builds.length}`
              : `Show all ${builds.length} active builds ▾ | 3 / ${builds.length}`}
          </button>
        </div>
      </div>
    </section>
  )
}
