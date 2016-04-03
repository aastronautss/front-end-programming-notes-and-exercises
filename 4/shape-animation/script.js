$(function() {
  var $screen = $("#screen");

  function getFormObject($f) {
    var o = {};

    $f.serializeArray().forEach(function(input) {
      o[input.name] = input.value;
    });

    return o;
  }

  function createShape(data) {
    var $shape = $("<div />", {
      "class": "shape " + data.shape,
      data: data,
      css: {
        left: +data.start_x,
        top: +data.start_y
      }
    });

    return $shape;
  }

  function animateShape() {
    var $e = $(this),
        data = $e.data();

    resetElement($e, data);

    $e.animate({
      left: +data.end_x,
      top: +data.end_y
    }, 1000);
  }

  function resetElement($e, data) {
    $e.css({
      left: +data.start_x,
      top: +data.start_y
    });
  }

  function stopAnimations() {
    $screen.find("div").stop();
  }

  $("form").submit(function(e) {
    e.preventDefault();

    var $f = $(e.target),
        data = getFormObject($f),
        type = $f.find("[name=shape]").val();

    var $new_shape = createShape(data);

    $screen.append($new_shape);
  });

  $("#start").click(function(e) {
    e.preventDefault();

    stopAnimations();
    $(".shape").each(animateShape);
  });
});
