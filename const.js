/*The const key word has a diffrent  characterstics

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
*/

//A const variable cannot be reassigned:

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

//Variables defined with const cannot be Redeclared.
const a=10;
const b=20;
const name="huamyun"
console.log(name);

//Variables declared inside a { } block cannot be accessed from outside the block:

{
    const x = 2;
  }
console.log(x);