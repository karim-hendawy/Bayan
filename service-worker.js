const CACHE_NAME = "bayan-v18";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./css/style.css?v=20261123-46",
  "./js/app.js?v=20261123-43",
  "./js/avatar-library.bundle.js",
  "./js/celebration.bundle.js?v=20261123-3",
  "./manifest.webmanifest",
  "./assets/logo.jpg",
  "./assets/hero.jpg",
  "./assets/avatar.jpg",
  "./assets/game-picture-moon.svg",
  "./assets/game-picture-sun.svg",
  "./assets/game-picture-book.svg",
  "./assets/game-picture-house.svg",
  "./assets/game-picture-fish.svg",
  "./assets/game-picture-flower.svg",
  "./assets/game-picture-door.svg",
  "./assets/game-picture-cat.svg",
  "./assets/game-picture-star.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.pathname.endsWith(".js") || url.pathname.endsWith(".css") || url.pathname.endsWith(".html") ||
    url.pathname === "/" || url.pathname.endsWith("/index.html")) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response.ok && url.origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
