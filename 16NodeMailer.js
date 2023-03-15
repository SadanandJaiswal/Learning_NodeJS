console.log('welocme to nodemailer');

const express = require('express');
const app = express();
const http = require('http');
const sendMail = require('./Controllers/sendMail')

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>
    <h3>How are you?</h3>`)
});

app.get('/mail',sendMail);

const start = async ()=>{
    try{
        app.listen(3000,()=>{
            console.log('listening on port no 3000');
        });
    }
    catch (err){
        console.log(err);
    }
}

start();


