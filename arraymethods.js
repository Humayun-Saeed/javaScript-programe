/*Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.*/

//The pop() method removes the last element from an array:


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

console.log(fruits);

//Pushing
//The push() method adds a new element to an array (at the end):

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("fruits");

//Shifting Elements
//Shifting is equivalent to popping, working on the first element instead of the last.

//The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruitss);

//Splicing an Array
//The splice() method can be used to add new items to an array:


const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruit);