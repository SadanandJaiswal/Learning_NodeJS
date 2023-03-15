console.log('JSON');


const fs = require('fs');
// JSON --> js object notation

// object
const bio = {
    name:"sadanand",
    age:18,
    college:"IIITDM Jablapur"
}

console.log(bio);
console.log(bio.name)

// stringigy --> to convert into JSON
const jsonData = JSON.stringify(bio);
console.log(jsonData);
console.log(jsonData.name); // return undefined


// JSON
// {"name":"sadanand","age":18,"college":"IIITDM Jablapur"}

// convert JSON to string
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.name);


// fs.writeFile('json1.json',jsonData,()=>{
//     console.log('done');
    
// });

fs.readFile('json1.json','utf-8',(err,data)=>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
    
});
