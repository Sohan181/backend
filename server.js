const app = require('./app');
const http = require("HTTP");


const server= http.createServer((req, res) =>{
    res.end("Sohan's server is running");
});

server.listen( process.env.PORT || "3000");

const onPort = process.env.PORT || "3000";
app.set('port',onPort);

