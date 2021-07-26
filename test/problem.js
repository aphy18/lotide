// insert an array , take out the median value of the array

let food = ["apple","banana","pear","spaghetti","potato"]

function takeMiddle(array){
    let middleIndex = Math.floor(array.length / 2) // 2

    if(array.length % 2 === 0){
        return array[middleIndex - 1],array[middleIndex] 
    } else {
        return array[middleIndex]
    }
}

    takeMiddle(food);

