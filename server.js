const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = require("./config/db");

const employeeRoutes = require("./routes/employee");

app.use("/employees", employeeRoutes);

app.listen("3000", console.log("Server started on port 3000"));
