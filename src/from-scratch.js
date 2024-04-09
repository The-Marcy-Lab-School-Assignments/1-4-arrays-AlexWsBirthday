const addToFrontOrBack = (arr, value, isFront) => {
   if (isFront === false) {
    arr.push(value)
    return arr
   } else if (isFront === true) {
   arr.splice(0, 0, value) //the format for .splice() is (index we're inserting at, number of elements we are replacing, the element being placed into the array)
   } // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   return;
};

// let arr1 = [1, 2, 3, 4, 5];
// console.log(addToFrontOrBack(arr1, 6, true));



const reverseString = (string) => {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--){ //starting base: the very end of the string. The end of the string is string.length -1 because while the code goes by zero index, the length property goes by literal length. You have to adjust the length to be in-line with the "index" length. ---- ends if: i (the string) runs down to zero. ------ as long as the two conditions are met, go down the given string from end to beginning and take it apart. 
    reversed += string[i] //take the index or element you just took off the end of the word and put it at the beginning of this "reversed" variable. 
  }
  return reversed;
};

// console.log(reverseString("HELLO")); //test



/*after nearly throwing up and blowing up the starbucks I'm in,
I had to claim a new array for the value of the variable "newArray",
before telling the Array constructor how many slots it would need to have (using numOfValue).
Usually when you put a number inside of the Array() constructor, it creates that exact number of indexes, only they're empty.
SO! We use the .fill() method to fill those empty spaces with value. You can use .fill() to fill those empty indexes! If you want to do this by hand
to fill specific indexes, you can use the format .fill(value, first index, last index). I was trying to use that and it wasn't working!
*/
const newArrayFullOf = (value, numOfValue) => {
  let newArray = Array(numOfValue).fill(value) 
    //you can't pass the arguments as arguments into the fill method
 return newArray
};

// console.log(newArrayFullOf("yup", 5)) //test


//we have to get the middle of the array and then set that as the index 
//the splice is starting at. The splice just inserts something in the middle,
//using the parameters (starting index, number of elements being replaced, value replacing those elements)
const insertIntoMiddle = (arr, value) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(middle, 0, value)
};


const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(middle, 1) //with the splice method, you can target a given index and one or more elements from that given point using this format: (index, number of elements being removed)
  //source https://www.shecodes.io/athena/11178-how-to-delete-an-index-inside-an-array-in-javascript#:~:text=To%20delete%20an%20index%20inside%20an%20array%20in%20JavaScript%2C%20you,use%20the%20splice()%20method.&text=In%20the%20example%20code%2C%20splice,number%20of%20elements%20to%20remove.
};

const isRightIndex = (arr, value, index) => { 
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
