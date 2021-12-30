//An array is a special variable, which can hold more than one value:
//Using an array literal is the easiest way to create a JavaScript Array.
// const array_name = [item1, item2, ...]; 

const car=["volvo","fiat","carolla","mehran"];

console.log(car);

//Accessing Array Elements
//You access an array element by referring to the index number:

var a=car[3];
console.log(a);
//changing any element of the array:
car[2]="dogati";
console.log(car);
//you can access the length the of the array by using key length.
var b=car.length;
console.log(b);

//Looping the array:
const arr=[1,2,3,4,5,7];

var a=arr.length;
var b="<ul>"

for(var i=0;i<arr.length;i++){

    console.log( arr[i]);

}
//Adding the array elements

arr.push(4);
console.log(arr);

