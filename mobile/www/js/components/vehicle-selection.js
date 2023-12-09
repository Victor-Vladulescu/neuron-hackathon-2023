import { currentLocation, baseURL } from "../index.js";

// Vehicle ID Select Input
const locationButton = document.getElementById("locationCheckbox");
const selectElement = document.getElementById("vehicleId");

var newValueMine;
var sendLocationInterval;
var btnState = false;

// Send the selected input function
function sendOption() {
  const selectedValue = selectElement.value;
  newValueMine = selectedValue;

  if (selectedValue === "") {
    console.log("No vehicle was selected");
    localStorage.removeItem("tramInput");
  } else {
    console.log(`No° ${selectedValue} was selected`);
    localStorage.setItem("tramInput", selectedValue);
  }
}

// Run the function on each change of the input
locationButton.addEventListener("change", () => {
  sendOption();

  if (btnState) {
    btnState = false;
    clearInterval(sendLocationInterval);
  } else {
    btnState = true;
    sendLocationInterval = setInterval(() => sendLocation(), 2500);
  }
});

function sendLocation() {
  fetch(baseURL + "/vehicle/" + newValueMine + "/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      timestamp: new Date().toISOString(),
    }),
  });
}
