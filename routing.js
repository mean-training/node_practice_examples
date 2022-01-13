const fs = require('fs');
const http = require('http');
const url  = require('url');
const {Sequelize,DataTypes} = require('sequelize');

const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard     = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct  = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const data         = fs.readFileSync(`${__dirname}/assets/data.json`,'utf-8');
const prodData     = JSON.parse(data)

const server = http.createServer((req,res) => {
    const {query,pathname} = url.parse(req.url,true);

    // Overview Page
    if(pathname == '/' || pathname == '/overview'){
        res.writeHead(200,{'Content-type':'text/html'});
        const cardsHTML = prodData.map(el => replaceTemplate(tempCard,el)).join('');
        const output    = tempOverview.replace(/{%PRODUCT_CARDS%}/g,cardsHTML)
        res.end(output);

    // Product Page    
    }else if(pathname == '/product'){
        const product = prodData[query.id];
        const output  = replaceTemplate(tempProduct,product); 
        res.end(output);

    // API    
    }else if(pathname == '/api'){
        res.writeHead(200,{'Content-type' : 'application/json'});
        res.end(data);

    // 400 Page
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
    // eslint-disable-next-line no-undef
    const conn = new Sequelize('test_database','zahramumtaz','root',{
        host: 'localhost',
        dialect:'postgres'
    });
    try{
        conn.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log('error');
    }
    
    
});

