document.addEventListener("DOMContentLoaded", function () {


  // smooth scroll
  $(function() {
    $('nav a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  // end smooth scroll

  // parallax effect
  $('#header').parallax({imageSrc: './assets/img/bg.jpg'});
  $('.parallax-window').parallax({imageSrc: './assets/img/photobg.jpg'}); 
  //end parralax


  // OBJECT PARALLAX EFFECT
(function(){
  
    var windowHeight = $(window).height();
    var windowScrollPosTop = $(window).scrollTop();
    var windowScrollPosBottom = windowHeight + windowScrollPosTop;
    var windowWidth = $(window).width();
  
    // start position flag
    var startFlagScroll = false;
  
    function parallaxEffectFunc(){
      windowHeight = $(window).height();
      windowScrollPosTop = $(window).scrollTop();
      windowScrollPosBottom = windowHeight + windowScrollPosTop;
      windowWidth = $(window).width();
  
      // do not animate on small screen
      if (windowWidth < 768){
        myScrollVal(0, 0, '.photo-1>img');
        myScrollVal(0, 0, '.photo-2>img');
      } else {
        // SET OBJECT
        myScrollVal(-40, 40, '.photo-1>img');
        myScrollVal(30, -30, '.photo-2>img');

        //set start position
        if (startFlagScroll === false){
          startFlagScroll = true;
        }
      }
    };
    
    parallaxEffectFunc();
    $(window).scroll(parallaxEffectFunc);
  
    function myScrollVal(startValue, endValue, object, direction){
      if (direction === undefined){
        direction = 'Y';
      }

      var objectOffset = $(object).offset();
      var objectOffsetTop = objectOffset.top;
      var objectOffsetBottom = objectOffsetTop + $(object).outerHeight();
  
      if (windowScrollPosBottom > objectOffsetTop && windowScrollPosTop < (objectOffsetTop+$(object).height())){
  
        $(object).css('transform', 'translate' + direction + '(' + Math.round((startValue+(((windowScrollPosBottom-objectOffsetTop)*(endValue-startValue))/(windowHeight+(objectOffsetBottom-objectOffsetTop))))) + '%)');
      } 
      else if (startFlagScroll === false){
        $(object).css('transform', 'translate' + direction + '(' + startValue + '%)');
      }
  
    };
  
  })();
    //end OBJECT PARALLAX EFFECT

// end DOMContentLoaded
});
