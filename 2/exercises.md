# Course 220, Lesson 2

## Objects

### 1.

```javascript
var invoices = {
  unpaid: []
};
```

### 2.

```javascript
var invoices = {
  unpaid: [],

  add: function(name, amount) {
    unpaid.push({
        name: name,
        amount: amount
      });
  }
};
```

### 3.

```javascript
var invoices = {
  unpaid: [],

  add: function(name, amount) {
    this.unpaid.push({
      name: name,
      amount: amount
    });
  },
  totalDue: function() {
    var total = 0;
    for (var i = 0; i < this.unpaid.length; i++) {
      total += this.unpaid[i].amount;
    }
    return total;
  }
};
```

### 4.

```javascript
invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);

console.log(invoices.totalDue());
```

### 5., 6.

```javascript
var invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    this.unpaid.push({
      name: name,
      amount: amount
    });
  },

  totalDue: function() {
    var total = 0;
    for (var i = 0; i < this.unpaid.length; i++) {
      total += this.unpaid[i].amount;
    }
    return total;
  },

  payInvoice: function(name) {
    var remaining = [];

    for (var i = 0; i < this.unpaid.length; i++) {
      invoice = this.unpaid[i];

      if invoice.name == name {
        paid.push(invoice);
      } else {
        remaining.push(invoice);
      }
    }

    this.unpaid = remaining;
  },

  totalPaid: function()){
    var total = 0;
    for (var i = 0; i < this.unpaid.length; i++) {
      total += this.unpaid[i].amount;
    }
    return total;
  }
};
```

### 7.

```javascript
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");

console.log(invoices.totalPaid());
console.log(invoices.totalDue());
```

## Arrays and Objects

```javascript
var me = {
  firstName: "Tyler",
  lastName: "Guillen"
};

function fullName(person) {
  console.log(person.firstName + " " + person.lastName);
}

var friend = {
  firstName: "Allison",
  lastName: "Beresford"
};

var mother = {
  firstName: "Suzette",
  lastName: "Guillen"
};

var father = {
  firstName: "Dean",
  lastName: "Guillen"
};

var people = [];

people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

console.log(people.length);

function rollCall(collection) {
  colleciton.forEach(function(item) {
    fullName(item);
  });
}

function rollCall(collection) {
  collection.forEach(fullName);
}
```

```javascript
var people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + " " + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    this.collection.push(person);
  },
  remove: function(person) {
    if (this.isInvalidPerson(person)) { return; }

    var index = this.getIndex(person),
        leftSide, rightSide;

    if (index === -1) { return; }
    leftSide = this.collection.slice(0, index);
    rightSide = this.collection.slice(index + 1);

    this.collection = leftSide.concat(rightSide);
  },
  get: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    return this.collection[this.getIndex(person)];
  },
  update: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    var existingPersonId = this.getIndex(person);

    if (existingPersonId === -1) { this.add(person); }
    else {this.collection[existingPersonId] = person; }
  }
  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if(comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i;
      }
    });
    return index;
  },
  isValidPerson: function(person) {
    return typeof person.firstName === "string" && typeof person.lastName === "string";
  },
  isInvalidPerson: function(person) {
    return typeof person.firstName !== "string" || typeof person.lastName !== "string";
  }
};
```

## The Date Object

### 1.

```javascript
var today = new Date();
```

### 2.

```javascript
var today = new Date();
console.log("Today's day is " + today.getDay());)
```

### 3.

```javascript
var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log("Today's day is " + days_of_week[today.getDay()]);
```

### 4.

```javascript
var full_days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today's day is " + full_days_of_week[today.getDay()] + ", the " + today.getDate());
```

### 5.

```javascript
function dateSuffix(date) {
  if (date % 10 == 1 && date != 11) { return date + "st"; }
  else if (date % 10 == 2 && date != 12) { return date + "nd"; }
  else if (date % 10 == 3 && date != 13) { return date + "rd"; }
  else { return date + "th"; }
}

console.log("Today's date is " + days_of_week[today.getDay()] + ", the " + dateSuffix(today.getDate()));
```

### 6.

```javascript
console.log("Today's date is " + days_of_week[today.getDay()] + ", " + today.getMonth() + " the " + dateSuffix(today.getDate()));
```
### 7.

```javascript
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log("Today's date is " + days_of_week[today.getDay()] + ", " + months[today.getMonth()] + " " + dateSuffix(today.getDate()));
```

### 8.

```javascript
function formattedDay(date) {
  var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days_of_week[date.getDay()];
}

function formattedMonth(date) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[date.getMonth()];
}

function dateSuffix(date) {
  number = date.getDate();

  if (number % 10 == 1 && number != 11) { return number + "st"; }
  else if (number % 10 == 2 && number != 12) { return number + "nd"; }
  else if (number % 10 == 3 && number != 13) { return number + "rd"; }
  else { return number + "th"; }
}

function formattedDate(date) {
  var day = formattedDay(date),
      month = formattedMonth(date),
      date = dateSuffix(date);

  console.log("Today's date is " + day + ", " + month + " the " + date);
}

formattedDate(today);
```

### 9.

```javascript
function formattedYear(date) {
  return date.getYear() + 1900;
}
```

### 10.

```javascript
year = today.getFullYear();
```

### 11.

```javascript
console.log(today.getTime());
```

### 12.

```javascript
var tomorrow = new Date(today);

tomorrow.setDate(today.getDate() + 1);

formattedDate(tomorrow);
```

### 13.

```javascript
var next_week = new Date(today);

console.log(next_week == today); // false
```

### 14.

```javascript
console.log(next_week.toDateString() == today.toDateString());

next_week.setDate(today.getDate() + 7);

console.log(next_week.toDateString() == today.toDateString());
```

### 15.

```javascript
function formatTime(date) {
  return date.getHours() + ":" + date.getMinutes();
}
```

## The Math Object

### 1.

```javascript
function toDegrees(radians) {
  return radians * (180 / Math.PI);
}
```

### 2.

```javascript
var num = -180;

console.log(Math.abs(num));
```

### 3.

```javascript
console.log(Math.sqrt(16777216));
```

### 4.

```javascript
console.log(Math.pow(16, 6));
```

### 5.

```javascript
var a = 50.72,
    b = 49.2,
    c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));
```

### 6.

```javascript
function newRandom(min, max) {
  var random_val,
      swap;

  if (min === max) { return min; }
  else if (min > max) {
    swap = min;
    min = max;
    max = swap;
  }

  random_val = Math.floor(Math.random() * (max - min + 1));
  return random_val + min;
}
```
