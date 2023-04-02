const router = require('express').Router();
const UserController = require('../controllers/users-controller');

router.post('/sign-in', UserController.signIn);
router.post('/sign-up', UserController.signUp);

module.exports = router;