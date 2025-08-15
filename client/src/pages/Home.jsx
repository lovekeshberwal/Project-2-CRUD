import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      {/* Animated gradient background layers */}
      <div className="bg-gradient"></div>
      <div className="bg-noise"></div>

      {/* Floating decorative blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <section className="hero container">
        <div className="badge">MongoDB • Express • React • Node</div>
        <h1 className="title">
          Project 2 — <span className="highlight">Full‑Stack CRUD</span>
        </h1>
        <p className="subtitle">
          Manage products with blazing‑fast search, create, edit, and delete—all in a clean, modern UI.
        </p>

        <div className="cta">
          <Link to="/items" className="btn btn-primary">
            <span>Open Items</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z"></path>
            </svg>
          </Link>
          <Link to="/admin" className="btn btn-ghost">Admin</Link>
        </div>

        <div className="features">
          <div className="card">
            <div className="icon">🔍</div>
            <h3>Smart Search</h3>
            <p>Filter items instantly. Creating is hidden while searching to keep focus.</p>
          </div>
          <div className="card">
            <div className="icon">⚙️</div>
            <h3>CRUD Made Easy</h3>
            <p>Create, update, delete with validation and friendly feedback.</p>
          </div>
          <div className="card">
            <div className="icon">⚡</div>
            <h3>Fast & Minimal</h3>
            <p>Vite + React 18 with clean, accessible components.</p>
          </div>
        </div>
      </section>

      <section className="showcase container">
        <div className="glass">
          <div className="grid">
            <div className="grid-card">
              <h4>Create</h4>
              <p>Simple form with image, category, rating, and stock.</p>
            </div>
            <div className="grid-card">
              <h4>Read</h4>
              <p>Responsive cards with price, rating, and quick actions.</p>
            </div>
            <div className="grid-card">
              <h4>Update</h4>
              <p>Edit in place—scrolls to form with existing data prefilled.</p>
            </div>
            <div className="grid-card">
              <h4>Delete</h4>
              <p>Confirm before removal to prevent accidents.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="credits container">
        <div className="credit-glow"></div>
        <p className="credits-text">
          Developed by <strong>Lovekesh</strong> and <strong>Lekhan Puhania</strong>
        </p>
      </footer>
    </div>
  );
}