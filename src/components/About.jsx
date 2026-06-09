import SectionHeader from '../atoms/SectionHeader';
import styles from './styles/About.module.css';
import { Users, Zap, MessageSquare } from 'lucide-react';

const traits = [
  {
    icon: <Users size={22} />,
    title: 'Team Player',
    description: 'I thrive in collaborative environments — contributing ideas, supporting teammates, and delivering better outcomes together than alone.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Self-Driven',
    description: 'Equally effective working autonomously. I own my tasks end-to-end, keep myself accountable, and get things done without constant supervision.',
  },
  {
    icon: <MessageSquare size={22} />,
    title: 'Clear Communicator',
    description: 'Skilled at translating technical complexity into plain language. I bridge the gap between engineering teams and non-technical stakeholders.',
  },
];

const About = () => (
  <section className="section" id="about">
    <div className="container">
      <SectionHeader label="Who I Am" title="About Me" />
      <div className={styles.grid}>
        <div className={styles.bio}>
          <p>
            I'm <strong>Emilio Luna</strong>, a Backend Developer and Tech Leader working at the Airport Security Police. My day-to-day sits at the intersection of software engineering and high-stakes operations — where reliability isn't optional.
          </p>
          <p>
            I enjoy building projects that make a real difference for people: from AI-powered recognition systems to real-time communication tools and productivity apps. Whether I'm designing an API, architecting a container stack, or prototyping a desktop app, I bring the same mindset — <em>build it right, make it count</em>.
          </p>
          <p>
            Outside work I keep experimenting: if I imagine something I could build, I build it.
          </p>
        </div>

        <div className={styles.traits}>
          {traits.map((t) => (
            <div key={t.title} className={styles.trait}>
              <div className={styles.traitIcon}>{t.icon}</div>
              <div>
                <h3 className={styles.traitTitle}>{t.title}</h3>
                <p className={styles.traitDesc}>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
