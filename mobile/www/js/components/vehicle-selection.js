// FIXME Fake Position Template FIXME
const currentPosition = {
  id: 0,
  coords: {
    latitude: 123,
    longitude: 321,
  },
  timestamp: "2023-12-01T11:01:00.123Z",
};

// Vehicle ID Select Input
const selectElement = document.getElementById("vehicleId");

var newValueMine;

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
selectElement.addEventListener("change", () => {
  sendOption();

  setInterval(sendLocation(), 1000);
});

function sendLocation() {
  fetch(
    "http://uav-easy-exams.xyz:5000/api/vehicle/" + newValueMine + "/update",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
        timestamp: new Date().toISOString(),
      }),
    }
  );
}
