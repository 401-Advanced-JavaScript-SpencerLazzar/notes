'use strict';

require('dotenv').config();
const express = require('express');
const input = require('./lib/input.js');
const note = require('./lib/notes.js');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Established a connection to the database'))
  .catch(err => console.log('Something went wrong when connection to the database', err));

let actualArgv = process.argv;
let validNote = new input(actualArgv);
let object = new note(validNote);
object.execute();

app.get('/status', (request, response) => {
  console.log(app.get);
  const currentStatus = status(request);
  response.status(200).json(currentStatus);
});

app.listen(process.env.PORT, () => console.log('PORT is up!'));
