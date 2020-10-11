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
  setTimeout(slideShow,4000);
}

class SlideShow extends React.Component{
  render(){
    class Picture{
      constructor(url){
        this.url = url;
        var words = url.substring(url.indexOf("/")+1,url.indexOf(".")).split("_");
        var phrase = "";
        for(var i = 0; i < words.length; i++){
          phrase+=(" "+words[i]);
        }
        this.caption = phrase;
      }
    }
    const pics = [new Picture("indexpics/Door_County_August_1st_2020.jpg"),new Picture("indexpics/Beau's_Birthday_May_19th_2020.jpg")
    ,new Picture("indexpics/Area_51_Raid_April_8th_2020.jpg"),new Picture("indexpics/Rona_March_16th_2020.jpg")
    ,new Picture("indexpics/Skaters_Edge_February_5th_2020.jpg"),new Picture("indexpics/Quad_Birthday_January_4th_2020.jpg")
    const divs = pics.map(picUrl =>
      e("div",{className:"slide fade"},
      [e("img",{src:picUrl.url},null),
      e("div",{className:"slide-caption"},picUrl.caption)])
    );
    return divs;
  }
}
ReactDOM.render(e(SlideShow), document.getElementById("slide-show1"));
