'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 13000,


User = require('./api/models/userModel'),
bodyParser = require('body-parser'),
jsonwebtoken = require("jsonwebtoken");

const mongoose = require('mongoose');
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

mongoose.connect('mongodb+srv://dsfsfdsfdsfsfdsfhd:EjQectK3teKRdghdfhdfhgdfhhgdhdVQ9k@cluster0.4zwut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', option).then(function(){
    //connected successfully
    console.log('Connected to mongodb successfully.');
}, function(err) {
    //err handle
    console.log('Failed to connect to mongodb.');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// This function should be used in the 'scoped' service
// app.use(function(req, res, next) {
//   if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//     jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
//       if (err) req.user = undefined;
//       else req.user = decode;
//       next();
//     });
//   } else {
//     req.user = undefined;
//     next();
//   }
// });
var routes = require('./api/routes/userRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Tech Support Assistance Auth Server started on: ' + port);

module.exports = app;
