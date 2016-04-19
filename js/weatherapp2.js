var key = "&APPID=d3b199471b77a55a96f3c594ee25569b";
var url = "http://api.openweathermap.org/data/2.5/weather?q="+ name +key ;

var statusMessage = function (message) {
	document.getElementById("statusMessage").innerHTML = message;
};

function geoFindMe() {
	var output = document.getElementById("results");
	var outputLoading = document.getElementById("results");
	var outputMap = null;

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    var resultsTemplate = Handlebars.templates["results.hbs"];
		var result = resultsTemplate({
			"City" : "A",
			"Long" : longitude,
			"Lat" : latitude,
			"Degree" : "D",
			"Description" : "Zeg whoelah"
		});

	document.getElementById("results").innerHTML += result;
	var outputMap = document.getElementById("statusMessage");
	
    var img = new Image();
    img.id = 'map';
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    outputMap.parentNode.insertBefore(img,outputMap);
    // outputLoading.innerHTML = "<p>success…</p>";
  };

  function error() {
    outLaoding.innerHTML = "Unable to retrieve your location";
  };

// var loading = document.createElement('div');
// loading.id= "loading";
outputLoading.innerHTML = "<div id='loading'>Locating…</div>";


	navigator.geolocation.getCurrentPosition(success, error);
}


(function(){

var currentWeather = document.getElementById("currentWeather");

currentWeather.addEventListener('click',function(){
	geoFindMe();
})

})();


function loadAJAX() {
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest (); // als de browser met deze request kan werken
	} else {
		request = new ActiveXObject ('Microsoft.XMLHTTP'); // anders gebruiken we dit concept
	}

	// request.open('GET','data.txt', true);
	// request.open('GET','data.xml', true);
	request.open('GET',url, true);

	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {

			// console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('results').innerHTML = output;

			// var items = request.responseXML.getElementsByTagName('name');
			// var output = '<ul>';
			// for (var i = 0; i < items.length; i++) {
			// 	output += '<li>' + items[i].firstChild.nodeValue + '</li>';
			// }
			// output += '</ul>';

			// document.getElementById('update').innerHTML= output;




			// var modify = document.getElementById('update');
			// modify.innerHTML = request.responseText;

			// var a = document.getElementsByTagName('ul')[2].getElementsByTagName('li');
			// for(var i = 0; i < a.length; i++) {
			// 	a[i].innerHTML = request.responseText;
			// }

		}
	}
	request.send();
}






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