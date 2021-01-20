const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require("socket.io");

//mention public path
const publicPath=path.join(__dirname,'/../public');

//port app
const port = process.env.PORT || 3000;

let app=express();
let server=http.createServer(app);
let io=socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
   console.log("here you go",socket);
})

server.listen(port,()=>{
    console.log(`server is up and running on port ${port}`);
})