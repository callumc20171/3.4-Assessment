const LOOP_TIME = 10000 //Time in ms between pic change

var slideIndex = 1;
//List of backgrounds to pick from
var bgImages = ["index1", "index2", "index3"];

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	//Set the shown slide to the nth slide
    var i;
    var dots = document.getElementsByClassName("dot");
	if (n > bgImages.length) {slideIndex = 1}
	if (n < 1) {slideIndex = bgImages.length}
	for (i = 0; i < dots.length; i++) {
	 	dots[i].className = dots[i].className.replace(" active", "");
	}

	IndexParallax.className = "parallax";
	IndexParallax.className += " " + bgImages[slideIndex-1];

	var dots = document.getElementsByClassName("dot");
	dots[slideIndex-1].className += " active";
}

function autoLoopSlides() {
	//Automatically switch index picture every LOOP_TIME seconds
	setTimeout(function() {
		autoLoopSlides(LOOP_TIME);
	}, LOOP_TIME);

	plusSlides(1);
}

autoLoopSlides();
currentSlide(1);