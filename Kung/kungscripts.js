$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll >= 56){
    $("#sidenav").css("top","0px");
  } else {
    var pix = 56 - scroll;
    $("#sidenav").css("top",pix+"px");
  }
});
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".slide");
  var dots = $(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// class KungShow extends React.Component{
//   render(){
//     class Picture{
//       constructor(picName,caption){
//         this.url = "kungpics/"+picName+".jpg";
//         this.caption = caption;
//       }
//     }
//     const pics = [
//       new Picture("jacket_beanie","Kung in a Jacket"),
//       new Picture("pose","Cool Pose"),
//       new Picture("stare","Kung with red glasses"),
//       new Picture("looking","Kung with red glasses #2"),
//       new Picture("skaterboy","Skater boy Kung"),
//       new Picture("winterKung","Winter Kung")];
//
//     var slides = pics.map(pic =>
//       e("div",{className:"slide"},[
//         e("img",{src:pic.url},null),
//         e("div",{className:"slide-caption"},pic.caption)
//       ])
//     );
//     slides.push(e("a",{className:"prev"},"<"));
//     slides.push(e("a",{className:"next"},">"));
//
//     var dots = [];
//     for(var i = 0; i < pics.length; i++){
//       dots.push(e("span",{className:"dot"},null));
//     }
//     slides.push(e("div",{style:"text-align:center"},dots));
//     return slides;
//   }
// }
// ReactDOM.render(e(KungShow),document.getElementById("slide-show1"));
