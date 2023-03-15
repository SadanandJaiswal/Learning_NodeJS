console.log('hello express');

const express = require('express');
const app = express();
const hoteldata = require('./hoteldata')


// routing
app.get('/',(req,res)=>{
    res.send(`<h1>Hello form the Express</h1>`)
})

app.get('/file',(req,res)=>{
    res.write('<h1>Hello and welcome everyone</h1>')
    res.write(`<h2>My Name is sadyy maddy</h2>`)
    // manditory (if not then browser will be loading)
    res.send(); 
})

app.get('/file2',(req,res)=>{
    res.send([{
        name:'saddy',
        age:18,
        college:'IIITDMJ'
    },
    {
        name:'saddy',
        age:18,
        college:'IIITDMJ'
    },
    {
        name:'saddy',
        age:18,
        college:'IIITDMJ'
    }])
})

app.get('/json',(req,res)=>{
    res.json({
        name:'saddy',
        age:18,
        college:'IIITDMJ'
    })
})

app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found</h1>`)
})


app.listen(3000,()=>{
    console.log('listening the port on 3000');
    
});
