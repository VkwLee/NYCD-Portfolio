"use strict";

//DOMcontentLoaded is een evnt voordat er maar iets geladen is buiten de pagina nog geen css enz.
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('tab-group').className = 'ready';

/*
	var tab1 = document.getElementById('tab-header-1'),
		tab2 = document.getElementById('tab-header-2'),
		tab3 = document.getElementById('tab-header-3');

	tab1.addEventListener('click', activateTab);
	tab2.addEventListener('click', activateTab);
	tab3.addEventListener('click', activateTab);

*/
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

	// for (var i = 0; i < tabHeaders.length; i++) {
	// 	tabHeaders[i].addEventListener('click',activateTab);
	// }

	// function activateTab(e) {
	// 	var myID = this.id, //e.g tab-header-1
	// 		contentID = myID.replace('header', 'content'); //result tab-content-1

	// 		//reset van alles zodat er geen active class behalve op die je aan klikt
			

	// 		deactivateAllTabs();

	// 		document.getElementById(myID).className="tab-header active";
	// 		document.getElementById(contentID).className="tab-content active";

	
	// }

	function deactivateAllTabs() {

		var tabHeaders = document.getElementsByClassName(headerClass),
			tabContents = document.getElementsByClassName(contentClass);

		for (var i = 0; i < tabHeaders.length; i++) {
			tabHeaders[i].className = headerClass;
			tabContents[i].className = contentClass;
		}

		//className verwijdert alles wat er wel was aan class en vult het
		
		// document.getElementById('tab-header-1').className="tab-header"; 
		// document.getElementById('tab-header-2').className="tab-header"; 
		// document.getElementById('tab-header-3').className="tab-header";

		// document.getElementById('tab-content-1').className="tab-content";
		// document.getElementById('tab-content-2').className="tab-content";
		// document.getElementById('tab-content-3').className="tab-content";
	}

});
