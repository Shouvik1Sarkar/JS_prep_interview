console.log("Start of script");

setTimeout(() => {
  console.log("A");
}, 0);
setTimeout(() => {
  console.log("B");
}, 0);
setTimeout(() => {
  console.log("C");
}, 2000);

console.log("end of script");
console.log("Bye Bye");

/**
 * JS  traverses the code thoroughly
 * code is set in Global execution Context
 * Global execution context is set in callStack
 *
 * callstack is basically JS engine
 * It executes code one by one line
 *
 * now the point is set time out (or any DOM stuff or async stuff) is not part of JS that's part od Web
 *
 * So set time out is sent to WEB API, it has it's timer set (whatever time you have set in setTimeout())
 * but JS engine or call stack doesn't wait for aything. So it keeps execution the codes line by line
 *
 * then once time is up Web API sends code to task Queue.
 * And there task queue waits till the callstack is empty(GEC is fully executes and deleted)
 *
 * Once callstack is free Event loop sends the code to call stack and it is executed.
 *
 */
