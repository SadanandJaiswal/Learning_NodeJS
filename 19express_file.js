console.log('hello express');

const express = require('express');
const app = express();
const hoteldata = require('./hoteldata')
const path = require('path');

staticpath = path.join(__dirname,'public');


console.log(staticpath);

app.use(express.static(staticpath));

// routing
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/page2',(req,res)=>{
    res.sendFile(path.join(staticpath,'2html.html'))
})



app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found</h1>`)
})


app.listen(3000,()=>{
    console.log('listening the port on 3000');
    
});
