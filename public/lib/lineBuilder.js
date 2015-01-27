// lineBuilder.js

module.exports = function lineBuilder(cvline,lineType,titleType) {
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