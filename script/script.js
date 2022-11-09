$(document).on('ready', function () {

  $("#mobile").on("click", function () {
    $("body").toggleClass("mobile");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('header').addClass("small");
    } else {
      $('header').removeClass("small");
    }
  });

  $('#gallery').slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:0,
    speed:8000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // clien-logo slider
 
  

  // client-slider
  $('.slider-comment').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // collapes script
  $('.collage.body h3').each(function () {
    var tis = $(this), state = false, answer = tis.next('div').slideUp();
    tis.click(function () {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass('active', state);
    });
  });

  //Horizontal Tab
  $('#parentHorizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: 'hor_1', // The tab groups identifier
    activate: function (event) { // Callback function if tab is switched
      var $tab = $(this);
      var $info = $('#nested-tabInfo');
      var $name = $('span', $info);
      $name.text($tab.text());
      $info.show();
    }
  });

  $('#mega-menu').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: 'hor_2', // The tab groups identifier
    activate: function (event) { // Callback function if tab is switched
      var $tab = $(this);
      var $info = $('#nested-tabInfo');
      var $name = $('span', $info);
      $name.text($tab.text());
      $info.show();
    }
  });
});     