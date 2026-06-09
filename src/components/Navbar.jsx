import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import NavLink from '../atoms/NavLink';
import Button from '../atoms/Button';
import styles from './styles/Navbar.module.css';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/#about', label: 'About', isAnchor: true },
  { href: '/#stack', label: 'Stack', isAnchor: true },
  { href: '/projects', label: 'Projects', isAnchor: false },
  { href: '/#contact', label: 'Contact', isAnchor: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoAccent}>lumini</span>
          <span className={styles.logoDivider}>—</span>
          <span className={styles.logoSub}>statio</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.mobileOpen : ''}`}>
          {links.map((l) => (
            <NavLink 
              key={l.href} 
              href={l.href} 
              onClick={close}
              isActive={location.pathname === l.href}
            >
              {l.label}
            </NavLink>
          ))}
          <Button href="https://github.com/lumini-statio" variant="secondary">
            GitHub
          </Button>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
