const path = require('path');
const express = require('express');
//mention public path
const publicPath=path.join(__dirname,'/../public');
const port = process.env.PORT || 3000;

var app=express();
app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log(`server is up and running on port ${port}`);
})