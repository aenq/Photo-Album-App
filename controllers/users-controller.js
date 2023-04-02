const {User} = require('../models/index');
const {compare} = require('../helpers/hash')
const {sign} = require('../helpers/jwt')

class UserController {
    static async signIn(req, res) {
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
            if (error.name === "EmailNotFound" || error.name === "WrongPassword") {
                res.status(401).json({message : 'wrong email or password'});
            } else {
                res.status(500).json({message: 'internal server error'})
            }
        }
    }

    static async signUp(req, res) {
        // dapatkan input dari klien
        const { username, email, password} = req.body;
        // create user baru
        User.create( { username, email, password })
        .then((user) => {
            const {id, email} =user;
            res.status(201).json({id, email});
        })
        .catch((err) => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(400).json({message : 'bad request'})
            } else {
                res.status(500).json({ message : 'internal server error'})
            }
        })

    }
}

module.exports = UserController;

