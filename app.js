
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

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

app.locals.authorBuilder = function(nameData,nameCheck) {

  var nameCounter = function(nameCount) {
    var key, size, count = 0;
    for (key in nameCount) {
      if (nameCount.hasOwnProperty(key)) {
        size = count++
      }
    }
    return size;
  }

  var nameObjCounter = function(nameObjCount) {
    var key, size, count = 0;
    for (key in nameObjCount) {
      if (nameObjCount.hasOwnProperty(key)) {
        objSize = count++
      }
    }
    return objSize;
  }

  var nameBuilder = function(name, objCount) {
    /* =================
      ** Variable Key **
      * g=given name
      * f=family name
      * m=middle initial
      * s=suffix
      ==================*/
    var f, g, m, s;

    switch(objCount){
      case 2:
        var a=[];
        f = name.family, g = name.given[0];
        a.push(f,g);
        return a;
        break;

      case 3: 
        var a=[];
        if (typeof name.mi !== 'undefined') {
          f = name.family, g = name.given[0], m = name.mi;
          a.push(f,g,m);
          return a;
          break;
        }
        else if (typeof name.suffix !== 'undefined') {
          f = name.family, g = name.given[0], s = name.suffix;
          a.push(f,g,s);
          return a;
          break;
        }

      case 4:
        var a=[];
        f = name.family, g = name.given[0], 
        m = name.mi, s = name.suffix;
        a.push(f,g,m,s);
        return a;
        break;
    }
  }
  var prepName = [];
  var writeName,writeName1,writeName2;
  if (nameCheck == 'author') {
    for (var n = 0; n <= nameData.length-1; n++) {

      var writeNameArray = [];
      var returnOutput=[];
      var newSize = nameCounter(nameData);

      // 1 AUTHOR
      if (newSize == 0) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if (authObjLength ==2) {
          writeName = name[0]+', '+name[1]+'. ';
        }
        else if (authObjLength == 3) {
          writeName = name[0]+', '+name[1]+'. '+name[2]+'. ';
        }
        else if (authObjLength == 4) {
          writeName = name[0]+', '+name[1]+'. '+name[2]+', '+name[3]+'. ';
        }
      }
      // 2 AUTHORS
      else if (newSize == 1) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if (authObjLength == 2) {
          if (n == nameData.length-1) {
            writeName2 = '& '+name[1]+'. '+name[0]+'. ';
          }
          else {
            writeName1 = name[0]+', '+name[1]+'., ';
          }
        }
        else if (authObjLength == 3) {
          if (typeof nameData[n].mi !== 'undefined') {
            if (n == nameData.length-1) {
              writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+'. ';
            }
            else {
              writeName1 = name[0]+', '+name[1]+'. '+name[2]+'. ';
            }
          }
          else {
            if (n == nameData.length-1) {
              writeName2 = '& '+name[1]+'. '+name[0]+', '+name[2]+'. ';
            }
            else {
              writeName1 = name[0]+', '+name[1]+', '+name[2]+'. ';
            }
          }
        }
        else if (authObjLength == 4) {
          if (n == nameData.length-1) {
            writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+'. ';
          }
          else {
            writeName1 = name[0]+', '+name[1]+'. '+name[2]+', '+name[3]+'. ';
          }
        }
      }
      // 3 OR MORE AUTHORS
      if (newSize > 1) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if(authObjLength == 2) {
          if (n == nameData.length-1) {
            writeName2 = '& '+name[1]+'. '+name[0]+'. ';
          }
          else {
            prepName[n] = name[0]+', '+name[1]+'., ';
          }
        }
        else if(authObjLength == 3) {
          if (typeof nameData[n].mi !== 'undefined') {
            if (n == nameData.length-1) {
              writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+'. ';
            }
            else {
              prepName[n] = name[0]+', '+name[1]+'. '+name[2]+'. ';
            }
          }
          else {
            if (n == nameData.length-1) {
              writeName2 = '& '+name[1]+'. '+name[0]+', '+name[2]+'. ';
            }
            else {
              prepName[n] = name[0]+', '+name[1]+', '+name[2]+'. ';
            }
          }
        }
        else if(authObjLength == 4) {
          if (n == nameData.length-1) {
            writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+'. ';
          }
          else {
            prepName[n] = name[0]+', '+name[1]+'. '+name[2]+', '+name[3]+'. ';
          }
        }
      }
    }
    if (newSize > 1) {
      prepName.push(writeName2);
      var returnName = '';
      for (var r=0; r<=prepName.length-1; r++) {
        returnName += prepName[r];
      }
      return returnName;
    }
    else if (newSize == 1) {
      returnOutput.push(writeName1,writeName2);
      return returnOutput[0]+returnOutput[1];
    }
    else {
      return writeName;
    }
  }
  else if (nameCheck == 'editor') {
    for (var n = 0; n <= nameData.length-1; n++) {

      var writeNameArray = [];
      var returnOutput=[];
      var newSize = nameCounter(nameData);

      // 1 EDITOR
      if (newSize == 0) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if (authObjLength ==2) {
          var writeName = name[1]+'. '+name[0]+' (Ed.), ';
        }
        else if (authObjLength == 3) {
          var writeName = name[1]+', '+name[2]+'. '+name[0]+' (Ed.), ';
        }
        else if (authObjLength == 4) {
          var writeName = name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+' (Ed.), ';
        }
      }
      // 2 EDITORS
      else if (newSize == 1) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if (authObjLength == 2) {
          if (n == nameData.length-1) {
            writeName2 = '& '+name[1]+'. '+name[0]+' (Eds.), ';
          }
          else {
            writeName1 = name[1]+'. '+name[0]+'. ';
          }
        }
        else if (authObjLength == 3) {
          if (typeof nameData[n].mi !== 'undefined') {
            if (n == nameData.length-1) {
              var writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+' (Eds.), ';
            }
            else {
              var writeName1 = name[1]+'. '+name[2]+'. '+name[0]+'. ';
            }
          }
          else {
            if (n == nameData.length-1) {
              var writeName = '& '+name[1]+'. '+name[0]+', '+name[2]+' (Eds.), ';
              return writeName2;
            }
            else {
              var writeName = name[1]+'. '+name[0]+', '+name[2]+' ';
              return writeName1;
            }
          }
        }
        else if (authObjLength == 4) {
          if (n == nameData.length-1) {
            var writeName = '& '+name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+' (Eds.), ';
            return writeName2;
          }
          else {
            var writeName = name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+', ';
            return writeName1;
          }
        }
      }
      // 3 OR MORE EDITORS
      if (newSize > 1) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if(authObjLength == 2) {
          if (n == nameData.length-1) {
            var writeName2 = '& '+name[1]+'. '+name[0]+' (Eds.), ';
          }
          else {
            prepName[n] = name[1]+'. '+name[0]+', ';
          }
        }
        else if(authObjLength == 3) {
          if (typeof nameData[n].mi !== 'undefined') {
            if (n == nameData.length-1) {
              var writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+' (Eds.), ';
            }
            else {
              prepName[n] = name[1]+'. '+name[2]+'. '+name[0]+', ';
            }
          }
          else {
            if (n == nameData.length-1) {
              var writeName2 = '& '+name[1]+'. '+name[0]+', '+name[2]+' (Eds.), ';
            }
            else {
              prepName[n] = name[1]+'. '+name[0]+', '+name[2]+', ';
            }
          }
        }
        else if(authObjLength == 4) {
          if (n == nameData.length-1) {
            var writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+' (Eds.), ';
          }
          else {
            prepName[n] = name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+', ';
          }
        }
      }
    }
    if (newSize > 1) {
      prepName.push(writeName2);
      var returnName = '';
      for (var r=0; r<=prepName.length-1; r++) {
        returnName += prepName[r];
      }
      return returnName;
    }
    else if (newSize == 1) {
      returnOutput.push(writeName1,writeName2);
      return returnOutput[0]+returnOutput[1];
    }
    else {
      return writeName;
    }
  }
}

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
  console.log(namesToSort);
  // now you have an array of objects, each object representing a person.
  // regardless of what structure you have now, change it to achieve this.
  var compareNames = function(a, b) {
    // this function will compare two people objects.
    return a.name.localeCompare(b.name);
    // it's using String.prototype.localeCompare which returns 1 if a.name > b.name,
    // 0 for equal and -1 for smaller. localeCompare is lexicographic comparison.
  };
  namesToSort.sort(compareNames); // people sorted alphabetically
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