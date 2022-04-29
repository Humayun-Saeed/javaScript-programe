/*There are 3 ways to declare a JavaScript variable:

Using var
Using let
Using const*/



var a=4;
var b=5;
var c;
c=a+b;
console.log(c);

//You can add the diffrent type of data in variable like number strings

var a=4;
var b="john doe";
console.log(a,b);
//You can declare many variables in one statement.
var a=5 ,car="volvo",b=4;
console.log(a,car,b);

//If you re-declare a JavaScript variable, it will not lose its value.
var a=15;
var a;
console.log(a);