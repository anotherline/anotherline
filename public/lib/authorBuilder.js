// authorBuilder.js

module.exports = function authorBuilder(nameData,nameCheck) {

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
  if (nameCheck == 'author' || nameCheck == 'grantee') {
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
          var writeName = name[1]+'. '+name[2]+'. '+name[0]+' (Ed.), ';
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
  else if (nameCheck == 'leader') {
    for (var n = 0; n <= nameData.length-1; n++) {

      var writeNameArray = [];
      var returnOutput=[];
      var newSize = nameCounter(nameData);

      // 1 LEADER
      if (newSize == 0) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if (authObjLength ==2) {
          var writeName = name[1]+'. '+name[0]+' (Organizer), ';
        }
        else if (authObjLength == 3) {
          var writeName = name[1]+'. '+name[2]+'. '+name[0]+' (Organizer), ';
        }
        else if (authObjLength == 4) {
          var writeName = name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+' (Organizer), ';
        }
      }
      // 2 LEADERS
      else if (newSize == 1) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if (authObjLength == 2) {
          if (n == nameData.length-1) {
            writeName2 = '& '+name[1]+'. '+name[0]+' (Organizers), ';
          }
          else {
            writeName1 = name[1]+'. '+name[0]+'. ';
          }
        }
        else if (authObjLength == 3) {
          if (typeof nameData[n].mi !== 'undefined') {
            if (n == nameData.length-1) {
              var writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+' (Organizers), ';
            }
            else {
              var writeName1 = name[1]+'. '+name[2]+'. '+name[0]+'. ';
            }
          }
          else {
            if (n == nameData.length-1) {
              var writeName = '& '+name[1]+'. '+name[0]+', '+name[2]+' (Organizers), ';
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
            var writeName = '& '+name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+' (Organizers), ';
            return writeName2;
          }
          else {
            var writeName = name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+', ';
            return writeName1;
          }
        }
      }
      // 3 OR MORE LEADERS
      if (newSize > 1) {

        var authObjLength = nameObjCounter(nameData[n]);
        var name = nameBuilder(nameData[n],authObjLength);

        if(authObjLength == 2) {
          if (n == nameData.length-1) {
            var writeName2 = '& '+name[1]+'. '+name[0]+' (Organizers), ';
          }
          else {
            prepName[n] = name[1]+'. '+name[0]+', ';
          }
        }
        else if(authObjLength == 3) {
          if (typeof nameData[n].mi !== 'undefined') {
            if (n == nameData.length-1) {
              var writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+' (Organizers), ';
            }
            else {
              prepName[n] = name[1]+'. '+name[2]+'. '+name[0]+', ';
            }
          }
          else {
            if (n == nameData.length-1) {
              var writeName2 = '& '+name[1]+'. '+name[0]+', '+name[2]+' (Organizers), ';
            }
            else {
              prepName[n] = name[1]+'. '+name[0]+', '+name[2]+', ';
            }
          }
        }
        else if(authObjLength == 4) {
          if (n == nameData.length-1) {
            var writeName2 = '& '+name[1]+'. '+name[2]+'. '+name[0]+', '+name[3]+' (Organizers), ';
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