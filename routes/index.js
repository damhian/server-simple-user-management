const router = require('express').Router()
const authRouter = require('./authRouter')
const userRouter = require('./userRouter')

router.get('/', (req, res) => {
    res.status(200).json({message: 'Connection Test'})
})

router.use('/user', userRouter )
router.use('/auth', authRouter)

module.exports = router