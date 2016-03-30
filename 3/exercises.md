# Lesson 3: jQuery and the DOM

## The DOM

### 1.

```javascript
var heading = document.getElementById("primary_heading");
heading.setAttribute("class", "heading");
```

### 2.

```javascript
var list = document.getElementById("list");
list.setAttribute("class", "bulleted");
```

### 3.

```javascript
var toggle = document.getElementById("toggle");
toggle.onclick = function(e) {
  e.preventDefault();
  var notice = document.getElementById("notice");
  if (notice.getAttribute("class") === "hidden") {
    notice.setAttribute("class", "visible");
  } else {
    notice.setAttribute("class", "hidden");
  }
};
```

### 4.

```javascript
var notice = document.getElementById("notice");
notice.onclick = function(e) {
  e.preventDefault();
  this.setAttribute("class", "hidden");
};
```

### 5.

```javascript
var mult = document.getElementById("multiplication");
mult.innerHTML = 13 * 9;
```

### 6.

```javascript
document.body.setAttribute("id", "styled");
```
