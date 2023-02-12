const HomeController = require('../controllers/home-controller');
const PhotoController = require('../controllers/photos-controller');

const router = require('express').Router();

router.get('/', HomeController.home);
router.get('/photos', PhotoController.findAllPhotos);
router.get('/photos/edit/:id', PhotoController.updatePhoto);
router.post('/photos', PhotoController.findAllPhotos);
router.delete('/photos/hapus/:id', PhotoController.deletePhotoByID);

module.exports = router;
