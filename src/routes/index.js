const router = require('express').Router();
const CustomerController = require('../controllers/customers');

router.get('/', (request, response) => {
  return response.render('index', {
    title: 'Home',
  });
});

router.get('/register', (request, response) => {
  return response.render('register', {
    title: 'Cadastro de Clientes',
  });
});

router.post('/register/add', CustomerController.add);

module.exports = router;
