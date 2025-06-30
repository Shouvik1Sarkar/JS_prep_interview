console.log("Global Execution context starts");

var globalVariable = "I am a global variable";

function globalFunction() {
  console.log("Inside global function");
}
function globalFunction2() {
  var x = 2;
  var y = 3;
  console.log("Sum is ", x + y);
}
console.log(globalVariable);

globalFunction();
globalFunction2();

console.log("Global Execution context ends");

// What happens when it is run?
/**
 * all the variables are stored in the memory phase with UNDEFINED
 * BUT, function declaration is treated differently. It is stored entirely with it's body
 * now in CODE PHASE
 * unlike other variables, function calling created it's own local execution context
   It has 2 phases => memory and code, and it works same as global excution context
   Once done it's deleted
 *
 *
 *
 */
