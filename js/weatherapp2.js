var key = "&APPID=d3b199471b77a55a96f3c594ee25569b&units=metric";

var statusMessage = function (message) {
	document.getElementById("statusMessage").innerHTML = message;
};

function geoFindMe(place) {

	var outputLoading = document.getElementById("results");

	function success(position) {
		var latitude  = position.coords.latitude;
		var longitude = position.coords.longitude;
		var urlGeo = "http://api.openweathermap.org/data/2.5/weather?q="+place+key;

		if (place === "" || place === null){
			urlGeo = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+key;
		}

	    var request;

		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest (); // als de browser met deze request kan werken
		} else {
			request = new ActiveXObject ('Microsoft.XMLHTTP'); // anders gebruiken we dit concept
		}

	   	request.open('GET',urlGeo, true);
		console.log(request);
		request.onreadystatechange = function() {
			if ((request.readyState===4) && (request.status===200)) {

				var items = JSON.parse(request.responseText);
				var celsius = items.main.temp;
				// var celsius = (fahrenheit - 32) / 1.8;

				var resultsTemplate = Handlebars.templates["results.hbs"];

				var result = resultsTemplate({
					"City" : items.name,
					"Long" : items.coord.lon ,
					"Lat" : items.coord.lat ,
					"Degree" : celsius.toFixed(1) + "°C",
					"Description" : items.weather[0].description
				});

				document.getElementById("results").innerHTML += result;
				var outputMap = document.getElementById("statusMessage");
				var img = new Image();
				img.id = 'map';
				img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + items.coord.lat + "," + items.coord.lon  + "&zoom=13&size=900x400&sensor=false";

				outputMap.parentNode.insertBefore(img,outputMap);
			}
		};
		request.send();
	}

	function error() {
	    outputLoading.innerHTML = "Unable to retrieve your location";
	}
	outputLoading.innerHTML = "<div id='loading'>Locating…</div>";
	navigator.geolocation.getCurrentPosition(success, error);
} //end geoFindMe


function action() {
	var current = "my current weather";
	var place = document.getElementById('text-estimate').value;
	console.log (document.getElementById('text-estimate').value);

	switch (place) {
		case "":
		document.getElementById('text-estimate').value= current;
		geoFindMe("");
		break;

		case place:
		document.getElementById('text-estimate').value= place;
		geoFindMe(place);
		break;
	}
}


(function(){

	var currentWeather = document.getElementById("currentWeather");
	var input = document.getElementById("text-estimate");

	currentWeather.addEventListener('click',function(){
		action();
	});

	input.addEventListener('keyup',function(e){
		if(e.keyCode == 13){
			action();
		}
	})


})();
