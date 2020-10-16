'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const NotesSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

const NoteModel = mongoose.model('Note', NotesSchema);


module.exports = NoteModel;