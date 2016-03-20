var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution(scores, costs, highscore) {
  var cost = 100;
  var index;

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highscore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

var num_tests = scores.length;
var highest = 0;
var high_scores = [];

for (var i = 0; i < num_tests; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
    high_scores = [];
  }

  if (scores[i] == highest) {
    high_scores.push(i);
  }
}

var most_cost_effective = getMostCostEffectiveSolution(scores, costs, highest);

console.log("The number of tests is: " + num_tests);
console.log("The highest score is: " + highest);
console.log("The highest scoring tests were: " + high_scores.join(", "));
console.log("The most cost effective solution is: " + most_cost_effective);
