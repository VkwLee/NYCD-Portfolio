"use strict";

document.getElementById('cart-oil').addEventListener('submit', estimateTotal);

function estimateTotal(e) {
	e.preventDefault();
	if (document.getElementById('s-state').value === '') {
		alert('Please choose your shipping state.');
		document.getElementById('s-state').focus();
	}

	//parseInt zet de string om naar int zodat het later echt opgeteld kan worden
	var btlExtra = parseInt(document.getElementById('text-q-extra').value) || 0,
		btlCold = parseInt(document.getElementById('text-q-cold').value) || 0,
		btlGarlic = parseInt(document.getElementById('text-q-garlic').value) || 0,
		state = document.getElementById('s-state').value;
		

	var methods = document.getElementById('cart-oil').r_method,
		shippingMethod;

	for (var i = 0; i < methods.length; i++) {
		if(methods[i].checked == true) {
			shippingMethod = methods[i].value;
		}
	}

	var taxFactor = 1 ;
	if (state === "CA") {
		taxFactor = 1.075; //tax is 7,5% Calinornia
	}

	//pickup, usps, ups
	var shippingCostPer = 0;
	switch (shippingMethod) {
		case 'pickup' :
			shippingCostPer = 0;
			break;
		case 'usps' :
			shippingCostPer = 2;
			break;
		case 'ups' :
			shippingCostPer = 3;
			break;	
	}

	var totalBottles = btlExtra + btlCold + btlGarlic,
		shippingCost = totalBottles * shippingCostPer;

	var subTotal = ((btlExtra * 10) + (btlCold * 8) + (btlGarlic * 10)) * taxFactor;

	var estimate = "$" + (subTotal + shippingCost).toFixed(2);

	document.getElementById('text-estimate').value = estimate;

	document.getElementById('results').innerHTML = 'Total bottles: ' + totalBottles + '<br>';
	document.getElementById('results').innerHTML += 'Total shipping: $' + shippingCost.toFixed(2) + '<br>';
	document.getElementById('results').innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(1) + '%';

	// console.log(btlExtra, btlCold, btlGarlic, state, shippingMethod);

}

