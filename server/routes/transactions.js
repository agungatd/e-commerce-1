var express = require('express');
var router = express.Router();
const Controller = require('../controllers/transaction')
const User = require('../models/user')
const auth = require('../middlewares/authentication')
const groupAuth = require('../middlewares/groupAuth')
const isAdmin = require('../middlewares/isAdmin')

/* GET users listing. */
router.get('/', isAdmin, Controller.findAll);
router.get('/:userId', auth, Controller.findById)
router.post('/', auth, Controller.create)
router.put('/:id', Controller.update)
router.patch('/:id', Controller.patch)
router.delete('/:id', Controller.delete)


module.exports = router;
