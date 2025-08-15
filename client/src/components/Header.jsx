import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const sh = document.documentElement.scrollHeight - window.innerHeight;
      const p = sh > 0 ? Math.min(100, (window.scrollY / sh) * 100) : 0;
      setProgress(p);
      setScrolled(window.scrollY > 6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = useMemo(
    () => ({ isActive }) => ({
      position: 'relative',
      padding: '8px 12px',
      borderRadius: 12,
      color: isActive ? 'var(--text)' : 'var(--muted)',
      textDecoration: 'none',
      transition: 'color 160ms ease, transform 160ms ease',
    }),
    []
  );

  return (
    <header className={`header glass ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Soft aurora strip at the very top */}
      <div className="header__glow" aria-hidden />
      {/* Scroll progress bar */}
      <div className="header__progress" style={{ width: `${progress}%` }} aria-hidden />
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label="Go to home">
          <span className="brand__dot" />
          <span>Project 2 • MongoDB CRUD</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end style={navLink} className={({ isActive }) => isActive ? 'nav__link is-active fx-underline' : 'nav__link fx-underline'}>
            Home
          </NavLink>
          <NavLink to="/items" style={navLink} className={({ isActive }) => isActive ? 'nav__link is-active fx-underline' : 'nav__link fx-underline'}>
            Items
          </NavLink>
          <NavLink to="/admin" style={navLink} className={({ isActive }) => isActive ? 'nav__link is-active fx-underline' : 'nav__link fx-underline'}>
            Admin
          </NavLink>
          <Link to="/items" className="nav__btn fx-lift">
            Open App
          </Link>
        </nav>
      </div>
      <div className="header__shadow" aria-hidden />
    </header>
  );
}