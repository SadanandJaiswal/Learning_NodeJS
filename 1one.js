console.log('hello world');

// to run files node one.js
// to run using nodemon nodemon one.js

// when to use node js
// data streaming applications
// real time chat applications
// i/o bound

// nodejs is single threaded

// REPL --> use to experiment node js code and to debug js code
// Read, Eval, Print , Loop
// REPl ko nodejs ka cmd keh sakte hai
// node on terminal to enter repl  

// to create file from terminal --> type nul > filename.js 
// this will give error cause we don't gave the path but it will create file with name filename.js
// dir on terminal to see the folder
// click tab in repl to see...


var x =5;
console.log(`my x is ${x}`);
console.log('my x is ',x);
console.log('my x is ' + x);

// .editor to enter editor mode in repl

const fs = require('fs');
const { stringify } = require('querystring');

// core modulw
fs.writeFileSync('fs1.txt','hello this  is saddy');
fs.appendFileSync('fs1.txt',' hi how are you');
const buf_data = fs.readFileSync('fs1.txt');

console.log(buf_data);
org_data = buf_data.toString();
console.log(org_data);

fs.renameSync('fs1.txt','read.txt');