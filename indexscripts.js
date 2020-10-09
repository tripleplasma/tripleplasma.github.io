$(document).ready(function(){
  slideShow();
});

var slideIndex = 0;
function slideShow(){
  var slides = $(".slide");
  for (var i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  slideIndex++;
  if(slideIndex >= slides.length){
    slideIndex = 0;
  }
  setTimeout(slideShow,5000);
}
