x = 30;
console.log(`Value of X is ${x}`);
var x = 10;

// HOISTING
// tdz temporal dead zone
//

// What happens when a code is run?

/**
 * A Global Execution Context is created
 * GEC has 2 Phases
 *          * Memory phase(hoisting) => 1st phase
 *          * Code/Thread phase => 2nd phase
 *
 * Step-2 => JS traverses over your code and loads all the variables in the memory memories
 * In memory phase initially the value of a variable is => "undefined"
 * So if all the variables are stored and no other variables, Move to the Code phase
 * Now in code phase, it executes code line by line
 * Once done GEC will be deleted
 *
 *
 */
