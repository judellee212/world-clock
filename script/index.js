function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");


let hongKongElement = document.querySelector("#hong-kong");
let hongKongDateElement = hongKongElement.querySelector(".date");
let hongKongTimeElement = hongKongElement.querySelector(".time");

let hongKongTime = moment().tz("HongKong");
hongKongDateElement.innerHTML = moment().format("MMM Do YYYY");
hongKongTimeElement.innerHTML = hongKongTime.format("h:mm:ss [<small]>A[</small>]");
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
  <div class = "city" 
  <div>
    <h2>${cityTimeZone}</h2>
    <div class="date">${cityTime.format("MMM Do YYYY")}</div>
  </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  <br />
  <a href="/">All Cities</a>
`;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity)






