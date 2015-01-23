
/*
 * 1. Define route for index page
 * 2. Expose route to application
 * 3. Reference controller so Express can handle requests
 */

var ctrl = require('../app_server/controllers/main');

module.exports = function (app) {
  app.get('/about', ctrl.about);
  app.get('/signin', ctrl.signin);
};