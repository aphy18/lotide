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

    return value;
}

eqlArray([4,5,6],[4,true,6])