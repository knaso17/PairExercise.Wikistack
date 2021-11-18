const express = require('express');
const morgan = require ('morgan');
const layout = require ('./views/layout')

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send(layout(''));
})

app.listen(1337, ()=> {
  console.log("running on port 1337")
})
