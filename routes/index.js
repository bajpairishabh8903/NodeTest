var express = require('express');
var router = express.Router();
const path = require('path');
var middleware = require('../middleware/middleware')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/html/signin.html'));
});


router.post('/signup',middleware.validate_form_inps, middleware.isSubscribed, function(req, res, next) {
  console.log(req.body)
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    if(req.body.subscribed){
      res.json(`Hello ${firstname} ${lastname}, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${email}`)
    }else{
      res.json(`Hello ${firstname} ${lastname}, Thank you for signing up. Your account is now created`)
    }
});

module.exports = router;
