const mongoose = require('mongoose');
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// TODO: implement the following
const authRoutes = require('./routes/auth');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const passport = require('passport');
// const profileRoutes = require('./routes/profile');

const API_PORT = 3001;
const app = express();

// connect to the database
mongoose.connect(keys.mongodb.dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected');
});

// cookie duration in milliseconds
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.use('/auth', require('./routes/auth'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});