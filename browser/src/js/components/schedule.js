function scheduleDropdown() {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownSchedule = document.getElementById(
    'menu__navbar__dropdown-list'
  );

  dropdownButton.classList.toggle('dropdownAnimation');
  dropdownSchedule.classList.toggle('dropdownAnimation');
}

document
  .getElementById('menu__navbar__dropdown-list-button')
  .addEventListener('click', scheduleDropdown);
