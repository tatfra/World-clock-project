function updateTime() {
  //Puerto Rico
  let ricoElement = document.querySelector("#Puerto-Rico");
  let ricoDateElement = ricoElement.querySelector(".date");
  let ricoTimeElement = ricoElement.querySelector(".time");

  let ricoTime = moment().tz("America/Puerto_Rico");

  ricoDateElement.innerHTML = ricoTime.format("MMMM Do, YYYY");
  ricoTimeElement.innerHTML = ricoTime.format("hh:mm:ss [<small>]A[</small>]");

  //Paris
  let parisElement = document.querySelector("#Paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Sidney
  let sidneyElement = document.querySelector("#Sidney");
  let sidneyDateElement = sidneyElement.querySelector(".date");
  let sidneyTimeElement = sidneyElement.querySelector(".time");

  let sidneyTime = moment().tz("Australia/Sydney");

  sidneyDateElement.innerHTML = sidneyTime.format("MMMM Do, YYYY");
  sidneyTimeElement.innerHTML = sidneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        
        <a href="index.html" id="back">&#8617 <em>Back</em></a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
