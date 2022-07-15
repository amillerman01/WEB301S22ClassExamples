$(function () {
  // $("button").on("click", getLocation);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }

  // navigator.geolocation.getCurrentPosition(showPosition);

  // function showPosition(positionData) {
  //   // do something with the data
  // }

  // navigator.geolocation.getCurrentPosition(function (positionData) {
  //   // do something with the data
  // });
  getLocation();

  localStorage.setItem("tomato", 50);

  let vegetable = "brocoli";
  let vegetableCount = 100;

  localStorage.setItem(vegetable, vegetableCount);

  console.log(localStorage.getItem("tomato"));
});

function showPosition(position) {
  $("#geo-data").html(
    `Latitude: ${position.coords.latitude} <br>Longitude: ${position.coords.longitude}`
  );
}

function showError(error) {
  console.log("An error occurred: ", error);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("Permission denied");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Position unavailable");
      break;
    case error.TIMEOUT:
      console.log("Position took too long!");
      break;
    default:
      console.log("Something went wrong with the geolocation");
  }
}
