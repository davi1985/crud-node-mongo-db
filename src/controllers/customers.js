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

  return response.render('register', {
    title: DEFAULT_TITLE,
    message: 'Cliente cadastrado com sucesso!',
  });
}

async function listUsers(request, response) {
  const users = await CustomersModel.find();

  return response.render('listUsers', {
    title: 'Listagem de Clientes',
    users,
  });
}

async function indexEdit(request, response) {
  const { id } = request.query;

  const user = await CustomersModel.findById(id);

  return response.render('edit', {
    title: 'Editar Cliente',
    user,
  });
}

async function edit(request, response) {
  const { name, age, email } = request.body;

  const { id } = request.params;

  const user = await CustomersModel.findById(id);

  user.name = name;
  user.age = age;
  user.email = email;

  user.save();

  return response.render('edit', {
    title: 'Editar Cliente',
    user,
    message: 'Usuário alterado com Sucesso.',
  });
}

async function remove(request, response) {
  const { id } = request.params;

  const remove = await CustomersModel.deleteOne({ _id: id });

  if (remove.ok) {
    return response.redirect('listUser');
  }
}

module.exports = { add, index, listUsers, indexEdit, edit, remove };
