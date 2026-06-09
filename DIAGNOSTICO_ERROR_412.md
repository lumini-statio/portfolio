# Solución de Error 412 en EmailJS

## 🔴 Causas comunes del error 412 "Precondition Failed":

1. **Template sin campos configurados** ⚠️ (MÁS COMÚN)
2. Los nombres de variables en el template no coinciden con los del formulario
3. PUBLIC_KEY inválido o no verificado
4. SERVICE_ID o TEMPLATE_ID incorrectos

---

## ✅ Pasos para diagnosticar y solucionar:

### 1. Verifica tu Dashboard de EmailJS
Ve a https://dashboard.emailjs.com y sigue estos pasos:

#### **A) Verifica tu Email Template**
1. En el dashboard, ve a **"Email Templates"**
2. Busca tu template con ID: `template_g5xlr9j`
3. **IMPORTANTE:** El template debe tener exactamente estos campos:
   ```
   {{from_name}}
   {{from_email}}
   {{subject}}
   {{message}}
   ```
4. Si faltan campos, edita el template y agrégalos

#### **B) Ejemplo de Template correcto:**
```
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}
```

#### **C) Verifica tu Service**
1. Ve a **"Email Services"**
2. Busca tu service con ID: `service_4gw8cqh`
3. Asegúrate que esté **CONECTADO** (dice "CONNECTED" en verde)
4. Si está desconectado, haz clic en el servicio y reconéctalo

#### **D) Verifica tu Public Key**
1. Ve a **"Account"** en el dashboard
2. Copia tu **Public Key** y verifica que sea: `TeNmuLHriFwQ7FXGE`
3. Si difiere, actualiza en [src/config/emailjs.js](src/config/emailjs.js)

---

### 2. Prueba la Configuración

#### Opción A: Usa el Test Tool de EmailJS
1. En Email Templates, ve al template
2. Haz clic en **"Test it"**
3. Rellena los datos de prueba:
   ```
   from_name: Test User
   from_email: test@example.com
   subject: Prueba
   message: Este es un mensaje de prueba
   ```
4. Haz clic en **"Send"**
5. Si funciona aquí, el problema está en tu aplicación

#### Opción B: Abre la Consola de Desarrollador
1. En tu navegador, presiona **F12**
2. Ve a **Console**
3. Intenta enviar el formulario
4. Busca los logs con ✓ o ✗ que te he agregado
5. Comparte los mensajes de error exactos

---

### 3. Cosas que DEBES verificar

- [ ] Todos los campos del template existen: `from_name`, `from_email`, `subject`, `message`
- [ ] El Service está en estado "CONNECTED" (verde)
- [ ] Public Key, Service ID y Template ID son exactos
- [ ] No hay espacios en blanco en las credenciales
- [ ] Has verificado tu email en EmailJS

---

### 4. Si aún no funciona, prueba esto:

#### Resetea la configuración:
```javascript
// En src/config/emailjs.js, reemplaza con valores nuevos de tu dashboard:

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_XXXX',      // Copia exacta del dashboard
  TEMPLATE_ID: 'template_XXXX',    // Copia exacta del dashboard
  PUBLIC_KEY: 'XXXXXXXXXXXXXX',    // Copia exacta del dashboard
};
```

#### Verifica que EmailJS está instalado:
```bash
npm list @emailjs/browser
```
Debe mostrar una versión (ej: 4.4.1)

---

### 5. Logs útiles para diagnosticar

Abre Console (F12) en tu navegador y verás:
- ✓ EmailJS inicializado correctamente
- ✗ Error inicializando EmailJS
- ✓ Email enviado exitosamente
- ✗ Error al enviar email

---

## 🆘 Si nada funciona:

1. **Crea un nuevo template** en el dashboard
2. **Crea un nuevo Service** (reconecta tu email)
3. **Obtén nuevas credenciales** y actualiza [src/config/emailjs.js](src/config/emailjs.js)
4. **Prueba en el dashboard** antes de testear en tu app

---

## 📝 Template Recomendado

En el dashboard EmailJS, usa este template:

```html
<h2>Nuevo Mensaje de {{from_name}}</h2>

<p><strong>De:</strong> {{from_email}}</p>
<p><strong>Asunto:</strong> {{subject}}</p>

<hr />

<p><strong>Mensaje:</strong></p>
<p>{{message}}</p>
```

---

## ⚠️ Seguridad - IMPORTANTE

**NUNCA** commites tus credenciales en Git. Mejor usa variables de entorno:

1. Crea `.env.local` en la raíz:
```
VITE_EMAILJS_SERVICE_ID=service_XXXX
VITE_EMAILJS_TEMPLATE_ID=template_XXXX
VITE_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXX
```

2. Actualiza [src/config/emailjs.js](src/config/emailjs.js):
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
```

3. Añade `.env.local` a `.gitignore` (ya debería estar)
