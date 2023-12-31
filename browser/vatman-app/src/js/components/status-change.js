// Find the checkbox input
const locationCheckbox = document.getElementById('locationCheckbox');

// Find the text next to the input
const locationStatusText = document.getElementById('locationStatusText');
const locationStatus = document.getElementById('locationStatus');

// Find the vehicle ID in order to delete its value if location is disabled
const selectElement = document.getElementById('vehicleId');

function changeLocationSliderColor() {
  // If vehicleId is selected
  if (locationCheckbox.checked) {
    //   Set to "Activated"
    locationStatusText.innerText = 'ACTIVAT';
    locationStatusText.style.color = '#0099ff';
  } else {
    //   Otherwise set to "Dectivated"
    locationStatusText.innerText = 'DEZACTIVAT';
    locationStatusText.style.color = 'red';
  }
}

// Only run the function on change of checkbox input
locationCheckbox.addEventListener('change', () => {
  changeLocationSliderColor();

  // Remove the user as a vehicle if location is deactivated
  if (locationStatusText.innerText === 'DEZACTIVAT') {
    selectElement.value = '';

    // and if the send location button is not disabled, disable it
    if (!locationCheckbox.disabled) {
      locationCheckbox.disabled = !locationCheckbox.disabled;
      locationStatus.style.filter = 'grayscale(100%)';

      // Uncheck the box if vehicle is not selected
      locationCheckbox.checked = false;
      changeLocationSliderColor();
    }
  }
});

// If any vehicle is selected, activate the location button
selectElement.addEventListener('change', () => {
  // if value is not empty...
  if (selectElement.value !== '') {
    // if there is a vehicle selected...

    // if the button is disabled, make sure you enable it
    if (locationCheckbox.disabled) {
      locationCheckbox.disabled = !locationCheckbox.disabled;
      locationStatus.style.filter = 'none';
    }
  } else {
    // if no vehicle is selected... Deactivate share location button
    // if the send location button is not disabled, make sure you disable it
    if (!locationCheckbox.disabled) {
      locationCheckbox.disabled = !locationCheckbox.disabled;
      locationStatus.style.filter = 'grayscale(100%)';
      // Uncheck the box if vehicle is not selected
      locationCheckbox.checked = false;
      changeLocationSliderColor();
    }
  }
});
