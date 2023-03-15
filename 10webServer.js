console.log('Web Server');

// handel http request,etc
// nodejs ke liye kisi bhi thrid party web server ke jarurat nhi hoti

const http = require('http');
const { type } = require('os');

// const server = http.createServer((req,res)=>{
//     res.end('hello from the other side');
// });

// server.listen(8000);

const server = http.createServer((req,res)=>{
    console.log(req.url); // return what is typed in url
    if(req.url == '/')
    {
        res.end('hello from the other side');
    }
    else if (req.url== '/about'){
        res.write('Welcome to the about page')
        res.end()
        
    }
    else{
        // res.writeHead(404);
        res.writeHead(404, {"Content-type":"text/html"});
        res.end( `<h1>Error 404 </h1>` +'page not found')
    }
});

server.listen(8000,()=>{
    console.log('listening to the port no 8000');
})