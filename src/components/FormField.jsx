import styles from './styles/FormField.module.css';

const FormField = ({ label, id, type = 'text', value, onChange, placeholder, required, rows, disabled }) => {
  const inputProps = { id, name: id, value, onChange, placeholder, required, disabled };

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      {rows ? (
        <textarea className={`${styles.input} ${styles.textarea}`} rows={rows} {...inputProps} />
      ) : (
        <input className={styles.input} type={type} {...inputProps} />
      )}
    </div>
  );
};

export default FormField;
