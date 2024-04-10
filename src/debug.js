/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  return arr.splice([]);
};

const getFirstItem = (array) => {
  return array.shift();
};

module.exports = {
  clearArr,
  getFirstItem,
};
