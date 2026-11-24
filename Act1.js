let scores = [45, 88, 92];
let passingScores = [];
let idx = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 75) {
    passingScores.push(scores[i]);
  } else if (scores[i] >= 50) {
    idx++;
  }
}

console.log(passingScores);