module.exports = {
    login:  (req, res, next) => {
        return res.render('login')
    },
    register: (req, res, next) => {
        return res.render('register')
    }

}