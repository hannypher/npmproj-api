const router = require('express').Router()
const bcrypt = require('bcrypt');
const userController = require('../controllers/user.controller');


router.post('/signup', async (req, res) => {
    const {username, password} = req.body
    const encrypted = await bcrypt.hash(password, 10)
    return await userController.registerUser({username, password:encrypted })
})

module.exports = router;