const express = require('express');
const path = require('path');

const app = express();

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// enable server to receive data from post
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (request, response) => {
  const user = {
    name: 'Fulano de tal',
  };
  return response.render('index', {
    user,
  });
});

// 404 - not found
app.use((request, response) => response.send('Page not found'));

module.exports = app;
