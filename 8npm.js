console.log('npm module');

// npm init -->  initialize npm
// package.json --> dependencies details  are store in package.json
// npm install colors 


const colors = require('colors');
console.log('hello world' .red); //-->  red color me print hoga
console.log('text in green color ' .green);
console.log('Bg is blue in color' .bgBlue);

console.log(colors.blue("hello i'm blue"));
console.log(colors.green.underline("hello i'm green underline"));


// validator
const validator = require('validator');
const result = validator.isEmail('saddy@gmail.com');
// console.log(result);

// const result2 = validator.isEmail('saddy@ail.org');
// console.log(result2);

console.log(result? colors.blue(result):colors.red(result));
