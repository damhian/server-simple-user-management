const { User } = require('../models')

checkDuplicateUsernameorEmail = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user) {
            res.status(400).send({
                message: "Failed username/email is already used"
            });
            return
        }
    })

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(email => {
        if(email) {
            res.status(400).send({
                message: "Failed email/username is already used"
            });
            return
        }
        next()
    })

}

const uniqueLogin = {
    checkDuplicateUsernameorEmail: checkDuplicateUsernameorEmail
}

module.exports = uniqueLogin