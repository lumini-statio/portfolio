import styles from './styles/Tag.module.css';

const Tag = ({ label }) => (
  <span className={styles.tag}>{label}</span>
);

export default Tag;
