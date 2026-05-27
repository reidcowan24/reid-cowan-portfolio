export default function Nav() {
  return (
    <header className="topnav-wrap">
      <div className="shell">
        <div className="topnav-inner">
          <div className="brand">
            <div className="brand-logo"></div>
            Reid Cowan
            <div className="brand-meta">
              <span className="dot-live"></span>
              Available
            </div>
          </div>
          <nav className="topnav-links">
            <a href="#thesis"><span className="num">01</span>Thesis</a>
            <a href="#about"><span className="num">02</span>About</a>
            <a href="#running"><span className="num">03</span>Running</a>
            <a href="#receipts"><span className="num">04</span>Receipts</a>
            <a href="#framework"><span className="num">05</span>Framework</a>
            <a href="#flight"><span className="num">06</span>Flight plan</a>
            <a href="#stack"><span className="num">07</span>Stack</a>
            <a href="#contact" className="cta-mini">Let&apos;s talk →</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
