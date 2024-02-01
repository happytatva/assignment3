// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var headerInner = document.getElementById("header-inner");
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  headerInner.classList.toggle("show-nav");
});

//   --for slick slider---
$(document).ready(function () {
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
            slidesToShow: 1
          }
        },
    ],
  });
});
