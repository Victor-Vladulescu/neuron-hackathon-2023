let hideShowSideMenu = () => {
  let sideButton = document.getElementById("side-menu-button");
  var sideMenu = document.getElementById("side-menu");

  if (sideMenu.style.left === "0%") {
    sideMenu.style.left = "-57%";
    sideButton.style.left = "15px";
    sideButton.style.color = "#00000";
  } else {
    sideMenu.style.left = "0%";
    sideButton.style.left = "60%";
    sideButton.style.color = "#007ec5";
  }

  document.getElementById("screenMapOverlay").classList.toggle("hidden");
};

document.getElementById("side-menu-button").onclick = hideShowSideMenu;
document.getElementById("screenMapOverlay").onclick = hideShowSideMenu;
