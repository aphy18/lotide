function countLetters(str) {
  let results = {};
  for (let char of str) {
    if (char === " ") {
      continue;
    }
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  console.log(results);
}


countLetters("rerrange");