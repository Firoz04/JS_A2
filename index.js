// 1. Count vowels in a string
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("1. Total vowels: " + countVowels("Md. Firoz Hasan"));


// 2. Sort numbers in ascending order
function sortNumbers(arr) {
  return arr.slice().sort((a, b) => a - b);
}
console.log("2. Ascending order: ");
console.log(sortNumbers([4, 1, 8, 3]));


// 3. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("3. Reverse string: "+reverseString("BANGLADESH")); 


// 4. Get last element of an array
function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log("4. Last element of array:");
console.log(getLastElement([10, 20, 30, 40]));


// 5. Merge two arrays
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log("5. Merge two arrays:");
console.log(mergeArrays([1, 2,3], [ 4,5,6])); 


// 6. Check if string has space character
function hasSpace(str) {
  return str.includes(" ");
}
console.log("6. Check space character: "+ hasSpace("Bay of Bengal"));
console.log("6. Check space character: "+ hasSpace("BayofBengal"));


// 7. Check if string is empty
function isEmptyString(str) {
  return str === "";
}
console.log("7. Check string is empty: "+ isEmptyString(""));
console.log("7. Check string is empty: "+ isEmptyString("Hello Bangladesh"));


// 8. Remove negative numbers from array
function removeNegativeNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log("8. Remove negative number:")
console.log(removeNegativeNumbers([-5, 2, -1, 6, 0]));
