export default function Footer() {
  return (
    <footer className="footer glass">
      <div className="footer__glow" aria-hidden />
      <div className="container footer__inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="brand__dot" />
          <small style={{ opacity: 0.9 }}>
            © {new Date().getFullYear()} Project 2
          </small>
        </div>

        <div className="footer__links">
          <small className="muted">Developed by</small>
          <strong>Lovekesh</strong>
          <span className="muted">and</span>
          <strong>Lekhan Puhania</strong>
        </div>
      </div>

      {/* Subtle animated bar */}
      <div className="footer__bar" aria-hidden />
    </footer>
  );
}