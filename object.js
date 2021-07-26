const round = function(number) {
    return Math.round(number * 100) / 100;
  };
  

// const count = function(arr) {
//     return arr.length
//   };

//   console.log(count([6,2,3,4,9,6,1,0,5]))

//   const sum = function(arr) {
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//       total += arr[i]
//     }

//     return total

//   };;

//   console.log(sum([6,2,3,4,9,6,1,0,5]))
// const mean = function(arr) {

//     if(arr === []) {
//       return null;
//     }

//     else {
//       let total = 0;
//       for(let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//       return round(total / arr.length);

//   }

//   }


//   console.log(mean([6,2,3,4,9,6,1,0,5]))



// const median = function (arr) {
//     let middleIndex = round(arr.length / 2);
  
//     arr.sort((a, b) => {
//       return a - b;
//     });
  
//     if (arr.length % 2 === 0) {
//       console.log(arr[middleIndex - 1], arr[middleIndex]);
    
//     } else {
//       console.log(arr[middleIndex]);
//     }
  
//   };

//   median([15,3,34,4,22,37,6])

function getModes(arr) {
  let frequency = {}; // array of frequency.
  let maxFreq = 0; // holds the max frequency.
  

  for (let item in arr) {
    console.log(frequency[arr[item]] = (frequency[arr[item]] || 0) + 1); // increment frequency.

    if (frequency[arr[item]] > maxFreq) { // is this frequency > max so far ?
      maxFreq = frequency[arr[item]]; // update max.
    }
  }

  for (var value in frequency) {
    if (frequency[value] === maxFreq) {
     return value;
    }
  }

 
}

getModes()
