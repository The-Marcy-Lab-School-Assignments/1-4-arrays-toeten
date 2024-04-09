const uppercaseAll = (...words) => {
  return [
    ...words.map(word => word.toUpperCase()),
  ];
};
console.log(uppercaseAll("hello", "whats up", "whaaat", "nice"))

const destructureCoordinates = (coordinates) => {
  const x = coordinates[0];
  const y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
