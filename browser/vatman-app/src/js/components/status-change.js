// Find the checkbox input
const locationCheckbox = document.getElementById('locationCheckbox');

function openChange() {
  // Find the label element that contains the pseudo-element after
  const button = document.getElementById('locationStatus');

  // If input is checked
  if (locationCheckbox.checked) {
    console.log('Hello from Florin1');
    //   Set after to "Activated"
    button.setAttribute('data-value', 'ACTIVAT');
    button.setAttribute('color','#c80d0d');
  } else {
    console.log('Hello from Florin2');
    //   Otherwise set after to "Dectivated"
    button.setAttribute('data-value', 'DEZACTIVAT');
  }
}

// Only run the function on change of checkbox input
locationCheckbox.addEventListener('change', () => {
  openChange();
});
