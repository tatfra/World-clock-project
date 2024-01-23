function updateTime() {
  //Lisbon
  let lisbonElement = document.querySelector("#Lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");

  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format("h:m:s [<small>]A[</small>]");
  //Paris
  let parisElement = document.querySelector("#Paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:m:s [<small>]A[</small>]");

  //Sidney
  let sidneyElement = document.querySelector("#Sidney");
  let sidneyDateElement = sidneyElement.querySelector(".date");
  let sidneyTimeElement = sidneyElement.querySelector(".time");

  let sidneyTime = moment().tz("Australia/Sydney");

  sidneyDateElement.innerHTML = sidneyTime.format("MMMM Do YYYY");
  sidneyTimeElement.innerHTML = sidneyTime.format("h:m:s [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
