const http = require('http');
const url  = require('url');

const server = http.createServer((req,res) => {
    console.log(req.url);
    const pathname = req.url;
    if(pathname == '/' || pathname == '/overview'){
        res.end('This is the overview page');
    }else if(pathname == '/product'){
        res.end("this is the product page");
    }else{
        res.writeHead(400,{
            'Content-Type' : 'text/html',
            'own-header' : 'hello world'
        });
        res.end("Page not found");
    }
});
    

server.listen(3000,'127.0.0.1',() => {
    console.log("Listening to request on port 3000");
});
