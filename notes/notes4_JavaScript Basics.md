#Course Summary

We're here to get you started with JavaScript! In the twenty plus years since its inception, JavaScript has become the lingua franca of the Web, that's to say, it's become the main tool to create interactive content on the Internet.

In this course, you'll explore the JavaScript programming language by creating an interactive version of your résumé. You’ll learn the JavaScript programming fundamentals you need while building new elements and sections to enhance your résumé.

#Why Take This Course?

Today, front-end developers work with web designers to create the interactive experiences that make the web the addictive playground we know and love. As the size and influence of the web has expanded, so has the importance of ensuring a website offers users an unforgettable experience.

Perhaps your end goal is to create a HTML5 game, code the front-end for an app idea you have, or maybe you want to use one of the growing set of libraries that let you compile code written in another language or for another platform down to JavaScript. With JavaScript, you can do all these things and more.

**Project**

You will create an interactive résumé that you can share to the world and show your growing skills at the time.

Having a good résumé is a key component of securing a better job. We'll give you the template styles and code to create a modern and mobile friendly résumé (also called a curriculum vitae/CV outside the United States) that you can modify and customize.


**Prerequisites and Requirements**

We expect that you have some experience programming in another language, such as Python, and can describe concepts like loops, functions and objects. Our Intro to Computer Science and Programming Fundamentals with Python courses are great places to get started.

While we do describe the underlying principles behind basic programming techniques, this course focuses on implementing the principles with JavaScript rather than the principles themselves.

HTML and CSS are not required, however, knowledge of CSS will help you customize your résumé project.

#Extra Readings

- **Introduction to HTML**: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction

- **Document Object Model (DOM)**:
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

- **tutorials on CSS**:
https://docs.webplatform.org/wiki/css

- **Introduction to JavaScript**:
https://developer.mozilla.org/en-US/docs/Web/JavaScript

- **jQuery**:
http://jquery.com/


- **String.prototype.replace()**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

- **.append()**
http://api.jquery.com/append/

- **String.prototype.slice()**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

- **JSON: What It Is, How It Works, & How to Use It**: http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/

- **The JSON Validator**:
http://jsonlint.com/

- **True lies and falsy values in Python and Javascript**: http://opensourcehacker.com/2012/10/17/true-lies-and-falsy-values-in-python-and-javascript/

- **Functions are first class objects in javascript**:
http://helephant.com/2008/08/19/functions-are-first-class-objects-in-javascript/
 
- **A Short History of JavaScript**:
https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript 

- **Data-Driven Documents**: http://d3js.org/

- **Google Maps Javascript API**: https://developers.google.com/maps/documentation/javascript/tutorial


---------------

#Lesson 0: Getting Up and Running

##Summary

Learn about the tools we'll be using throughout the course and begin modifying web pages with a little bit of code.

- Introduction of résumé project
- Components of the résumé
- Introduction to browser developer tools
- Running commands on the console
- Appending elements to the page


##The resume's html
##CSS and JS in the resume
##Console.log( )

- prints a string to the console
- doesn't create any savable data (no return value)

##Hacking Udacity's front page

example:

`$(".super-header-wrapper").html("<img 
style='width:100%' src='http://goo.gl/
WCrBmS'>");`

The main point here is that `.super-header-wrapper` is an element on the page that contains the background and the jQuery method `.html()` changes what's inside it.

##Using append to build a page

`$("#main").append("Jason Yu")`



-----------------

#Lesson 1: Data Types

Dig deeper into JavaScript as we introduce you to the building blocks of the language as you write more complex code using variables and advanced data structures like JSON, Objects, and Arrays.

- Variables
- Strings
- Evaluating values
- Arrays
- Objects
- JSON
- Validating JSON


##1.Variables and simple data

var {{variableName}}={{someValue}}

var declares a new variable for all data types.
和python不同在于，多了一个var

var myArray = [ ];
var myFunc = function(){ };
var myObject = { };

`var firstName = "james";`
`var age = 32;`

`console.log(firstName);`


##Stringreplace

`[string].replace([old],[new])`

example:

    var email = "cameron@udacity.com";

    var newEmail = 
        email.replace("udacity", "gmail");
 
    console.log(email);
 
    console.log(newEmail);


    var awesomeThoughts = 
        "My name is Cameron and I am AWESOME!";
    
    var funThoughts = 
        awesomeThoughts.replace("AWESOME", "FUN")
    
    $("#main").append(funThoughts);    
    

##Mixing replace and append

