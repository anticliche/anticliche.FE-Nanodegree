'use strict';


var bio = {
   "name": "Jason Yu", 
   "role": "Front End Developer", 
   "contacts": {
   "mobile": "18607918021",
   "email": "yujie_jason@yeah.net",   
   "github": "anticliche",
   "location": "Nanchang"
   },
   "welcomeMessage": "Let's code and rock!",
   "skills": [
     "HTML", "CSS", "JavaScript", "English"
   ], 
   "bioPic": "images/suit.jpg"
 };


bio.display = function() {

   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);

   var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
   var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").append(formattedImage + formattedMessage); 

   $("#header").append(HTMLskillsStart);

   for (var i=0; i < bio.skills.length; i++) {

      var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
      $('#skills').append(formattedSkill);
   };
       
   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   var formattedGithub= HTMLgithub.replace("%data%", bio.contacts.github);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

   $("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

};

bio.display();






var work = {
      "jobs":[
        {
          "employer": "Bank of China",
          "title": "Graduation Employee: Teller",
          "location": "Nanchang, China",
          "dates": "2015.07-2015.08",
          "description": "1. Served customers as a teller, such as open up an account and transfer money 2. Maintained the order of the bank reception and queue management",
        },
        {
          "employer": "China Unicom",
          "title": "Associate Sales Manager",
          "location": "Nanchang, China",
          "dates": "2013.07-2013.09",
          "description": "1. Responsible for opening up new mobile phone accounts and daily top-up 2. Opened up new broadband accounts, sold wireless routers and maintained them",
        }
    ]
};


work.display = function () {
   
  var job;
   
  for (job in work.jobs) {
   $("#workExperience").append(HTMLworkStart);

   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
   var formattedEmployerTitle = formattedEmployer + formattedTitle;
   $(".work-entry:last").append(formattedEmployerTitle);
   
   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
   $(".work-entry:last").append(formattedDates);

   var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
   $(".work-entry:last").append(formattedLocation);

   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
   $(".work-entry:last").append(formattedDescription);

 }
};
 
work.display();



$(document).click(function(loc) {
      var x = loc.pageX;
      var y = loc.pageY;
      
      logClicks(x,y);
});






 var projects = {
      "project": [
        {
          "title": "My Portfolio Website",
          "dates": "2015.09",
          "description": "Developed a responsive website that display images, descriptions and links to each of the portfolio projects",
          "images": ["images/portfolio.png"]
        },
        {
          "title": "International Capital Markets Investment Simulation Exchange Competition",
          "dates": "2013.10-2013.12",
          "description": "1. Worked with 4 classmates from different countries to make investment  2.Completed a 20-pages report successfully to get a top 10 reward among 60 groups",
          "images": [
            "images/1.png", "images/2.png", "images/3.png"
          ]
        }
      ]
 };
  

 projects.display = function() {

  var item;

     for (item in projects.project) {
       $("#projects").append(HTMLprojectStart);

       var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
       $(".project-entry:last").append(formattedTitle);

       var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
       $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.project[item].images.length > 0) {
        var image;
        for (image in projects.project[item].images) {
           var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
           $(".project-entry:last").append(formattedImage);
        };
      }
  }
};

projects.display();






var education = {
      "schools": [
        {
          "name": "Beijing Forestry University",
          "location": "Beijing, China",
          "degree": "Bachelor",
          "major": "Finance",
          "dates": "2009/09-2013/06"
        },
        {
          "name": "University of Glasgow",
          "location": "Glasgow, UK",
          "degree": "Master",
          "major": "International Corporate Finance and Banking",
          "dates": "2013/09-2014/12"
        }
      ],
      "onlineCourses": [
        {
          "title": "Intro to Computer Science",
          "school": "Udacity",
          "dates": "2015/08",
          "url": "www.udacity.com/course/intro-to-computer-science--cs101"
        },
        {
          "title": "Front-End Web Developer Nanodegree",
          "school": "Udacity",
          "dates": "2015/08-2015/10",
          "url": "www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
      ]
};


education.display = function() {
        
        var len = education.schools.length;
        for(var i=0; i < len; i++) {
     

          $("#education").append(HTMLschoolStart);

          var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);

          var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
  
          var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);       

          var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
         
          var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
          
          $(".education-entry:last").append(formattedName,formattedLocation,formattedDegree,formattedMajor,formattedDates);

        }
    
        $(".education-entry:last").append(HTMLonlineClasses);

        var len = education.onlineCourses.length;
        for(var i=0; i < len; i++) {  


          var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
     
          var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
     
          var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
     
          var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
     
          $(".education-entry:last").append(formattedonlineTitle,formattedonlineSchool,formattedonlineDates,formattedonlineURL);
        }
};

education.display();







function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];  
};

$("#main").append(internationalizeButton);



$("#mapDiv").append(googleMap);













