const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require('./models');
const main = require('./views/main.js')
const layout = require('./views/layout.js')

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
  res.send(layout(' '))
})

app.listen(3000, () => {
  console.log(`Listening on 3000`);
});
