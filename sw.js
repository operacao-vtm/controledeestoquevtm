/* Estoque VTM · serviço do aplicativo
   Existe só para o Chrome reconhecer o site como aplicativo instalável.
   NÃO guarda cópia de nada: toda página é buscada na rede, sempre a versão mais nova. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request;
  /* só as páginas do próprio site; a planilha e o resto seguem direto, sem passar por aqui */
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(fetch(r));
});
