

//exercise js



// window.onload = ((function() {


	// alert("hello world");

// 	document.getElementById('hello').innerHTML = "YOOYOYOOYOYOYO";
// }));

// var price = [{1:'apple'},{2:'air'},{3:'potatoes'}] ;



// function awesomeFunction(door) {

// 	door =- 1;

// 	console.log("congratulations",price[door]);
// }


// window.onload = awesomeFunction(1);


document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('tab-group').className = 'ready';

	var tabHeaders = document.getElementsByClassName('tab-header');

	var headerClass = 'tab-header',
		contentClass = 'tab-content';


	document.getElementById('tab-group').addEventListener('click',function (event) {

		var myHeader = event.target ;

		if(myHeader.className !== headerClass) {
			return;
		}

		var myID = myHeader.id,
			contentID = myID.replace('header', 'content');

		deactivateAllTabs ();

		myHeader.className = headerClass + ' active';
		document.getElementById(contentID).className= contentClass + ' active';

	});

	function deactivateAllTabs() {

		var tabHeaders = document.getElementsByClassName(headerClass),
			tabContents = document.getElementsByClassName(contentClass);

		for (var i = 0; i < tabHeaders.length; i++) {
			tabHeaders[i].className = headerClass;
			tabContents[i].className = contentClass;
		}
	}

});