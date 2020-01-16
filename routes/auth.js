const express = require ('express');
const router = express.Router();
const User = require('../models/user-models');
const passport = require('passport');
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Log in
router.get('/login', (req,res) => {
    res.render('login', {user: req.user});
});

// Log out
router.get('/logout', (req, res) => {
    // handle logout with passport
    req.logout();
    res.redirect('/');
});

// Sign up
router.post('/signup', function(req, res, next){

    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({email: req.body.email}).then(function(user){
        if (user) {
            return res.status(400).json({ email: "Email already exists"});
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            // Hash password before saving in database
            // bcrypt.genSalt(10, (err, salt) => {
            //     bcrypt.hash(newUser.password, salt, (err, hash) => {
            //         if (err) throw err;
            //         newUser.password = hash;
            //         newUser.save()
            //         .then(user => res.json(user))
            //         .catch(err => console.log(err));
            //     });
            // });
        }
    }).catch(next);
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('https://property24-app.herokuapp.com/');
});

// test function to return users in database
router.get('/', (req, res, next) => {
    User.find({}).then(function(users){
        res.json(users);
    }).catch(next);
});
module.exports = router