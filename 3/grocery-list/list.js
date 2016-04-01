$(function() {
  $("form").submit(function(e) {
    e.preventDefault();

    var name = $("#item_name").val(),
        quantity = $("#quantity").val() || "1";

    $("ul").append("<li>" + quantity + " " + name + "</li>");

    $("form")[0].reset();
  });
});
