// Node positions: center (200,250), radius 160, 8 nodes clockwise from top
// B01(200,90) B02(313,137) B03(360,250)=beacon B04(313,363) B05(200,410)
// B06(87,363) B07(40,250) B08(87,137)
// Specialist nodes at x=468, y=[100,162,224,286,348,410]

const cx = 200
const cy = 250
const r = 160

function brandPos(i: number) {
  const angle = (-Math.PI / 2) + (i * Math.PI * 2) / 8
  return {
    x: Math.round(cx + r * Math.cos(angle)),
    y: Math.round(cy + r * Math.sin(angle)),
  }
}

const brands = Array.from({ length: 8 }, (_, i) => brandPos(i))
// B03 is index 2 (angle=0°, rightmost)
const beacon = brands[2] // {x:360, y:250}

const specialists = [
  { label: 'Design', x: 468, y: 100 },
  { label: 'Voice', x: 468, y: 162 },
  { label: 'Copy', x: 468, y: 224 },
  { label: 'SEO', x: 468, y: 286 },
  { label: 'Ads', x: 468, y: 348 },
  { label: 'Data', x: 468, y: 410 },
]

const brandLabels = [
  { dx: 0, dy: -18, anchor: 'middle' },   // B01 top
  { dx: 16, dy: -12, anchor: 'start' },   // B02 top-right
  { dx: 20, dy: 4, anchor: 'start' },     // B03 right (beacon — no label)
  { dx: 16, dy: 14, anchor: 'start' },    // B04 bottom-right
  { dx: 0, dy: 18, anchor: 'middle' },    // B05 bottom
  { dx: -16, dy: 14, anchor: 'end' },     // B06 bottom-left
  { dx: -20, dy: 4, anchor: 'end' },      // B07 left
  { dx: -16, dy: -12, anchor: 'end' },    // B08 top-left
]

