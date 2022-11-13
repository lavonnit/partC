//import stuff we need
const express= require('express');
const BodyParser = require('body-parser');
const path= require('path');
const port = 3000;
const sql =require('./db');
const CRUD = require('./CRUD');
const createDB = require('./createDB');
const stringify = require('csv-stringify').stringify;
const { parse } = require("csv-parse");
const CSVToJSON = require('csvtojson');

//setup
const app= express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('static'));


//rout
app.get('/', (req, res)=>{
    res.render('GPeeS-Home');
});

app.get('/GPeeS-SettingPage',(req, res)=>{
   res.render('GPeeS-SettingPage');
});

app.get('/GPeeS-Result',(req, res)=>{
    res.render('GPeeS-Result');
 });

app.get('/GPeeS-SignUp', (req,res)=>{
    res.render('GpeeS-SignUp');
});

app.post('/readUser', CRUD.readUser);

app.get('/selectCity', CRUD.selectCity);

app.post('/insertCustomer', CRUD.insertCustomer);

app.post('/GPeeS-Home',CRUD.Greeting);

app.listen(port, ()=>{
    console.log("server is running on port" + port);
});


//creare DB tables
app.get("/CreateUsersTable",createDB.CreateUsersTable);
app.get("/CreateBathroomsTable" ,createDB.CreateBathroomsTable);

//insert into DB tables
app.get("/InsertDataToUsers", createDB.InsertDataToUsers);
app.get("/InsertDataToBathrooms", createDB.InsertDataToBathrooms);



//show DB tables
app.get("/ShowTableUsers", createDB.ShowTableUsers);
app.get("/ShowTableBathrooms", createDB.ShowTableBathrooms);

//drop DB tables
app.get('/DropUsersTable', createDB.DropUsersTable);
app.get('/DropBathroomsTable', createDB.DropBathroomsTable);
