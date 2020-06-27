const express = require("express");
const router = express.Router();

const connection = require("../config/db");

//GET all employees
router.get("/", (req, res) => {
  connection.query("SELECT * FROM employees", (err, row, field) => {
    if (!err) {
      res.send(row);
    } else {
      console.log(err);
    }
  });
});

//GET employee by ID
router.get("/:employeeId", (req, res) => {
  let id = req.params.employeeId;
  connection.query("SELECT * FROM employees WHERE emp_no = " + id, (err, row, fields) => {
    if (!err) res.send(row);
    else console.log(err);
  });
});

//DELETE employee by ID
router.delete("/:employeeId", (req, res) => {
  let id = req.params.employeeId;
  connection.query("DELETE FROM employees WHERE emp_no=" + id, (err, row, fields) => {
    if (!err) res.send(row);
    else console.log(err);
  });
});

//POST new employee
router.post("/", (req, res) => {
  (first_name = req.body.first_name),
    (last_name = req.body.last_name),
    (birth_date = req.body.birth_date),
    (gender = req.body.gender),
    (hire_date = req.body.hire_date);

  connection.query(
    "INSERT INTO employees(birth_date, first_name, last_name, gender, hire_date) values ?",
    [first_name, last_name, birth_date, gender, hire_date],
    (err, row, fields) => {
      if (!err) res.send(row);
      else console.log(err);
    }
  );
});

//UPDATE our employee by ID
router.patch("/:employeeId", (req, res) => {
  (first_name = req.body.first_name),
    (last_name = req.body.last_name),
    (birth_date = req.body.birth_date),
    (gender = req.body.gender),
    (hire_date = req.body.hire_date);

  let id = req.params.employeeId;

  connection.query(
    'UPDATE employees SET first_name="' +
      first_name +
      '", last_name="' +
      last_name +
      '", birth_date="' +
      birth_date +
      '", gender="' +
      gender +
      '" WHERE emp_no=' +
      id,
    (err, row, fields) => {
      if (!err) res.send(row);
      else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
