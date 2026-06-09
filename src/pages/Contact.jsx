import SectionHeader from '../atoms/SectionHeader';
import Form from '../components/Form';
import { EMAILJS_CONFIG } from '../config/emailjs';
import styles from './styles/Contact.module.css';

const Contact = () => {
    const contactFields = [
        {
        id: 'from_name',
        label: 'Nombre',
        type: 'text',
        required: true,
        placeholder: 'Tu nombre'
        },
        {
        id: 'from_email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'tu@email.com'
        },
        {
        id: 'subject',
        label: 'Asunto',
        type: 'text',
        required: true,
        placeholder: 'Tema del mensaje'
        },
        {
        id: 'message',
        label: 'Mensaje',
        rows: 5,
        required: true,
        placeholder: 'Tu mensaje aquí...'
        }
    ];

    const handleFormSubmit = (data) => {
        console.log('Formulario enviado:', data);
    };

    return (
        <section className={`section ${styles.contactSection}`} id="contact">
        <div className="container">
            <SectionHeader label="Get in Touch" title="Contact Me" />
            
            <div className={styles.content}>
            <div className={styles.info}>
                <p>Siempre estoy abierto a nuevas oportunidades, proyectos interesantes y colaboraciones. No dudes en contactarme si quieres conversar sobre algo.</p>
                
                <div className={styles.details}>
                <div className={styles.detail}>
                    <span className={styles.label}>Email:</span>
                    <a href="mailto:lunaemilio2003@gmail.com" className={styles.link}>
                    lunaemilio2003@gmail.com
                    </a>
                </div>
                
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
