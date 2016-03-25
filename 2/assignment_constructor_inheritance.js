function Vehicle() {}

Vehicle.prototype.doors = 4;
Vehicle.prototype.wheels = 4;

var sedan = new Vehicle();
var coupe = new Vehicle();

coupe.doors = 2;

console.log(sedan.hasOwnProperty("doors"));
console.log(coupe.hasOwnProperty("doors"));

function Coupe() {}
Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;

function Motorcycle() {}
Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.doors = 0;
Motorcycle.prototype.wheels = 2;

coupe = new Coupe();
var motorcycle = new Motorcycle();

console.log(coupe instanceof Coupe);
console.log(coupe instanceof Vehicle);
console.log(coupe instanceof Motorcycle);

function Sedan() {}
Sedan.prototype = Object.create(Vehicle.prototype);

sedan = new Sedan();

console.log(sedan instanceof Sedan);
console.log(sedan instanceof Vehicle);
