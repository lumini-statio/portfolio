import { useTranslation, Trans } from "react-i18next";
import SectionHeader from "../atoms/SectionHeader";
import styles from "./styles/About.module.css";
import { Users, Zap, MessageSquare, Award } from "lucide-react";

// Solo estructura/íconos acá. El texto viene del JSON vía key.
const traitKeys = [
  { key: "teamPlayer", icon: <Users size={22} /> },
  { key: "selfDriven", icon: <Zap size={22} /> },
  { key: "communicator", icon: <MessageSquare size={22} /> },
];

const educationKeys = ["tech", "k8s", "py", "deploy", "java", "db"];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader label={t("about.label")} title={t("about.title")} />
        <div className={styles.grid}>
          <div className={styles.bio}>
            {/* Trans permite mantener <strong>/<em> dentro del texto traducido */}
            <p><Trans i18nKey="about.bio.p1" /></p>
            <p>{t("about.bio.p2")}</p>
            <p><Trans i18nKey="about.bio.p3" /></p>
            <p>{t("about.bio.p4")}</p>
          </div>

          <div className={styles.traits}>
            {traitKeys.map((trait) => (
              <div key={trait.key} className={styles.trait}>
                <div className={styles.traitIcon}>{trait.icon}</div>
                <div>
                  <h3 className={styles.traitTitle}>
                    {t(`about.traits.${trait.key}.title`)}
                  </h3>
                  <p className={styles.traitDesc}>
                    {t(`about.traits.${trait.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.education}>
          <h2 className={styles.educationTitle}>{t("about.educationTitle")}</h2>
          <div className={styles.educationList}>
            {educationKeys.map((key) => (
              <div key={key} className={styles.educationItem}>
                <div className={styles.educationIcon}><Award size={20} /></div>
                <div className={styles.educationContent}>
                  <h3 className={styles.educationItemTitle}>
                    {t(`about.education.${key}.title`)}
                  </h3>
                  <p className={styles.educationInstitution}>
                    {t(`about.education.${key}.institution`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;