replace placeholders in html with real data, after that we just need to append html strings to start building our resume.

观察 **helper.js** 文件，helper.js will load first

    var name = "Jason Yu";
    var formattedName = HTMLheaderName.replace("%data%", name);
    
    var role = "Web Developer";
    var formattedRole = HTMLheaderRole.replace("%data%", role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

want our name to appear first and our role to appear second.


##String manipulation 

**quiz**:

In Intro to Computer Science, Dave Evans challenges you to use Python to convert "audacity" to "Udacity". Let's see if you can perform the same manipulation with JavaScript.

**Your Challenge**

Using string methods, convert "audacity" to "Udacity".

Check out MDN's documentation on JavaScript string methods before you get started (hint: slice() will probably be useful).

**solution**:

    var s = "audacity";

    var udacityizer = function(s) {  
        // Right now, the variable s === "audacity"
        // Manipulate s to make it equal to "Udacity"
        // Your code goes here!
    
    s = s[1].toUpperCase() + s.slice(2);
    
        return s;
    };

    // Did your code work? The line below will tell you!

    console.log(udacityizer(s));



##Truthy Falsy

truthy: true, non-zero numbers, "strings", objects, arrays, functions (evaluate to true)

falsy: false, 0, "", undefined, null, NaN (evaluate to false)


##2.Arrays

**类似python中的list**

`var myArray = [item_1, item_n]`

example: 
`["Euler", 3.14159, {name: "James", job: "Course Developer"}, myFunc]`

    var skills = 
    ["awesomeness", "programming", "teaching", "JS"];
    $("#main").append(skills[0]);
    
    output: awesomeness
 
##Array Manipulation

**quiz**:

    var sampleArray = [0,0,7];

    var incrementLastArrayElement = function(_array) {
        var newArray = [];
        // Your code should make newArray equal to an array that has the same
        // values as _array, but the last number has increased by one.
    
        // For example:
        // _array = [1, 2, 3];
        // turns into:
        // newArray = [1, 2, 4];
    
        // Your code goes in here!
    
    
         // Don't delete this line!
         return newArray;
     };

    // Did your code work? The line below will tell you!
    console.log(incrementLastArrayElement(sampleArray));

**solution**:

    function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
    }
     
     
`newArray = _array.slice(0);`
    
Just like `string.slice(begin, [end])` separates the characters of a string, `array.slice(begin, [end])` separates the elements of an array from the index of the `begin` up to but not including `end`. We want to make a copy of the original array, so we won't include an `[end]`. At this point, `newArray` is a copy of the original _array.

`var lastNumber = newArray.pop();`

The `array.pop()` method conveniently gives us (or returns) the last element of the array, which in this case is the number we want to increase by 1. However! Be careful because `array.pop()` actually removes the last element of the array. This is why we made a copy in the previous line, so we wouldn't modify the `original _array`.

`newArray.push(lastNumber + 1);`
    
Just how the jQuery `.append()` method adds an element to the end of an HTML block, the array.push() method adds an element to the end of an array. Here, we're `.push()`ing the `lastNumber + 1`, which is exactly what we wanted to do.

And with that, we've got our newly incremented array!


##String Manipulation 2

**quiz**:

Let's do some more string manipulation. This time, you might find you need to use arrays as well.

We want you to run through an exercise that will come in handy later on in lesson 2.

**Your Challenge**

If given a string of a two word name formatted with any mix of capitalization, can you manipulate the string to ensure the first name has a capital first letter and the last name is totally capitalized? Assume there's a space between the names. For instance, turning a string like "cAmEROn PittMAN" into "Cameron PITTMAN". Your answer should be a single string saved to the variable called finalName.

     var name = "AlbERt EINstEiN";

     function nameChanger(oldName) {
         var finalName = oldName;
         // Your code goes here!
         var oldName

    
         // Don't delete this line!
         return finalName;
     };

    // Did your code work? The line below will tell you!
    console.log(nameChanger(name));

**solution**:

     function nameChanger(oldName) {
         var finalName = oldName;
         var names = oldName.split(" ");
         names[1] = names[1].toUpperCase();
         names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
         finalName = names.join(" ");
         return finalName;
    }

`var names = oldName.split(" ")`

Here, we're creating an array of names by breaking the original name at the space. At this point for our original example, `names === ["AlbERt", "EINstEiN"]`

`names[1] = names[1].toUpperCase();`

The `string.toUpperCase()` method does exactly what its name describes. It's acting on `names[1]`, which is `"EINstEiN"` in the original example. So here, we're reassigning the second element in the `names` array to the all caps version of `"EINSTEIN"`.

