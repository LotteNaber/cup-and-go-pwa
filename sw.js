const CACHE_NAME = "cupgo-cache-v2"; // bump version when you change cache list
const urlsToCache = [
  "/cup-go-pwa/",
  "/cup-go-pwa/index.html",
  "/cup-go-pwa/menu.html",       // ✅ added
  "/cup-go-pwa/styles.css",
  "/cup-go-pwa/styles2.css",     // ✅ added
  "/cup-go-pwa/script.js",
  "/cup-go-pwa/script2.js",      // ✅ added
  "/cup-go-pwa/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
