console.log('express partials');

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');     // partial ke hbs ko require karna jaruri hai

const other_view = path.join(__dirname,'other_view/views');
const partialPath= path.join(__dirname,'other_view/partials');

console.log(other_view);
console.log(partialPath);


app.use(express.static('TicTacToe'));
app.use(express.static('other_view/views'));
app.set('view engine','hbs');
app.set('views',other_view);
hbs.registerPartial('header',partialPath)


app.get('/',(req,res)=>{
    res.render(`index`,{name:'saddy'})
})

app.get('/tictac',(req,res)=>{
    res.sendFile(path.join(__dirname,'TicTacToe/tictactoe.html'));
})

app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found</h1>`)
})

app.listen(3000,()=>{
    console.log('listening the port on 3000');
    
});

