(function () {
  'use strict';

  var mapEl = document.getElementById('contact-map');
  var apiKey = window.MAPY_API_KEY;

  if (!mapEl || !apiKey || typeof L === 'undefined') {
    return;
  }

  var salonCoords = [49.2477672, 16.6677417];

  var map = L.map(mapEl, {
    center: salonCoords,
    zoom: 16,
    scrollWheelZoom: false,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer('https://api.mapy.cz/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=' + apiKey, {
    minZoom: 6,
    maxZoom: 19,
    attribution: '&copy; <a href="https://mapy.cz/" target="_blank" rel="noopener">Seznam.cz</a> &amp; <a href="https://mapy.cz/" target="_blank" rel="noopener">Mapy.com</a>'
  }).addTo(map);

  L.marker(salonCoords, {
    icon: L.divIcon({
      className: 'contact-map-marker',
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    })
  }).addTo(map);
})();
