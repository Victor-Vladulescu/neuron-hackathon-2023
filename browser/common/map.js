import { map } from "../user-app/src/js/index";

import { baseURL } from "../user-app/src/js/index";

someArray = [];
vehicles = [];
var markers = L.layerGroup().addTo(map);

let tramIcon = L.icon({
  iconSize: [30, 30], // size of the icon
  iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
});

function updateLocation() {
  console.log(vehicles);
  if (someArray.length > 0) {
    for (var i = 0; i < someArray.length; i++) {
      vehicles[i] = {
        id: someArray[i].id,
        type: someArray[i].type,
        name: someArray[i].name,
        lat: someArray[i].latitude,
        lng: someArray[i].longitude,
        marker: L.marker([46.192717706185675, 21.30671085657869], {
          opacity: 0.01,
          icon: tramIcon,
        }),
      };
    }
  }
  markers.clearLayers();

  for (var i = 0; i < someArray.length; i++) {
    if (map.getZoom() <= 12) {
      vehicles[i].marker
        .bindTooltip("", {
          direction: "center",
          permanent: true,
          offset: [0, 0],
          className: "my-leaflet-tooltip",
        })
        .openTooltip();
    } else {
      vehicles[i].marker
        .bindTooltip(vehicles[i].name, {
          direction: "center",
          permanent: true,
          // offset: [0,0],
          className: "my-leaflet-tooltip",
        })
        .openTooltip();
    }

    markers.addLayer(vehicles[i].marker);
    var lat = vehicles[i].lat;
    var lng = vehicles[i].lng;
    var newLatLng = new L.LatLng(lat, lng);

    console.log(vehicles[i].marker.getLatLng());
    if (vehicles[i].marker.getLatLng() == newLatLng) {
      console.log("asdj");
      return;
    }
    vehicles[i].marker.setLatLng(newLatLng);
    //console.log(vehicles[i].marker);
  }
}

async function someRequest() {
  try {
    const response = await fetch(baseURL + "/vehicles");
    const json = await response.json();
    //console.log(json);
    someArray = json.vehicles;
  } catch (error) {
    console.log(error);
  }

  updateLocation();

  console.log(vehicles);

  // updateLocation();
}

setInterval(someRequest, 1000);

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}",
  {
    minZoom: 0,
    maxZoom: 18,
    ext: "png",
  }
).addTo(map);
