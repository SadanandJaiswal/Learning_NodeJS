console.log('hello world ');

// module wrapper function

// () --> grouping operator 
// jo bhi iske andar define kiya jata hai wo private ho jata hai
// IIFE ke andar koi bhi code likhte hai wo hamesa private hi rehta hai
(function(){
    const name = 'saddy';
    console.log(name);
});

(function(){
    const name2 = 'sammy';
    console.log(name2);
})();

console.log(__dirname);
console.log(__filename);

