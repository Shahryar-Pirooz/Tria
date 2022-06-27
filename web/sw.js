const casheName = "integer-byte -site-v1";
const assets = [
  "/",
  "index.html",
  "css/bootstrap.min.css",
  "js/app.js",
  "js/jquery.min.js",
  "js/owl.carousel.min.js",
  "images/IB_favicon.png",
  "images/logo.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(casheName).then(cache => {
      cache.addAll(assets)
    })
  )
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== assets)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});