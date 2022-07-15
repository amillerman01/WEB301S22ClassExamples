$(function () {
  /* Scrolls the scrollable area manually when you click on the button */
  $("#scroll-button").on("click", function () {
    $(".wide-scrolling-wrapper").scrollLeft(300);
  });

  /* Displays the amount the scrollable area has been scrolled horizontally */
  $(".wide-scrolling-wrapper").on("scroll", function () {
    $("#scroll-distance").text($(this).scrollLeft());
  });

  $("#mobile-hamburger").on("click", function () {
    $("nav").slideToggle(500);
  });
  $(window).on("resize", function () {
    if ($(window).width() >= 640) {
      $("nav").hide();
    }
  });
});
