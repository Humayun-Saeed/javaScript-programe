/*JavaScript methods for searching strings:

String.indexOf()
String.startsWith()
String.endsWith()*/

//String.indexOf()
//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

let str1 = "Please locate where 'locate' occurs!";
let a=str1.indexOf("locate");
console.log(a);


///The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let str2 = "Please locate where 'locate' occurs!";
let b=str2.lastIndexOf("locate");
console.log(b);

//Both methods accept a second parameter as the starting position for the search:

let str3 = "Please locate where 'locate' occurs!";
var c=str3.indexOf("locate", 15);
console.log(c);

/*The lastIndexOf() methods searches backwards (from the end to the beginning), meaning:
 if the second parameter is 15, the search starts at position 15, and searches to the
  beginning of the string.*/

 // String.search()
  ///The search() method searches a string for a specified value and returns the position of the match:
  
  let str = "Please locate where 'locate' occurs!";
  str.search("locate");

  //String.match()
//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.



let text = "The rain in SPAIN stays mainly in the plain";
let d=text.match(/ain/g);
console.log(d);

//String.includes()
//The includes() method returns true if a string contains a specified value.

let text = "Hello world, welcome to the universe.";
let e=text.includes("world");
console.log(e);
