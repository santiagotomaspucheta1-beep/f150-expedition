/* Service worker de la Expedición EEUU 2026.
   Objetivo: que la app ABRA sin señal (Bighorn, Beartooth y buena parte de
   Glacier no tienen cobertura de ningún operador). Cachea el shell — el HTML
   más Leaflet y Firebase — y lo sirve desde caché cuando la red falla.

   OJO: los DATOS sí necesitan señal, porque viven en Firestore. Sin señal la
   app abre y muestra lo último que Firestore dejó en su caché local, pero un
   cambio que hagas offline no se sincroniza hasta que vuelva la conexión.

   Subí VERSION cada vez que cambies index.html, si no el celular sigue
   mostrando la versión vieja. */
const VERSION = 'eeuu-v3';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore-compat.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      // addAll falla entero si UN recurso falla; con allSettled cacheamos lo
      // que se pueda y la instalación no se cae por un CDN lento.
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Firestore nunca se cachea: siempre tiene que hablar con la red o fallar
  // limpio, para que su propia capa offline haga su trabajo.
  if (/firestore\.googleapis\.com|google-analytics/.test(req.url)) return;

  // Red primero para el HTML (así ven los cambios apenas hay señal),
  // caché primero para el resto (Leaflet, Firebase, tiles).
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
        return r;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok && /leaflet|firebasejs/.test(req.url)) {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
      }
      return r;
    }).catch(() => hit))
  );
});
