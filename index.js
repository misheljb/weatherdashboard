var searchbutton = document.getElementById("searchbutton");
var inputbox = document.getElementById("inputbox");
var weatherinfocard = document.getElementById("weatherinfocard");
var fivedays = document.getElementById("fivedayforecast");
var cities = document.querySelector("#cities");

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();

  var time = date + " " + month + " " + year;
  return time;
}

searchbutton.onclick = openingfunction;

function openingfunction() {
  console.log(inputbox.value);

  var APIkey = "588d2a85342114e6786b0d6a58b891aa";
  var currentweatherdata = `http://api.openweathermap.org/data/2.5/weather?q=${inputbox.value}&appid=${APIkey}`;

  $.ajax({
    type: "GET",
    url: currentweatherdata,
    data: "json",
    success: function (response) {
      console.log(response);
    },
  });

  $(".date").text(time);
  $(".city").text("<h2>" + response.name);
  $(".wind").text("Wind Speed: " + response.wind.speed);
  $(".humidity").text("Humidity: " + response.main.humidity);

  var forTemp =
    "Temperature (F): " +
    (Math.round((data["daily"][i]["temp"]["max"] - 273.15) * 1.8) + 32);
}

var icon = data["daily"][i]["weather"]["0"]["icon"];
iconURL = "http://openweathermap.org/img/w/" + icon + ".png";

var imgTag = document.createElement("img");
imgTag.src = iconURL;

var uvindexdata = `http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=${APIkey}`;
$.$.ajax({
  type: "GET",
  url: uvindexdata,
  data: "json",
  success: function (response) {
    console.log(response);
    var uviresults = response.data;
    var u = $("<div>").text("UVI Index: " + uviresults);
  },
});


var fivedayforecast = `api.openweathermap.org/data/2.5/forecast?q=${inputbox.value}&appid=${APIkey}`;

$.ajax({
  type: "GET",
  url: fivedayforecast,
  data: "json",
  success: function (response) {
    console.log(response);
    var fivedayresults = $(fivedays).text(response);
  },
});



$("#cities").on("click", "li", function () {
    console.log(this)
    var thisvalue = this.textContent
    console.log(thisvalue)
    input.value = thisvalue

    $(searchbutton).trigger('click')
    cities.removeChild(this)
});