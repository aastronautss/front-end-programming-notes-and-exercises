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

## Using jQuery Selectors

### 1.

```javascript
$("h1");
```

### 2.

```javascript
$("#site_title");
```

### 3.

```javascript
$("article li");
```

### 4.

```javascript
$("article li").eq(2);
```

### 5.

```javascript
$("table").find("tr:odd");
```

### 6.

```javascript
$("ul li li").filter(":contains('ac ante')").parents("li");
```

### 7.

```javascript
$("ul li li").filter(":contains('ac ante')").next();
```

### 8.

```javascript
$("table td").last();
```

### 9.

```javascript
$("td").not(".protected");
```

### 10.

```javascript
$("a[href^=#]");
```

### 11.

```javascript
$("[class*=block]")
```
