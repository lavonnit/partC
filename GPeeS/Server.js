//import stuff we need
const express= require('express');
const bodyParser = require('body-parser');
const app= express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//rout
app.get('/', (req, res)=>{
    res.json({message: 'Welcome to GPeeS'});
});

app.listen(port, ()=>{
    console.log("server is running on port" + port);
});