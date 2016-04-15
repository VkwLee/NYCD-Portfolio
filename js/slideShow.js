var images = ["img/1-tn.jpg","img/2-tn.jpg","img/3-tn.jpg","img/4-tn.jpg","img/5-tn.jpg","img/6-tn.jpg"];
var caption = ["Caption 1","Caption 2","Caption 3","Caption 4","Caption 5","Caption 6"]; 

var imageNumber = 0; 
var imageLength = images.length;

// function changeImage(x) {

// 	imageNumber += x;

// 	//if you reach end of array --> start over
// 	if (imageNumber > imageLength) {
// 		imageNumber = 0;
// 	}
// 	if (imageNumber < 0) {
// 		imageNumber = imageLength;
// 	}

// 	var currentImages = document.querySelectorAll(".slideShow");

// 	for (var i in currentImages) {
// 		currentImages[i].src = images[imageNumber];
// 	}

// 	// document.querySelectorAll('.slideShow').src = images[imageNumber];
// 	document.getElementById ('caption').innerHTML = caption[imageNumber];

// 	return false;
// }



// var dimages=new Array();
// var numImages=2;
// for (i=0; i<numImages; i++)
// {
//   dimages[i]=new Image();
//   dimages[i].src="images/image"+(i+1)+".jpg";
// }
// var curImage=-1;

function next() {
	imageNumber += 1;
	if (imageNumber > imageLength) {
		imageNumber = 1;
	}
}

function previous() {
	imageNumber -= 1;
	if (imageNumber < 0) {
		imageNumber = imageLength;
	}
}

function update() {
	var imagesElements = document.querySelectorAll(".slideShow");

	for (var i = 0; i < imageLength; i++) {

		imagesElements[i].src = "img/" + (imageNumber) + "-tn.jpg";
		// imagesElements[i].src = images[imageNumber];
	}
	document.getElementById ('caption').innerHTML = caption[imageNumber];
}



document.getElementsByClassName('o-pics__previous')[0].addEventListener ('click', function() {
	previous ();
	update ();
}),false;

document.getElementsByClassName('o-pics__next')[0].addEventListener ('click', function() {
	next ();
	update ();
}),false;


// function autoRun() {
// 	setInterval(function() {
// 		console.log('changeImage');
// 		changeImage(1);
// 	}, 1000);
// }

// autoRun();