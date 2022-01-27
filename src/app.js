const express = require('express');
const path = require('path');

const db = require('./database');
const routes = require('./routes');

const app = express();

// database connection
db.connect();

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// enable server to receive data from post
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

// 404 - not found
app.use((request, response) => response.send('Page not found'));

module.exports = app;
