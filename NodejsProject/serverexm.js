// const http = require('http');
// const { default: test } = require('node:test');

// function myFunction(req,resp){
//     resp.write("<h1>this is a prakash sir<h1/>");
//     resp.end();
// }

// http.createServer(myFunction).listen(4500);

function test(a)
{
    return a+10;
}
const tests = (a)=>a*10;

console.warn("multi number",tests(4))
console.warn("add number",test(4))
