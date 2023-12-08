function scheduleDropdown() {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownSchedule = document.getElementById('dropdownList');

  dropdownButton.classList.toggle('dropdownAnimation');
  dropdownSchedule.classList.toggle('dropdownVisibility');
  dropdownSchedule.classList.toggle('menu__navbar__dropdown-list');
}

document
  .getElementById('menu__navbar__dropdown-list-button')
  .addEventListener('click', scheduleDropdown);
