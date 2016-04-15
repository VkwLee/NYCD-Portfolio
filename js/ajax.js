function loadAJAX() {
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest (); // als de browser met deze request kan werken
	} else {
		request = new ActiveXObject ('Microsoft.XMLHTTP'); // anders gebruiken we dit concept
	}

	// request.open('GET','data.txt', true);
	// request.open('GET','data.xml', true);
	request.open('GET','api/data.json', true);

	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {

			// console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;

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

var mybutton = document.getElementById('loadbutton');
mybutton.onclick = loadAJAX;
