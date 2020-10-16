

const { request } = require('express');
const mongoose = require('mongoose');
const Note = require('../../lib/notes.js');
const NotesModel = require('../requests/schema.js');


class NotesThing {
  constructor() {
    this.model = NotesModel;
  }

  create(note) {
    let newNote = new this.model({
      text: note.payload,
      category: note.category,
    });
    return newNote.save()
      .then(info => console.log('note saved: ' + info.text));
  }

  read(data) {
    this.model.find({ category: data }).then(info => console.log(info));
  }

  update() {
    // not required
  }

  delete(noteID) {
    this.model.deleteOne({ _id: noteID }, function (err) { });
  }
}

module.exports = NotesThing;