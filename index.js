const express = require('express');

//initialize the express instance
const app =express();

//declare an endpoint
app.use('/', (req, res, next) => {
    res.send({message: 'Hello World'});
});

//start the server
//app.listen(6000, () => console.log('server is running at port: 6000'))
//const {password} = require('./login');

//console.log(password);