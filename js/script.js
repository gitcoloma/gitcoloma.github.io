var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

function followMouse() {
$(document).mousemove(function(e) {

    var docX = $('header.masthead').width() ;
    var docY = $('header.masthead').height() ;

    var rotateY = ((e.pageX / docX * rotateForce*2) - rotateForce).toFixed(2);
    var rotateX = (-((e.pageY / docY * rotateForce*2) - rotateForce)).toFixed(2);

    rotateX = Math.max(rotateX, -35);

    $('.popup-content')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');

    // $('.angle-x').text(-rotateY + "..." + rotateX);
    // $('.angle-y').text(rotateY);

    $('.popup-content')
        .css('background-image', 'linear-gradient(135deg, #BBB '+(-21 -rotateY + rotateX)+'%, #F0F0F0 '+(-20 -rotateY + rotateX)+'%, #F0F0F0 '+(-11 -rotateY + rotateX)+'%, #BBB '+(-10 -rotateY + rotateX)+'%, #222 '+(100 + (-rotateY + rotateX))+'%)');
    // $('.popup-content:hover')
    //     .css('background-image', 'linear-gradient(135deg, #BBB '+(0 -rotateY + rotateX)+'%, #222 '+(100 + (-rotateY + rotateX))+'%)');
    if (window.matchMedia('(max-width: 767px)').matches) {
          $('.popup-content')
              .css('box-shadow', '20px 20px 25px '+0.3*(-20 -rotateY + rotateX)+'px rgba(0, 0, 0, .8)');
        } else {
          $('.popup-content')
              .css('box-shadow', '40px 40px 50px '+0.6*(-20 -rotateY + rotateX)+'px rgba(0, 0, 0, .8)');
        }

})
}



function typeMessages() {
  var typed = new Typed('#typedMessage', {
  strings: ["electronic engineering.",
            "telecommunications.",
            "business administration.",
            "visual arts.",
            "programming."],
  startDelay: 40,
  typeSpeed: 40,
  backDelay: 1000,
  backSpeed: 50,
  loop: true,
  })
}

var Page = (function() {

  var config = {
      $bookBlock : $( '#bb-bookblock' ),
      $navNext : $( '#bb-nav-next' ),
      $navPrev : $( '#bb-nav-prev' ),
      $navFirst : $( '#bb-nav-first' ),
      $navLast : $( '#bb-nav-last' ),
      $navNextImg : $( '.bb-item-img-next' ),
      $navPrevImg : $( '.bb-item-img-prev' )
    },
    init = function() {
      config.$bookBlock.bookblock( {
        speed : 800,
        shadowSides : 0.8,
        shadowFlip : 0.7
      } );
      initEvents();
    },
    initEvents = function() {

      var $slides = config.$bookBlock.children();

      // add navigation events
      config.$navNext.on( 'click touchstart', function() {
        config.$bookBlock.bookblock( 'next' );
        return false;
      } );

      config.$navPrev.on( 'click touchstart', function() {
        config.$bookBlock.bookblock( 'prev' );
        return false;
      } );

      config.$navNextImg.on( 'click touchstart', function() {
        config.$bookBlock.bookblock( 'next' );
        return false;
      } );

      config.$navPrevImg.on( 'click touchstart', function() {
        config.$bookBlock.bookblock( 'prev' );
        return false;
      } );

      config.$navFirst.on( 'click touchstart', function() {
        config.$bookBlock.bookblock( 'first' );
        return false;
      } );

      config.$navLast.on( 'click touchstart', function() {
        config.$bookBlock.bookblock( 'last' );
        return false;
      } );

      // add swipe events
      $slides.on( {
        'swipeleft' : function( event ) {
          config.$bookBlock.bookblock( 'next' );
          return false;
        },
        'swiperight' : function( event ) {
          config.$bookBlock.bookblock( 'prev' );
          return false;
        }
      } );

      // add keyboard events
      $( document ).keydown( function(e) {
        var keyCode = e.keyCode || e.which,
          arrow = {
            left : 37,
            up : 38,
            right : 39,
            down : 40
          };

        switch (keyCode) {
          case arrow.left:
            config.$bookBlock.bookblock( 'prev' );
            break;
          case arrow.right:
            config.$bookBlock.bookblock( 'next' );
            break;
        }
      } );
    };

    return { init : init };

})();

$(function() {
    typeMessages();
    followMouse();
    Page.init();
});
