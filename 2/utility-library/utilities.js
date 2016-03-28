var _ = function(element) {
  u = {
    first: function() {
      return element[0];
    },

    last: function() {
      return element[element.length - 1];
    },

    without: function() {
      var result = [];
      for (var i in element) {
        var element_has_value = false;

        for (var j in arguments) {
          if (element[i] === arguments[j]) {
            element_has_value = true
          }
        }

        if (!element_has_value) { result.push(element[i]); }
      }

      return result;
    },

    lastIndexOf: function(value) {
      for (var i = element.length - 1; i >= 0; i--) {
        if (element[i] === value) { return i; }
      }

      return -1;
    },

    sample: function(num) {
      num = num || 1;
      if (num === 1) {
        return element[Math.floor(Math.random() * element.length)];
      }

      var result = [];
      for (var i = 0; i < num; i++) {
        random_element = element[Math.floor(Math.random() * element.length)];
        result.push(random_element);
      }

      return result;
    }
  };

  return u;
};

_.range = function(low, high) {
  var result = [];
  if (arguments.length <= 0) {
    return result;
  } else if (arguments.length == 1) {
    var start = 0,
        stop = low;
  } else {
    var start = low,
        stop = high;
  }

  for (var i = start; i < stop; i++) { result.push(i); }

  return result;
};
