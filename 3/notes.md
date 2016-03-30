# Course 220 Lesson 3 Notes

## jQuery Events

```javascript
$(function() {
  $("a").on("click", function() {
    // Adds a click listener to all anchors on the page.
  }); 
});
```

`on()`, if used in the (event, callback) format, will pass and `event` object to the callback function, typically assigned to `e`:

```javascript
$("a").on("click", function(e) {
  e.preventDefault(); // Stops the browser from doing what it normally does on
                      // the given event (in this case, a click). In this .
                      // case, we're preventing the browser from following the
                      // link.
});
```

