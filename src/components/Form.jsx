import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FormField from './FormField';
import styles from './styles/Form.module.css';

const Form = ({ 
    fields, 
    onSubmit, 
    submitLabel = 'Enviar',
    serviceId,
    templateId,
    publicKey
}) => {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {})
    );
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, [publicKey]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!serviceId || !templateId || !publicKey) {
            setMessage({ type: 'error', text: 'Configuración de EmailJS incompleta' });
            return;
        }

        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            await emailjs.send(serviceId, templateId, formData);
            setMessage({ type: 'success', text: '¡Mensaje enviado exitosamente!' });
            setFormData(fields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {}));
            if (onSubmit) onSubmit(formData);
        } catch (error) {
            console.error('Error al enviar email:', error);
            setMessage({ type: 'error', text: 'Error al enviar el mensaje. Por favor, intente de nuevo.' });
        } finally {
            setLoading(false);
        }
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {fields.map(field => (
                <FormField
                    key={field.id}
                    {...field}
                    value={formData[field.id]}
                    onChange={handleChange}
                    disabled={loading}
                />
            ))}
            {message.text && (
                <div className={`${styles.message} ${styles[message.type]}`}>
                    {message.text}
                </div>
            )}
            <button 
                type="submit" 
                className={styles.button}
                disabled={loading}
            >
                {loading ? 'Enviando...' : submitLabel}
            </button>
        </form>
    );
};

export default Form;
