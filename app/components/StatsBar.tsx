const stats = [
  { value: '10', label: 'Systems shipped', sub: 'production at Renjoy' },
  { value: '14+', label: 'Years of marketing', sub: 'across every layer' },
  { value: '6 mo', label: 'AI leverage', sub: 'since everything changed' },
  { value: '1×', label: 'Team size', sub: 'operator-builder · AI-leveraged' },
]

export default function StatsBar() {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="py-8 px-4 reveal"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div
                className="text-mint text-3xl font-display font-bold mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {s.value}
              </div>
              <div className="text-white text-sm font-medium mb-0.5">{s.label}</div>
              <div
                className="text-text-3 text-xs font-mono"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
