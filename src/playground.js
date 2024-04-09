// const { clearArr, getFirstItem } = require('./debug');
// const {
//   addToFrontOrBack,
//   reverseString,
//   newArrayFullOf,
//   insertIntoMiddle,
//   deleteFromMiddle,
//   isRightIndex,
//   roundAllNumsDown,
//   getAllYCoordinates,
// } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');


const getAllYCoordinates = (arrOfCords) => {
    let allYs = arrOfCords.map(coord => coord[1])
    return allYs;
};
let arr10 = [[1, 2], [3, 4], [5, 6]]
console.log(getAllYCoordinates(arr10))