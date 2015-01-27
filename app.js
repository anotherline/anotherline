
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var authorBuilder = require('./public/lib/authorBuilder');

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

app.locals.lineBuilder = function(cvline,lineType,titleType) {
  var line = '';

  if (lineType == 'books' ) {
    if (titleType == 'editor') {
      var edName = authorBuilder(cvline.editors);
      if (cvline.editors.length == 0) {
        line += edName
              +', (Ed). '
              +'('+cvline.date+'). '
              +cvline.title+'. '
              +cvline.pressLoc.city
              +', '
              +cvline.pressLoc.state
              +': '
              +cvline.press
              +'.';
      }
      else {
        line += edName
              +', (Eds). '
              +'('+cvline.date+'). '
              +cvline.title+'. '
              +cvline.pressLoc.city
              +', '
              +cvline.pressLoc.state
              +': '
              +cvline.press
              +'.';
      }
    }
    else if (titleType == 'author') {
      var aName = authorBuilder(cvline.authors);
      if (cvline.editors.length == 0) {
        line += aName
              +'. '
              +'('+cvline.date+'). '
              +cvline.title+'. '
              +cvline.pressLoc.city
              +', '
              +cvline.pressLoc.state
              +': '
              +cvline.press
              +'.';
      }
      return line;
    }
    else if (lineType == 'chapters' ) {

    }
    else if (lineType == 'journals' ) {

    }
    else if (lineType == 'web' ) {

    }
    else if (lineType == 'coursework' ) {

    }
  }
}

app.locals.alphabetizer = function(namesToSort) {
  // namesToSort is an array of objects/names to compare
  var compareNames = function(a, b) {
    // compare two name objects.
    return a.name.localeCompare(b.name);
  };
  namesToSort.sort(compareNames); // names sorted alphabetically
  return namesToSort;
}

app.locals.prettyDate = function(dateString){
  var date = new Date(dateString);
  var d = date.getDate();
  var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  var m = monthNames[date.getMonth()];
  var y = date.getFullYear();
  return d+' '+m;
}

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});