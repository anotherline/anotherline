
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var authorBuilder = require('./public/lib/authorBuilder');
var lineBuilder = require('./public/lib/lineBuilder');
var alphabetizer = require('./public/lib/alphabetizer');
var prettyDate = require('./public/lib/prettyDate');

var app = express();
require('./app_server/models/db');

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/app_server/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.locals.indexScripts = ['/javascripts/lib/jquery.min.js','/bootstrap/js/bootstrap.min.js','/javascripts/header-blur.js'];
app.locals.authorBuilder = authorBuilder;
app.locals.lineBuilder = lineBuilder;
app.locals.alphabetizer = alphabetizer;
app.locals.prettyDate = prettyDate;

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});