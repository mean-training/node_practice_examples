const fs = require('fs');
const http = require('http');
const url  = require('url');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard     = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const product      = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const data         = fs.readFileSync(`${__dirname}/assets/data.json`,'utf-8');
const prodData     = JSON.parse(data)


const replaceTemplate = (temp,product) => {
    console.log(product);
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output     = output.replace(/{%IMAGE%}/g, product.image);
    output     = output.replace(/{%PRICE%}/g, product.price);
    output     = output.replace(/{%FROM%}/g, product.from);
    output     = output.replace(/{%QUANTITY%}/g, product.quantity);
    output     = output.replace(/{%DESCRIPTION%}/g, product.description);
    output     = output.replace(/{%ID%}/g, product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const server = http.createServer((req,res) => {
    console.log(req.url);
    const pathname = req.url;

    // Overview Page
    if(pathname == '/' || pathname == '/overview'){
        res.writeHead(200,{'Content-type':'text/html'});
        const cardsHTML = prodData.map(el => replaceTemplate(tempCard,el)).join('');
        const output    = tempOverview.replace(/{%PRODUCT_CARDS%}/g,cardsHTML)
        console.log(output);
        res.end(output);
    // Product Page    
    }else if(pathname == '/product'){
        res.end("this is the product page");
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
});
