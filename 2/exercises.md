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

## Advanced Objects

### 1.

```javascript
console.log(Object.getPrototypeOf([]));

function NewArray() {};
NewArray.prototype = Object.create(Object.getPrototypeOf([]));

NewArray.prototype.first = function() { return this[0] };
```

### 2.

```javascript
function newPerson(name) {
  this.name = name;
  Object.defineProperties(this, {
    log: {
      value: function() { console.log(this.name); },
      writable: false
    }
  });
}
```

### 3.

```javascript
var something = {
  num: 23,
  str: "hello",
  ary: [1, 2, 3],
  obj: { name: "tyler" },
  fcn: function() { console.log("hello"); }
};

Object.freeze(something);

something.num = 5;
something.str = "hola";
something.ary = [3, 2, 1];
something.ary.push(4);
something.obj = { number: 3 };
something.fcn = function() { console.log("whatever"); };

console.log(something);
```

## Object Constructors and Prototypes

### 1.

```javascript
var invoices = new Object();

invoices.foo = 130;
invoices.bar = 250;
```

### 2.

```javascript
var payments = {
  foo: 80,
  bar: 55
};
```

### 3.

```javascript
var payments_received = 0;

invoices.foo -= payments.foo;
invoices.bar -= payments.bar;

payments_received = payments.foo + payments.bar;
```

### 4.

```javascript
var remaining_due = 0;

for (var item in invoices) {
  remaining_due += invoices[item];
}

console.log(remaining_due);
```

### 5.

```javascript
var second_invoices = Object.create(invoices);

console.log(second_invoices.foo);

invoices.foo = 0;
console.log(second_invoices.foo); // 130
```

### 6.

```javascript
var Invoices = {
  foo: 130,
  bar: 250
};
```

### 7.

```javascript
var outstanding_invoices = [];
outstanding_invoices.push(Object.create(Invoices));
outstanding_invoices.push(Object.create(Invoices));
```

### 8.

```javascript
Object.freeze(Invoices);
Invoices.foo = 100;
console.log(Invoices.foo);
```

### 9.

```javascript
outstanding_invoices[0].foo = 0;
console.log(outstanding_invoices[0].foo);
```

### 10.

```javascript
console.log(Object.isFrozen(Invoices));
console.log(Object.isFrozen(outstanding_invoices[0]));
```

### 11.

```javascript
function newInvoices() {
  return { foo: 130, bar: 250 };
}

var outstanding_invoices = [];
outstanding_invoices.push(newInvoices());
outstanding_invoices.push(newInvoices());
```

### 12.

```javascript
outstanding_invoices[0].foo = 0;
console.log(outstanding_invoices[0].foo);
console.log(outstanding_invoices[1].foo);
```

### 13.

```javascript
function newInvoices(foo, bar) {
  return { foo: foo || 130, bar: bar || 250 };
}

outstanding_invoices.push(newInvoices(undefined, 400));
```

### 14.

```javascript
function newInvoices(params) {
  params = params || {};
  return { foo: params.foo || 130, bar: params.bar || 250 };
}
```

### 15.

```javascript
function newInvoices(params) {
  params = params || {};
  var invoices = { foo: params.foo || 130, bar: params.bar || 250 };

  invoices.getTotal = function() {
    return invoices.foo + invoices.bar;
  };

  return invoices;
}

outstanding_invoices.push(newInvoices());
console.log(outstanding_invoices[3].getTotal());
```