`names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();`

This line builds `Albert`. `names[0].slice(0,1).toUpperCase()` starts by acting on the first element in the `names` array, which is `"AlbERt"` in the example. Then, we grab just the first letter by using `.slice(0,1)`. Then we simply use the `.toUpperCase()` method again to make sure the first letter is capitalized. Also, notice how we chained two methods together here.

The next part, `names[0].slice(1).toLowerCase()` acts similarly, except this time we're using `.slice(1)` to grab the rest of the first string, which is `"lbERt"`in the example. Then we simply chain the `.toLowerCase()` method to make sure that the rest of the letters in the first name are lower case. Once we have the first letter capitalized and the rest of the name lower case, we concatenate them together with the `+`.

`finalName = names.join(" ");`

`array.join([chars])` lets us put array elements together into a single string. Each element will be separated by the optional `chars`. In this case, we want a space between the two names, so we made the chars a single space, `" "`. With that, we've joined `"Albert"` and `"Einstein"` to form `"Albert EINSTEIN"`!


##3.Objects

**objects 类似 python 中的 library**

arrays are special kind of objects in JS.

There are no classes in JS!

`var myObj = {};`

    var bio = {
        "name" : "James", 
        "age" : 32
    };

you can save an array in an object.
    
add to a page:

`$("#main").append(bio.name);`

##Dot and Bracket Notation

`var myObj = { };`
`myObj.property = some value`
`myObj["property"] = some value`

adding properties to an object

`bio.city = "Mountain View";`

`$("#main").append(bio.city);`

`bio["city"] = "Mountain View";`

`$("#main").append(bio["city"])`

##A note about JSON

What is JSON and why is JSON linting important.

**What is JSON?**

JavaScript Object Notation. JSON is a popular and simple format for storing and transferring nested or hierarchal data. It's so popular that most other programming languages have libraries capable of parsing and writing JSON (like Python's JSON library). Internet GET and POST requests frequently pass data in JSON format. JSON allows for objects (or data of other types) to be easily encapsulated within other objects. See the MDN or JSON.org for more details.

This is a fantastic deep dive from Jason Lengstorf about JSON and its ubiquitous use in the form of AJAX requests.

**Why should I lint my JSON?**

With a mix of nested curly braces, square brackets and commas, it's easy to make mistakes with JSON. And mistakes mean bugs. Seriously, I mess up JSONs all the time. You might even be able to spot a bug in one of my JSONs in a video in this course...

If you're generating JSON by hand, you should copy and paste your code into a JSON linter like jsonlint.com to quickly and easily find syntax errors. A linter is a piece of software that analyzes code for syntax errors. Some text editors, like Sublime Text, will automatically lint (or highlight) most syntax errors. But a JSON linter won't miss any syntax errors and you can rest assured that your JSONs will be properly formatted.

##4.JSON

JavaScript Object Notation

a kind of object

example:

    var education = {
      "school": [
        {
          "name": "Beijing Forestry University",
          "city": "Beijing, China",
          "degree": "Bachelor",
          "major": "Finance",
          "graduation years": 2013
        },
        {
          "name": "University of Glasgow",
          "city": "Glasgow, UK",
          "degree": "Master",
          "major": "International Corporate Finance and Banking",
          "graduation years": 2014
        }
      ]
    }

##All the resume sections quiz

`work` contains an array of `jobs`. Each `job` object in `jobs` should contain an `employer`, `title`, `location`, `dates` worked and `description`.

`projects` contains an array of `projects`. Each `project` object in `projects` should contain a `title`, `dates` worked, `description`, and an `images` array with URL strings for project images.

