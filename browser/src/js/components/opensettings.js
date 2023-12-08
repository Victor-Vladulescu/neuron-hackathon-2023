function openSettings() {
  // Hide menu to avoid clutter
  const sideMenu = document.getElementById('side-menu');
  sideMenu.classList.toggle('hidden');
  sideMenu.classList.toggle('side-menu');

  // unhide settings so they appear on top
  const profileSettings = document.getElementById('profileSettings');
  profileSettings.classList.toggle('hidden');
}

document.getElementById('openSettings').addEventListener('click', openSettings);
document
  .getElementById('closeSettings')
  .addEventListener('click', openSettings);
