// common js but the package.json must not include "type": "module"
// const {addition} = require('./addition')
// import {addition} from './addition.js'
// import {subtraction} from './subtraction.js'

// console.log(addition(3, 6));
// console.log(subtraction(7,3));
// console.log(subtraction(3,7));

import http from 'http'

const port =  +process.env.PORT || 4000

//create web server
http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    // console.log(`URL:${req.url} HTTP method: ${req.method}`);
    switch(req.url){
        case '/':
            res.end(JSON.stringify("You're home"))
        break
        case '/about':
            res.end(JSON.stringify("About page"))
        break
        default:
            res.end(JSON.stringify("404 page"))
    }
}).listen(port, ()=>{
    console.log(`server is on : http://localhost:${port}`);
})