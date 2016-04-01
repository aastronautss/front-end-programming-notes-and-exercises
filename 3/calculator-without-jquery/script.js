function $(id_selector) {
  return document.getElementById(id_selector);
}


window.onload = function() {
  $("calculator").onsubmit = function(e) {
    e.preventDefault();

    var result = 0,
        num1 = $("num1").value,
        num2 = $("num2").value,
        operation = $("operation").value;

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

    $("answer").innerHTML = result;
  };
};
