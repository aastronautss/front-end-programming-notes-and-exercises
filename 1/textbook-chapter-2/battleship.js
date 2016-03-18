var grid_size = 7,
    ship_size = 3,
    hits = 0,
    guesses = 0,
    is_sunk = false;

var random_location = Math.floor(Math.random() * 5),
    location1 = random_location;
    location2 = location1 + 1;
    location3 = location2 + 1;

var guess;

while (!is_sunk) {
  guess = prompt("Guess a space: enter a number between 0 and 6.");
  if (guess < 0 || guess > 6) {
    alert("Invalid input!");
  } else {
    guesses += 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits += 1;
      alert("Hit!");

      if (hits == 3) {
        is_sunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("Miss!");
    }
  }
}

var stats = "You took " + guesses + " guesses to sink my battleship, " +
            "which means your shooting accuracy was " + (3 / guesses);
alert(stats);
