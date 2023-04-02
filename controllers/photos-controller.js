const {Photo, User} = require('../models/index');

class PhotoController {

    static findAllPhotos(req, res) {
        Photo.findAll({include : [User]})
        .then((photos) => {
            res.status(200).json(photos)
        })
        .catch((err) => {
            res.status(500).json({ message: "internal server error"})
        })
    }

    static findPhotosByID (req, res) {
        Photo.findOne({ where: { id : req.params.id}, include : [User]})
        .then((photosByID) => {
            if (!photosByID) throw { name : "ErrNotFound"};
                res.status(200).json(photosByID)
        })
        .catch((err) => {
            if (err.name = "ErrNotFound") {
                res.status(404).json({ message: "photo not found"});
            } else {
            res.status(500).json({ message: "internal server error"})
            }
        })
    }

    static createPhoto(req, res) {
        const {title, caption, image_url, UserId} = req.body;
        Photo.create({title, caption, image_url, UserId})
        .then((photo) => {
            res.status(201).json(photo);
        })
        .catch((err) => {
            if (err.name === "SequelizeValidationError") {
                const validationErrors = err.errors.map((error) => {
                    return error.message
                })
                return res.status(400).json({ message : validationErrors })
            } else {
                res.status(500).json({ err})
            }

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





