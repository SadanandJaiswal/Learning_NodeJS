console.log('welcome to express dynamic part');

const express = require('express');
const app = express();
const path = require('path');

staticpath = path.join(__dirname,'public');

console.log(staticpath);

// app.use(express.static(staticpath));

app.set('view engine','hbs');
// app.set('view engine','ejs');
// app.set('view engine','pug');

// dynamic page ke liye --> pug/ejs/handelbar
// views folder me hi likhna hoga sab dynamic ke liye


// routing
// top to bottom rule follow karta hai
app.get('/',(req,res)=>{
    // let bio = {name:'saddy'}
    res.render(`index`,{name:'saddy'})
})

app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found</h1>`)
})

app.listen(5000,()=>{
    console.log('listening the port on 5000');
    
});

