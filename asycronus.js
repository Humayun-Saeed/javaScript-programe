
//***********syncronus//////////////// */
console.log("strat");
function fun(){
console.log("inside function: ");
}
console.log("this is the middle phase: ");
fun()
console.log("end");

//*******asynconus*********** */

console.log("start");
setTimeout(() => {
    console.log("this is the time out: ");
}, 2000);
console.log("end point: ");