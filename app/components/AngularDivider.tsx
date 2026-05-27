export default function AngularDivider() {
  return (
    <div className="w-full overflow-hidden" style={{ height: 32 }}>
      <svg
        viewBox="0 0 1440 32"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stepped notch shape */}
        <path
          d="M 0,28 L 120,28 L 160,4 L 680,4 L 720,16 L 760,4 L 1280,4 L 1320,28 L 1440,28 L 1440,32 L 0,32 Z"
          fill="#14171F"
        />
        {/* Mint accent line on top */}
        <path
          d="M 0,28 L 120,28 L 160,4 L 680,4 L 720,16 L 760,4 L 1280,4 L 1320,28 L 1440,28"
          stroke="#00E89A"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />
        {/* Mint dots at notch peaks */}
        <circle cx="160" cy="4" r="2.5" fill="#00E89A" opacity="0.7" />
        <circle cx="720" cy="16" r="2.5" fill="#00E89A" opacity="0.7" />
        <circle cx="1280" cy="4" r="2.5" fill="#00E89A" opacity="0.7" />
      </svg>
    </div>
  )
}
