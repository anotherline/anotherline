var mongoose = require('mongoose');

/*
* Nested sub-schemas to use in the parent schema,
* cvSchema; they must be written b4 the parent.
*/
var addressInfo = new mongoose.Schema({
  address1: String,
  address2: String,
  postalCode: String,
  city: String,
  countryCode: String,
  region: String
});

var profileInfo = new mongoose.Schema({
  network: String,
  username: String,
  url: String
});

var teachingSchema = new mongoose.Schema({
  university: String,
  position: String,
  deptShort: String,
  courseNum: String,
  course: String,
  website: String,
  startDate: String,
  endDate: String,
  summary: String,
  highlights: { type: [String], index: false }
});

var researchSchema = new mongoose.Schema({
  university: String,
  position: String,
  deptShort: String,
  courseNum: String,
  course: String,
  website: String,
  startDate: String,
  endDate: String,
  summary: String,
  highlights: { type: [String], index: false }
});

/*
* Nested schemas to use in the parent schema,
* cvSchema; they must be written b4 the parent.
*/
var generalSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  mi: String,
  title: String,
  university: String,
  picture: String,
  email: String,
  phone: String,
  website: String,
  location: [addressInfo],
  profiles: [profileInfo]
});

var apptSchema = new mongoose.Schema({
  teaching: [teachingSchema],
  research: [researchSchema]
});

/*
* locationSchema is the parent schema that references
* the above nested schemas as [] array objs
*/
var cvSchema = new mongoose.Schema({
  general: [generalSchema],
  appointments: [apptSchema]
});

//tags: { type: [String], index: true }