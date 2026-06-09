// 🔍 SCRIPT DE VERIFICACIÓN EMAILJS
// Copia y pega esto en la Consola del navegador (F12) para diagnosticar

console.log('%c=== VERIFICACIÓN EMAILJS ===', 'font-size: 16px; font-weight: bold; color: #4F6EF7;');

// 1. Verificar variables de entorno
console.log('\n📋 Variables de Entorno:');
console.log('SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID || '❌ NO CONFIGURADO');
console.log('TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '❌ NO CONFIGURADO');
console.log('PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? '✓ Configurado' : '❌ NO CONFIGURADO');

// 2. Verificar EmailJS
console.log('\n📦 EmailJS:');
try {
  const emailjs = await import('@emailjs/browser');
  console.log('✓ EmailJS importado correctamente');
  console.log('Versión:', emailjs.default?.version || 'Desconocida');
} catch (e) {
  console.error('❌ Error al importar EmailJS:', e.message);
}

// 3. Verificar configuración
console.log('\n⚙️ Configuración Cargada:');
try {
  const { EMAILJS_CONFIG } = await import('./src/config/emailjs.js');
  console.log('SERVICE_ID:', EMAILJS_CONFIG.SERVICE_ID);
  console.log('TEMPLATE_ID:', EMAILJS_CONFIG.TEMPLATE_ID);
  console.log('PUBLIC_KEY:', EMAILJS_CONFIG.PUBLIC_KEY ? '✓ Hay valor' : '❌ Vacío');
  
  if (EMAILJS_CONFIG.SERVICE_ID && EMAILJS_CONFIG.TEMPLATE_ID && EMAILJS_CONFIG.PUBLIC_KEY) {
    console.log('%c✓ CONFIGURACIÓN VÁLIDA', 'color: green; font-weight: bold;');
  } else {
    console.log('%c❌ FALTA CONFIGURACIÓN', 'color: red; font-weight: bold;');
  }
} catch (e) {
  console.error('Error cargando config:', e.message);
}

console.log('%c=== FIN VERIFICACIÓN ===', 'font-size: 16px; font-weight: bold; color: #4F6EF7;');
