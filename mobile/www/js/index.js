console.log("Hello World!");

export let baseURL = "https://uav-easy-exams.xyz/api";

export var map = L.map("map", { zoomControl: false }).setView(
  [46.186504598160354, 21.31672212393795],
  11
);


export let currentLocation

document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
    navigator.geolocation.watchPosition(
        (position) => {
            currentLocation = position
        }, 
        (error) => {
            console.log(error)
        },
        {timeout: 30000, enableHighAccuracy: true, maximumAge: 10000}
    );
}
