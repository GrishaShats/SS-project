const express = require('express');
const bodyparser = require('body-parser');
const config = require('./config');
const api_v2=require('./api/api_v2');
const api_v1=require('./api/api_v1');

const { hostname, port } = config;

const app = express();

app.set('view engine', 'jade');
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/api/v2', api_v2);
app.use('/api/v1', api_v1);

app.listen(port, hostname, () => {
  console.log(`Server run on http://${hostname}:${port}/`);
});
