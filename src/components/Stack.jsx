import SectionHeader from '../atoms/SectionHeader';
import StackBadge from '../molecules/StackBadge';
import { stack } from '../../data/projects';
import styles from './styles/Stack.module.css';

const groups = ['Backend', 'Frontend', 'DevOps', 'Cloud'];

const Stack = () => (
  <section className={`section ${styles.stackSection}`} id="stack">
    <div className="container">
      <SectionHeader label="Technologies" title="My Stack" />
      <div className={styles.groups}>
        {groups.map((group) => (
          <div key={group} className={styles.group}>
            <p className={styles.groupLabel}>{group}</p>
            <div className={styles.badges}>
              {stack
                .filter((s) => s.group === group)
                .map((s) => (
                  <StackBadge key={s.label} label={s.label} group={s.group} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stack;
