const sql= require("./db");

const readUser= (req, res)=>{
    console.log('readUser');
    if (!req.body){
        res.status(400).send({
            message:"You are not signed up!"
        });
        return;
    }
    const identifyUser ={
        "email" : req.body.userEmail,
        "password": req.body.pwd
    }
    console.log("user", identifyUser);
    const Q1= "SELECT firstName FROM users WHERE email=?";
    sql.query(Q1, identifyUser.email, (err,mysqlres)=>{
        if (err){
            res.status(400).send({message: "err on finding user"+ err})
            console.log("error on finding user"+ err);
            return;
        }
        console.log("Found user" + mysqlres)
        res.render('GPeeS-SettingPage', {
            var1: "Hello" + mysqlres
        });
        return;
    });
};

const selectCity = (req, res)=>{
    const chosenCity ={
        "address" : req.body.City1
    }
    console.log("address", chosenCity);
    const Q2= "SELECT * FROM Bathrooms WHERE address= 'Tel-Aviv'";
    sql.query(Q2,chosenCity,(err, mysqlres)=>{
        if (err) {
            console.log("error in getting all toilets" + err);
            res.status(400).send({message: "error in getting all toilets" + err})
            return;
        }
        console.log("Success...", mysqlres);
        res.render('GPeeS-Result', {
            toilets: mysqlres
        });
        return;
    });
};

const Greeting=()=>{
    var d= new Date;
    var t = d.getUTCHours();
    if (t < 12) {
        app.render('GPeeS-Home',{
            var4: "Good Morning"
        });
    } else if (t < 18) {
        app.render('GPeeS-Home',{
            var4: "Good Afternoon"
        });
    } else {
        app.render('GPeeS-Home',{
            var4: "Good evening"
        });
    };
};

const insertCustomer= (req, res)=>{
    if (!req.body){
        res.status(400).send({
            message:"conntent can not be empty!"
        });
        return;
    }
    const newCustomer ={
        "firstName" : req.body.FirstName,
        "lastName": req.body.LastName,
        "email": req.body.userEmail1,
        "password": req.body.pwd1,
        "confirmPassword": req.body.confirmPwd2
    }
    const Q3= "INSERT INTO users SET ?";
    sql.query(Q3, newCustomer, (err, mysqlres)=>{
        if (err){
            res.status(400).send({message: "err on creating customer"+ err})
            console.log("error on creating customer"+ err);
            return;
        }
        console.log("created new customer succesfuly" + mysqlres)
        res.render('GPeeS-Home', {
            var1: "",
            var2:'created customer successfuly' + mysqlres.name
        });
        return;
    });
};

module.exports ={readUser,selectCity, Greeting, insertCustomer}