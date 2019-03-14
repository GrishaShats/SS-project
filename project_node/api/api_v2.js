const express = require('express');
const bodyparser = require('body-parser');
const json = require('../list.json');
const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));

router.route('')
  .get((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.send(JSON.stringify(json));
  })
  .post((req, res) => {
    const { name } = req.body;
    const newStudent = { id: json.students[json.students.length - 1].id + 1, name};
    json.students=[...json.students,newStudent];
    res.send(JSON.stringify({ message: 'Added'}));
  })
  .put((req, res) => {
    const student = json.students.find(student => student.id === parseInt(req.body.id, 10));
    if (student) {
      student.firstName = req.body.firstName;
      student.lastName = req.body.lastName;
      res.send(JSON.stringify({ message: 'Edited', student }));
    } else {
      res.send(JSON.stringify({ error: 'Student not found!' }));
    }
  })
  .delete((req, res) => {
    const deletedStudent = json.students.find(student => student.id === parseInt(req.body.id, 10));
    if (deletedStudent) {
      json.students = json.students.filter(student => student.id !== parseInt(req.body.id, 10));
      res.send(JSON.stringify({ message: 'Deleted', deletedStudent }));
    } else {
      res.send(JSON.stringify({ error: 'Student not found!' }));
    }
  });

module.exports = router;