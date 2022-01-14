const faker = require('faker');
const csvWriter = require('csv-write-stream');
const {Sequelize,DataTypes} = require('sequelize')
const fs = require('fs');

var writer = csvWriter();
let count = 0;
const dataGen = () => {
    writer.pipe(fs.createWriteStream('data.csv'));
    for(let i = 0; i < 1000; i++){
      writer.write({
        id: count++,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email : faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    writer.end();
    console.log('done1');
}

dataGen();

//Blocking , synchronous way
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

const conn = new Sequelize('test_database','zahramumtaz','root',{
    host: 'localhost',
    dialect:'postgres'
});
conn.authenticate();
