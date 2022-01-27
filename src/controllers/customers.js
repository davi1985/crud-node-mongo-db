const CustomersModel = require('../models/customers');

async function add(req, res) {
  const { name, age, email, password } = req.body;

  const register = new CustomersModel({
    name,
    age,
    email,
    password,
  });

  register.save();

  return res.end('Cadastro realizado com sucesso!');
}

module.exports = { add };
