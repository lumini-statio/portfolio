import styles from './styles/Button.module.css';

const Button = ({ children, href, onClick, variant = 'primary', type = 'button', disabled = false, className }) => {
  const cls = `${styles.btn} ${styles[variant]} ${className || ''}`;
  
  const isExternal = href && (href.startsWith('http') || href.startsWith('www'));

  if (href) {
    return (
      <a 
        href={href} 
        className={cls}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
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
