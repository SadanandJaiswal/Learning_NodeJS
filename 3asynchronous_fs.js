console.log('hello world');

const fs = require('fs');


// asynchronous tarike  se agar call kiya to callback function  ko call karna hi padega
fs.writeFile('crud/sync.txt','today is awesome day :)',(err)=>{
    console.log('completed file creation')
    console.log('error --> ' + err);
});

// update 
fs.appendFile('crud/myBio.txt',' hello are you okay? ',(err)=>{
    console.log('task completed');
})

// read file
fs.readFile('crud/myBio.txt','utf-8',(err,data)=>{
    console.log(data);
});

// rename 
fs.rename('crud/myBio.txt','crud/myBio2.txt',(err)=>{
    console.log('rename successful');
})

// delete
fs.unlink('crud/myBio2.txt',(err)=>{
    console.log('deletion completed');
})


console.log(__dirname);
console.log(__filename);
