console.log('Application Programming Interface (API)');

// API is like a service which allows us to request data

const http = require('http');
const fs = require('fs');
const hotelData = require('./hoteldata')

// console.log(hotelData);

const api = http.createServer((req,res)=>{
    // console.log(hotelData);
    if(req.url=='/api')
    {
        res.writeHead(200,{"Content-type":"Application/json"});
        fs.readFile('./hoteldata.js','utf-8',(err,data)=>{
            console.log(data);
            res.end(data);
        })
    }
    // else if(req.url=='/')
    // {
    //     res.end(hotelData)
    // }
});

api.listen(3005);

