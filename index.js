 // GIVEN a weather dashboard with form inputs
//have a text input and a button to search


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
//search bar and list of the cities searched
//using ajax function(uv index and 5 day forecast)
var searchbutton = document.getElementById("searchbutton")
var inputbox = document.getElementById("inputbox")
var weatherinfocard = document.getElementById("weatherinfocard")
var fivedays = document.getElementById("fivedayforecast")

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000)
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()

    var time = date + ' ' + month + ' ' + year
    return time
}


searchbutton.onclick=openingfunction


function openingfunction(){
    console.log(inputbox.value)

var APIkey = "588d2a85342114e6786b0d6a58b891aa"
var currentweatherdata= `http://api.openweathermap.org/data/2.5/weather?q=${inputbox.value}&appid=${APIkey}`

$.ajax({
    type: "GET",
    url: currentweatherdata,
    data: "json",
    success: function (response) {
        console.log (response)   
        
     }
     
});

$(".date").text(time)
$(".city").text("<h2>" + response.name);
$(".wind").text("Wind Speed: " + response.wind.speed);
$(".humidity").text("Humidity: " + response.main.humidity);



var forTemp = "Temperature (F): " + (Math.round((data['daily'][i]['temp']['max']-273.15)*1.8)+32)};

var icon = data['daily'][i]['weather']['0']['icon']
                    iconURL = "http://openweathermap.org/img/w/" + icon + ".png"

var imgTag = document.createElement('img')
                     imgTag.src = iconURL

var uvindexdata = `http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=${APIkey}`
$.$.ajax({
    type: "GET",
    url: uvindexdata,
    data: "json",
    success: function (response) {
        console.log(response)
    var uviresults= response.data;
    var u = $("<div>").text("UVI Index: " + uviresults);
    }
});


// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

var fivedayforecast = `api.openweathermap.org/data/2.5/forecast?q=${inputbox.value}&appid=${APIkey}`

$.ajax({
    type: "GET",
    url: fivedayforecast,
    data: "json",
    success: function (response) {
        console.log(response)
var fivedayresults= $(fivedays).text(response)
    }
});

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
// 