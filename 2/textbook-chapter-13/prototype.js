// ====-------------====
// Dogs
// ====-------------====

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.sitting = false;

Dog.prototype.bark = function() {
  if (this.weight > 25) {
    console.log(this.name + " says Woof!");
  } else {
    console.log(this.name + " says Yip!");
  }
};

Dog.prototype.run = function() {
  console.log("Run!");
};

Dog.prototype.wag = function() {
  console.log("Wag!");
};


Dog.prototype.sit = function() {
  if (this.sitting) {
    console.log(this.name + " is already sitting.");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting.");
  }
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function() {
  console.log(this.name + " says WOOF!");
};

function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() {
  console.log("Stack");
};

ShowDog.prototype.bait = function() {
  console.log("Bait");
};

ShowDog.prototype.gait = function(kind) {
  console.log(kind + "ing");
};

ShowDog.prototype.groom = function() {
  console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

// ====-------------====
// Robots
// ====-------------====

function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.maker = "Robots n Stuff";

Robot.prototype.speak = function(words) {
  console.log(this.name + " says " + words);
};

Robot.prototype.makeCoffee = function() {
  console.log(this.name + " makes coffee.");
};

Robot.prototype.blinkLights = function() {
  console.log(this.name + " blinks its lights.")
};

function SpaceRobot(name, year, owner, home_planet) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.homePlanet = home_planet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function() {
  console.log(this.name + " says Sir, If I may venture an opinion...");
};

SpaceRobot.prototype.pilot = function() {
  console.log(this.name + " says Thrusters? Are they important?");
};

// ====-------------====
// String Extensions
// ====-------------====

String.prototype.palindrome = function() {
  lower_string = this.toLowerCase();
  var reverse_i = lower_string.length - 1;
  for (var i = 0; i < lower_string.length; i++) {
    if (lower_string[i] != lower_string[reverse_i]) { return false; }
    reverse_i--;
  }

  return true;
};
