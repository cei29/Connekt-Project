var express = require('express');
var router = express.Router();
const GetController = require('./controllers/GetController')

/* GET Index */
router.get('/', GetController.index)

/* GET Sign-Up */
router.get('/sign-up', GetController.signUp)

/* GET Sign-In */
router.get('/sign-in', GetController.signIn)

/* GET Feed */
router.get('/main', GetController.main)

/* GET My Profile */
router.get('/cei29', GetController.myProfile)

module.exports = router;