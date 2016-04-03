$(function() {
  var $blinds = $("[id^=blind]"),
      speed = 250,
      delay = 1500;

  function startAnimation() {
    $blinds.each(function(i) {
    var $blind = $blinds.eq(i);

    $blind.delay(1500 * (i + 1) + speed).animate({
          top: "+=" + $blind.height(),
          height: 0
        }, speed);
    });
  }

  $("a").click(function(e) {
    e.preventDefault();

    $blinds.finish();
    $blinds.removeAttr("style");
    startAnimation();
  });

  startAnimation();
});
