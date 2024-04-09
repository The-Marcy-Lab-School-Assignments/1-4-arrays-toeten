const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
  return arr;
};
//console.log(addToFrontOrBack([0, 1, 2, 3], 4, true))

const reverseString = (str) => {
  return str.split("").reverse().join("")
};
//console.log(reverseString("hello"))

const newArrayFullOf = (value, numOfValue) => {
  return Array(numOfValue).fill(value);

};
const arr = newArrayFullOf(1, 5)
//console.log(arr)

const insertIntoMiddle = (arr, value) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(middle, 0, value)
  return arr;
};
const arr5 = [1, 2, 3, 4, 5]
//console.log(insertIntoMiddle(arr5, 6))

const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length / 2);
  arr.splice(middle, 1)
  return arr;
};
const arr6 = [3, 4, 5, 6]
console.log(deleteFromMiddle(arr6))

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
