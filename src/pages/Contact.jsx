import SectionHeader from '../atoms/SectionHeader';
import Form from '../components/Form';
import { EMAILJS_CONFIG } from '../config/emailjs';
import styles from './styles/Contact.module.css';

const Contact = () => {
    const contactFields = [
        {
        id: 'from_name',
        label: 'Name',
        type: 'text',
        required: true,
        placeholder: 'Your name'
        },
        {
        id: 'from_email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'your@email.com'
        },
        {
        id: 'subject',
        label: 'Subject',
        type: 'text',
        required: true,
        placeholder: 'Message subject'
        },
        {
        id: 'message',
        label: 'Message',
        rows: 5,
        required: true,
        placeholder: 'Your message here...'
        }
    ];

    const handleFormSubmit = (data) => {
        console.log('Form submitted:', data);
    };

    return (
        <section className={`section ${styles.contactSection}`} id="contact">
        <div className="container">
            <SectionHeader label="Get in Touch" title="Contact Me" />
            
            <div className={styles.content}>
            <div className={styles.info}>
                <p>I'm always open to new opportunities, interesting projects, and collaborations. Feel free to contact me if you'd like to discuss anything.</p>
                
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
