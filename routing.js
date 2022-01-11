const fs = require('fs');
const http = require('http');
const url  = require('url');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard     = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct      = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const data         = fs.readFileSync(`${__dirname}/assets/data.json`,'utf-8');
const prodData     = JSON.parse(data)


const replaceTemplate = (temp,product) => {
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
});

