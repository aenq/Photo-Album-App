const HomeController = require('../controllers/home-controller');
const photoRouter = require('./photo-router');
const userRouter = require('./user-router');
const router = require('express').Router();

router.get('/', HomeController.home);
router.use('/photos', photoRouter);
router.use(userRouter);

module.exports = router;
