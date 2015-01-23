var ctrl = require('../app_server/controllers/cv');

module.exports = function(app) {
  app.get('/', ctrl.homeInfo);
  app.get('/new', ctrl.addLineStart);
  app.get('/new-edu', ctrl.addEdu);
  app.get('/new-appt', ctrl.addAppt);

  //templates
  app.get('/choose-template', ctrl.changeTemplate);
  app.get('/mycv1', ctrl.cvDropDown);
  app.get('/mycv2', ctrl.cvTraditional);
  app.get('/mycvtest', ctrl.cvTest1);

  //publications
  app.get('/new-pub', ctrl.addPub);
  app.get('/new-book', ctrl.addBook);
  app.get('/new-chapter', ctrl.addChapter);
  app.get('/new-article', ctrl.addArticle);
  app.get('/new-webtext', ctrl.addWebtext);
  app.get('/new-coursework', ctrl.addCoursework);

  //presentations
  app.get('/new-presentation', ctrl.addPresentation);
  app.get('/new-conference', ctrl.addConference);
  app.get('/new-workshop', ctrl.addWorkshop);
  app.get('/new-dept', ctrl.addDept);
  app.get('/new-public', ctrl.addPublic);

  //service
  app.get('/new-service', ctrl.addService);
  app.get('/new-editorial', ctrl.addEditorial);
  app.get('/new-group', ctrl.addGroup);
  app.get('/new-committee', ctrl.addCommittee);

  //grants
  app.get('/new-grant', ctrl.addGrant);

  //awards
  app.get('/new-awards', ctrl.addAwards);
  app.get('/new-fellowship', ctrl.addFellowship);
  app.get('/new-award', ctrl.addAward);

  //affiliations
  app.get('/new-affiliation', ctrl.addAffiliation);

  //skills
  app.get('/new-skill', ctrl.addSkill);
  app.get('/new-audio', ctrl.addAudio);
  app.get('/new-video', ctrl.addVideo);
  app.get('/new-graphics', ctrl.addGraphics);
  app.get('/new-office', ctrl.addOffice);
  app.get('/new-course-management', ctrl.addCourseManage);

  //languages
  app.get('/new-language', ctrl.addLanguage);
};