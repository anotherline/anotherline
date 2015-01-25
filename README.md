# AnotherLine: Your academic story

## About

This application, called AnotherLine, will offer scholars a way to easily add and update their CV/portfolio information, which can either be hosted in the app, or their data may also be served as API endpoints for scholars to use in conjunction with their own HTML/CSS/JS templates.

## File Structure

Yep, need to make/write this section.

## How to run and test on your machine

1. Install [Node.js and NPM](http://nodejs.org/)
2. In your terminal, navigate to app folder
3. Run <code>sudo npm install</code>
4. To start app in localhost, run <code>sudo nodemon app.js</code>
5. Navigate to http://localhost:5000/ in your browser.

## To-Dos

- build API and move server logic, accordingly
- <code>app_server/_includes/appointmentLogic.jade</code>: simplify appointments output by sorting it out by academic semesters, most recent to last item.
- <code>app_server/_includes/appointmentLogic.jade</code>: appointment semesters need a cleaner output, e.g., instead of Fall 2011, Spring 2011, Summer 2013, I want it to be Fall 2011-Spring 2011, Summer 2013
- <code>app_server/_includes/publicationLogic.jade</code>: the forthcoming conditional needs to be completed for all pub types.
- <code>app_server/_includes/publicationLogic.jade</code>: needs conditional statements to account for other data parameters, such as available hyperlinks to works, or dropdown/pop-up feature if abstract for a work is available, etc.
- <code>app_server/_includes/publicationLogic.jade</code>: make sure all hyperlinks are Web accessible
- create more jade templates for the CVs; currently, there are two: <code>cv-template-dropdown.jade</code> and <code>cv-template-traditional.jade</code>.

## Other ways to contribute

- create a new cv template in jade; see the [anotherline JSON schema](https://github.com/anotherline/anotherline-schema) for key/value pairs.

## Contributors

* Chris Lindgren, [Writing Studies scholar](http://clindgrencv.com/) 