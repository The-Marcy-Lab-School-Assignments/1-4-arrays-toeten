/** FEEDBACK: Here you could've used .map on its own! */
const uppercaseAll = (...words) => {
  return [
    ...words.map(word => word.toUpperCase()),
  ];
};
console.log(uppercaseAll("hello", "whats up", "whaaat", "nice"))

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};
console.log(destructureCoordinates([1, 2]))

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
