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
console.log(reverseString("hello"))

const newArrayFullOf = () => {
};

const insertIntoMiddle = () => {
};

const deleteFromMiddle = () => {
};

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
