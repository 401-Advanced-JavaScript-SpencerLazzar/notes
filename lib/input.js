'use strict';

var parseArgs = require('minimist');
const argv = require('minimist')(process.argv.slice(2));

let actualArgv = process.argv;

function validateEntry(arg) {
  if (arg[2] !== '-a' && arg[2] !== '--add') {
    console.log('Make a valid command entry')
  } else if (!arg[3]) {
    console.log('enter a valid note')
  } else {
    return new Note(arg);
  }
}

function Note(array) {
  this.command = array[2];
  this.note = array[3];
}

module.exports = validateEntry;