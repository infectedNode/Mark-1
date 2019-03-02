
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function() {
    if ($(".navbar").offset().top) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-body a').click(function(){
      $('.custom-navbar .navbar-toggler-back').removeClass('active');
      $('.custom-navbar .navbar-body').removeClass('active');
      $('.custom-navbar .navbar-toggler').removeClass('active')
    });

    $('.custom-navbar .navbar-toggler').click(function() {
      $('.custom-navbar .navbar-toggler-back').toggleClass('active');
      $('.custom-navbar .navbar-body').toggleClass('active');
      $('.custom-navbar .navbar-toggler').toggleClass('active');
    });

    $('#speakers .members-control .btn').click(function(){
      $('#speakers .members').addClass('active');
      $('#speakers .members-control').addClass('remove');
    });

 /* Parallax section
    -----------------------------------------------*/
  // function initParallax() {
  //   $('#intro').parallax("100%", 0.1);
  //   $('#overview').parallax("100%", 0.3);
  //   $('#detail').parallax("100%", 0.2);
  //   $('#video').parallax("100%", 0.3);
  //   $('#speakers').parallax("100%", 0.1);
  //   $('#program').parallax("100%", 0.2);
  //   $('#register').parallax("100%", 0.1);
  //   $('#faq').parallax("100%", 0.3);
  //   $('#venue').parallax("100%", 0.1);
  //   $('#sponsors').parallax("100%", 0.3);
  //   $('#contact').parallax("100%", 0.2);

  // }
  // initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  // $(document).ready(function() {
  //   $("#owl-speakers").owlCarousel({
  //     autoPlay: 6000,
  //     items : 4,
  //     itemsDesktop : [1199,2],
  //     itemsDesktopSmall : [979,1],
  //     itemsTablet: [768,1],
  //     itemsTabletSmall: [985,2],
  //     itemsMobile : [479,1],
  //   });
  // });


  /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

