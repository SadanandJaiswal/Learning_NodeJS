console.log('hello world');

const fs = require('fs');

// fs.mkdirSync('crud'); --> to create folder

// fs.writeFileSync('bio.txt','My name is saddy');
// create file or overwrite file
fs.writeFileSync('crud/bio.txt','My name is sadanand');

// update file
fs.appendFileSync('crud/bio.txt',' Please Subscibe my chanell');

// read file
const data = fs.readFileSync('crud/bio.txt');
console.log(data); // --> buffer
console.log(data.toString()) // --> in form of string

// handel buffer (encode)
const data2 = fs.readFileSync('crud/bio.txt','utf-8',(err,data)=>{
    console.log(data);
});

// delete file
// fs.unlinkSync('crud/bio.txt');

// rename fiel
fs.renameSync('crud/bio.txt','crud/myBio.txt');

console.log(__dirname);
console.log(__filename);