console.log('hello express');

const express = require('express');
const app = express();
const hoteldata = require('./hoteldata')
const path = require('path');

staticpath = path.join(__dirname,'TicTacToe');


console.log(staticpath);

app.use(express.static(staticpath));

// routing
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/tictac',(req,res)=>{
    res.sendFile(path.join(staticpath,'index.html'))
})


app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found</h1>`)
})

app.listen(8000,()=>{
    console.log('listening the port on 8000');
    
});
