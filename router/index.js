const HomeController = require('../controllers/home-controller');
const errorMiddleware = require('../middlewares/error-middleware');
const photoRouter = require('./photo-router');
const userRouter = require('./user-router');
const router = require('express').Router();

router.get('/', HomeController.home);
router.use('/photos', photoRouter);
router.use(userRouter);

router.use(errorMiddleware);
router.use((req, res, next) => {
    next({ name : "PageNotFound"})
    // res.status(404).json({message : "Sorry can't find that!"})
})

module.exports = router;
