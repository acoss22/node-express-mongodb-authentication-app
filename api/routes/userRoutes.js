'use strict';
module.exports = function(app) {
    var userHandlers = require('../controllers/userController.js');

    // app.route('/')
    //     .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/auth/register')
        .post(userHandlers.register);
   app.route('/auth/signin')
        .post(userHandlers.sign_in);
};