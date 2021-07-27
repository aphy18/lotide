function findKey(object, callback) {
    for (let key of Object.keys(object)) {
        let value = object[key];
        if (callback(value)) {
            console.log(key)
            return key;
        };
    };
    return undefined;
};


findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 3) // => "noma"




