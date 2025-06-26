console.log("Start script");
setTimeout(() => {
  console.log("I am set timeout");
}, 0);

async function fun() {
  return "Hello";
}
fun().then((mssg) => console.log(mssg));
// Promise.resolve().then(() => {
//   console.log("I am promise.");
// });
console.log("End script");

/**
 * JS  traverses the code thoroughly
 * code is set in Global execution Context
 * Global execution context is set in callStack
 * And async items (dom, promise, setTimeout etc) are sent to WebAPI
 * Now setTimeout is set in Task queue
 * And promise is set in Micro Task Queue
 *
 * Micro Task Queue gets more priority than Task Queue.
   That's Why when the callstack is empty the Micro Task Queue elements go to GEC and get executed first and then Task Queue elements
 * 
 *That's why promise is printed before setTimeout
 */

// starvation
