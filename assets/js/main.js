(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2020/2/21',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> <b>:</b> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> <b>:</b> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> <b>:</b> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    }); 

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 10,
     time: 1500
    });

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })


    $('#exampleModal').on('show.bs.modal', function(event) {
      var button = $(event.relatedTarget)
      var recipient = button.data('whatever')
      var modal = $(this)
      modal.find('.modal-title').text(' ! ' + recipient)
      modal.find('#textbody').html(recipient)
    })

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));


var datamap = new Map([
  [document.getElementById("myBtn"), document.getElementById("myModal")],
  [document.getElementById("myBtn1"), document.getElementById("myModal1")],
  [document.getElementById("myBtn2"), document.getElementById("myModal2")]
]);

datamap.forEach((value, key) => {
  doModal(key, value);
});

function doModal(anchor, popupbox) {

  // Get the <span> element that closes the modal
  var span = popupbox.getElementsByClassName("close")[0];

  anchor.addEventListener("click", function (event) {
      popupbox.style.display = "block";
  });

  span.addEventListener("click", function (event) {
      popupbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target == popupbox) {
          popupbox.style.display = "none";
      }
  });
}