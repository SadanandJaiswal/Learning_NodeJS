console.log('Weather App');


// https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cc9e96a8fd0ea585e3115b015d1c912b
// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=cc9e96a8fd0ea585e3115b015d1c912b

// https://api.openweathermap.org/data/2.5/weather?q=Jabalpur&appid=cc9e96a8fd0ea585e3115b015d1c912b

// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=cc9e96a8fd0ea585e3115b015d1c912b

// https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cc9e96a8fd0ea585e3115b015d1c912b

// https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cc9e96a8fd0ea585e3115b015d1c912b


const http = require('http');
const fs = require('fs');
const requests = require('requests');

const homeFile = fs.readFileSync('index.html','utf-8');

const replaceval = (tempVal,orgVal)=>{
    let temperature = tempVal.replace("{%tempmin%}",orgVal.main.temp_min/10);
    temperature = temperature.replace("{%temp%}",orgVal.main.temp/10);
    temperature = temperature.replace("{%tempmax%}",orgVal.main.temp_max/10);
    temperature = temperature.replace("{%location%}",orgVal.name);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    temperature = temperature.replace("{%tempStatus%}",orgVal.weather[0].main);
    

    return temperature;
}

const server = http.createServer((req,res)=>{
    if(req.url=='/api')
    {
        requests(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cc9e96a8fd0ea585e3115b015d1c912b`)
        .on("data",(data)=>{
            const objData = JSON.parse(data);
            const arrData = [objData];
            // console.log(arrData);
            // console.log(objData.main.temp);
            // console.log(arrData[0].main.temp);
            
            // const realTimeData = arrData.map((val)=>{
            //     return replaceval(homeFile,val);
            // }) // data array ke form me aur hume string me cahhiye

            const realTimeData = arrData.map((val)=>{
                return replaceval(homeFile,val);
            }).join("");
            res.write(realTimeData);
            // console.log(realTimeData);
            
        })
        .on("end",(err)=>{
            if(err) return console.log(err);
            console.log("end");
            res.end();
        })
    }
})

server.listen(3000);
