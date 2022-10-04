$(document).on('ready', function () {
  $(document).on('click','.menu-btn',function(event){
    $('body').toggleClass('menu-open');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 150){
       $('header').addClass("small");
    } else {
       $('header').removeClass("small");
    }
 });

    $('.regular').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 2000
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

   // collapes script
   $('.collage.body h3').each(function() {
    var tis = $(this), state = false, answer = tis.next('div').slideUp();
    tis.click(function() {
        state = !state;
        answer.slideToggle(state);
        tis.toggleClass('active',state);
    });
  });
});      