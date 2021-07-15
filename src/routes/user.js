const { request } = require('express');
const express = require('express');
const User = require('../app/Models/User')
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/login', (req, res) => {
    User.findOne({
        'username': req.body.username,
        password: req.body.password
    }, function(err, user) {

        try {

            req.session.username = user.username
            req.session.password = user.password
            req.session.login = true
            console.log(req.body.username, res.locals.session)
            return res.redirect('/')


        } catch (error) {
            var alertCheck = 1;
            res.render('login', { alertCheck })
        }



    })

})
router.get('/logout', (req, res) => {
    req.session.destroy(function(err) {
        return res.redirect('/')
    })
})
module.exports = router;