$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll >= 56){
    $("#sidenav").css("top","0px");
  } else {
    var pix = 56 - scroll;
    $("#sidenav").css("top",pix+"px");
  }
});

var currentSlide = 0;
$(document).ready(function(){
  $(".prev").attr("onclick","plusSlides(-1)");
  $(".next").attr("onclick","plusSlides(1)");
  var dots = $(".dot");
  for(var i = 0; i < dots.length; i++){
    $(dots[i]).attr("onclick","toCurrentSlide("+i+")");
  }
  showSlides(0);
});

function plusSlides(n) {
  currentSlide += n;
  showSlides(currentSlide);
}

function toCurrentSlide(n) {
  currentSlide = n;
  showSlides(n);
}

function showSlides(n) {

  var dots = $(".dot");

  if(n >= $(".slide").length+1){currentSlide = 0;}
  else if(n < 0){currentSlide = $(".slide").length;}

  var appearSlides = $(".slide-appear");

  for (var i = 0; i < appearSlides.length; i++) {
    appearSlides[i].className = "slide";
  }

  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  var slides = $(".slide");
  slides[currentSlide].className = "slide-appear";
  dots[currentSlide].className += " active";
}

class KungShow extends React.Component{
  render(){
    class Picture{
      constructor(picName,caption){
        this.url = "kungpics/"+picName+".jpg";
        this.caption = caption;
      }
    }
    const pics = [
      new Picture("jacket_beanie","Kung in a Jacket"),
      new Picture("pose","Cool Pose"),
      new Picture("stare","Kung with red glasses"),
      new Picture("looking","Kung with red glasses #2"),
      new Picture("skaterboy","Skater boy Kung"),
      new Picture("winterKung","Winter Kung")];

    var slides = pics.map(pic =>
      e("div",{className:"slide"},[
        e("img",{src:pic.url},null),
        e("div",{className:"slide-caption"},pic.caption)
      ])
    );
    slides.push(e("a",{className:"prev"},"\u27E8"));
    slides.push(e("a",{className:"next"},"\u27E9"));

    var dots = [];
    for(var i = 0; i < pics.length; i++){
      dots.push(e("span",{className:"dot"},null));
    }
    slides.push(e("div",{className:"dotDiv"},dots));
    return slides;
  }
}
ReactDOM.render(e(KungShow),document.getElementById("slide-show1"));
