function countLetters(string){
  let results = {};
  let counter = 0;

  if(string) {
    for(const letter of string){
        if(letter){
          counter ++;
          results[letter] = counter;
        }
    }
  }
  return results;
}


countLetters("rerrange")