var express = require('express');
var router = express.Router();
const GetController = require('./controllers/GetController')

/* GET Index */
router.get('/', GetController.index)

/* GET Sign-Up */
router.get('/sign-up', GetController.signUp)

/* GET Sign-In */
router.get('/sign-in', GetController.signIn)

/* GET Main */
router.get('/main', GetController.main)

/* GET Course */
router.get('/course', GetController.course)

/* GET My Profile */
router.get('/user', GetController.user)

module.exports = router;