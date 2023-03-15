console.log('hello world');

// core module --> path/http/etc

// events --> inbuilt module

const EventEmitter = require('events'); // event emitter is class (as E and E are capital and are in one word)

const event = new EventEmitter();

event.on('sayMyName', ()=>{
    console.log("My name is saddy");
})
event.on('sayMyName', ()=>{
    console.log("My name is sandy");
})
event.on('sayMyName', ()=>{
    console.log("My name is maddy");
})

event.emit('sayMyName');    // create your own event 
// sirf ek event se multiple function ko call kar sakte hai

event.on('checkPage', (statusCode,msg)=>{
    console.log('status code is '+statusCode + ' and the page is '+ msg);
    
})

event .emit('checkPage',200,'OK');  // 200,ok are parameter
