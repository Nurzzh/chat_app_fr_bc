const express = require('express')
const router = express.Router()
const User = require('../modules/auth')
const genarate = require('../utiles/utile')

router.post('/login', (req,res)=>{
    res.status(200).send({status:200})
})

router.post('/register', async (req,res) => {
    try {
        const {email, password, name, surname} = req.body
        const token = genarate(email,password)
        const user = new User({
            email,
            password,
            name,
            surname,
            accessToken:token.accessToken,
            refreshToken:token.refreshToken
        })
        await user.save()
        res.status(201).send(token)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router