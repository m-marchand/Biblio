const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
const Library = require('./model.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


/*
  find all entries in database
  to display in library
*/

app.get('/api', (req, res) => {
  Library.find({})
  .then((items) => {
    res.send(items)
  })
  .catch((err) => {
    res.status(400);
  })
});


/* 
  Create a new entry in database:
  User sends a post request with entry
  data in request body
*/

app.post('/api', (req, res) => {
  const { title, composer, date, style, misc  } = req.body;
  Library.create({ title, composer, date, style, misc })
  .then((newItem) => {
    // send this library entry to the front end to be rendered
    res.status(200).send('Item saved to database: ', newItem);
  })
  .catch(() => {
    res.status(400).send('Unable to save to database');
  })
})


/*
  Query the DB for entries that match 
*/
app.post('/search', (req, res) => {
  console.log(req.body)
})


app.listen(PORT, () => {
  console.log('Listening on port 3000');
});