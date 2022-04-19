const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log("First Middleware!");
    next();
});

app.use((req, res)=>{
    res.send("Hello from Express!")
})


module.exports = app;