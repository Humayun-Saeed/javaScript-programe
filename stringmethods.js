/*Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)*/

//slice method

/*slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

This example slices out a portion of a string from position 7 to position 12 (13-1):*/
let a="hello world what are u doing";

let h=a.slice(11,16);
console.log(h);

/*The substring() Method
substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.*/
var c="hello world what are u doing";

let g=c.substring(11,16);
console.log(g);

/*The substr() Method
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.*/
let d="hello world what are u doing";
let f=d.substr(11,16);


/*Replacing String Content
The replace() method replaces a specified value with another value in a string:*/

var e="hello world "
var b=e.replace("hello","world")
console.log(b);
//Converting to Upper and Lower Case
//A string is converted to upper case with toUpperCase():
var text="hello";
var up=text.toUpperCase(text);
console.log(up);

//The concat() Method
//concat() joins two or more strings:

var text1="hello";
var text2 = "worlf";
var tex3=text1+("",text2);

//String.trim()
//The trim() method removes whitespace from both sides of a string:

var text3="  hello "
var i=text3.trim();

//The charAt() Method
//The charAt() method returns the character at a specified index (position) in a string:


let text = "HELLO WORLD";
let char = text.charAt(0);////
console.log(char);