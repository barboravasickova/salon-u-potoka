(function () {
  'use strict';

  var mapEl = document.getElementById('contact-map');

  if (!mapEl || typeof L === 'undefined') {
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

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 6,
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
  }).addTo(map);

  L.marker(salonCoords, {
    icon: L.divIcon({
      className: 'contact-map-marker',
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    })
  }).addTo(map);
})();
