var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021
};

var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892
};

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000
};

var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};

console.log(fiat.mileage);

function prequal(car) {
  if (car.mileage > 10000 || car.year > 1960) {
    return false;
  }

  return true;
}

var worth_a_look = prequal(taxi);

if (worth_a_look) {
  console.log("You gotta check out this car");
} else {
  console.log("We'll pass");
}

// Object behavior.

fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,

  start: function() {
    if(this.fuel > 0) {
      this.started = true;
    } else {
      console.log("Out of fuel!");
    }
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log("Zoom zoom!");
      } else {
        console.log("Out of fuel!");
        this.stop();
      }
    } else {
      console.log("You need to start the car first.");
    }
  },
  addFuel: fucntion(amount) {
    this.fuel += amount;
  }
}
