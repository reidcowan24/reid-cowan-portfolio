export default function StatsBar() {
  return (
    <div className="stats">
      <div className="shell">
        <div className="stats-row reveal">
          <div className="stat">
            <div className="stat-label">Systems shipped</div>
            <div className="stat-num"><span className="mint">10</span></div>
            <div className="stat-foot">production at Renjoy</div>
          </div>
          <div className="stat">
            <div className="stat-label">Years of marketing</div>
            <div className="stat-num">14<span className="sup">+</span></div>
            <div className="stat-foot">across every layer of the stack</div>
          </div>
          <div className="stat">
            <div className="stat-label">AI leverage</div>
            <div className="stat-num"><span className="mint">6<span className="sup">mo</span></span></div>
            <div className="stat-foot">since everything changed</div>
          </div>
          <div className="stat">
            <div className="stat-label">Team size</div>
            <div className="stat-num">1<span className="sup">×</span></div>
            <div className="stat-foot">operator-builder · AI-leveraged</div>
          </div>
        </div>
      </div>
    </div>
  )
}
