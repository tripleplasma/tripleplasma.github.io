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
    ,new Picture("indexpics/Olive_Garden_December_4th_2019.jpg"),new Picture("indexpics/Hoco_September_29th_2019.jpeg")];
    const divs = pics.map(picUrl =>
      e("div",{className:"slide fade"},
      [e("img",{src:picUrl.url},null),
      e("div",{className:"slide-caption"},picUrl.caption)])
    );
    return divs;
  }
}

class Introductions extends React.Component{
  render(){
    const birthdayOrder = ["Cade","Kayla","Grace","Evanna","Megan","Evan","Abby","Natalie","Kung","Tanner","Beau","Ethan","Bianca"];
    const divs = [e("h1",null,"Meet the crew")];
    for(var i = 0; i < birthdayOrder.length; i++){
      divs.push(
        e("div",{className:"intros"},
        [e("img",{className:"intro-pic",src:birthdayOrder[i]+"/"+birthdayOrder[i].toLowerCase()+"pics/"+birthdayOrder[i]+".jpg"},null),
         e("a",{className:"intros-caption",href:birthdayOrder[i]+"/"+birthdayOrder[i]+".html"},birthdayOrder[i])]
       ));
    }
    return divs;
  }
}
ReactDOM.render(e(SlideShow), document.getElementById("slide-show1"));
ReactDOM.render(e(Introductions), document.getElementById("intro"))
