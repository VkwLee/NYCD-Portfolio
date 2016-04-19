var key = "&APPID=d3b199471b77a55a96f3c594ee25569b&units=metric";
var latitude = null;
var longitude = null;

// http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&

var statusMessage = function (message) {
	document.getElementById("statusMessage").innerHTML = message;
};

function geoFindMe(place) {
	// var outputTable = document.getElementById("results");
	var outputLoading = document.getElementById("results");
	var outputMap = null;

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var outputMap = null;
    var urlGeo = "http://api.openweathermap.org/data/2.5/weather?q="+place+key;

    if (place == "" || place == null){
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
	}
	request.send();
  };

  function error() {
    outLoading.innerHTML = "Unable to retrieve your location";
  };
	outputLoading.innerHTML = "<div id='loading'>Locating…</div>";
	navigator.geolocation.getCurrentPosition(success, error);
} //end geoFindMe


(function(){

var currentWeather = document.getElementById("currentWeather");

currentWeather.addEventListener('click',function(){
	var current = "my current weather";
	var place = document.getElementById('text-estimate').value;
	console.log (document.getElementById('text-estimate').value);
	// if ( value == current || value == ""){
	// 	document.getElementById('text-estimate').value=current;
	// 	geoFindMe();
	// }

	switch (place) {
		case "":
		document.getElementById('text-estimate').value=current;
		geoFindMe("");
		break;

		case place:
		document.getElementById('text-estimate').value= place;
		geoFindMe(place);
		break;
	}

})

})();


// function loadAJAX() {
// 	var request;
// 	if (window.XMLHttpRequest) {
// 		request = new XMLHttpRequest (); // als de browser met deze request kan werken
// 	} else {
// 		request = new ActiveXObject ('Microsoft.XMLHTTP'); // anders gebruiken we dit concept
// 	}
// 	var urlGeo = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+key;
// 	// request.open('GET','data.txt', true);
// 	// request.open('GET','data.xml', true);
// 	request.open('GET',urlGeo, true);
// 	console.log(request);
// 	request.onreadystatechange = function() {
// 		if ((request.readyState===4) && (request.status===200)) {

// 			// console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

// 			var items = JSON.parse(request.responseText);
// 			var output = '<ul>';
			
// 			output += '<li>' + items.name[0] + '</li>';
		
// 			output += '</ul>';
// 			document.getElementById('results').innerHTML = output;

// 			// var items = request.responseXML.getElementsByTagName('name');
// 			// var output = '<ul>';
// 			// for (var i = 0; i < items.length; i++) {
// 			// 	output += '<li>' + items[i].firstChild.nodeValue + '</li>';
// 			// }
// 			// output += '</ul>';

// 			// document.getElementById('update').innerHTML= output;




// 			// var modify = document.getElementById('update');
// 			// modify.innerHTML = request.responseText;

// 			// var a = document.getElementsByTagName('ul')[2].getElementsByTagName('li');
// 			// for(var i = 0; i < a.length; i++) {
// 			// 	a[i].innerHTML = request.responseText;
// 			// }

// 		}
// 	}
// 	request.send();
// }






 //  var container = document.getElementById('results'),
 //    firstChild = container.childNodes[1];
	// if (container && firstChild) {  
	//     firstChild.parentNode.insertBefore(newPre, firstChild.nextSibling);    
	// }

 //  if (!navigator.geolocation){
 //    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
 //    return;
 //  }

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