/*There are some characteristics of the Let Variable

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.*/


//Variables defined with let cannot be Redeclared.


let x = "John Doe";

let x = 0;// SyntaxError: 'x' has already been declared
console.log(x);


//Variables declared inside a { } block cannot be accessed from outside the block:

{
    let x = 2;
  }
  // x can NOT be used here

  //Variables defined with let must be Declared before use.

  car ="vovlo";
  let car;
  




