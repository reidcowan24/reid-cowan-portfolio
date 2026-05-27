export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="shell">

          <div className="reveal">
            <div className="s-eyebrow"><span className="num">07</span> Mission control</div>
            <h1 className="contact-head">
              Let&apos;s <span className="mint">light it up.</span>
            </h1>
          </div>

          <div className="contact-row reveal-stagger">
            <a href="mailto:reidcowan24@gmail.com" className="contact-item">
              <div className="contact-item-label">— Email</div>
              <span>reidcowan24@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/reid-cowan-b4b23256/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-item-label">— LinkedIn</div>
              <span>/in/reid-cowan</span>
            </a>
            <a href="mailto:reidcowan24@gmail.com?subject=Stayd%20GTM%20-%20let's%20talk" className="contact-item">
              <div className="contact-item-label">— Schedule</div>
              <span>Book a conversation →</span>
            </a>
          </div>

          <div className="kicker reveal">
            <span>Built fast.</span>
            <span className="dot">·</span>
            <span>Ship fast.</span>
            <span className="dot">·</span>
            <span className="mint">To the moon.</span>
          </div>

        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <div className="footer-inner">
            <div>© 2026 Reid Cowan · Crafted in Colorado</div>
            <div>Built with Claude Code, Next.js, Three.js · Hosted on Vercel</div>
          </div>
        </div>
      </footer>
    </>
  )
}
