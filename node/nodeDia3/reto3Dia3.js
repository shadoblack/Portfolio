const express = require('express');
const app = express();

app.get('/', function (req, res){
   // res.send('Peticion recibida del cliente.'); <-- solo 1 res.send
    req.header.host
    console.log("Method: " + req.method)
    console.log("url: " + req.url)
    res.statusCode
    req.headers['content-type']
    req.headers['content-length']
    console.log(req.headers['user-agent'])
    res.status(200).send({ ok: "true", message: "Recibido!" }) 
});

app.get('/bye', function (req, res){
    
    res.status(200).send({ ok: "true", message: "Adios" })
});

app.listen(3000);