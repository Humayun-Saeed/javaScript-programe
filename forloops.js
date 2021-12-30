/*Javascript loops are very handy if you run the same code again and again.
Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

//The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

*/
for(var i=0;i<5;i++){

    console.log(i);
}

//Using var in a loop:


var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10

//Using let in a loop:

let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5
