$(function() {
  $("#team-links li > a").click(function(e) {
    e.preventDefault();
    var $e = $(this);

    $e.siblings(".modal").css({
      top: $(window).scrollTop() + 150
    });

    $e.nextAll("div").fadeIn(400);
  });

  $(".overlay, a.close").click(function(e) {
    e.preventDefault();

    $(".overlay, .modal").filter(":visible").fadeOut(400);
  });
});
