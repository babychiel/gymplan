/* Service worker Gymplan — cache shell supaya tetap terbuka saat offline */
const V = 'gymplan-v4';
const SHELL = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const url = new URL(r.url);
  // thumbnail YouTube dan font: pakai cache dulu, isi ulang di belakang
  if (url.hostname === 'i.ytimg.com' || url.hostname.endsWith('gstatic.com') || url.hostname.endsWith('googleapis.com')) {
    e.respondWith(caches.open(V + '-media').then(async c => {
      const hit = await c.match(r);
      const net = fetch(r).then(res => { if (res.ok) c.put(r, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // halaman sendiri: jaringan dulu supaya update langsung terlihat, cache sebagai cadangan
  e.respondWith(fetch(r).then(res => {
    const copy = res.clone();
    caches.open(V).then(c => c.put(r, copy));
    return res;
  }).catch(() => caches.match(r).then(hit => hit || caches.match('./index.html'))));
});
