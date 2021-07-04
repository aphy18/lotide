function letterPosition(sentence) {
    const results = {};
    
    for(let i = 0; i < sentence.length; i++){
        let value = sentence[i]
        if(value === " "){
            continue;
        
        } else if(value in results){
           results[value].push(i)
            
        } else {
            results[value] = [i];
        }
    
       
    }
    return results;
  };

 letterPosition('hello')




