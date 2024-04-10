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



const favoriteLocations = ["New York City", "Jersey City"];
const addBostonToFavorites = (locations) => {
  locations.unshift("Boston");
};
console.log(favoriteLocations)
addBostonToFavorites(favoriteLocations);
console.log(favoriteLocations);