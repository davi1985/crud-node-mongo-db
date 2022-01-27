const mongoose = require('mongoose');

function connect() {
  mongoose.connect(
    'mongodb://localhost:27017/crud?readPreference=primary&ssl=false',
  );
  const db = mongoose.connection;

  db.once('open', () => console.log('connected to database'));

  db.on('error', console.error.bind(console, 'connection error'));
}

module.exports = { connect };
