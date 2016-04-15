var key = "&APPID=d3b199471b77a55a96f3c594ee25569b";
var url = "http://api.openweathermap.org/data/2.5/weather?q="+ name +key ;
var geo;
var name =  geo;
var statusMessage = function (message) {
	document.getElementById('statusMessage').innerHTML = message;
};


(function(){

var currentWeather = document.getElementById("currentWeather");

currentWeather.addEventListener ("click", function (e){
	console.log (e);
});

init();

})();


function getGeoLocation () {
	try {
		if ( !! navigator.geolocation) return navigator.geolocation;
		else return undefined;
	} catch(e) {
		return undefined;
	}
}

function init () {
	if ((geo = getGeoLocation ())) {
		statusMessage ('HTML5 Geolocation is supported.');
	} else {
		statusMessage ('HTML5 Geolocation is not supported.')
	}

	dispResults (); 
}



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