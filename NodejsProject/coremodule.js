const http = require('http');

// function test(a)
// {                    
//     return a*10;
// }
// const test = (a)=>a*10

http.createServer((req,resp)=>{

    resp.write("<h1>Hello this side here in thakur sahab</h1>");
    resp.end();
}).listen(4500);