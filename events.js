const eventEmitter = require('events');
const http         = require('http');

class Sales extends eventEmitter{
    constructor(){
        super();
    }
}
 const myEmittor = new Sales();

myEmittor.on('newSale' , () => {
    console.log("There was a new sale!");
});

myEmittor.on("newSale" , () => {
    console.log("Constumer name : Jonas");
});

myEmittor.on("newSale", stock => {
    console.log(`There are ${stock} items left in stock}`);
});

myEmittor.emit('newSale',9);


const server = http.createServer();

server.on('request', (req,res) => {
    console.log('Request recieved');
    console.log(req.url);
    res.end("Another Request");
});

server.on('close', () => {
    console.log('Server Closed');
});

server.listen(8000,'127.0.0.1',() => {
    console.log('waiting for requests .....');
});