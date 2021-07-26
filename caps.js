const titleCase  = function(text) {
    const caps = text.split(" ")
      for(let i = 0; i < caps.length; i++){
        caps[i] = caps[i][0].toUpperCase() + caps[i].slice(1).toLowerCase() // or substring(1), starts a new index from character one
     }
      console.log(caps.join(" "))
  };
  
    

    titleCase("hI mY NamE is apHY")


