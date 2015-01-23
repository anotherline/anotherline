/* ========================================
    CV TEMPLATES
    - Each module GETs the particular page
   ========================================*/

/* GET 'Change template' page */
module.exports.changeTemplate = function(req, res){
  res.render('cv-choose-template', { title: 'Choose your CV template' });
};

/* GET 'dropdown template cv' page */
module.exports.cvDropDown = function(req, res){
  res.render('cv-template-dropdown', { title: 'My CV' });
};

/* GET 'tabular template cv' page */
module.exports.cvTraditional = function(req, res){
  res.render('cv-template-traditional', { title: 'My CV' });
};