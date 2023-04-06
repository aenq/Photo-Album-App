const {Photo, User} = require('../models/index');

class PhotoController {

    static findAllPhotos(req, res, next) {
        console.log("findAll", req.user);
        Photo.findAll({include : [User]})
        .then((photos) => {
            res.status(200).json(photos)
        })
        .catch((error) => {
            next(error)
        })
    };

    static findPhotosByID (req, res, next) {
        Photo.findOne({ where: { id : req.params.id}, include : [User]})
        .then((photosByID) => {
            if (!photosByID) throw { name : "ErrNotFound"};
                res.status(200).json(photosByID)
        })
        .catch((error) => {
            next(error)
        })
    }

    static createPhoto(req, res, next) {
        const {title, caption, image_url, UserId} = req.body;
        Photo.create({title, caption, image_url, UserId})
        .then((photo) => {
            res.status(201).json(photo);
        })
        .catch((error) => {
            next(error)
        })
    }

    static updatePhoto (req, res, next) {
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

    static deletePhotoByID (req, res, next) {
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





