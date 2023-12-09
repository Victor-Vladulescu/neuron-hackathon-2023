import { map } from "../index.js";

import { baseURL } from "../index.js";

let someArray = [];
let vehicles = [];
var markers;

let tramIcon;

let tram;

document.addEventListener("DOMContentLoaded", () => {
  markers = L.layerGroup().addTo(map);

  tramIcon = L.icon({
    iconUrl: "../../img/orange-circle.png",
    iconSize: [14, 14], // size of the icon
    iconAnchor: [7, 7], // point of the icon which will correspond to marker's location
  });

  tram = L.marker([46.192717706185675, 21.30671085657869], {
    icon: tramIcon,
  });

  tram.bindTooltip();

  setInterval(() => someRequest(), 2500);

  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}",
    {
      minZoom: 0,
      maxZoom: 18,
      ext: "png",
    }
  ).addTo(map);
});

function updateLocation() {
  if (someArray.length > 0) {
    for (var i = 0; i < someArray.length; i++) {
      vehicles[i] = {
        id: someArray[i].id,
        type: someArray[i].type,
        name: someArray[i].name,
        lat: someArray[i].latitude,
        lng: someArray[i].longitude,
        marker: L.marker([46.192717706185675, 21.30671085657869], {
          icon: tramIcon,
        }),
      };
    }
  }
  markers.clearLayers();

  for (var i = 0; i < someArray.length; i++) {
    vehicles[i].marker
      .bindTooltip()
      .setTooltipContent(
        "Numar: " +
          vehicles[i].name +
          "<br>" +
          "Lat: " +
          vehicles[i].lat +
          "Long: " +
          vehicles[i].lng
      )
      .openTooltip();
    markers.addLayer(vehicles[i].marker);
    var lat = vehicles[i].lat;
    var lng = vehicles[i].lng;
    var newLatLng = new L.LatLng(lat, lng);

    vehicles[i].marker.setLatLng(newLatLng);
  }
}

function someRequest() {
  fetch(baseURL + "/vehicles", {
    method: "GET",
    origin: "*",
  })
    .then((response) => response.json())
    .then((body) => {
      someArray = body.vehicles;
    });

  updateLocation();
}
