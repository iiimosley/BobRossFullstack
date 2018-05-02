'use strict';

// main dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//auth
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

// dependent data + paths
const port = process.env.PORT || 8080;
const routes = require('./server/routes');

app.set('models', require('./server/models'));

// static rendering
app.use(express.static(__dirname + "/client"));
app.use("/angular", express.static(__dirname + "/node_modules/angular/"));
app.use("/angular-route", express.static(__dirname + "/node_modules/angular-route/"));


// auth middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}));

require('./server/config/passport-strat.js');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes);


app.listen(port, () => console.log(`Magic on ${port}`));
