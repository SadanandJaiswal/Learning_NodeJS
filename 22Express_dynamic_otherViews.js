console.log('welcome to express dynamic part');

const express = require('express');
const app = express();
const path = require('path');

staticpath = path.join(__dirname,'public');

const otherviewsPath = path.join(__dirname,'/other_view/views');


app.set('view engine','hbs');
app.set('views',otherviewsPath);


app.get('/',(req,res)=>{
    res.render(`index`,{name:'saddy'})
})

app.get('/about/*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found in Aboubt section</h1>`)
})

app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found</h1>`)
})

app.listen(8000,()=>{
    console.log('listening the port on 8000');
    
});

