var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");

  if (n >= slides.length) {
    slideIndex = 0 /*after last one comes 0th */
  } 
  if (n < 0) {
    slideIndex = slides.length-1  /*Before 1st comes last */
  }

  for (i = 0; i < slides.length; i++) { /**invisible every slide */
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) { /**deactive every dot */
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block"; 
  dots[slideIndex].className += " active";
}

