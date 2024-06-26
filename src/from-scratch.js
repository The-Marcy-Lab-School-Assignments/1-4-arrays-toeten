/** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */
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
//console.log(deleteFromMiddle(arr6))
/** FEEDBACK: Because we have the index at our disposal, we can simply access through the index rather than using .includes! */
const isRightIndex = (arr, value, index) => {
  if (arr.includes(value, index)) {
    return true
  } else {
    return false
  }
};
const arr7 = [1, 2, 3, 4]
//console.log(isRightIndex(arr7, 6, 0))

const roundAllNumsDown = (arr) => {
  let roundedDown = arr.map(nums => Math.floor(nums))
  return roundedDown;
}
const arrDown = [1.1, 2.2, 3.3];
console.log(roundAllNumsDown(arrDown))

const getAllYCoordinates = (arrOfCords) => {
  let allYs = arrOfCords.map(coord => coord[1])
  return allYs;
};
const arr10 = [[1, 2], [3, 4], [5, 6]]
console.log(getAllYCoordinates(arr10))

//const getAllYCoordinates = (arrOfCoords) => {
//  return arrOfCoords.map(coord => coord[1]); also works
//};



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
