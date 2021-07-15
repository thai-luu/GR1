function checkLogin(req, res, next) {
    if (req.session.username) {
        var alertlogin = false;
        next()

    } else {
        alertlogin = true;
        return res.render('login', { alertlogin })
    }
}
module.exports = checkLogin;