// Find the checkbox input
const locationCheckbox = document.getElementById("locationCheckbox");

// Find the text next to the input FIXME
const locationStatusText = document.getElementById("locationStatusText");

// Find the vehicle id select element FIXME
const vehicleId = document.getElementById("vehicleId");

// Find the vehicle ID in order to delete its value if location is disabled
const selectElement = document.getElementById("vehicleId");

function openChange() {
  // If input is checked
  if (locationCheckbox.checked) {
    //   Set to "Activated"
    locationStatusText.innerText = "ACTIVAT";
    locationStatusText.classList.toggle("blue");
    vehicleId.disabled = !vehicleId.disabled;
  } else {
    //   Otherwise set to "Dectivated"
    locationStatusText.innerText = "DEZACTIVAT";
    locationStatusText.classList.toggle("blue");
    vehicleId.disabled = !vehicleId.disabled;
  }
}

// Only run the function on change of checkbox input
locationCheckbox.addEventListener("change", () => {
  openChange();

  if (locationStatusText.innerText === "DEZACTIVAT") {
    selectElement.value = "";
  }
});
