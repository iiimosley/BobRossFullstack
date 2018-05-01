'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const imdb = require('imdb-api');
const key = require('./server/keys');

require('dotenv').config();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/client"));
app.use("/angular", express.static(__dirname + "/node_modules/angular/"));
app.use("/angular-route", express.static(__dirname + "/node_modules/angular-route/"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/movies', (req,res,next)=>{
  imdb.search({ title: req.query.keyword }, {apiKey: key})
    .then(movies => res.status(200).json(movies.results));
});





app.listen(port, () => console.log(`Magic on ${port}`));