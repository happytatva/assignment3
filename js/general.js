$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".body").toggleClass("open-menu");
  });
  // -------sliding logogs using slick----------
  $(".logo-slider").slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 365,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //   ----setting top value of open menu---------
  if ($(window).width() < 1025) {
    var headerWrapHeight1 = $(".header-wrap").height();
    $(".body .header-inner").css("top", headerWrapHeight1);
  }
});
// ------setting top value of open menu while resizing--------
$(window).on("resize", function () {
  if ($(window).width() < 1025) {
    // Get the height + padding + border of `header-wrap`
    setTimeout(function () {
      var headerWrapHeight = $(".header-wrap").outerHeight();
      $(".body .header-inner").css("top", headerWrapHeight);
    }, 500);
  }
});
