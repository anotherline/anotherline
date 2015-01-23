/* GET about page */
module.exports.about = function(req, res){
  res.render('about-page', { title: 'About' });
};

/* GET 'Sign-in' page */
module.exports.signin = function(req, res){
  res.render('signin-index', { title: 'Sign into Another Line' });
};