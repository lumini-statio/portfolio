import styles from './styles/Button.module.css';

const Button = ({ children, href, onClick, variant = 'primary', type = 'button', disabled = false, className, target }) => {
  const cls = `${styles.btn} ${styles[variant]} ${className || ''}`;
  
  const isExternal = href && (href.startsWith('http') || href.startsWith('www'));

  if (href) {
    return (
      <a 
        href={href} 
        className={cls}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={(target === '_blank' || isExternal) ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
