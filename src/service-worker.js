const CACHE_NAME = 'diabetescare-v1.0.0';
const STATIC_ASSETS = [
  '/diabetes-app/src/',
  '/diabetes-app/src/index.html',
  '/diabetes-app/src/manifest.json',
  'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// Install — cache all static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing DiabetesCare service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })))
        .catch(err => console.warn('[SW] Some assets failed to cache:', err));
    })
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating DiabetesCare service worker...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
      )
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // Serve from cache, update in background
        const fetchUpdate = fetch(event.request).then(response => {
          if (response && response.status === 200 && response.type === 'basic') {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        }).catch(() => {});
        return cached;
      }

      // Not in cache — fetch from network
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) return response;

        // Cache CDN resources
        if (
          event.request.url.includes('cdn.jsdelivr.net') ||
          event.request.url.includes('cdnjs.cloudflare.com')
        ) {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
        }
        return response;
      }).catch(() => {
        // Offline fallback
        if (event.request.destination === 'document') {
          return caches.match('/diabetes-app/src/index.html');
        }
      });
    })
  );
});

// Background sync for future data sync feature
self.addEventListener('sync', event => {
  if (event.tag === 'sync-readings') {
    console.log('[SW] Background sync: syncing readings...');
  }
});

// Push notifications for future reminder feature
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'DiabetesCare Reminder';
  const options = {
    body: data.body || 'Time to check your blood glucose!',
    icon: '/diabetes-app/src/icons/icon-192.png',
    badge: '/diabetes-app/src/icons/icon-72.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/diabetes-app/src/' }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
