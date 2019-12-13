const express = require ('express');
const router = express.Router();
const User = require('../models/user-models');
const passport = require('passport');

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
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});


// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
});

module.exports = router