const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')

exports.userRegister = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("User already exist")
        } else {
            const newUser = new users({
                username, password, email
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const secretKey = "secretkey123"
            const token = jwt.sign({ userId: existingUser._id }, secretKey)

            res.status(200).json({ token, user: existingUser.username, userId: existingUser._id })
        } else {
            res.status(406).json("Invalid username/password")
        }
    }
    catch (err) {
        res.status(404).json(err)
    }
}