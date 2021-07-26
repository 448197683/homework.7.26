function onGeoSuccess(position) {
  console.log(position);
  console.log(position.coords.latitude, position.coords.longitude);
}
function onGeoError(error) {
  console.log(error);
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
const span2 = document.querySelector(".span")
const lat = position.coords.latitude
const lng = position.coords.longitude
h2.innerHTML = `Your location is lat${lat} lng${lng}`