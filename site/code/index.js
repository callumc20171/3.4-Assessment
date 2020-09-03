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

// function showSlides(n) {
//   //Shows the given slide
//   var i;
//   var slides = document.getElementsByClassName("carSlide");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

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

currentSlide(1);