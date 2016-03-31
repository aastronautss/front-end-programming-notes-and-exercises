$(function() {
  $("form").submit(function(e) {
    e.preventDefault();

    var result,
        num1 = $("#num1").val(),
        num2 = $("#num2").val(),
        operation = $("#operation").val();

    if (!num1 || !num2) {
      result = "-";
    } else if (operation === "+") {
      result = +num1 + +num2;
    } else if (operation === "-") {
      result = +num1 - +num2;
    } else if (operation === "*") {
      result = +num1 * +num2;
    } else if (operation === "/") {
      if (+num2 !== 0) {
        result = +num1 / +num2;
      } else {
        result = "ERR";
      }
    }

    $("#answer").text(result);
  });
});