export default function Framework() {
  return (
    <section
      id="framework"
      className="py-28 px-6"
      style={{ borderTop: '1px solid var(--border)', background: '#0a0b10' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-4 reveal">
          <span className="text-mint">—</span>
          04 / Framework
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-16 items-center">
          {/* Left: copy + legend */}
          <div>
            <h2
              className="text-4xl xl:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-6 reveal"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              One Claude.{' '}
              <span className="text-mint">Eight brands.</span>{' '}
              A fleet of specialists.
            </h2>
            <p className="text-text-2 leading-relaxed mb-8 reveal reveal-d1">
              Each brand runs its own orchestrator — carrying brand voice, ICP, and market context.
              Specialists are shared. Improve one and every brand benefits instantly.{' '}
              <span className="text-white font-medium">That&apos;s where the leverage compounds.</span>
            </p>

            {/* Legend */}
            <div className="space-y-4 reveal reveal-d2">
              {[
                {
                  color: '#00E89A',
                  title: 'Core · Claude',
                  desc: 'The model. Shared infrastructure.',
                },
                {
                  color: '#6F7480',
                  title: 'Brand orchestrators · 8',
                  desc: 'One per Stayd brand. Carries brand voice, ICP, market context.',
                },
                {
                  color: '#B4B7BE',
                  title: 'Specialist sub-agents · 6 shared',
                  desc: 'Design · SEO · Copy · Brand voice · Ad ops · Analyst. One pool, all eight brands.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ background: item.color }}
                  />
                  <div>
                    <span
                      className="text-white text-sm font-medium font-mono"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {item.title}
                    </span>
                    <span className="text-text-3 text-sm"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SVG diagram */}
          <div className="relative reveal reveal-d1">
            {/* HUD frame labels */}
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              {/* Corner labels */}
              <div
                className="absolute top-2 left-3 font-mono text-[9px] text-text-4 tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                ENGINE / 8-TENANT
              </div>
              <div
                className="absolute top-2 right-3 font-mono text-[9px] text-text-4 tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                FLEET / 14 NODES
              </div>
              <div
                className="absolute bottom-2 left-3 font-mono text-[9px] text-text-4 tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                CORE / CLAUDE
              </div>
              <div
                className="absolute bottom-2 right-3 font-mono text-[9px] text-mint tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                ORCH / ACTIVE
              </div>

              <svg
                viewBox="0 0 560 500"
                className="w-full"
                style={{ background: '#08090D' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Faint Q-curve arcs from other brands to specialist pool */}
                {brands.map((b, i) => {
                  if (i === 2) return null // skip beacon
                  const poolCx = 468
                  const poolCy = 255
                  const mx = (b.x + poolCx) / 2
                  const my = (b.y + poolCy) / 2 - 30
                  return (
                    <path
                      key={`arc-${i}`}
                      d={`M ${b.x} ${b.y} Q ${mx} ${my} ${poolCx} ${poolCy}`}
                      stroke="#00E89A"
                      strokeWidth="0.5"
                      strokeDasharray="3 5"
                      opacity="0.12"
                      fill="none"
                    />
                  )
                })}

                {/* Trunk lines: center to each brand */}
                {brands.map((b, i) => (
                  <line
                    key={`trunk-${i}`}
                    x1={cx} y1={cy}
                    x2={b.x} y2={b.y}
                    stroke={i === 2 ? '#00E89A' : '#3F4350'}
                    strokeWidth={i === 2 ? 1.5 : 0.75}
                    strokeDasharray={i === 2 ? 'none' : '2 4'}
                  />
                ))}

                {/* Lines: beacon to each specialist */}
                {specialists.map((s, i) => (
                  <line
                    key={`spec-line-${i}`}
                    x1={beacon.x} y1={beacon.y}
                    x2={s.x} y2={s.y}
                    stroke="#00E89A"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                ))}

                {/* Shared pool envelope */}
                <rect
                  x="448" y="78" width="88" height="344"
                  rx="8"
                  fill="rgba(0,232,154,0.04)"
                  stroke="#00E89A"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  strokeOpacity="0.3"
                />
                <text
                  x="492" y="70"
                  textAnchor="middle"
                  fill="#6F7480"
                  fontSize="8"
                  fontFamily="'JetBrains Mono', monospace"
                  letterSpacing="1.5"
                >
                  — SHARED POOL —
                </text>

                {/* Brand nodes (non-beacon) */}
                {brands.map((b, i) => {
                  if (i === 2) return null
                  const lbl = brandLabels[i]
                  return (
                    <g key={`brand-${i}`}>
                      <circle
                        cx={b.x} cy={b.y} r={16}
                        fill="#14171F"
                        stroke="#3F4350"
                        strokeWidth="1"
                      />
                      {/* Robot head icon (simplified) */}
                      <rect x={b.x - 5} y={b.y - 6} width={10} height={8} rx={2} fill="#3F4350" />
                      <circle cx={b.x - 2} cy={b.y - 2} r={1.5} fill="#6F7480" />
                      <circle cx={b.x + 2} cy={b.y - 2} r={1.5} fill="#6F7480" />
                      <rect x={b.x - 3} y={b.y + 1} width={6} height={1.5} rx={0.5} fill="#6F7480" />
                      <text
                        x={b.x + lbl.dx}
                        y={b.y + lbl.dy + (i < 4 ? -8 : 22)}
                        textAnchor={lbl.anchor as 'middle' | 'start' | 'end'}
                        fill="#6F7480"
                        fontSize="8"
                        fontFamily="'JetBrains Mono', monospace"
                        letterSpacing="0.5"
                      >
                        {`B·0${i + 1}`}
                      </text>
                    </g>
                  )
                })}

                {/* Beacon node (B·03) — glowing rings */}
                <circle cx={beacon.x} cy={beacon.y} r={28} fill="rgba(0,232,154,0.04)">
                  <animate attributeName="r" values="22;38;22" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx={beacon.x} cy={beacon.y} r={20} fill="rgba(0,232,154,0.06)">
                  <animate attributeName="r" values="16;26;16" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle
                  cx={beacon.x} cy={beacon.y} r={10}
                  fill="rgba(0,232,154,0.2)"
                  stroke="#00E89A"
                  strokeWidth="1.5"
                />
                <circle cx={beacon.x} cy={beacon.y} r={4} fill="#00E89A" />
                <text
                  x={beacon.x} y={beacon.y + 26}
                  textAnchor="middle"
                  fill="#00E89A"
                  fontSize="8"
                  fontFamily="'JetBrains Mono', monospace"
                  letterSpacing="0.5"
                >
                  B·03
                </text>

                {/* Center hub */}
                <circle
                  cx={cx} cy={cy} r={28}
                  fill="#14171F"
                  stroke="#00E89A"
                  strokeWidth="1.5"
                />
                {/* Sparkle icon */}
                <path
                  d={`M ${cx} ${cy - 10} L ${cx + 3} ${cy - 3} L ${cx + 10} ${cy} L ${cx + 3} ${cy + 3} L ${cx} ${cy + 10} L ${cx - 3} ${cy + 3} L ${cx - 10} ${cy} L ${cx - 3} ${cy - 3} Z`}
                  fill="#00E89A"
                  opacity="0.9"
                />
                <text
                  x={cx} y={cy + 20}
                  textAnchor="middle"
                  fill="#00E89A"
                  fontSize="8"
                  fontFamily="'JetBrains Mono', monospace"
                  letterSpacing="1"
                >
                  CLAUDE
                </text>
                <text
                  x={cx} y={cy + 30}
                  textAnchor="middle"
                  fill="#3F4350"
                  fontSize="6"
                  fontFamily="'JetBrains Mono', monospace"
                  letterSpacing="0.5"
                >
                  8-TENANT ENGINE
                </text>

                {/* Specialist nodes */}
                {specialists.map((s, i) => (
                  <g key={`spec-${i}`}>
                    <circle
                      cx={s.x} cy={s.y} r={18}
                      fill="#14171F"
                      stroke="#00E89A"
                      strokeWidth="1"
                      strokeOpacity="0.6"
                    />
                    <text
                      x={s.x}
                      y={s.y + 4}
                      textAnchor="middle"
                      fill="#00E89A"
                      fontSize="8"
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      {s.label}
                    </text>
                  </g>
                ))}

                {/* animateMotion: data pulses on trunk lines */}
                <circle r="3" fill="#00E89A" opacity="0.9">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path={`M ${cx} ${cy} L ${beacon.x} ${beacon.y}`}
                  />
                </circle>
                <circle r="2.5" fill="#00E89A" opacity="0.7">
                  <animateMotion
                    dur="1.8s"
                    begin="0.6s"
                    repeatCount="indefinite"
                    path={`M ${beacon.x} ${beacon.y} L ${specialists[2].x} ${specialists[2].y}`}
                  />
                </circle>
                <circle r="2.5" fill="#00E89A" opacity="0.7">
                  <animateMotion
                    dur="2.2s"
                    begin="1.1s"
                    repeatCount="indefinite"
                    path={`M ${beacon.x} ${beacon.y} L ${specialists[4].x} ${specialists[4].y}`}
                  />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
