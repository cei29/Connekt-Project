module.exports = {
    index(req, res) {
        res.render('index')
    },
    signUp(req, res) {
        res.render('sign-up')
    },
    signIn(req, res) {
        res.render('sign-in')
    },
    main(req, res) {
        res.render('main')
    },
    course(req, res) {
        res.render('course')
    },
    user(req, res) {
        res.render('user')
    },
    courses(req, res) {
        res.render('courses')
    }
}