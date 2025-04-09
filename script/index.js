function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

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
updateTime();
setInterval(updateTime, 1000);




