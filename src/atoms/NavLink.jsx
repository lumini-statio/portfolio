import styles from './styles/NavLink.module.css';

const NavLink = ({ href, children, onClick, isActive }) => (
  <a 
    href={href} 
    className={`${styles.link} ${isActive ? styles.active : ''}`} 
    onClick={onClick}
  >
    {children}
  </a>
);

export default NavLink;
