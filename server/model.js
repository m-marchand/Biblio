const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mateo:getthisbread@cluster0.3rufh.mongodb.net/BiblioDB?retryWrites=true&w=majority"
const express = require('express');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'biblioDB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const librarySchema = new Schema({
  title: { type: String, required: true },
  composer: { type: String, required: true },
  date: String,
  style: String,
  misc: String,
});

const Library = mongoose.model('Library', librarySchema);

// export library schema to be used in server controller
module.exports = Library;

