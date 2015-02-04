/* GET 'home' page */
module.exports.homeInfo = function(req, res){
  res.render('index', { 
    title: 'AnotherLine: Your academic story.',
    pageHeader: {
      title: 'AnotherLine',
      strapline: 'Your academic story'
    }
  });
};

/* GET 'Add line start' page */
module.exports.addLineStart = function(req, res){
  res.render('cv-line-form', { title: 'Add a line' });
};

/* GET 'Add education line' page */
module.exports.addEdu = function(req, res){
  res.render('cv-form-edu', { title: 'Add a line - Education' });
};

/* GET 'Add appointment line' page */
module.exports.addAppt = function(req, res){
  res.render('cv-form-appt', { title: 'Add a line - Appointments' });
};

/* ========================================
    CV TEMPLATES
    - Each module GETs the particular page
   ========================================*/

/* GET 'dropdown template cv' page */
module.exports.cvTest1 = function(req, res){
  res.render('cv-template-dropdown-new', { 
    title: 'Dropdown Template Test',
    cv: {
      general: {
        given:'Chris',
        family:'Lindgren',
        mi:'A.',
        title:'PhD Student',
        university:'University of Minnesota',
        picture:'http://www.clindgrencv.com/assets/img/blog-header-200.jpg',
        email:'lindg250@umn.edu',
        phone:'',
        website:'http://www.clindgrencv.com',
        location: {
          address1: 'Nolte Center',
          address2: '',
          city:'Minneapolis',
          state:'MN',
          postalCode:'56082',
          countryCode:''
        }
      },
      education: {
        phd: {
          degCheck:true,
          degree:'PhD',
          title:'Student',
          institution: 'University of Minnesota',
          program: 'Rhetoric of Science and Technical Communication',
          programURL: 'http://writingstudies.umn.edu/grad/phd/',
          startDate: '',
          endDate: '2017',
          expectedDate:'Spring 2017',
          thesisTitle: '',
          committee:
          {
            hasCommittee: false,
            advisor:'Christina Haas'
          }
        },
        masters: {
          degCheck:true,
          degree:'MA',
          title:'',
          institution: 'North Dakota State University',
          program:'Composition Studies',
          startDate: 'Fall 2009',
          endDate: 'Summer 2012',
          expectedDate:'',
          thesisTitle: '\"Where\’s the Revolution? From \'Code Year\' to the Continuum of Proceduracy\"',
          committee:
          {
            hasCommittee: true,
            advisor:'Kevin Brooks',
            member1:'Andrew Mara',
            member2:'Kelly Sassi',
            outside:'Brain Slator'
          }
        },
        undergrad: {
          degCheck:true,
          degree:'BA',
          institution: 'North Dakota State University',
          program:'English Studies',
          startDate: 'Fall 1999',
          endDate: 'Summer 2004',
          advisor:'Kevin Brooks'
        }
      },
      appointments: {
        university: 
        [{
          name: 'University of Minnesota',
          current: true,
          courses:
          [{
            position: 'Graduate Instructor',
            deptShort: 'WRIT',
            courseNum: '3577w',
            course: 'Rhetoric, Technology, and the Internet',
            website: '',
            semesters: ['Fall 2014'],
            summary: '',
            highlights: [
              ''
            ]
          },
          {
            position: 'Graduate Instructor',
            deptShort: 'WRIT',
            courseNum: '1301',
            course: 'University Writing',
            website: '',
            semesters: ['Fall 2012','Fall 2013'],
            summary: '',
            highlights: [
              ''
            ]
          }],
          research:
          [{
            position: 'RA',
            department: 'Computer Science and Engineering',
            project: 'Writing-Enriched Curriculum',
            website: '',
            semesters: ['Spring 2013','Summer 2013'],
            summary: '',
            highlights: [
              ''
            ]
          }]
        },
        {
          name: 'North Dakota State University',
          current: false,
          courses:
          [{
            position: 'Graduate Instructor',
            deptShort: 'ENG',
            courseNum: '120',
            course: 'First-Year Writing',
            website: '',
            semesters: ['Fall 2009','Spring 2010','Fall 2010','Spring 2011','Fall 2011','Spring 2012'],
            summary: '',
            highlights: [
              ''
            ]
          }],
          research: 
          [{
            position: 'RA',
            department: 'English Education',
            project: 'Common Core Curriculum and National Writing Project',
            website: '',
            semesters: ['Spring 2011'],
            summary: '',
            highlights: [
              ''
            ]
          }]
        }]
      },
      publications: {
        books: [{
          forthcoming: false,
          title: 'Understanding computer programming as an embodied writing practice',
          role: true,
          authors: [{
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          editors: [{
            number: '',
            given: '',
            family: ''
          }],
          press: 'MIT Press',
          pressLoc: {
            city:'Cambridge',
            state:'MA'
          },
          date: '2020'
        },
        {
          forthcoming: true,
          title: 'Building a technical discourse: Writing code in non-compilable spaces',
          role: false,
          authors: [{
            number: '',
            given: '',
            family: ''
          }],
          editors: [{
            number: 1,
            given: 'ChrisEditor',
            family: 'Lindgren'
          }],
          press: 'MIT Press',
          pressLoc: {
            city:'Cambridge',
            state:'MA'
          },
          date: '2025'
        }],
        chapters: [
        {
          forthcoming: false,
          title: 'Tackling a fundamental problem: Using digital labs to build a smarter computing culture',
          collection:'Rhetoric and the Digital Humanities',
          authors: [{
            number: 1,
            given: 'Kevin',
            family: 'Brooks'
          },
          {
            number: 2,
            given: 'Chris',
            family: 'Lindgren'
          },
          {
            number: 3,
            given: 'Matthew',
            family: 'Warner'
          }],
          editors: [
          {
            number: 1,
            given:'Jim',
            family:'Ridolfo'
          },
          {
            number:2,
            given:'William',
            family:'Hart-Davidson'
          }],
          press: 'University of Chicago',
          pressLoc: {
            city:'Chicago',
            state:'IL'
          },
          date: '2015',
          pgNums: '140-165',
          abstract: '',
          assets:
          {
            exists: false,
            permaLink: '',
            isbn:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            'Rhetoric','Digital Humanities'
          ],
          tags: [
            ''
          ]
        },
        {
          forthcoming: true,
          title: 'Responding to the coding crisis: From \'Code Year\' to computational literacy',
          collection:'Strategic Discourse: The Politics of (New) Literacy Crises',
          authors: [{
            number: 1,
            given: 'Kevin',
            family: 'Brooks'
          },
          {
            number: 2,
            given: 'Chris',
            family: 'Lindgren'
          }],
          editors: [
          {
            number: 1,
            given:'Lynn',
            family:'Lewis',
            mi: 'C'
          }],
          press: 'Computers and Composition Digital Press',
          pressLoc: {
            city:'Salt Lake City',
            state:'UT'
          },
          date: '2015',
          pgNums: '30-55',
          abstract: '',
          assets:
          {
            exists: true,
            permaLink: 'http://www.notareallink.com',
            isbn:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            'Rhetoric','Literacy Studies'
          ],
          tags: [
            ''
          ]
        },
        {
          forthcoming: true,
          title: 'Utopian laptop initiatives: From technological deism to object-oriented rhetoric',
          collection:'Writing Posthumanism, Posthuman Writing',
          authors: [{
            number: 1,
            given: 'Byron',
            family: 'Hawk'
          },
          {
            number: 2,
            given: 'Chris',
            family: 'Lindgren'
          },
          {
            number: 3,
            given: 'Andrew',
            family: 'Mara'
          }],
          editors: [
          {
            number: 1,
            given:'Sidney',
            family:'Dobrin'
          }],
          press: 'Parlor Press',
          pressLoc: {
            city:'Anderson',
            state:'SC'
          },
          date: '2015',
          pgNums: '1-38',
          abstract: '',
          assets:
          {
            exists: false,
            permaLink: '',
            isbn:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            'Rhetoric','Object-Oriented Rhetoric'
          ],
          tags: [
            ''
          ]
        }],
        journals: [
        {
          forthcoming:false,
          title: 'The rhetorical nature of data structures',
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          journal: 'Journal of Business and Technical Communication',
          volume: '56',
          date: '2014',
          pgNums: '45-92',
          abstract: '',
          assets:
          {
            exists: false,
            permaLink: '',
            doi:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        },
        {
          forthcoming: true,
          title: 'Regulation and distributed ethos in U.S. online news coverage during the 2014 #Ferguson Protests',
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          },
          {
            number: 2,
            given: 'Laura',
            family: 'Lindgren'
          }],
          journal: 'Journal of Business and Technical Communication',
          volume: '57',
          date: '2015',
          pgNums: '45-92',
          abstract: '',
          assets:
          {
            exists: true,
            permaLink: '',
            doi:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
        web: [{
          forthcoming:false,
          title: 'Regulation and distributed ethos in China\'s online news coverage during the 2014 Hong Kong Protests',
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          journal: 'Kairos',
          volume:'21',
          issue:'1',
          date: '2015',
          abstract: '',
          assets:
          {
            exists: true,
            permaLink: 'http://www.kairos.edu/thislinkisnotreal',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
        coursework: [{
          forthcoming:false,
          title: 'Writing with/in the cloud: An autoethnography about the avocations, invocations & evocations of Twitter\'s API',
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          course: 'Writing in the Cloud',
          date: 'Fall 2013',
          abstract: 'Application Programming Interfaces (APIs) are not written for machines (Tulach 2008). Organizations and companies write APIs primarily for composite human audiences: web developers with a wide range of skill levels and purposes to engage with their data and services on the Web. APIs have become increasingly valuable resources for companies like Twitter, who thrive on the creativity and productivity of third-party developers to create new Web apps that utilize their dynamic sources of user-generated data. Using a Vygotskian theory and autoethnography methodological approach, I explore my ongoing situated code-writing practices and learning as interlaced with the encoded sociocultural histories wound up within the process of writing with the Twitter API.',
          assets:
          {
            exists: true,
            permaLink: 'http://api.clindgrencv.com/',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
      },
      presentations: {
        conference: [{
          date:"Sep. 2014",
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          title:"The dynamic materialities of programming practices",
          conference:"Association for Computing Machinery: Special Interest Group on the Communication of Design",
          location:
          {
            city:"Colorado Springs",
            state:"CO",
            country: ""
          },
          assets:
          {
            exists: true,
            presLink:"https://docs.google.com/presentation/d/1ichOzca0O5WjdG8QrnXbUoxs-syMhKbfc2rJnwq5VWo/pub?start=false&loop=false&delayms=20000#slide=id.p",
            linkTxt:"Link to slides and script."
          },
          invited: true
        }],
        workshop: [{
          date: "2015",
          leaders: [{
            number: 1,
            given: 'William',
            family: 'Hart-Davidson'
          },
          {
            number: 2,
            given: 'Ryan',
            family: 'Omizo'
          }],
          title: "Building \'Soph\'ware: Modeling theoretical approaches to technical and professional writing with computational methods",
          workshop:"Rhetoric Society of America Summer Institute",
          role: "Participant",
          location:
          {
            city:"Madison",
            state:"WI",
            country: ""
          },
          assets:
          {
            exists: false,
            presLink:"",
            linkTxt:""
          },
          invited: false
        }],
        department: [{
          date:"Oct. 2014",
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          title: "The social nature of programming practices: Expanding the notion of the \'technical\'",
          event: "Department of Writing Studies: Research Parlor",
          location:
          {
            city: "Minneapolis",
            state: "MN"
          },
          assets:
          {
            exists: false,
            presLink: "",
            linkTxt: ""
          },
          invited: true
        }]
      },
      service: {
        editorial: [{
          role: "Reviewer",
          journal: "Written Communication"
        }],
        groups: [{
          role: "",
          date:"",
          title:"",
          organization:""
        }],
        committees: [{
          semesters: ['Fall 2014','Spring 2015'],
          title:"Code work: Exploring Digital Studies through code",
          role:"Convener",
          organization:"Institute for Advanced Study: Research and Creative Collaborative",
          university: "University of Minnesota",
          invited: true
        }]
      },
      grants: [{
        grantees: [
        {
          number: 1,
          given: "Justin",
          family: "Schell"
        },
        {
          number: 2,
          given: "Chris",
          family: "Lindgren"
        },
        {
          number: 3,
          given: "Alison",
          family: "Link"
        },
        {
          number: 4,
          given: "Jeffrey",
          family: "Kerzner"
        }],
        name: 'Code work: Exploring Digital Studies through code',
        sponsor:{
          subExists: true,
          principal: 'University of Minnesota',
          subordinate: 'Institute for Advanced Study: Research and Creative Collaborative'
        },
        startDate:'2014',
        endDate:'2015',
        amount:'10,000'
      }],
      awards: {
        fellowship: [{
          name: "Social Media Fellowship",
          sponsor:{
            subExists: false,
            principal:"Rhetoric Society of America",
            subordinate:""
          },
          date:{
            semExists: false,
            year:"2014",
            semester:""
          }
        }],
        award: [{
          name:"Teaching Excellence Award",
          sponsor:{
            subExists: false,
            principal:"University of Minnesota",
            subordinate:"Department of Writing Studies"
          },
          date:{
            semExists: true,
            year:"2014",
            semester:"Fall"
          }
        }]
      },
      affiliations:[{
        name:"Rhetoric Society of America",
        startDate:"",
        endDate:""
      }],
      proficiencies: [{
        audio:[
          "Ableton Live", "Adobe Audition", "Audacity", "MLRV"
        ],
        video: [
          "Novacut", "Kdenlive", "iMovie", "Modul8"
        ],
        graphics: [
          "Adobe InDesign", "Photoshop", "Fireworks", "Kira", "Inkscape" 
        ],
        office: [
          "Microsoft", "LibreOffice" 
        ],
        courseManagement: [
          "Blackboard", "Moodle", "Wordpress as a LMS" 
        ],
        other: [{
          name:"Version Control",
          platforms: [
            "Github", "FTP"
          ]
        }]
      }],
      languages: [{
        language: "Mandarin",
        fluency: "Two years of coursework"
      },
      {
        language: "Javascript",
        fluency: "Intermediate"
      },
      {
        language: "Python",
        fluency: "Intermediate"
      }]
    }
  });
};

/* GET 'dropdown template cv' page */
module.exports.cvDropDown = function(req, res){
  res.render('cv-template-dropdown', { 
    title: 'My CV',
    cv: [{
      general: [{
        given: 'Chris',
        family: "Lindgren",
        mi: "A.",
        title: "PhD Student",
        university: "University of Minnesota",
        picture: 'http://www.clindgrencv.com/assets/img/blog-header-200.jpg',
        email: "lindg250@umn.edu",
        phone: '',
        website: '',
        summary: '',
        location: {
          address: '',
          postalCode: '',
          city: '',
          countryCode: '',
          region: ''
        },
        profiles: [{
          network: '',
          username: '',
          url: ''
        }]
      }],
      appointments: [{
        teaching: [{
          university: "University of Minnesota",
          position: "Graduate Instructor",
          deptShort: "WRIT",
          courseNum: "3577w",
          course: "Rhetoric, Technology, and the Internet",
          website: '',
          startDate: "Fall 2014",
          endDate: '',
          summary: '',
          highlights: [
            ''
          ]
        }],
        research: [{
          university: "University of Minnesota",
          position: "RA",
          department: "Computer Science and Engineering",
          project: "Writing-Enriched Curriculum",
          website: '',
          startDate: "Spring 2013",
          endDate: "Summer 2013",
          summary: '',
          highlights: [
            ''
          ]
        }]
      }],
      publications: [{
        book: [{
          title: 'Understanding computer programming as an embodied writing practice',
          authors: [{
            given: "Chris",
            family: "Lindgren"
          }],
          editors: [
            ''
          ],
          press: 'MIT Press',
          date: '2020',
          abstract: '',
          assets:
          {
            pgLink: '',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
        chapter: [{
          title: "Tackling a fundamental problem",
          authors: [{
            given: "Kevin",
            family: "Brooks"
          },
          {
            given: "Chris",
            family: "Lindgren"
          }],
          editors: [
            ''
          ],
          press: '',
          date: '',
          abstract: '',
          assets:
          {
            pgLink: '',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
        journal: [{
          title: '',
          authors: [
            ''
          ],
          journal: '',
          date: '',
          abstract: '',
          assets:
          {
            pgLink: '',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
        web: [{
          title: '',
          authors: [
            ''
          ],
          journal: '',
          date: '',
          abstract: '',
          assets:
          {
            pgLink: '',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
        coursework: [{
          title: '',
          authors: [
            ''
          ],
          course: '',
          date: '',
          abstract: '',
          assets:
          {
            pgLink: '',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }]
      }],
      presentations: [{
        conference: [{
          date:'',
          authors: [
            ''
          ],
          title:'',
          conference:'',
          location:
          {
            city:'',
            state:''
          },
          assets:
          {
            presLink:'',
            linkTxt:''
          },
          invited: { type: true }
        }],
        workshop: [{
          date:'',
          authors: [
            ''
          ],
          title:'',
          workshop:'',
          location:
          {
            city:'',
            state:''
          },
          assets:
          {
            presLink:'',
            linkTxt:''
          },
          invited: { type: true }
        }],
        department: [{
          date:'',
          authors: [
            ''
          ],
          title:'',
          event:'',
          location:
          {
            city:'',
            state:''
          },
          assets:
          {
            presLink:'',
            linkTxt:''
          },
          invited: { type: true }
        }]
      }],
      education: {
        phd: [{
          institution: "University of Minnesota",
          program: "Rhetoric of Science and Technical Communciation",
          startDate: '',
          endDate: '',
          thesisTitle: '',
          committee:
          {
            advisor:"Christina Haas",
            member1:'',
            member2:'',
            outside:''
          }
        }],
        masters: [{
          institution: '',
          startDate: '',
          endDate: '',
          thesisTitle: '',
          committee:
          {
            advisor:'',
            member1:'',
            member2:'',
            outside:''
          }
        }],
        undergrad: [{
          institution: '',
          startDate: '',
          endDate: '',
          thesisTitle: ''
        }]
      },
      service: {
        editorial: [{
          role: '',
          journal:''
        }],
        groups: [{
          date:'',
          title:'',
          organization:''
        }],
        committees: [{
          date:'',
          title:'',
          role:'',
          organization:''
        }]
      },
      grants: [{
        name: 'Code work: Exploring Digital Studies through code',
        sponsor:{
          subExists: true,
          principal: 'University of Minnesota',
          subordinate: 'Institute for Advanced Study: Research and Creative Collaborative'
        },
        startDate:'2014',
        endDate:'2015',
        amount:'10,000'
      }],
      awards: [{
        fellowship: [{
          name: '',
          sponsor:[
            ''
          ]
        }],
        award: [{
          name:'',
          sponsor:[
            ''
          ]
        }]
      }],
      affiliations:[{
        name:'',
        startDate:'',
        endDate:''
      }],
      skills: [{
        audio:[
          ''
        ],
        video: [
          ''
        ],
        graphics: [
          ''
        ],
        office: [
          ''
        ],
        courseManagement: [
          ''
        ],
        other: [{
          name:'',
          platforms: [
            ''
          ]
        }]
      }],
      languages: [{
        language: '',
        fluency: ''
      }]
    }] 
  });
};

/* GET 'tabular template cv' page */
module.exports.cvTraditional = function(req, res){
  // res.render('cv-template-traditional', { title: 'My CV' });
  res.render('cv-template-traditional', { 
    title: 'Traditional Template Test',
    cv: {
      general: {
        given:'Chris',
        family:'Lindgren',
        mi:'A.',
        title:'PhD Student',
        university:'University of Minnesota',
        picture:'http://www.clindgrencv.com/assets/img/blog-header-200.jpg',
        email:'lindg250@umn.edu',
        phone:'',
        website:'http://www.clindgrencv.com',
        location: {
          address1: 'Nolte Center',
          address2: '',
          city:'Minneapolis',
          state:'MN',
          postalCode:'56082',
          countryCode:''
        }
      },
      education: {
        phd: {
          degCheck:true,
          degree:'PhD',
          title:'Student',
          institution: 'University of Minnesota',
          program: 'Rhetoric of Science and Technical Communication',
          programURL: 'http://writingstudies.umn.edu/grad/phd/',
          startDate: '',
          endDate: '2017',
          expectedDate:'Spring 2017',
          thesisTitle: '',
          committee:
          {
            hasCommittee: false,
            advisor:'Christina Haas'
          }
        },
        masters: {
          degCheck:true,
          degree:'MA',
          title:'',
          institution: 'North Dakota State University',
          program:'Composition Studies',
          startDate: 'Fall 2009',
          endDate: 'Summer 2012',
          expectedDate:'',
          thesisTitle: '\"Where\’s the Revolution? From \'Code Year\' to the Continuum of Proceduracy\"',
          committee:
          {
            hasCommittee: true,
            advisor:'Kevin Brooks',
            member1:'Andrew Mara',
            member2:'Kelly Sassi',
            outside:'Brain Slator'
          }
        },
        undergrad: {
          degCheck:true,
          degree:'BA',
          institution: 'North Dakota State University',
          program:'English Studies',
          startDate: 'Fall 1999',
          endDate: 'Summer 2004',
          advisor:'Kevin Brooks'
        }
      },
      appointments: {
        university: 
        [{
          name: 'University of Minnesota',
          current: true,
          courses:
          [{
            position: 'Graduate Instructor',
            deptShort: 'WRIT',
            courseNum: '3577w',
            course: 'Rhetoric, Technology, and the Internet',
            website: '',
            semesters: ['Fall 2014'],
            summary: '',
            highlights: [
              ''
            ]
          },
          {
            position: 'Graduate Instructor',
            deptShort: 'WRIT',
            courseNum: '1301',
            course: 'University Writing',
            website: '',
            semesters: ['Fall 2012','Fall 2013'],
            summary: '',
            highlights: [
              ''
            ]
          }],
          research:
          [{
            position: 'RA',
            department: 'Computer Science and Engineering',
            project: 'Writing-Enriched Curriculum',
            website: '',
            semesters: ['Spring 2013','Summer 2013'],
            summary: '',
            highlights: [
              ''
            ]
          }]
        },
        {
          name: 'North Dakota State University',
          current: false,
          courses:
          [{
            position: 'Graduate Instructor',
            deptShort: 'ENG',
            courseNum: '120',
            course: 'First-Year Writing',
            website: '',
            semesters: ['Fall 2009','Spring 2010','Fall 2010','Spring 2011','Fall 2011','Spring 2012'],
            summary: '',
            highlights: [
              ''
            ]
          }],
          research: 
          [{
            position: 'RA',
            department: 'English Education',
            project: 'Common Core Curriculum and National Writing Project',
            website: '',
            semesters: ['Spring 2011'],
            summary: '',
            highlights: [
              ''
            ]
          }]
        }]
      },
      publications: {
        books: [{
          forthcoming: false,
          title: 'Understanding computer programming as an embodied writing practice',
          role: true,
          authors: [{
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          editors: [{
            number: '',
            given: '',
            family: ''
          }],
          press: 'MIT Press',
          pressLoc: {
            city:'Cambridge',
            state:'MA'
          },
          date: '2020'
        },
        {
          forthcoming: true,
          title: 'Building a technical discourse: Writing code in non-compilable spaces',
          role: false,
          authors: [{
            number: '',
            given: '',
            family: ''
          }],
          editors: [{
            number: 1,
            given: 'ChrisEditor',
            family: 'Lindgren'
          }],
          press: 'MIT Press',
          pressLoc: {
            city:'Cambridge',
            state:'MA'
          },
          date: '2025'
        }],
        chapters: [
        {
          forthcoming: false,
          title: 'Tackling a fundamental problem: Using digital labs to build a smarter computing culture',
          collection:'Rhetoric and the Digital Humanities',
          authors: [{
            number: 1,
            given: 'Kevin',
            family: 'Brooks'
          },
          {
            number: 2,
            given: 'Chris',
            family: 'Lindgren'
          },
          {
            number: 3,
            given: 'Matthew',
            family: 'Warner'
          }],
          editors: [
          {
            number: 1,
            given:'Jim',
            family:'Ridolfo'
          },
          {
            number:2,
            given:'William',
            family:'Hart-Davidson'
          }],
          press: 'University of Chicago',
          pressLoc: {
            city:'Chicago',
            state:'IL'
          },
          date: '2015',
          pgNums: '140-165',
          abstract: '',
          assets:
          {
            exists: false,
            permaLink: '',
            isbn:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            'Rhetoric','Digital Humanities'
          ],
          tags: [
            ''
          ]
        },
        {
          forthcoming: true,
          title: 'Responding to the coding crisis: From \'Code Year\' to computational literacy',
          collection:'Strategic Discourse: The Politics of (New) Literacy Crises',
          authors: [{
            number: 1,
            given: 'Kevin',
            family: 'Brooks'
          },
          {
            number: 2,
            given: 'Chris',
            family: 'Lindgren'
          }],
          editors: [
          {
            number: 1,
            given:'Lynn',
            family:'Lewis',
            mi: 'C'
          }],
          press: 'Computers and Composition Digital Press',
          pressLoc: {
            city:'Salt Lake City',
            state:'UT'
          },
          date: '2015',
          pgNums: '30-55',
          abstract: '',
          assets:
          {
            exists: true,
            permaLink: 'http://www.notareallink.com',
            isbn:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            'Rhetoric','Literacy Studies'
          ],
          tags: [
            ''
          ]
        },
        {
          forthcoming: true,
          title: 'Utopian laptop initiatives: From technological deism to object-oriented rhetoric',
          collection:'Writing Posthumanism, Posthuman Writing',
          authors: [{
            number: 1,
            given: 'Byron',
            family: 'Hawk'
          },
          {
            number: 2,
            given: 'Chris',
            family: 'Lindgren'
          },
          {
            number: 3,
            given: 'Andrew',
            family: 'Mara'
          }],
          editors: [
          {
            number: 1,
            given:'Sidney',
            family:'Dobrin'
          }],
          press: 'Parlor Press',
          pressLoc: {
            city:'Anderson',
            state:'SC'
          },
          date: '2015',
          pgNums: '1-38',
          abstract: '',
          assets:
          {
            exists: false,
            permaLink: '',
            isbn:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            'Rhetoric','Object-Oriented Rhetoric'
          ],
          tags: [
            ''
          ]
        }],
        journals: [
        {
          forthcoming:false,
          title: 'The rhetorical nature of data structures',
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          journal: 'Journal of Business and Technical Communication',
          volume: '56',
          date: '2014',
          pgNums: '45-92',
          abstract: '',
          assets:
          {
            exists: false,
            permaLink: '',
            doi:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        },
        {
          forthcoming: true,
          title: 'Regulation and distributed ethos in U.S. online news coverage during the 2014 #Ferguson Protests',
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          },
          {
            number: 2,
            given: 'Laura',
            family: 'Lindgren'
          }],
          journal: 'Journal of Business and Technical Communication',
          volume: '57',
          date: '2015',
          pgNums: '45-92',
          abstract: '',
          assets:
          {
            exists: true,
            permaLink: '',
            doi:'',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
        web: [{
          forthcoming:false,
          title: 'Regulation and distributed ethos in China\'s online news coverage during the 2014 Hong Kong Protests',
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          journal: 'Kairos',
          volume:'21',
          issue:'1',
          date: '2015',
          abstract: '',
          assets:
          {
            exists: true,
            permaLink: 'http://www.kairos.edu/thislinkisnotreal',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
        coursework: [{
          forthcoming:false,
          title: 'Writing with/in the cloud: An autoethnography about the avocations, invocations & evocations of Twitter\'s API',
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          course: 'Writing in the Cloud',
          date: 'Fall 2013',
          abstract: 'Application Programming Interfaces (APIs) are not written for machines (Tulach 2008). Organizations and companies write APIs primarily for composite human audiences: web developers with a wide range of skill levels and purposes to engage with their data and services on the Web. APIs have become increasingly valuable resources for companies like Twitter, who thrive on the creativity and productivity of third-party developers to create new Web apps that utilize their dynamic sources of user-generated data. Using a Vygotskian theory and autoethnography methodological approach, I explore my ongoing situated code-writing practices and learning as interlaced with the encoded sociocultural histories wound up within the process of writing with the Twitter API.',
          assets:
          {
            exists: true,
            permaLink: 'http://api.clindgrencv.com/',
            linkTxt: '',
            img: '',
            altAttr: ''
          },
          field: [
            ''
          ],
          tags: [
            ''
          ]
        }],
      },
      presentations: {
        conference: [{
          date:"Sep. 2014",
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          title:"The dynamic materialities of programming practices",
          conference:"Association for Computing Machinery: Special Interest Group on the Communication of Design",
          location:
          {
            city:"Colorado Springs",
            state:"CO",
            country: ""
          },
          assets:
          {
            exists: true,
            presLink:"https://docs.google.com/presentation/d/1ichOzca0O5WjdG8QrnXbUoxs-syMhKbfc2rJnwq5VWo/pub?start=false&loop=false&delayms=20000#slide=id.p",
            linkTxt:"Link to slides and script."
          },
          invited: true
        }],
        workshop: [{
          date: "2015",
          leaders: [{
            number: 1,
            given: 'William',
            family: 'Hart-Davidson'
          },
          {
            number: 2,
            given: 'Ryan',
            family: 'Omizo'
          }],
          title: "Building \'Soph\'ware: Modeling theoretical approaches to technical and professional writing with computational methods",
          workshop:"Rhetoric Society of America Summer Institute",
          role: "Participant",
          location:
          {
            city:"Madison",
            state:"WI",
            country: ""
          },
          assets:
          {
            exists: false,
            presLink:"",
            linkTxt:""
          },
          invited: false
        }],
        department: [{
          date:"Oct. 2014",
          authors: [
          {
            number: 1,
            given: 'Chris',
            family: 'Lindgren'
          }],
          title: "The social nature of programming practices: Expanding the notion of the \'technical\'",
          event: "Department of Writing Studies: Research Parlor",
          location:
          {
            city: "Minneapolis",
            state: "MN"
          },
          assets:
          {
            exists: false,
            presLink: "",
            linkTxt: ""
          },
          invited: true
        }]
      },
      service: {
        editorial: [{
          role: "Reviewer",
          journal: "Written Communication"
        }],
        groups: [{
          date:"",
          title:"",
          organization:""
        }],
        committees: [{
          semesters: ['Fall 2014','Spring 2015'],
          title:"Code work: Exploring Digital Studies through code",
          role:"Convener",
          organization:"Institute for Advanced Study: Research and Creative Collaborative",
          university: "University of Minnesota",
          invited: true
        }]
      },
      grants: [{
        grantees: [
        {
          number: 1,
          given: "Justin",
          family: "Schell"
        },
        {
          number: 2,
          given: "Chris",
          family: "Lindgren"
        },
        {
          number: 3,
          given: "Alison",
          family: "Link"
        },
        {
          number: 4,
          given: "Jeffrey",
          family: "Kerzner"
        }],
        name: 'Code work: Exploring Digital Studies through code',
        sponsor:{
          subExists: true,
          principal: 'University of Minnesota',
          subordinate: 'Institute for Advanced Study: Research and Creative Collaborative'
        },
        startDate:'2014',
        endDate:'2015',
        amount:'10,000'
      }],
      awards: {
        fellowship: [{
          name: "Social Media Fellowship",
          sponsor:{
            subExists: false,
            principal:"Rhetoric Society of America",
            subordinate:""
          },
          date:{
            semExists: false,
            year:"2014",
            semester:""
          }
        }],
        award: [{
          name:"Teaching Excellence Award",
          sponsor:{
            subExists: false,
            principal:"University of Minnesota",
            subordinate:"Department of Writing Studies"
          },
          date:{
            semExists: true,
            year:"2014",
            semester:"Fall"
          }
        }]
      },
      affiliations:[{
        name:"Rhetoric Society of America",
        startDate:"",
        endDate:""
      }],
      proficiencies: [{
        audio:[
          "Ableton Live", "Adobe Audition", "Audacity", "MLRV"
        ],
        video: [
          "Novacut", "Kdenlive", "iMovie", "Modul8"
        ],
        graphics: [
          "Adobe InDesign", "Photoshop", "Fireworks", "Kira", "Inkscape" 
        ],
        office: [
          "Microsoft", "LibreOffice" 
        ],
        courseManagement: [
          "Blackboard", "Moodle", "Wordpress as a LMS" 
        ],
        other: [{
          name:"Version Control",
          platforms: [
            "Github", "FTP"
          ]
        }]
      }],
      languages: [{
        language: "Mandarin",
        fluency: "Two years of coursework"
      },
      {
        language: "Javascript",
        fluency: "Intermediate"
      },
      {
        language: "Python",
        fluency: "Intermediate"
      }]
    }
  });
};

/* GET 'Change template' page */
module.exports.changeTemplate = function(req, res){
  res.render('cv-choose-template', { title: 'Choose your CV template' });
};


/* ========================================
    ADD NEW PUBLICATION PAGES
    - Each module GETs the particular page
   ========================================*/

module.exports.addPub = function(req, res){
  res.render('cv-form-pub', { title: 'Add a line - Publication' });
};

module.exports.addBook = function(req, res){
  res.render('cv-form-book', { title: 'Add a line - Book' });
};

module.exports.addChapter = function(req, res){
  res.render('cv-form-chapter', { title: 'Add a line - Chapter' });
};

module.exports.addArticle = function(req, res){
  res.render('cv-form-article', { title: 'Add a line - Article' });
};

module.exports.addWebtext = function(req, res){
  res.render('cv-form-webtext', { title: 'Add a line - Webtext' });
};

module.exports.addCoursework = function(req, res){
  res.render('cv-form-coursework', { title: 'Add a line - Coursework' });
};

/* ========================================
    ADD NEW PRESENTATION PAGES
    - Each module GETs the particular page
   ========================================*/

module.exports.addPresentation = function(req, res){
  res.render('cv-form-presentation', { title: 'Add a line - Presentation' });
};

module.exports.addConference = function(req, res){
  res.render('cv-form-conference', { title: 'Add a line - Conference' });
};

module.exports.addWorkshop = function(req, res){
  res.render('cv-form-workshop', { title: 'Add a line - Workshop' });
};

module.exports.addDept = function(req, res){
  res.render('cv-form-dept', { title: 'Add a line - Department' });
};

module.exports.addPublic = function(req, res){
  res.render('cv-form-public', { title: 'Add a line - Public' });
};

/* ========================================
    ADD NEW SERVICE PAGES
    - Each module GETs the particular page
   ========================================*/

module.exports.addService = function(req, res){
  res.render('cv-form-service', { title: 'Add a line - Service' });
};

module.exports.addEditorial = function(req, res){
  res.render('cv-form-editorial', { title: 'Add a line - Editorial' });
};

module.exports.addGroup = function(req, res){
  res.render('cv-form-group', { title: 'Add a line - Group' });
};

module.exports.addCommittee = function(req, res){
  res.render('cv-form-committee', { title: 'Add a line - Committee' });
};

/* ========================================
    ADD NEW GRANT PAGES
    - Each module GETs the particular page
   ========================================*/

module.exports.addGrant = function(req, res){
  res.render('cv-form-grant', { title: 'Add a line - Grant' });
};

/* ========================================
    ADD NEW AWARDS PAGES
    - Each module GETs the particular page
   ========================================*/

module.exports.addAwards = function(req, res){
  res.render('cv-form-awards', { title: 'Add a line - Awards' });
};

module.exports.addAward = function(req, res){
  res.render('cv-form-award', { title: 'Add a line - Award' });
};

module.exports.addFellowship = function(req, res){
  res.render('cv-form-fellowship', { title: 'Add a line - Fellowship' });
};

/* ========================================
    ADD NEW AFFILIATION PAGES
    - Each module GETs the particular page
   ========================================*/

module.exports.addAffiliation = function(req, res){
  res.render('cv-form-affiliation', { title: 'Add a line - Affiliation' });
};

/* ========================================
    ADD NEW SKILLS PAGES
    - Each module GETs the particular page
   ========================================*/

module.exports.addSkill = function(req, res){
  res.render('cv-form-awards', { title: 'Add a line - Awards' });
};

module.exports.addAudio = function(req, res){
  res.render('cv-form-audio', { title: 'Add a line - Audio' });
};

module.exports.addVideo = function(req, res){
  res.render('cv-form-video', { title: 'Add a line - Video' });
};

module.exports.addGraphics = function(req, res){
  res.render('cv-form-graphics', { title: 'Add a line - Graphics' });
};

module.exports.addOffice = function(req, res){
  res.render('cv-form-office', { title: 'Add a line - Office' });
};

module.exports.addCourseManage = function(req, res){
  res.render('cv-form-course-management', { title: 'Add a line - Course Management' });
};

/* ========================================
    ADD NEW LANGUAGES PAGES
    - Each module GETs the particular page
   ========================================*/

module.exports.addLanguage = function(req, res){
  res.render('cv-form-language', { title: 'Add a line - Language' });
};