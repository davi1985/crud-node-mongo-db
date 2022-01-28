const CustomersModel = require('../models/customers');
const { crypto } = require('../utils/password');

const DEFAULT_TITLE = 'Cadastro de Clientes';

async function index(request, response) {
  return response.render('register', {
    title: DEFAULT_TITLE,
  });
}

async function add(request, response) {
  const { name, age, email, password } = request.body;
  const passCrypted = await crypto(password);

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passCrypted,
  });

  register.save();

  return response.send('Cadastro realizado!');
}

async function listUsers(request, response) {
  const users = await CustomersModel.find();

  return response.render('listUsers', {
    title: 'Listagem de Clientes',
    users,
  });
}

module.exports = { add, index, listUsers };
