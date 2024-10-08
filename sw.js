// sw.js
importScripts('./uv/uv.sw.js'); // Adjusted path for the import

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
