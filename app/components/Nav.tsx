export default function Nav() {
  return (
    <nav
      style={{ borderBottom: '1px solid var(--border)' }}
      className="sticky top-0 z-50 backdrop-blur-md bg-bg/80"
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: '#00E89A',
              animation: 'logo-glow 3s ease-in-out infinite',
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: '#08090D' }}
            />
          </span>
          <span
            className="font-display font-semibold text-sm text-white hidden sm:block"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Reid Cowan
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-mint"
              style={{ animation: 'pip-pulse 2s ease-in-out infinite' }}
            />
            <span
              className="text-mint font-mono text-[10px] tracking-widest uppercase hidden sm:block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Available
            </span>
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden lg:flex items-center gap-5">
          {[
            ['#thesis', '01 Thesis'],
            ['#about', '02 About'],
            ['#running', '03 Running'],
            ['#receipts', '04 Receipts'],
            ['#framework', '05 Framework'],
            ['#flight-plan', '06 Flight plan'],
            ['#stack', '07 Stack'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-text-3 hover:text-white transition-colors text-sm"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.05em' }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="shrink-0 bg-mint text-bg font-semibold text-sm rounded-full px-4 py-1.5 hover:bg-mint-2 transition-colors"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Let&apos;s talk →
        </a>
      </div>
    </nav>
  )
}
