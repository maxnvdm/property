const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const path = require('path');

// TODO: implement the following
const authRoutes = require('./routes/auth');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const passport = require('passport');
// const profileRoutes = require('./routes/profile');

const API_PORT = 4000;
const app = express();

// connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodb.dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => console.log("Connected to DB")).catch(err => console.log(err));
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
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));
app.use("/testAPI", require('./routes/testAPI'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
const port = process.env.PORT || 4000;
app.listen(port, function(){
  console.log(`Backend listening on ${port}`);
});

