$(function() {
  var active = "img1.png",
      $thumbs = $("#thumbnails a");

  function setActive(filename) {
    var $img = $("figure > img"),
        $figure = $("figure");

    if (filename !== active) {
      $figure.fadeOut(400);
      active = filename;
    }

    setTimeout(function() {
      $img.attr("src", active);
      $figure.fadeIn(400);
    }, 400)
  }

  setActive(active);

  $thumbs.click(function(e) {
    e.preventDefault();

    var $e = $(this),
        new_filename = $e.find("img").attr("src");

    setActive(new_filename);
  });
});
