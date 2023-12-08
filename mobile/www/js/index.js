let btnState = false
let longHTML
let latHTML
let btnHTML
let tramInput
let sendLocationInterval
let currentLocation

document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {    
    longHTML = document.getElementById('long')
    latHTML = document.getElementById('lat')
    btnHTML = document.getElementById('state-btn')
    tramInput = document.getElementById('tram-select')

    navigator.geolocation.watchPosition(
        (position) => {
            currentLocation = position
            let lat = position.coords.latitude
            let long = position.coords.longitude

            latHTML.innerText = 'Latitude: ' + lat
            longHTML.innerText = 'Longitude: ' + long
        }, 
        (error) => {
            console.log(error)
            longHTML.innerText = error.message
            latHTML.innerText = error.message
        },
        {timeout: 30000, enableHighAccuracy: true, maximumAge: 10000}
    );
}

function toggleSendLocation() {

    if (btnState) {
        btnState = false
        btnHTML.innerText = "Send location"
        clearInterval(sendLocationInterval)
    }
    else {

        // must have selected tram
        if (tramInput.value && currentLocation) {
            btnState = true
            btnHTML.innerText = "Stop sending location"
            sendLocationInterval = setInterval(() => sendLocation(currentLocation), 1000)
        }
        else {
            alert("Either you haven't selected a tram, or we can't get a fix on your location.")
        }
    } 
}

function sendLocation(position) {
    fetch("http://uav-easy-exams.xyz:5000/api/vehicle/" + tramInput.value + "/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: new Date().toISOString()
        })
    })
}