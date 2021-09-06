var mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345.Aa",
  database: "cometogather",
});
const db = require("./models");
db.sequelize.sync();
const PORT = process.env.PORT || 8080;
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
});


function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }