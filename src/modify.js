const uppercaseAll = (...words) => {
  let arr = []; //setting empty array to push everything into 
  for (let word of words){ //taking 
    arr.push(word.toUpperCase())
  }
  return arr
};

console.log(uppercaseAll('hello', 'my', 'name', 'is', 'bob'))

const destructureCoordinates = (coordinates) => {
  let x = coordinates[0];
  let y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

console.log(destructureCoordinates([3,2]))

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
