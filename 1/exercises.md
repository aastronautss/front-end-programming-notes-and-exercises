# Course 220

## Lesson 1

### Variables and Numbers

#### 1.

```javascript
var numerator = 10;
```

#### 2.

```javascript
var denominator = 2;
```

#### 3.

```javascript
var answer = numerator / denominator;
```

#### 4.

```javascript
var incrementer = 1;
```

#### 5.

```javascript
var start = incrementer;
```

#### 6.

```javascript
var end,
    difference;
```

#### 7.

```javascript
incrementer += 1;
incrementer += 1;
incrementer += 1;

console.log(incrementer);
```

#### 8.

```javascript
incrementer ++;
incrementer ++;
```

#### 9.

```javascript
end = incrementer;
difference = end - start;
console.log(end);
console.log(difference);
```

#### 10.

```javascript
answer = (11 + 31) * 3;
console.log(answer);
```

### Strings

#### 1.

```javascript
var first_name = "Tyler",
    last_name = "Guillen";

full_name = first_name + " " + last_name;
console.log(full_name);
```

#### 2.

```javascript
console.log(first_name.concat(last_name));
```

#### 3.

```javascript
console.log(last_name.split(" "));
```

#### 4.

```javascript
var language = "JavaScript";
var idx = language.indexOf("s");
console.log(idx);
```

#### 5.

```javascript
char_code = language.charCodeAt(idx);
console.log(char_code); // => 83
```

#### 6.

```javascript
console.log(String.fromCharCode(char_code));
```

#### 7.

```javascript
console.log(language.lastIndexOf("a")); // => 3
```

#### 8.

```javascript
var a = "a",
    b = "b";

console.log(a > b); // => false

b = "B";

console.log(a > b); // => true
```

#### 9.

```javascript
var a_index,
    v_index;

a_index = language.indexOf("a");
v_index = language.indexOf("v");

console.log(language.substr(a_index, 4));
console.log(language.substr(v_index, 4));
```

#### 10.

```javascript
console.log(language.substring(a_index, v_index));
```

#### 11.

```javascript
var fact_1 = "JavaScript is fun",
    fact_2 = "Kids like it too";

var compound_sentence = fact_1 + " and " + fact_2.toLowerCase();
console.log(compound_sentence);
```

#### 12.

```javascript
console.log(fact_1[0]);
console.log(fact_2[0]);
```

#### 13.

```javascript
var pi = 22/7;
pi = pi.toString();
console.log(pi);

console.log(pi.lastIndexOf("14"));
```

#### 14.

```javascript
var box_number = 356..toString();
console.log(box_number);
box_number = (356).toString();
console.log(box_number);
```

#### 15.

```javascript
box_number = +box_number;
console.log(typeof box_number);
box_number = "" + box_number;
console.log(typeof box_number);
```

### Logic

#### 1.

```javascript
var apples = 3,
    bananas = 5;

if (apples == bananas) {
  console.log("apples equals equals bananas");
}
```

#### 2.

```javascript
banans = "3";

if (apples == bananas) {
  console.log("apples equals equals bananas");
}
```

#### 3.

```javascript
if (apples === bananas) {
  console.log("apples equals equals equals bananas"); // This will not run.
}
```

#### 4. & 5.

```javascript
if (apples === bananas) {
  console.log("apples equals equals equals bananas");
} else if (apples == bananas) {
  console.log("apples equals equals bananas");
} else {
  console.log("not (apples equals equals equals bananas)");
}
```

#### 6.

```javascript
if (apples === bananas) {
  console.log("apples equals equals equals bananas");
} else {
  if(apples == bananas) {
  console.log("apples equals equals bananas");
  } else {
    console.log("not (apples equals equals equals bananas)");
  }
}
```

#### 7.

```javascript
apples = 3;
bananas = 3;

var are_equal = apples == bananas;
console.log(are_equal); // => true
```

#### 8.

```javascript
apples = 3;
bananas = undefined;

var either_or = apples || bananas;
console.log(either_or);
```

#### 9.

```javascript
bananas = 1;
either_or = apples || bananas; // => 3
either_or = bananas || apples; // => 1
```

#### 10.

```javascript
var last_name = "Riley";
var family_message = last_name === "Riley" ? "You're part of the family!" : "You're not family!";
```

### Functions

#### 1.

```javascript
function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(4, 14, 6));
```

#### 2.

```javascript
function sum(a, b, c) {
  return a + b + c;
}

function average(a, b, c) {
  return sum(a, b, c) / 3;
}

console.log(average(3, 14, 6));
```

#### 3., 4.

```javascript
function sum(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

console.log(average(3, 14, 6));
```

#### 5.

```javascript
var temperatures = [76, 50, 64, 40, 77];
console.log(average(temperatures));
```

#### 6.

```javascript
function fizzBuzz(max) {
  for (var i = 1; i <= max; i++) {
    output = "";
    if (i % 3 == 0) {
      output += "Fizz";
    }

    if (i % 5 == 0) {
      output += "Buzz";
    }

    console.log(output || i);
  }
}
```

#### 7.

```javascript
function randomInt(max) {
  return Math.ceil(Math.random() * (max ));
}
```

### Arrays

#### 1.

```javascript
var friends = ["Bob", "Josie", "Sam"],
    enemies = ["Bob", "Josie", "Sam"];

console.log(friends == enemies);
```

#### 2.

```javascript
var friends_clone = friends;
console.log(friends == friends_clone);
```

#### 3.

```javascript
function lastInArray(ary) {
  ary[ary.length - 1];
}
```

#### 4.

```javascript
var names = ["Steve", "Martha", "Pat"];

function rollCall(names) {
  for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
```

#### 5.

```javascript
var nums = [1, 2, 3, 4, 5];

function reverse(ary) {
  var new_ary = []
  for (i = ary.length - 1; i >= 0; i--) {
    new_ary.push(ary[i]);
  }
  return new_ary;
}

console.log(reverse(nums));
```

#### 6.

```javascript
function findInstance(ary, term) {
  for(var i = 0; i < ary.length; i++) {
    if (ary[i] == term) { return i }
  }
  return -1;
}
```

#### 7.

```javascript
function arrayToString(array) {
  result = "";
  for (var i = 0; i < ary.length; i++) {
    result += array[i];
  }
  return result;
}
```

### Primitive Types and Type Coercion

#### 1.

```javascript
console.log(+x + y);
```

#### 2.

`x * y` will be a number, since when we use the `*` operator on a string and a number, the string will be attempted to be coerced to a number.

#### 3.

```javascript
console.log("" + npa + nxx + num);
```

#### 4.

```javascript
console.log(String(npa) + String(nxx) + String(num));
```

#### 5.

```javascript
console.log(bool.toString());
console.log(arr.toString());
```
