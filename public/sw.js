const CACHE='cbcora-v10';
const CORE=[
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.webmanifest',
  '/icon.svg',
  '/sample-cbc-summary.pdf'
];
const IMAGES=[
  '/assets/balanced-meal.png',
  '/assets/gentle-walking.png',
  '/assets/vitamin-c-foods.png',
  '/assets/doctor-visit.png',
  '/assets/handwashing.png',
  '/assets/hydration.png',
  '/assets/rest-recovery.png',
  '/assets/iron-rich-foods.png',
  '/assets/food_safety.svg',
  '/assets/thermometer.svg',
  '/assets/no_smoke.svg',
  '/assets/bleeding_safety.svg'
];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([...CORE,...IMAGES])));
});
self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(cached=>cached || fetch(event.request).then(response=>{
      if(response && response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy));
      }
      return response;
    }))
  );
});
