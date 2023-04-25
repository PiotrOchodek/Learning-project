const numbers = [0, 1, 2, 3, 4, 5];

const isArrayIncludes = (array, elementToFind, fromIndex) => {
  for (let i = fromIndex; i < array.length; i++) {
    if (elementToFind === i) {
      return true;
    }
  }
};
console.log(isArrayIncludes(numbers, 2, 2));