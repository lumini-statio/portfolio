import SectionHeader from '../atoms/SectionHeader';
import Form from '../components/Form';
import { EMAILJS_CONFIG } from '../config/emailjs';
import styles from './styles/Contact.module.css';
import { useTranslation, Trans } from 'react-i18next';

const Contact = () => {
    const {t} = useTranslation();
    
    const contactFields = [
        {
            id: 'from_name',
            label: t('form.from_name.label'),
            type: 'text',
            required: true,
            placeholder: t('form.from_name.placeholder')
        },
        {
            id: 'from_email',
            label: t('form.from_email.label'),
            type: 'email',
            required: true,
            placeholder: t('form.from_email.placeholder')
        },
        {
            id: 'subject',
            label: t('form.subject.label'),
            type: 'text',
            required: true,
            placeholder: t('form.subject.placeholder')
        },
        {
            id: 'message',
            label: t('form.message.label'),
            rows: 5,
            required: true,
            placeholder: t('form.message.placeholder')
        }
    ];

    const handleFormSubmit = (data) => {
        console.log('Form submitted:', data);
    };

    return (
        <section className={`section ${styles.contactSection}`} id="contact">
        <div className="container">
            <SectionHeader label={<Trans i18nKey="form.contact.label" />} title={<Trans i18nKey="form.contact.title" />} />
            
            <div className={styles.content}>
                <div className={styles.info}>
                    <p>{<Trans i18nKey="form.contact.intro" />}</p>
                    
                    <div className={styles.details}>
                        <div className={styles.detail}>
                            <span className={styles.label}>GitHub:</span>
                            <a href="https://github.com/lumini-statio" className={styles.link} target="_blank" rel="noopener noreferrer">
                            github.com/lumini-statio
                            </a>
                        </div>

                        <div className={styles.detail}>
                            <span className={styles.label}>LinkedIn:</span>
                            <a href="https://www.linkedin.com/in/emilio-luna-backend/" className={styles.link} target="_blank" rel="noopener noreferrer">
                            emilio-luna-backend
                            </a>
                        </div>
                    </div>
                </div>

                <Form
                    fields={contactFields}
                    onSubmit={handleFormSubmit}
                    submitLabel="Enviar Mensaje"
                    serviceId={EMAILJS_CONFIG.SERVICE_ID}
                    templateId={EMAILJS_CONFIG.TEMPLATE_ID}
                    publicKey={EMAILJS_CONFIG.PUBLIC_KEY}
                />
            </div>
        </div>
        </section>
    );
};

export default Contact;
