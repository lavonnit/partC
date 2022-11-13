var sql = require('./db');
var path = require("path");
const { Console } = require('console');
const csv = require('csvtojson');

//create users table
const CreateUsersTable = (req,res)=> {
    var Q0 = `  CREATE TABLE IF NOT EXISTS users (
        email varchar(255) NOT NULL PRIMARY KEY, 
        firstname varchar(255) NOT NULL,
        lastname varchar(255) NOT NULL,
        password varchar(255) NOT NULL, 
        confirmpassword NOT NULL 
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
    sql.query(Q0,(err, mysqlres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating users table"});
            return;
        }
        console.log('created users table');
        res.send("users table created");
        return;
    })      
}

//create Bathrooms table
const CreateBathroomsTable = (req,res)=> {
    var Q1 = `CREATE TABLE IF NOT EXISTS Bathrooms (
        place varchar(255)  NOT NULL PRIMARY KEY ,
        address varchar(255) NOT NULL ,
        distance int(255) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
    sql.query(Q1,(err,mysqlres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating Doctors table"});
            return;
        }
        console.log('created beutics table');
        res.send("beutics table created");
        return;
    })      
}

//insert into users table
const InsertDataToUsers = (req,res)=>{
    var Q5 = "INSERT INTO Bathrooms SET ?";
    const csvFilePath1= path.join(__dirname, "Bathrooms1.csv");
    csv()
    .fromFile(csvFilePath1)
    .then((jsonObj)=>{
        //console.log(jsonObj);
        jsonObj.forEach(element => {
            var NewEntry = {
                "place" : req.body.place,
                "address": req.body.address,
                "distance": req.body.distance
            }
            sql.query(Q5, NewEntry, (err,mysqlres)=>{
                if (err) {
                    console.log("error in inserting Bathrooms data", err);
                }
                console.log("created row sucssefuly ");
            });
        });
    })
    res.send("Bathrooms Data read");

}

//insert into Bathrooms table
const InsertDataToBathrooms = (req,res)=>{
    var Q5 = "INSERT INTO users SET ?";
    const csvFilePath1= path.join(__dirname, "users1.csv");
    csv()
    .fromFile(csvFilePath1)
    .then((jsonObj)=>{
        //console.log(jsonObj);
        jsonObj.forEach(element => {
            var NewEntry = {
                "firstName" : req.body.FirstName,
                "lastName": req.body.LastName,
                "email": req.body.userEmail1,
                "password": req.body.pwd1,
                "confirmPassword": req.body.confirmPwd2
            }
            sql.query(Q5, NewEntry, (err,mysqlres)=>{
                if (err) {
                    console.log("error in inserting users data", err);
                }
                console.log("created row sucssefuly ");
            });
        });
    })
    res.send("users Data read");

}


//drop users officeHours
const DropUsersTable = (req, res)=>{
    var Q8 = "DROP TABLE users";
    sql.query(Q8, (err, mysqlres)=>{
        if (err) {
            console.log("error in droping users table ", err);
            res.status(400).send({message: "error im dropping users table" + err});
            return;
        }
        console.log("users table drpped");
        res.send("users table drpped");
        return;
    })
}

//drop Bathrooms officeHours
const DropBathroomsTable = (req, res)=>{
    var Q9 = "DROP TABLE Bathrooms";
    sql.query(Q9, (err, mysqlres)=>{
        if (err) {
            console.log("error in droping Bathrooms table ", err);
            res.status(400).send({message: "error im dropping Bathrooms table" + err});
            return;
        }
        console.log("Bathrooms table drpped");
        res.send("Bathrooms table drpped");
        return;
    })
}


//show table users
const ShowTableUsers = (req,res)=>{
    var Q13 = "SELECT * FROM users";
    sql.query(Q13, (err, mysqlres)=>{
        if (err) {
            console.log("error in showing Customers table ", err);
            res.send("error in showing Customers table ");
            return;
        }
        console.log("showing Customers table");
        res.send(mysqlres);
        return;
    })
}

//show table Bathrooms
const ShowTableBathrooms = (req,res)=>{
    var Q14 = "SELECT * FROM Bathrooms";
    sql.query(Q14, (err, mysqlres)=>{
        if (err) {
            console.log("error in showing Bathrooms table ", err);
            res.send("error in showing Bathrooms table ");
            return;
        }
        console.log("showing Bathrooms table");
        res.send(mysqlres);
        return;
    })
}


module.exports = {CreateUsersTable , CreateBathroomsTable, InsertDataToUsers,InsertDataToBathrooms, DropUsersTable, DropBathroomsTable,
      ShowTableUsers, ShowTableBathrooms};
