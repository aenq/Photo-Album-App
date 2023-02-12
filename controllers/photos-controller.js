const {Photo, User} = require('../models/index');

class PhotoController {

    static findAllPhotos(req, res) {
        Photo.findAll({include : [User]})
        .then((photos) => {
            res.render('photos', {photos})
        })
        .catch((err) => {
            res.send("error")
        })
    }

    static findPhotosByID (req, res) {
        Photo.findOne({ where: { id : req.params.id}, include : [User]})
        .then((photosByID) => {
            res.render('photo-detail', {photosByID})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static updatePhoto (req, res) {
        Photo.update({title : req.params.title},
            {where : { id : req.params.id }})
        .then((data) => {
            res.render('add-product', data)
            console.log(data.title);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static deletePhotoByID (req, res) {
        Photo.destroy({where : {id : req.params.id}})
        .then((photo) => {
            res.render('photos', {photo})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = PhotoController;





