// alphabetizer.js

module.exports = function alphabetizer(namesToSort) {
  // namesToSort is an array of objects/names to compare
  var compareNames = function(a, b) {
    // compare two name objects.
    return a.name.localeCompare(b.name);
  };
  namesToSort.sort(compareNames); // names sorted alphabetically
  return namesToSort;
}