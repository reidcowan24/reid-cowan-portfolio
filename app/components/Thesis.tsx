export default function Thesis() {
  return (
    <section id="thesis" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-10 reveal">
          <span className="text-mint">—</span>
          01 / Thesis
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: bold opinion */}
          <div className="reveal">
            <h2
              className="text-4xl xl:text-5xl font-display font-bold leading-[1.1] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Stayd&apos;s edge isn&apos;t eight brands.
              <br />
              <span className="text-mint">
                It&apos;s eight brands run by one engine.
              </span>
            </h2>
            <p className="text-text-2 mt-6 text-lg leading-relaxed">
              Every solo PM in the country is forced to be their own marketer,
              designer, SEO writer, ads operator, CRM admin.{' '}
              <span
                className="text-mint font-medium"
                style={{
                  background: 'linear-gradient(transparent 70%, rgba(0,232,154,0.2) 70%)',
                }}
              >
                They&apos;re losing.
              </span>
            </p>
          </div>

          {/* Right: body */}
          <div className="reveal reveal-d1 space-y-5 text-text-2 leading-relaxed">
            <p>
              The alternative is to build the thing most operators only dream about: a{' '}
              <strong className="text-white font-medium">multi-tenant homeowner acquisition machine</strong> —
              one where all eight brands share the same intelligence layer, the same
              competitive data, the same campaign infrastructure, and the same AI agents.
            </p>
            <p>
              At Renjoy, I didn&apos;t theorize about this structure. I built it — solo — for
              one brand in three markets. Every playbook I shipped maps directly to
              Stayd&apos;s surface area.{' '}
              <span className="text-white font-medium">
                That&apos;s the bet I&apos;m making here.
              </span>
            </p>
            <p>
              Improve one specialist agent and every brand benefits instantly. That&apos;s
              where the leverage compounds. That&apos;s the Stayd edge nobody else has —
              <em className="text-mint not-italic"> if you build it.</em>
            </p>
            <div
              className="mt-6 pt-6 font-mono text-xs text-text-3 tracking-widest uppercase flex items-center gap-2"
              style={{ borderTop: '1px solid var(--border)', fontFamily: 'var(--font-mono)' }}
            >
              <span className="text-mint">—</span> Also true
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
