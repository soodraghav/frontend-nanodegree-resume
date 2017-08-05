var bio = {
    "name": "Raghav Sood",
    "role": "Front End Developer",
    "welcomeMessage": "Welcome to my bio",
    "biopic": "images/raghav.jpg",
    "contacts": {
        "mobile": "0000000000",
        "email": "raghav1sood@yahoo.co.in",
        "github": "soodraghav",
        "location": "Delhi"
    },
    "skills": ["Procastination", "Sarcasm", "Cricket", "Kicking Ass", "Being Awesome"]
};

var education = {
    "schools": [{
            "name": "Amity International School,Noida",
            "location": "Noida",
            "degree": "10th",
            "dates": "1998-2010",
            "url": "randomurl3",
            "majors": ["Maths", "SST", "Hindi", "English", "Science"]
        },
        {
            "name": "Amity International School,East Delhi",
            "location": "East Delhi",
            "degree": "12th",
            "dates": "2011-2012",
            "url": "randomurl4",
            "majors": ["Physics", "Maths", "Chemistry"]
        }
    ],
    "onlineCourses": [{
        "title": "Front End Development",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "randomurl5"
    }]
};

var projects = {
    "projects": [{
            "title": "RFID",
            "dates": "2015",
            "description": "Attendence using Radio Frequency Identification",
            "images": ["images/pup1.jpg"]
        },
        {
            "title": "Automated Speed Breaker System",
            "dates": "2016",
            "description": "Breakers when you need them",
            "images": ["images/pup2.jpg"]
        },
        {
            "title": "Udacity Project",
            "dates": "2016",
            "description": "des1",
            "images": ["images/pup3.jpg", "images/pup4.jpg"]
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "Siemens",
            "title": "Intern",
            "location": "Gurgaon",
            "date": "2 months",
            "description": "Worked on SCADA system .. Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite "
        },
        {
            "employer": "Tech Mahindra",
            "title": "Associate Software Engineer",
            "location": "NSEZ,Noida",
            "date": "9 months",
            "description": "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite "
        }
    ]
};


bio.display = function() {

    var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
    var formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedheaderRole);
    $("#header").prepend(formattedHeader);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#header").append(formattedHTMLbioPic);
    $("#header").append(formattedHTMLwelcomeMsg);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    ///////////////////////////////
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
    ////////////////////////////////

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formatttedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].date);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedworkEmployer + " " + formattedworkTitle);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formatttedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    }
};

projects.display = function() {
    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        for (j = 0; j < projects.projects[i].images.length; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);

    for (i = 0; i < education.schools.length; i++) {
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

        $(".education-entry:last").append(formattedschoolName);
        $(".education-entry:last").append(formattedschoolDegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        for (j = 0; j < education.schools[i].majors.length; j++) {
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
            $(".education-entry:last").append(formattedschoolMajor);
        }
    }

    for (k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);

        $(".education-entry:last").append(formattedonlineTitle);
        $(".education-entry:last").append(formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
    }
};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);


// function inName(name){
// 	nameArr = [];
// 	nameArr = name.trim().split(" ");
// 	console.log(nameArr);
// 	var fname = nameArr[0].charAt(0).toUpperCase() + nameArr[0].slice(1).toLowerCase();
// 	var lname = nameArr[1].toUpperCase();
// 	return fname + " " + lname;
// }
// $("#main").append(internationalizeButton);