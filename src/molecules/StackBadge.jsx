import styles from './styles/StackBadge.module.css';

const StackBadge = ({ label, group }) => (
  <div className={`${styles.badge} ${styles[group?.toLowerCase().replace(/\s/g, '')]}`}>
    <span className={styles.dot} />
    {label}
  </div>
);

export default StackBadge;
