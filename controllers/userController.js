const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

const UserController = {
   register: function (req, res) {
    let payload = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    console.log(payload)
    User.create(payload)
        .then(result => {
            let user = {
                id: result.id,
                email: result.email
            }

            let token = generateToken(user)
            res.status(201).json({
                'id': user.id,
                'email': user.email,
                'access token': token
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
   },

   login: function (req, res) {
    let payload = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    User.findOne({
        where: {
            email: payload.email,
            username: payload.username
        }
    })
    .then(result => {
        if (result) {
            let compare = decryptPassword(payload.password, result.password)
            if (compare) {
                let user = {
                    id: result.id,
                    email: result.email
                }
                let token = generateToken(user)
                res.status(200).json({
                    'id': user.id,
                    'email': user.email,
                    'access token': token
                })
            } else {
                res.status(400).json({
                    'type': 'Bad Request',
                    'msg': 'Invalid Email/Password'
                })
            }
        } else {
            res.status(400).json({
                'type': 'Bad Request',
                'msg': 'Invalid Email/Password'
            })
        }
    })
    }
}

module.exports = UserController