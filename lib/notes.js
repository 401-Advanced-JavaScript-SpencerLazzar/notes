'use strict';

const NotesThing = require('../models/requests/notes-collection.js');
const mongoose = require('mongoose');
let Bananas = new NotesThing();

class Note {
  constructor(obj) {
    this.action = obj.action;
    this.payload = obj.payload;
    this.category = obj.category;
  }


  execute() {
    if (this.action === '--add' || this.action === '-a') {
      this.add();
    } else if (this.action === '--list' || this.action === '-l') {
      this.list();
    } else if (this.action === '--delete' || this.action === '-l') {
      this.delete();
    }
  }



  add() {
    return Bananas.create(this);
  }

  list() {
    return Bananas.read(this.payload);
  }

  delete() {
    return Bananas.delete(this.payload);
  }


}
module.exports = Note;
