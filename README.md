# AnotherLine: Your academic story

![Screenshot of AnotherLine homepage](http://www.clindgrencv.com/assets/img/outside/anotherline-readme.png "Screenshot of AnotherLine homepage")

## About

This application, called AnotherLine, will offer scholars a way to easily add and update their CV/portfolio information, which can either be hosted in the app, or their data may also be served as API endpoints for scholars to use in conjunction with their own HTML/CSS/JS templates.

## File Structure

<pre>anotherline/
    app.js
    package.json
    app_server/
        controllers/
        	cv.js
        	lineMaker.js
        	main.js
        	templates.js
        models/
        	cv.js
        	db.js
        views/
        	includes/
        		[jade mixins] ...
        	[jade templates] ...
    node_modules/
    	...
    public/
        bootstrap/
        	...
        images/
            ...
        javascripts/
        	...
       	lib/
       		...
       	stylesheets/
       		...
    routes/
    	cv.js
    	index.js
    	main.js
    	user.js
</pre>

## How to run and test on your machine

1. Install [Node.js and NPM](http://nodejs.org/)
2. In your terminal, navigate to app folder
3. Run <code>sudo npm install</code>
4. To start app in localhost, run <code>sudo nodemon app.js</code>
5. Navigate to http://localhost:5000/ in your browser.

## To-Dos

### Phase 1 - Develop database schema and templates, responsively.

The main goal of this first phase is to develop the schema and a few CV templates in tandem, as to revise either as necessary.

- update template mixins to check for available assets in publications and presentations objects
- <code>app_server/_includes/appointmentLogic.jade</code>: simplify appointments output by sorting it out by academic semesters, most recent to last item.
- <code>app_server/_includes/appointmentLogic.jade</code> and <code>app_server/_includes/serviceLogic.jade</code> : need cleaner output for appointmet and committee **semesters**, e.g., instead of Fall 2011, Spring 2011, Summer 2013, I want it to be Fall 2011-Spring 2011, Summer 2013
- <code>app_server/_includes/publicationLogic.jade</code>: the forthcoming conditional needs to be completed for all pub types.
- <code>app_server/_includes/publicationLogic.jade</code>: needs conditional statements to account for other data parameters, such as available hyperlinks to works, or dropdown/pop-up feature if abstract for a work is available, etc.
- <code>app_server/_includes/publicationLogic.jade</code>: make sure all hyperlinks are Web accessible
- create more jade templates for the CVs; currently, there are two: <code>cv-template-dropdown.jade</code> and <code>cv-template-traditional.jade</code>
- write/design print.css stylesheets for both the dropdown and traditional templates

### Phase 2 - Build MongoDB database and API

With the completion of semi-stable schema for the CV/Portfolio, we can now complete the MongoDB/Mongoose database schema, developing the cv-form templates to input data.

- build API and move server logic, accordingly
- write the form templates for data input

## Other ways to contribute

- Create a new cv template in jade; see the [anotherline JSON schema](https://github.com/anotherline/anotherline-schema) for key/value pairs. For current examples, see <code>app_server/views/cv-template-dropdown-new.jade</code> and <code>app_server/views/cv-template-traditional.jade</code>.
- Open a new issue: [https://github.com/anotherline/anotherline/issues](https://github.com/anotherline/anotherline/issues)
- Contact me with questions: chris.a.lindgren [at] gmail [dot] com.

## Contributors

* Chris Lindgren, [Writing Studies scholar](http://clindgrencv.com/) 