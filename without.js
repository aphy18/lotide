const without = function (source, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    const e2 = itemsToRemove[i];
    const indexFound = source.indexOf(e2);
    if (indexFound >= 0) {
      source.splice(indexFound, 1);
    }
  }
  console.log(source);
  return source;
};

without([12, "c", 3, 45, 3, 5, "a"], [5, 12, "c"]);