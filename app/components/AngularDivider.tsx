export default function AngularDivider() {
  return (
    <div className="angle-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path className="div-line-faint" d="M 0 20 L 600 20 L 640 40 L 800 40 L 840 20 L 1440 20" />
        <path className="div-line" d="M 0 60 L 580 60 L 620 40 L 820 40 L 860 60 L 1440 60" />
        <circle className="div-dot" cx="600" cy="20" r="2.5" />
        <circle className="div-dot" cx="840" cy="20" r="2.5" />
        <circle className="div-dot" cx="580" cy="60" r="2.5" />
        <circle className="div-dot" cx="860" cy="60" r="2.5" />
        <circle className="div-dot-pulse" cx="720" cy="40" r="3.5" />
        <line className="div-line-faint" x1="0" y1="40" x2="40" y2="40" />
        <line className="div-line-faint" x1="1400" y1="40" x2="1440" y2="40" />
      </svg>
    </div>
  )
}
