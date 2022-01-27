const Mongoose = require('mongoose');
// schema
const schema = new Mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
});

const Model = Mongoose.model('customers', schema);

// const register = new Model({
//   name: 'Davi Silva',
//   age: 36,
//   email: 'davisilvaphoto@gmail.com',
//   password: '123456',
// });

// register.save();

module.exports = Model;
