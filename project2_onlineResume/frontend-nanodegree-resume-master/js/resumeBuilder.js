/*
This is empty on purpose! Your code to build the resume will go here.
 */


 //var awesomeThoughts = "I am Jason and I am awesome!";

 //console.log(awesomeThoughts);

 //var funThoughts =
 //    awesomeThoughts.replace("awesome", "fun");

 //console.log(funThoughts);


 var formattedName = HTMLheaderName.replace("%data%", "Jason Yu");


 var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);



var bio = {
   "name": "Jason Yu", 
   "role": "Front End Developer", 
   "contacts": {
   "mobile": "18607918021",
   "email": "yujie_jason@yeah.net",   
   "github": "anticliche",
   },
   "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
   "skills": [
     "HTML", "CSS", "JS", "Microsoft Office"
   ], 
   "bioPic": "images/suit.jpg"
 }

if(bio.skills.length > 0) {
    
      $("#header").append(HTMLskillsStart);
      
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
      
}


 var work = {
      "jobs":[
        {
          "employer": "Bank of China",
          "title": "graduation employee",
          "location": "Nanchang, China",
          "dates": "2015.07-2015.08",
          "description": "Served customers as a teller, such as open up an account and transfer money.Maintained the order of the bank reception and queue management.",
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

function displayWork() {
 for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(
    formattedEmployerTitle);
   
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

 }
}
 
displayWork(); 


$(document).click(function(loc) {
      var x = loc.pageX;
      var y = loc.pageY;
      
      logClicks(x,y);
});





 var projects = {
      "projects": [
        {
          "title": "my portfolio website",
          "dates": "2015.09",
          "description": "developed a responsive website that display images, descriptions and links to each of the portfolio projects.",
          "images": "images/portfolio.png"
        },
        {
          "title": "International Capital Markets Investment Simulation Exchange Competition",
          "dates": "2013.10-2013.12",
          "description": "1. Worked with 4 classmates from different countries to make investment.  2.Completed a 20-pages report successfully to get a top 10 reward among 60 groups.",
          "images": [
            "images/report1.png", "images/report2.png", "images/report3,png"
          ]
        }
      ]
 };
  
 projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(fortmattedImage);
      }
    }
  }
 };




function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];  
}

$("#main").append(internationalizeButton);



$("#mapDiv").append(googleMap);













