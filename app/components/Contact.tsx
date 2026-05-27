const contacts = [
  {
    label: 'Email',
    value: 'reidcowan24@gmail.com',
    href: 'mailto:reidcowan24@gmail.com',
    icon: '→',
    sub: 'Fastest path',
  },
  {
    label: 'LinkedIn',
    value: '/in/reid-cowan-b4b23256',
    href: 'https://www.linkedin.com/in/reid-cowan-b4b23256/',
    icon: '→',
    sub: 'Full background',
  },
  {
    label: 'Schedule a call',
    value: 'Pick a time',
    href: '#',
    icon: '→',
    sub: 'Calendly — 30 min',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-4 reveal">
          <span className="text-mint">—</span>
          07 / Mission control
        </div>
        <h2
          className="text-5xl sm:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-4 reveal"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Let&apos;s{' '}
          <span className="text-mint">light it up.</span>
        </h2>
        <p className="text-text-2 text-lg mb-14 reveal reveal-d1">
          I&apos;ve got the engine. You&apos;ve got the footprint. Let&apos;s talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`hud-card group rounded-lg p-6 flex flex-col gap-1 transition-colors reveal reveal-d${i + 1}`}
              style={{
                background: '#14171F',
                border: '1px solid var(--border)',
                textDecoration: 'none',
              }}
            >
              <span className="hud-tl" />
              <span className="hud-tr" />
              <span className="hud-bl" />
              <span className="hud-br-c" />

              <div
                className="font-mono text-[10px] tracking-widest uppercase text-text-3 mb-2"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {c.label}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-sm group-hover:text-mint transition-colors">
                  {c.value}
                </span>
                <span className="text-mint text-lg group-hover:translate-x-1 transition-transform inline-block">
                  {c.icon}
                </span>
              </div>
              <div className="text-text-4 text-xs font-mono mt-1" style={{ fontFamily: 'var(--font-mono)' }}>
                {c.sub}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span
            className="font-mono text-[11px] text-text-4 tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            © 2026 Reid Cowan
          </span>
          <span
            className="font-mono text-[11px] text-text-4 tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Built for Stayd Collective · one engine · eight brands
          </span>
        </div>
      </div>
    </section>
  )
}
