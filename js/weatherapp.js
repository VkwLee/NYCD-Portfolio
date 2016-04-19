var key = "&APPID=d3b199471b77a55a96f3c594ee25569b";
var url = "http://api.openweathermap.org/data/2.5/weather?q="+ name +key ;
var geo;
var name =  geo;


var statusMessage = function (message) {
	document.getElementById('statusMessage').innerHTML = message;
};



function geoFindMe() {
  var output = document.getElementById("results");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}





function getGeoLocation () {
	try {
		if (navigator.geolocation) return navigator.geolocation;
		else return undefined;
	} catch(e) {
		return undefined;
	}
}

function show_coords(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
	}


function init () {
	if ((geo = getGeoLocation ())) {

		//template and data for results
		var resultsTemplate = Handlebars.templates["results.hbs"];
		var result = resultsTemplate({
			"City" : "A",
			"Long" : "lon",
			"Lat" : "lat",
			"Degree" : "D",
			"Description" : "Zeg whoelah"
		});
		document.getElementById("results").innerHTML += result;

		statusMessage ('Heel veel plezier met het slechte weer!');
	} else {
		statusMessage ('HTML5 Geolocation is not supported.')
	}
}


(function(){

var currentWeather = document.getElementById("currentWeather");

currentWeather.addEventListener('click',function(){
	init();
})

})();




// // Fetch london from API. 
// //var url = 'api/' + name + '.json'; 
// var url = "http://api.openweathermap.org/data/2.5/weather?q="+ name +key ; 
// $.ajax({
//     url: url,
//     success: function(data) {
//         var model = new app.City(data);
//         var view = new app.responsView({
//             model: model
//         });

//         $('#respons').html(view.render().el);

//         console.log (data);

//     },
//     error: function() {
//         alert('fout');
//     }
// });