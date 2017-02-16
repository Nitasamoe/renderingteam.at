(function() {


  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = 0; i < toggles.length; i++) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      // e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active"),document.querySelector("ul").classList.add("visible");
      navbar();
    });
  }
})();

function navbar(){
  if(document.querySelector(".c-hamburger").classList.contains("is-active") === false){
      document.querySelector("ul").classList.remove("visible");
  }
}


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $("#sectionThree").offset().top - $(window).height()){

    $(".innen").css({"transform": "translateY(" + (-wScroll/7).toFixed(2)+"px)"});
  }

  if(wScroll > $("#sectionThree").offset().top - $(window).height()){

    $(".innen").css({"transform": "translateY(" + (-wScroll/7).toFixed(2)+"px)"});
  }

  if(wScroll > $("#sectionFive").offset().top - $(window).height()){

    $(".aussen").css({"transform": "translateY(" + (-wScroll/7).toFixed(2)+"px)"});
  }

  if(wScroll > $("#sectionFive").offset().top - $(window).height()){

    $(".aussen").css({"transform": "translateY(" + (-wScroll/7).toFixed(2)+"px)"});
  }

  if(wScroll>778 && wScroll < 1125){
      var value = wScroll-778;
      var oneP = ((1125-778)/100).toFixed(2);
      console.log(value/oneP/100);
      opa= 1-value/oneP/100;


    $("#sectionTwo").css({"opacity": opa });
  }

  if(wScroll > 1170){
    document.querySelector(".four-one").classList.add("is-showing");
    document.querySelector(".four-one").classList.remove("four");
  } else{
    document.querySelector(".four-one").classList.remove("is-showing");
    document.querySelector(".four-one").classList.add("four");
  }

  if(wScroll > 1220){
    document.querySelector(".four-two").classList.add("is-showing");
    document.querySelector(".four-two").classList.remove("four");
  } else{
    document.querySelector(".four-two").classList.remove("is-showing");
    document.querySelector(".four-two").classList.add("four");
  }
  if(wScroll > 1270){
    document.querySelector(".four-three").classList.add("is-showing");
    document.querySelector(".four-three").classList.remove("four");
  } else{
    document.querySelector(".four-three").classList.remove("is-showing");
    document.querySelector(".four-three").classList.add("four");
  }
  
  if(wScroll > 1320){
    document.querySelector(".four-four").classList.add("is-showing");
    document.querySelector(".four-four").classList.remove("four");
  } else{
    document.querySelector(".four-four").classList.remove("is-showing");
    document.querySelector(".four-four").classList.add("four");
  }

  if(wScroll > 1370){
    document.querySelector(".four-five").classList.add("is-showing");
    document.querySelector(".four-five").classList.remove("four");
  } else{
    document.querySelector(".four-five").classList.remove("is-showing");
    document.querySelector(".four-five").classList.add("four");
  }

  if(wScroll > 2150){
    document.querySelector(".four-six").classList.add("is-showing");
    document.querySelector(".four-six").classList.remove("four");
  } else{
    document.querySelector(".four-six").classList.remove("is-showing");
    document.querySelector(".four-six").classList.add("four");
  }

  if(wScroll > 2060){
    document.querySelector(".four-seven").classList.add("is-showing");
    document.querySelector(".four-seven").classList.remove("four");
  } else{
    document.querySelector(".four-seven").classList.remove("is-showing");
    document.querySelector(".four-seven").classList.add("four");
  }

});