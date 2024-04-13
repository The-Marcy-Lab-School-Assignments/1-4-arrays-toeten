/** FEEDBACK: Great job getting all test cases to pass! */
/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  return arr.splice([]);
};

const getFirstItem = (array) => {
  return array[0];
};
console.log(getFirstItem([1, 2, 3]))

module.exports = {
  clearArr,
  getFirstItem,
};
