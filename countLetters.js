function countLetters(string){
  let results = {};
  let counter = 1;

  for(let i = 0; i < string.length; i++){
    
    if(string[i] === " "){
      continue;
    } else if(string[i] in results){
      results[string[i]] += 1
    } else {
      results[string[i]] = counter
    }
  }
  return results
}


console.log(countLetters("rerrange"))