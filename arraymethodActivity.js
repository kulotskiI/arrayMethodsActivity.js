const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log("Combined array:", combinedArr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits);

const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1);

const removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("Fruits after pop:", fruits);

const array2 = [1, 2, 3];
const removedFirstElement = array2.shift();
console.log("Removed first element:", removedFirstElement);
console.log("Array2 after shift:", array2);

fruits.sort();
console.log("Fruits after sort:", fruits);

const slicedFruits = fruits.slice(1, 3); 
console.log("Sliced fruits:", slicedFruits);

const months = ["January", "February", "March", "April"];
months.splice(2, 1, "MarchUpdated", "MarchNew"); 
console.log("Months after splice:", months);