import Tag from '../atoms/Tag';
import Button from '../atoms/Button';
import styles from './styles/ProjectCard.module.css';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tags, url, category }) => (
  <article className={styles.card}>
    <div className={styles.header}>
      <span className={styles.category}>{category}</span>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label={`Open ${title}`}>
        <ExternalLink size={16} />
      </a>
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
    <div className={styles.footer}>
      <Button href={url} variant="ghost">
        View on GitHub <ExternalLink size={12} />
      </Button>
    </div>
  </article>
);

export default ProjectCard;
