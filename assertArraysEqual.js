function eqlArray(arr1, arr2) {
    let value = true
    if(arr1.length !== arr2.length){
        value = false;
    }
    arr1.forEach((element,index) => {
        if(element !== arr2[index]){
            value = false;
        }
    });

    if(value === true){
        console.log("The arrays are equal!");
    }

    else{
        console.log("The arrays are not equal!");
    }
}

