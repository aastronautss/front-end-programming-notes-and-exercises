$(document).ready(function() {
  console.log($("#content").length);
}); // On document ready

$(window).on("load", function() {
  console.log($("img").width());
}); // On window load (wait for images and iframes to load)

$(function() {
  console.log($("#content").length);
}); // On document ready (functionally the same as the first call here)

$(function() {
  var $content = $("#content");
  $content.css({
    "font-size": "12px",
    color: "#300"
  }); // Change the css properties of the element of class 'content'.

  $("li").filter(":even").css({
    background: "#ddd"
  }); // :even is a jquery pseudo selector that selects the even children.

  $("li").filter("[data-id]").length; // To find every li with a "data-id" property, use square brackets.

  $("li").each(function() {
    console.log($(this).attr("data-id"));
  }); // A couple of things happening here.
      // First, we're calling `each` on the collection that our "li" selector is
      // selecting (which gives us every <li> element in the document).
      // Second, `each`  contextualizes `this` as the current DOM element being
      // iterated over. It contextualizes it as a raw DOM element rather than a
      // jQuery object, so we have to pass `this` back into the jQuery function
      // in order to call jQuery methods on it.

  var $li = $("li"); // Assign all "li" elements to $li
  $li.first(); // Return the first element in the collection
  $li.last();  // Return the last element in the collection
               // They both call the $.eq method, which returns a jQuery object
               // rather than a DOM element. This lets us chain additional
               // methods, for example $li.first().css("background-color", "red");

  $content.find("p ~ p"); // Finds all "p" elements that come after a "p"
                          // element as siblings. `find()` returns a collection
                          // of objects.

  $content.find("p + p"); // Same as CSS--the adjascent sibling selector. Gets
                          // "p" elements that occur immediately after a
                          // paragraph.

  $content.find(".some_class").hide(); // Hides all descendents of $content
                                       // that match the provided selector.

  $content.find(".some_class").show(); // Shows those elements.

  $("table tr:even").addClass("striped"); // Stripes even rows if we have a
                                          // ".striped" class in our stylesheet.

  var $inputs = $(":input"); // Selects form elements

  $inputs.filter("[type=text]"); // Selects inputs with type text

  $inputs.filter(":text"); // jQuery's pseudo selector for text input elements

  $(":radio"); // selects radios

  $(":radio").filter(":checked"); // checked radios

  $(":radio").filter(":checked").val(); // returns the value of checked radios

  $inputs.filter(":text").each(function(){
    console.log($(this).val()); // another example of values
  });

  $inputs.filter(":text").val("hello"); // val can be a setter method, too!

  var $radios = $(":radio");

  $radios.filter(":checked").val(); // gets the value of the currently checked

  $radios.filter("[value=something]").prop("checked", true); // check the radio
                                            // with the value "something".
                                            // You want to use `prop` instead
                                            // of attr, since it won't be
                                            // submitted correctly if we just
                                            // use attr

  // What's the difference been attr and prop? Values like defaultChecked,
  // defaultSelected, selectedIndex, etc will not be set using the attr method.
  // This is because it looks for the first elements that were set, and because
  // the checked state loads on the DOM element rather than the HTML element
  // when the page loads.

  // ====------------------====
  // DOM traversal!
  // ====------------------====

  // Assume a nested list exists.

  $("li.item-a").parent(); // Selects the "ul" element that is the parent of
                           // our "li" element. Selects a single parent.

  $("li.item-a").parents(); // selects all parents of our "li" element

  $("li.item-a").parents("ul"); // We can pass a selector to `parents` to
                                // get only the "ul" elements that are parents
                                // of our "li" element.

  $("li.item-1").closest("li"); // `closest` begins with the current element,
                                // so if the element we are calling `closest` on
                                // matches the selector string, it will return
                                // itself. If not, it goes to the parents.
});
