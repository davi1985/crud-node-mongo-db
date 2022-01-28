const router = require('express').Router();
const CustomerController = require('../controllers/customers');
const IndexController = require('../controllers/index');

// index
router.get('/', IndexController.index);

// register
router.get('/register', CustomerController.index);
router.post('/register/add', CustomerController.add);

// list
router.get('/list', CustomerController.listUsers);

// edit
router.get('/edit', CustomerController.indexEdit);
router.post('/edit/:id', CustomerController.edit);

// delete
router.get('/remove/:id', CustomerController.remove);

module.exports = router;
