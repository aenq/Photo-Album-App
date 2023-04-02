const PhotoController = require('../controllers/photos-controller');
const router = require('express').Router();
const authenticationMiddleware = require('../middlewares/authentication-middleware');

router.get('/', authenticationMiddleware, PhotoController.findAllPhotos);
router.get('/:id', PhotoController.findPhotosByID);
router.post('/', PhotoController.createPhoto);
router.put('/', PhotoController.updatePhoto);
router.delete('/hapus/:id', PhotoController.deletePhotoByID);

module.exports = router;
