console.log('Playing with API');

const express = require('express')
const app = express();

const path  = require('path');
const hbs = require('hbs');     // partial ke hbs ko require karna jaruri hai
const requests = require('requests')

const other_view = path.join(__dirname,'other_view/views');
const partialPath= path.join(__dirname,'other_view/partials');

console.log(other_view);
console.log(partialPath);


app.use(express.static('WeatherApp'));
app.set('view engine','hbs');
app.set('views',other_view);


app.get('/',(req,res)=>{
    res.render(`index`,{name:'saddy'})
});

app.get('/about',(req,res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=cc9e96a8fd0ea585e3115b015d1c912b`)
    .on("data",(data)=>{
        const objData = JSON.parse(data);
        const arrData = [objData];
        console.log(arrData[0].main.temp);
        console.log(arrData[0].name);
        res.write(arrData[0].name);
        res.write(arrData[0].main.temp);
    })
    .on("end",(err)=>{
        if(err) return console.log(err);
        console.log("end");
        res.end();
    })
})

app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red;">Error 404</span> Page Not Found</h1>`)
})

app.listen(3000,()=>{
    console.log('listening the port on 3000');
    
});