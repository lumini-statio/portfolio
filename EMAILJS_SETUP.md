# Implementación de EmailJS en el Componente Form

## Instalación

```bash
npm install @emailjs/browser
```

## Configuración de EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com](https://www.emailjs.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar un servicio de email
1. En el dashboard, ve a "Email Services"
2. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
3. Sigue las instrucciones para conectar tu cuenta
4. Anota el **SERVICE_ID**

### 3. Crear una plantilla de email
1. Ve a "Email Templates"
2. Crea una nueva plantilla
3. Configura el contenido del email
4. Los campos del formulario deben coincidir con las variables de la plantilla
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{subject}}` - Asunto del mensaje
   - `{{message}}` - Contenido del mensaje
5. Anota el **TEMPLATE_ID**

### 4. Obtener tu PUBLIC_KEY
1. Ve a "Account" en el dashboard
2. Copia tu **Public Key**

### 5. Configurar credenciales
Edita [src/config/emailjs.js](../src/config/emailjs.js) y reemplaza:
```javascript
SERVICE_ID: 'YOUR_SERVICE_ID'
TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
```

## Uso del Componente Form

```jsx
import Form from '../components/Form';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const contactFields = [
    { id: 'from_name', label: 'Nombre', required: true },
    { id: 'from_email', label: 'Email', type: 'email', required: true },
    { id: 'message', label: 'Mensaje', rows: 5, required: true }
  ];

  return (
    <Form
      fields={contactFields}
      serviceId={EMAILJS_CONFIG.SERVICE_ID}
      templateId={EMAILJS_CONFIG.TEMPLATE_ID}
      publicKey={EMAILJS_CONFIG.PUBLIC_KEY}
      submitLabel="Enviar"
    />
  );
};

export default Contact;
```

## Props del Componente Form

| Prop | Tipo | Requerido | Descripción |
|------|------|----------|-------------|
| `fields` | Array | Sí | Array con configuración de cada campo |
| `serviceId` | String | Sí | Service ID de EmailJS |
| `templateId` | String | Sí | Template ID de EmailJS |
| `publicKey` | String | Sí | Public Key de EmailJS |
| `submitLabel` | String | No | Texto del botón (default: "Enviar") |
| `onSubmit` | Function | No | Callback después de enviar |

## Estructura de cada field

```javascript
{
  id: 'field_name',           // Debe coincidir con variables de plantilla
  label: 'Etiqueta del campo', // Texto mostrado
  type: 'text',               // text, email, number, etc
  required: true,             // Campo obligatorio
  placeholder: 'Hint text',   // Texto de ayuda
  rows: 5                      // Solo para textarea
}
```

## Variables de Entorno (Recomendado)

Para mayor seguridad, usa variables de entorno:

1. Crea un archivo `.env`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. En [src/config/emailjs.js](../src/config/emailjs.js):
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
```

## Características del Componente

✅ Validación de campos required
✅ Manejo de estados (loading, éxito, error)
✅ Mensajes visuales de estado
✅ Deshabilitación de campos durante envío
✅ Reinicio automático del formulario
✅ Integración con EmailJS
✅ Estilos modulares CSS

## Solución de Problemas

### "CORS Error"
- Asegúrate que el Public Key está correcto
- EmailJS maneja CORS automáticamente

### "Template not found"
- Verifica que el TEMPLATE_ID es correcto
- Los nombres de variables en la plantilla deben coincidir exactamente

### Email no se recibe
- Verifica que el SERVICE_ID está configurado correctamente
- Revisa el email de verificación en tu proveedor de email
- Revisa la sección de actividad en el dashboard de EmailJS
