// Blocking , synchronous way
const fs = require('fs');
const textInp = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textInp);

const textOut = `This is what we what to know about avocados : ${textInp}. \n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File has been written');

// Non-Blocking and asynchronous behavior
fs.readFile('./txt/start.txt','utf-8' ,(err,data) => {
    setTimeout(() => {
        console.log(data);
    },3000);
});
console.log('Reading a file');

fs.readFile('./txt/start.txt','utf-8' ,(err,data1) => {
    fs.readFile(`./txt/${data1}.txt`,'utf-8' ,(err,data2) => {
        fs.readFile('./txt/append.txt','utf-8' ,(err,data3) => {
            console.log('Data 3' + data3);
            fs.writeFile('./txt/final.txt', `${data2} \n ${data3}`, 'utf-8', () => {
                console.log('Both file has been written 😄');
            })
        });
    });
});