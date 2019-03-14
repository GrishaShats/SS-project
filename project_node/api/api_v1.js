const express = require('express');
const bodyparser = require('body-parser');
const json = require('../list.json');

const app = express();

app.use(express.static('public'));

app.use(bodyparser.urlencoded({
  extended: false,
}));

app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.render('layout.jade', { ...json });
});

app.get('/add', (req, res) => {
  res.render('layout.jade', { ...json, add: true });
});

app.post('/add', (req, res) => {
  const { name } = req.body;
  if (!name) return res.sendStatus(400);
  json.students.push({ id: json.students[json.students.length - 1].id + 1, name });
  res.render('layout.jade', json);
});

app.get('/:id', (req, res) => {
  res.render('layout.jade', { ...json, id: req.params.id });
});

app.post('/:id', (req, res) => {
  if (!req.body.name) return res.sendStatus(400);
  json.students[req.params.id - 1].name = req.body.name;
  res.redirect('/');
});

app.post('/:id/remove', (req, res) => {
  if (!req.body.id) return res.sendStatus(400);
  json.students.splice(json.students.id, 1);
  res.redirect('/');
});

module.exports = app;

