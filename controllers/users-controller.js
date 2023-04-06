const {User} = require('../models/index');
const {compare} = require('../helpers/hash')
const {sign} = require('../helpers/jwt')

class UserController {
    static async signIn(req, res, next) {
        // dapat input dari klien
        const { email, password} = req.body;
        try {
            // cari user dengan email tersebut
            const user = await User.findOne({where : {email} });
            if (!user) throw { name : "EmailNotFound"};
            // bandingkan password yang diinput dengan yang di database
            if (!compare(password, user.password)) throw {name: "WrongPassword"};
            // encode and sign jwt
            const token = sign({id : user.id, email: user.email})

            // kirim token jwt ke klien
            res.status(200).json({token});
        } catch (error) {
            next(error)
        }
    }

    static async signUp(req, res, next) {
        // dapatkan input dari klien
        const { username, email, password} = req.body;
        // create user baru
        User.create( { username, email, password })
        .then((user) => {
            const {id, email} =user;
            res.status(201).json({id, email});
        })
        .catch((error) => {
            next(error)
        })

    }
}

module.exports = UserController;

