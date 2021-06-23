// create a function that returns the middle element of an array

// how can we access elements: forEach, forOf, for loop

// how do we access the middle element?

function middle(arr) {
    // going to push 'arr' elements in newArr
    let newArr = [];
    // how to determine middle index
    let middleIndex = Math.floor((arr.length / 2))
    // if the length of the array is divisble by 2
    if(arr.length % 2 === 0) {
        newArr.push(arr[middleIndex-1], arr[middleIndex]);
        
    }

    else {
        newArr.push(arr[middleIndex]);
    }

  

    return newArr;
}

    console.log(middle([34,3,56,51,12,65]))






