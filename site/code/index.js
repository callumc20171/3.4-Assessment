const LOOP_TIME = 10000

var slideIndex = 1;
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
	setTimeout(function() {
		autoLoopSlides(LOOP_TIME);
	}, LOOP_TIME);

	plusSlides(1);
}

autoLoopSlides();
currentSlide(1);