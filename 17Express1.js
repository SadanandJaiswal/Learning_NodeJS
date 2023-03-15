console.log('hello express');

const express = require('express');
const app = express();
const hoteldata = require('./hoteldata')


// routing
app.get('/',(req,res)=>{
    res.send(`<h1>Hello form the Express</h1>`)
})

app.get('/api',(req,res)=>{
    res.send(hoteldata);
})

app.get('/about',(req,res)=>{
    res.send('Welcome to About Page')
})

app.get('/contact',(req,res)=>{
    res.status(200).send(`<h1>Please feel free to contact</h1>
    <a href="tel:9137054565">contact us</a>
    <br>
    <a href="mailto:sadanandjaiswal92@gmail.com">Mail us</a>`);
})

// showing error
// app.get('/temp',(req,res)=>{
//     res.sendFile('12SimpleAPI.js');
// })

app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found</h1>`)
})


app.listen(3000,()=>{
    console.log('listening the port on 3000');
    
});
