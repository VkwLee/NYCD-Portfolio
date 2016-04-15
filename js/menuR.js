// window.onload = 
(function() {


	// var template = document.getElementById("itemTemplate").innerHTML;

	// var renderer = Handlebars.compile(template);

	// var renderer = Handlebars.templates["itemTemplate.hbs"];

	var menuTemplate = Handlebars.templates["menu.hbs"];

	var result = menuTemplate({
		"1" : "Home",
		"2" : "Playing with my Images",
		"3" : "Playing with my Forms",
		"4" : "To Do List",
		"5" : "Code Clinic",
		"6" : "Ajax",
		"7" : "WeatherApp"
	});

	// var result = renderer({
	// 	"item" : "Whisper 4000 in-home heater and dog walker",
	// 	"description" : "Walk your dog and heat your house at the same time",
	// 	"price" : 895.99,
	// 	"quantity" : 100
	// });

	// var template = $("#itemTemplate").html();

	// var result = Mustache.render(template, {
	// 	"employees" : [{
	// 		"name" : "Henry Handsome",
	// 		"phone" : "+1-212-555-1234",
	// 		"email" : "pensive@example.com",
	// 		"title" : "Senior VP of Basketweaving",
	// 		"fulltime" : true
	// 		}, {
	// 		"name" : "Penelope Persistent",
	// 		"phone" : "+1-212-555-8000",
	// 		"email" : "truthful@example.com",
	// 		"title" : "Principal Understudy",
	// 		"fulltime" : false
	// 		}, {
	// 		"name" : "Sam Serendipity",
	// 		"phone" : "+1-212-555-9876",
	// 		"email" : "helpful@example.com",
	// 		"title" : "Chief Cook and Bottle Washer",
	// 		"fulltime" : true
	// 		}, {
	// 		"name" : "Tom Terriffic",
	// 		"phone" : "+1-212-555-0011",
	// 		"email" : "grumpy@example.com",
	// 		"title" : "Janitor",
	// 		"fulltime" : false
	// 	}]
	// });

	// document.getElementById("container").innerHTML += result;
	// $("#container").html(result);

	document.getElementById("menu").innerHTML += result;

})();