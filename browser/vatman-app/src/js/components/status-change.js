// Find the checkbox input
const locationCheckbox = document.getElementById('locationCheckbox');

// Find the text next to the input
const locationStatusText = document.getElementById('locationStatusText');

// Find the vehicle id select element
const vehicleId = document.getElementById('vehicleId');

function openChange() {
  // Find the label element that contains the pseudo-element after
  const button = document.getElementById('locationStatus');

  // If input is checked
  if (locationCheckbox.checked) {
    //   Set to "Activated"
    locationStatusText.innerText = 'ACTIVAT';
    locationStatusText.classList.toggle('blue');
    vehicleId.disabled = !vehicleId.disabled;
  } else {
    //   Otherwise set to "Dectivated"
    locationStatusText.innerText = 'DEZACTIVAT';
    locationStatusText.classList.toggle('blue');
    vehicleId.disabled = !vehicleId.disabled;
  }
}

// Only run the function on change of checkbox input
locationCheckbox.addEventListener('change', () => {
  openChange();
});
