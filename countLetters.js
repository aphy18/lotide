// function countLetters(string){
//   let results = {};
//   let counter = 1;

//   for(let i = 0; i < string.length; i++){
    
//     if(string[i] === " "){
//       continue;
//     } else if(string[i] in results){
//       results[string[i]] += 1
//     } else {
//       results[string[i]] = counter
//     }
//   }
//   return results
// }

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