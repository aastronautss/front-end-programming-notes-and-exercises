function Duck(type, canFly) {
  this.type = type;
  tyis.canFly = canFly;
}

// ====---------====
// Dogs
// ====---------====

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    if (this.weight > 25) {
      console.log(this.name + " says Woof!");
    } else {
      console.log(this.name + " says Yip!");
    }
  };
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Schnauzer", 10);

var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
  var size = "small";
  if (dogs[i].weight > 10) {
    size = "large";
  }
  console.log("Dog: " + dogs[i].name
              + " is a " + size
              + " " + dogs[i].breed);
}

for (var i = 0; i < dogs.length; i++) {
  dogs[i].bark();
}

function dogCatcher(obj) {
  return obj instanceof Dog;
}

function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

var meow = new Cat("Mew", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var doog = { name: "Doog", breed: "Mixed", weight: 38 };

var dogs.push(meow);
var dogs.push(whiskers);
var dogs.push(doog);

for (var i = 0; i < dogs.length; i++) {
  if (dogCatcher(dogs[i])) {
    console.log(dogs[i].name + " is a dog!");
  }
}

// ====---------====
// Coffee
// ====---------====

function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;

  this.getSize = function() {
    if (ounces < 8) { return "small"; }
    else if (ounces < 12) { return "medium"; }

    return "large";
  }

  this.toString = function() {
    return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
  }
}

// ====---------====
// Cars
// ====---------====

function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;

  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };

  this.drive = function() {
    if (this.started) {
      console.log(this.make + " " +
                  this.model + " goes zoom zoom!");
    } else {
      console.log("Start the engine first.");
    }
  }
}

