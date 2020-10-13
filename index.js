'use strict';

require('dotenv').config();
const express = require('express');
const validateEntry = require('./lib/input.js');
const note = require('./lib/notes.js');

const app = express();
let actualArgv = process.argv;
let validNote = validateEntry(actualArgv);
let object = new note(validNote);
object.execute();



app.listen(process.env.PORT, () => console.log('PORT is up!'));