`bio` contains a `name`, `role`, `welcomeMessage`, `contacts` object and `skills` array. The `contacts` object should contain (but doesn't have to) a `mobile` number, `email` address, `github` username, `twitter` handle and `location`.

`education` contains an array of `schools`. Each `school` object in `schools` contains a `name`, `location`, `degree`, `majors` array, `dates` attended and a `url` for the school's website. `education` also contains an `onlineCourses` array. Each `onlineCourse` object in `onlineCourses` should contain a `title`, `school`, `dates` attended and a `url` for the course.



---------------------

#Lesson 2: Flow Control

Finish the résumé while you learn how to make your code more modular and reusable by using conditional statements, loops, and functions.

- Conditional statements
- For and while loops
- Functions
- Encapsulation

##Control flow - if statements

evaluators: <, >, <=, >=, ===, !=

    if (condition) { 
       do something( );
    } else {
       do somethingElse( );
    }

    if (tired===true) {
        drinkCoffee( );
    } else {
      drinkWater( );
    }
    

**Strict equality (`===`) vs Loose equality (`==`)**

When you use three equal signs, `===`, no type conversion is done prior to the comparison. If the values are different types, for example, a `String` and a `Number`, they can't ever be equal. To return `true`, the values must be equal and the types must be the same.

Loose equality, `==`, checks to see if the two values are the same type and if not, converts to a common type before the conversion. If the types are already the same, there is no difference between the result of `===` and `==`. When they aren't it can cause unexpected results.

Check the link to an article on Mozilla Developer Network to see what values get converted into what.

According to Jacques Favreau, the lead front-end engineer at Udacity, you should never use `==`. It's a frequent source of bugs. In fact, if a Udacity engineer tries to commit code with `==`, it automatically gets rejected.

Though it wasn't mentioned in the video, the same conditions apply for strict inequality (`!==`) and loose inequality (`!=`). Loose inequality is more forgiving than loose equality so you might not see strict inequality as often.


    if(bio.skills.length > 0) {
    
      $("#header").append(HTMLskillsStart);
      
      var formattedSkill = HTMLskills.replace("
        %data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
      
    }


##Control flow - loops - While loops

    while(condition) {
       doSomething();
    }
    
    while(cameron.job==="course dev") {
       makeCourse();
    }
    
example:
 
    var cameron = {};
    cameron.job = "course dev";
    
    var makeCourse = function() {
      // make a couse
      console.log("Made a course");
    }
    
    var courses = 0;
    while(cameron.job === "course dev") {
      makeCourse();
      courses = courses + 1;
      if(courses === 10) {
        cameron.job = "learning specialist";
      }
    }
    
    console.log(cameron.job);

##Control flow - loops - for loops

    for(initialization; condition; mutator) {
       do Something();
    }
    
    for(var i = 0; i<9; i++) {
       console.log(i);
    }


##Control flow - loops - for-in loops

    for(item in object) {
       do Something();
    }
    
    var countries = 
       ["Germany", "Argentina", 
        "Brazil", "Netherlands"];
    
    for(country in countries) {
       console.log(countries[country]);
    };

The `:last` jQuery selector returns the final element in a list that matches whatever precedes it.

So for `work-entry:last`, if there are 3 `work-entry` elements, it will only return the 3rd one.

If you're interested, you can read more about jQuery's `:last` selector here(http://www.w3schools.com/jquery/sel_last.asp).


##Functions

    var myFunc = function(param1, param2) {
       //code goes here
    }
    
     function myFunc(param1, param2) {
        //code goes here
     }
     
##Click metrics

invoke the function to display in the page

     myFunc();

##Collecting click locations     

    $(document).click(function(loc) {
      var x = loc.pageX;
      var y = loc.pageY;
      
      locClicks(x,y);
    });

##Return statements
   
    function locationizer(work_obj) {
    var locationArray = [];
    
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    
    return locationArray;
    
    }
   
    console.log(locationizer(work));


##Internationalize names


##Encapsulation

functions are objects

pretty much everything in JS is an object!

**Functions are first class objects in javascript**:
http://helephant.com/2008/08/19/functions-are-first-class-objects-in-javascript/

encapsulate: hold inside

objects can encapsulate functions as well.

    projects.display = function() {
       // display code goes here
    }
    
encapsulation: holding the display function inside the projects object.

a nice way to organise our code into logical domains and JS makes it really easy to do so.


##Exploring new syntax

three different ways of defining objects:

    var bio = {
        "name": "comeron pittman"
    }
    
    bio.name = "cameron pittman";
    
    bio["name"] = "cameron pittman";

**A Short History of JavaScript**:
https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript


##Customize the Portfolio

Important! There are two more steps required to make the map work properly.

1. Uncomment the last block of code in helper.js. The code you need starts with `window.addEventListener('load', initializeMap)`; and goes until the end of the file.

2. Uncomment the `<script>` tag for Google Maps API in the `<head>` of index.html.

The reason these instructions weren't included in the video is that we didn't realize until late that these lines produce errors if you don't `.append()` a map to the page. Our bad.

Lastly, see how there's `#mapDiv` in the video? You might see it as `#map-div` in the actual project.

add interactive charts:

**Data-Driven Documents**: http://d3js.org/

add interactive maps:

**Google Maps Javascript API**: https://developers.google.com/maps/documentation/javascript/tutorial


##The final project

make the page your own.





