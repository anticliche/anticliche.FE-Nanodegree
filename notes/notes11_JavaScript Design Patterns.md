#Course Summary

This course covers methods for organizing your code, both conceptually and literally. You’ll learn the importance of separating concerns when writing JavaScript, gaining hands-on experience along the way. Separating concerns can be done with or without an organizational library or framework. **We’ll learn how to separate concerns without one, and then we’ll explore an organizational library together. You’ll also learn strategies for exploring other libraries and frameworks on your own.**

By the end of this course, you’ll understand (from experience) the importance of code organization, and how to implement it with either vanilla JavaScript or an organizational library or framework. Your applications will start looking clean and professional—not just to your users, but also to anyone who looks at the code driving your applications.


##Why Take This Course?

Many developers dive right into projects without thinking of the organization or structure of the code they’re writing. It's easy to hack projects together, but **the best developers spend the extra time to think about the organization of their application and adhere to sound organizational practices**.

In order to write clean code that will get you your next job or promotion, you'll need to have a solid understanding of **organizational techniques**, and you'll need to implement those techniques in your projects. **Software developers who write clean and organized code are surprisingly hard to find**, so if you can master code organization you’ll be a step above the rest.


##Prerequisites and Requirements

This course is for intermediate web developers with some experience with JavaScript, and some prior experience with a JavaScript library, such as jQuery.

Students should also be proficient in HTML and CSS, and should have experience creating static pages.


##What Will I Learn?

**Syllabus**

###Lesson 1: Changing Expectations

We'll first start by building a project the way you already know how: without an overarching organizational paradigm. Specifically, we'll discuss pain points and difficulties that are easy to run into **when you don't use an organizational model**. Then, we'll discuss a paradigm that will help us in the future, and we’ll see some examples of that paradigm in action.

###Lesson 2: Refactoring

We'll spend some time discussing how our new paradigm applies to the project we worked on in Lesson 1. Then we'll rebuild the project with the new **organizational paradigm**.

###Lesson 3: Using an Organizational Library

We'll explore how to use **KnockoutJS**, an organizational library, to organize our code and to reduce the amount of boilerplate code we write. Our resulting application will be well-organized, easy to understand, and extendable.

###Lesson 4: Exploring Unfamiliar Code

In this final lesson, we'll spend some time talking about how to explore code that you didn't write, possibly even using a library or framework that you aren't familiar with. **Exploration** is one of the most important skills for a developer to foster. and this lesson will get you started on that journey.


##Extra Readings

- knockoutjs documentation: http://knockoutjs.com/documentation/introduction.html

- Here's a general overview of local servers, plus a getting started guide with MAMP: http://www.dwuser.com/education/content/why-you-need-a-testing-server-and-how-to-do-it/

- Tech Tip: Really Simple HTTP Server with Python: http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python

- Todo MVC: todomvc.com






===========================

#Lesson 1: Changing Expectations

##Welcome

get serious about web development.
by the end of the course, your code will be professional, be able to build or organize an application both with or without an organizational js framework or library. understand why using library can be a good idea.

don't rush. together, we foundamentally changing the way you think about application development. 

this course will be challenging, if you're having an rough time at any point, if not you, this is by design. you might feel scared like I did, when I first learned this. and it's normal to feel that way when you learn anything new. but you will get there. 


## Introduce Cat Clicker and Andy

##Cat Clicker Requirements

**Visuals**

The application should display a picture of a cat and a number of clicks.
The specifics of the layout do not matter, so style it however you'd like.

**Interaction**

The number of clicks should increment when the cat picture is clicked.

**Resources**

In case you need a refresher on events and event listeners, here are some links.

If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener().

    var elem =  document.getElementById('my-elem');
    elem.addEventListener('click', function(){
    //the element has been clicked... do stuff here }, false);

If you're using jQuery, you'll be adding the "click" event listener with jQuery.click().

    $('#my-elem').click(function(e) {
    //the element has been clicked... do stuff here
    });


## Reflections

- How hard was it?
- How do you feel about your code?
- How many times have you clicked your cat?

## Andy's Reflections
still not very fluent with manipulating the DOM through JS, so there's a lot of google search to just figure out how to do some pretty basic stuff.

## Requirements Change All The Time

- got an idea while you're writing the application
- you have a fickle manager
- the needs of your target audience have changed since you started work on the project originally.

so to write extensible and well-organized code.


##First Requirements Change

## Cat Clicker Requirements 2

**Visuals**

The application should display two cats. Each cat includes
the cat's name
a picture of the cat
text showing the number of clicks
The specifics of the layout do not matter, so style it however you'd like.

**Interaction**

The number of clicks should increment when each cat picture is clicked.


##Reflections 2

- How hard was it?
- How do you feel about your code?
- Are you happy with your method for cat duplication?
- How many times have you clicked your cat?


##Andy's Reflections 2

the whole process is a little frustrating. have a better way to do this.


##Closures and Event Listeners

###The problem:

Let's say we're making an element for every item in an array. When each is clicked, it should alert its number. The simple approach would be to use a for loop to iterate over the list elements, and when the click happens, alert the value of `num` as we iterate over each item of the array. Here's an example:

    // clear the screen for testing
    document.body.innerHTML = '';
      document.body.style.background="white";

    var nums = [1,2,3];

    // Let's loop over the numbers in our array
    for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', function() {
        alert(num);
    });

    // finally, let's add this element to the document
    document.body.appendChild(elem);
    };

If you run this code on any website, it will clear everything and add a bunch of numbers to the page. Try it! Open a new page, open the console, and run the above code. Then click on the numbers and see what gets alerted. Reading the code, we'd expect the numbers to alert their values when we click on them.

But when we test it, all the elements alert the same thing: the last number. But why?

###What's actually happening

Let's cut out the irrelevant code so we can see what's going on. The comments below have changed, and explain what is actually happening.

    var nums = [1,2,3];

    for (var i = 0; i < nums.length; i++) {

    // This variable keeps changing every time we iterate!
    //  It's first value is 1, then 2, then finally 3.
    var num = nums[i];

    // On click...
    elem.addEventListener('click', function() {

        // ... alert num's value at the moment of the click!
        alert(num);

        // Specifically, we're alerting the num variable 
        // that's defined outside of this inner function.
        // Each of these inner functions are pointing to the
        // same `num` variable... the one that changes on
        // each iteration, and which equals 3 at the end of 
        // the for loop.  Whenever the anonymous function is
        // called on the click event, the function will
        //  reference the same `num` (which now equals 3).

    });

    };

That's why regardless of which number we click on, they all alert the last value of `num`.

###How do we fix it?

The solution involves utilizing closures. We're going to create an inner scope to hold the value of num **at the exact moment we add the event listener**. There are a number of ways to do this -- here's a good one.

Let's simplify the code to just the lines where we add the event listener.

    var num = nums[i];

    elem.addEventListener('click', function() {

    alert(num);

    });

The `num` variable changes, so we have to somehow connect it to our event listener function. Here's one way of doing it. First take a look at this code, then I'll explain how it works.

    elem.addEventListener('click',(function(numCopy) {
    return function() {
        alert(numCopy)
    };
    })(num));

The bolded part is the outer function. We immediately invoke it by wrapping it in parentheses and calling it right away, passing in num. This method of wrapping an anonymous function in parentheses and calling it right away is called an IIFE (Immediately-Invoked Function Expression, pronounced like "iffy"). This is where the "magical" part happens.

We're passing the value of `num` into our outer function. Inside that outer function, the value is known as `numCopy` -- aptly named, since it's a copy of `num` in that instant. Now it doesn't matter that `num` changes later down the line. We stored the value of `num` in `numCopy` inside our outer function.

Lastly, the outer function returns the inner function to the event listener. Because of the way JavaScript scope works, that inner function has access to `numCopy`. In the near future, num will increment, but that doesn't matter. The inner function has access to `numCopy`, which will never change.

Now, when someone clicks, it'll execute the returned inner function, alerting `numCopy`.


###The Final Version

Here's our original code, but fixed up with our closure trick. Test it out!

    // clear the screen for testing
    document.body.innerHTML = '';

    var nums = [1,2,3];

    // Let's loop over the numbers in our array
    for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
    };



##Second Requirements Change

##Cat Clicker Premium Requirements

###Visuals

- The application should display

    - a list of at least 5 cats, listed by name
    - an area to display the selected cat

- In the cat display area, the following should be displayed

    - the cat's name
    - a picture of the cat
    - text showing the number of clicks

- The specifics of the layout do not matter, so style it however you'd like.

###Interaction

When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.


## Reflections 3

- How hard was it?
- How do you feel about your code?
- Are you happy with your method for cat duplication?
- How many times have you clicked your cat?


##Andy's Reflections 3

terrible

had a lot of divs and buttons, cat1, cat2, cat3...


## Spaghetti Code Story Time

first time: can actually build something

things I built was much better because my tools were much better

**this is exactly where you are right now, you have great tools, you know JavaScript you know the features of the language, but you do need to learn better organizational techniques, so your applications are stable and bug-free, cleanly written, scaled well and are extensible.


##What is Spaghetti Code

Spaghetti code is easily avoidable once you know how to avoid it.
Things get really messy when you connect things together. An application is alternately all about connecting pieces of code to each other, but if you connect all the pieces to all the other pieces, suddenly you can't move anything around anymore.

**concepts and metaphor**

when there were only two telephones, things were pretty simple. the phones could connect directly to each other and then we're done. 2 telephones means 1 connection. what about 3 phones, 4 phones, 10 phones? 10 phones have 45 connections.

lines = n*(n-1)/2

so now that we know that how many connections with a small town with a population of 2000 have. that would be 1,999,000 connections.

so how do we build this in reality?

let's connect every phone to a hub.

......

So now we know that we should minimize our connections. **It turns out software development is very similar**. 


##Introduction to MVO

what separation concerns specifically means for writing applications.

we can separate our code into a few fundamentally different pieces. we refer to them as M, V & O: Model, View and Octopus. 

View: the interface to your app both for giving your app data and for reading data.

Model: where the data is stored, data includes from the server and from the user.

the Model and the View are connected, specifically by our Octopus, what provides **the separation of concerns** that we so desperately need when we're building app. You can think of the Octopus as the thing that hold things together but also keeps them separate enough to allow changes in individual pieces without upsetting the rest. in other words, i can change my view here without disturbing my model, or i can change the way i'm storing my data without disturbing our view. 

If you search around webs, you'll find all kinds of acronyms, like **MVC**, **MVVM**, **MVP**...

MVC: Model, View, Controller
MVVM: Model, View, View, Model
MVP: Model, View, Presenter

Fundamentally, they are all solving the same problem, separating our model from our view. 


## Model Quiz

Q: for a calendar app, which of the following would be part of the model?

- The array of calendar events in the app
- the buttons for day/week/month
- the render function for the calendar area

A: the array of calendar events in the app


## View Quiz

Q: for youtube, which of these are in the view?

- The input element
- The array of URLs to play
- The function that adds a URL to the list
- The area where a video plays

A: The input element, The area where a video plays

The input and the video area are part of the view because they are something the user sees and interacts with.

## What Is the Model in Our Code

only in js files.

## What Is the View in Our Code

including html

script templates in html are just fancy word for some html that we're gonna use again and again when we make the pizza objects.

all of our view logic is in one place rather than scattered throughout our entire application.

## What Is the Octopus in Our Code

the model and the view both never directly talk to each other and that's by design, our octopus is the only thing that connects them. it's like a sort of buffer connecting the view and the model, but also letting them move independently than if they were wired directly together. that means you can change your how your apps look without messing up your model code and vice versa.



**以下内容是举例阐释，通过一个简单的app，实际的操作，解释概念：**

##Identify the MVO in New App

##Explore The App's Structure

###Explore Udacity Retain

Take a few minutes to explore the organization of Udacity Retain.

- How is it organized?
   - Does the model ever talk to the view directly?
   - How about the view to the model?

- Add comments to the code if you'd like.

You can find the repository here.


##Where Should This Feature Live?

Q: If we want to reverse the order of our notes, where should that functionality go?

- the Model
- the View
- the Octopus

A: the Octopus. With our MVO paradigm, we'd prefer to do this in the octopus.

The Octopus is where I want all the real smarts to live, in this organizational paradiam whereas the Model and the View themselves are relatively simple.

Now if you use other organizational libraries, they all have different opinions about where exactly different functionality should live but in all of those cases they're consistent and well-thought-out. 

## Implement Note Date

## Segue Into L2



=================

#Lesson2: Refactoring with Separation of Concerns


##Intro

actual building cat clicker

first, planning

##Identify Model and View

V: clickable list of cats
V: current cat display
M: array of cat objects

##Review Model and View for CC Premium

the Model is going to be super simple. it's just our data: an array of cat objects with properties for name, clickCount and imageURL, nothing new here.

the View, well if we want to, we can split this up into 2 views. first, we have the list of cats, and second, we have the cat viewing area. both of these views will be pretty simple. they'll just have render functions that redraw the respective areas and they'll have click handlers registered for the various cats up here and for the image down here.

why spliting them up into 2 views?

think about how separate they are functionally, not with regard to action, but with regard to what gets to rendered. the list renders a list of cats. this other part renders cat details and it gets rerendered every single time you click on the cat.
They're both seperate visually and in terms of when they get rendered.

It's generally a good idea to separate out functionality into smaller chunks whenever it's possible.


##Identify Octopus

where is the octopus? how do our model and our view connect to each other? 

think about what things happen in our app.

first of all, the app loads up, we saw with the blank screen, first the list(model) get created, then the list of view populates with cats, the octopus does both of these things, not for rendering it on the screen, that's the job of this particular view, but our octopus is what tells this view to render itself in the first place, in other words, the octopus gets things going.  

Then the octopus changes the current cat in our model, current cat gets set to this first cat. when that happens the octopus says go ahead and render this view in the second place, and then the current cat view gets rendered. again the rendering is not the responsibility of the octopus. but octopus does tell the view when to render.  

so now, the octopus has got our model started, got our view started and everything got rendered.

the octopus is keeping track of where you click. so if you click on the current cat,  **the octopus will run a method which increases the counter, first in the model, then in the view**.

**the octopus says whenever you click on any of these things, do this particular or that particular piece of functionality, and then tell the respective views of change to rerender themselves.**   



## Andy’s Code 1

**html**

Q: How is Andy displaying the cat when you click each of the buttons at the top?

- Replacing DOM elements in a single view with the info for each clicked cat

- Keeping a separate view for each cat, and showing/hiding them

A: Keeping a separate view for each cat, and showing/hiding them

Andy is keeping a completely separate view for each cat, and just showing and hiding them depending on which cat is selected. Although it works, it's not the best solution. (If we had 1000 cats, we'd have 1000 DOM nodes too, which is overkill.

## Andy’s Code 2

**javascript**

Q: Where does Andy's model live?

- in a variable
- in the DOM
- on a server somewhere
- in his brain

A: in the DOM

Andy is storing all the data in the DOM(the view). That means he can't effectively separate his model and view from each other.


##In Defense of Andy

in his defense, it's really easy to justify storing your model in your view because it's so easy to do for version 1 of cat clicker. he didn't set up anything special to store his data. he just asked the data out of the view, updated it and put it right back. but it did not store very well when his project got much bigger. **The biggest issue with Andy's code is that he stored his data in the DOM, or more generally he didn't separate his view and its model with an octopus.** in fact, in his code the model and the view were the exact same thing, and that's what get him into so much trouble.

##Rebuild Cat Clicker Premium

##Cat Clicker Premium Specs(未动手操作）

###Project Requirements for Cat Clicker Premium

**Visuals**

- The application should display

   - a list of cats by name
   - an area to display the selected cat

- In the cat display area, the following should be displayed

   - the cat's name
   - a picture of the cat
   - text showing the number of clicks
   - The specifics of the layout do not matter, so style it however you'd like.

**Interaction**

- When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
- The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.

**Resources**

Check out the earlier reading node on how to deal with event listeners and closures. You likely will need it to get the click events for your cat list to work.


###pop quiz

How many times do you call a view method from inside your model?  0

How many times do you call a model method from inside your octopus? 0


## Cat Clicker Premium Solution

html

javascript

## Cat Clicker Premium Pro  Specs（未动手操作）

###Visuals

- The application should display

   - a list of cats by name
   - an area to display the selected cat
   - an admin button
   - an admin area with inputs for changing the cat's name, url, and number of clicks (hidden by default)

- In the cat display area, the following should be displayed

   - the cat's name
   - a picture of the cat
   - text showing the number of clicks

- The specifics of the layout do not matter, so style it however you'd like.

###Interaction

- When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
- The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.
- When the admin button is clicked, the admin area should appear with the inputs filled in for the currently-selected cat.
- When the cancel button in the admin area is pressed, the admin area disappears.
- When the save button in the admin area is pressed, the currently-selected cat's values update with the values in the admin area, and the admin area disappears.




## How to Modernize Projects

##Interview with Nic

about refactoring:

refactoring is the process by which you take a piece of code and make it more readable or maintainable without changing its functionality. so that means you might wanna break up large functions or complicated functions without changing the way that they're accessed by the outside world or the other component of your app.

##Interview with Jacques

sometimes just burn horrible spaghetti code to the ground.

##Refactor Spaghetti Code

## Repository Information for Attendance Ap（未动手操作）

Here is the repository for the School Attendance Application.

Remember that you can refactor it in place if the code looks salvageable, or you can burn it to the ground and start over.

If the project gets too overwhelming or feels too big, don't worry about finishing it right now. The main point of this exercise is to get you looking at some bad code, and for you to decide how to deal with it.

## What Method Did You Use?

burn it or refactor it?

## Interview With The Author


## Refactoring the Resumé（未动手操作）

Often times when people learn separation of concerns they learn it by using a framework or a library like Angular or Ember or backbone or knockout.

Now from what we've seen any project that updates the DOM based on data with JavaScript can be refactored to use separation of concerns.

make a new branch in your resume project repo.


The Resume Project appears in JavaScript Basics

The repository for the Resume Project can be found here

As with the last project, if you feel too overwhelmed, don't worry about doing it right now. The main purpose of this exercise is to give you practice refactoring and writing code.


## Segue Into L3

- **Lesson1 未使用separation of concerns完成项目，随着项目复杂度的加深，逐渐困难重重，因此引入separation of concerns——MVO 这个organizational code的概念。**

- **Lesson2 使用 原生JS 以及 jQuery 完成 separation of concerns**

- **Lesson3 开始使用 MVO 库/框架。**



=====================

#Lesson3: Using an Organizational Library

## MVO in the wild

**MVC: Model View Controller**

**MVVM: Model View ViewModel**

**MVP: Model View Presenter**

different ways of solving the same problem. how do we seperate concerns so we can minimize connections.


##Library vs Framework 1

Library: a bunch of JS that someone else or some other people wrote, packaged up and distributed it. there're a lot of things we do over and over again as developers, like making AJAX request and manipulating with the DOM. and as we do again and again, **we don't want to keep  writing the same code over and over again**. set aside code for reuse in all of my projects...like **AJAX libraries and DOM manipulation libraries**. JQuery is a great example for AJAX libraries and DOM manipulation libraries and much more. and what's more the good libraries will often make allowance for all the browsers.

When we talk about libraries and frameworks here, we generally talking about **organizational libraries** or frameworks. and jQuery is not an organizational library, it does give us a bunch of useful great methods, but it doesn't give us anything to help us organise our code.


## Library vs Framework 2

**Organizational libraries**

Organizational libraries are libraries just like jQuery, but instead of focusing on Ajax and DOM manipulation, they focus on application organization, MVC, MVVM, etc...

**What about frameworks? What do they differ from libraries?**

everyone has a different answer. 

it's not one person or institution defining these words, it's a community of thousands and thousands developers and they aren't all on the same pages as each other. some people say frameworks are collections of libraries, some other people say that frameworks call view render methods while the libraries require you to call them. there's a wide range of definitions and if you do want proof of this, do a quick Google search and start counting. 

so don't worry about it too much, organizational libraries and frameworks both solve the same problem and in similar ways. so to me at least, it doesn't matter it on what we call it. it just matters that we can use them regardless of what they call themselves.


## Interview with Nic About Using Libraries

a misconception: using libraries is a shame.

The core of good engineering is taking what is being built before, like a good framework or library and using it to build sth even greater.

it is leveraging the work of other people to make your work go even further.


## Universal Organizational Concepts

###5 basic concepts

**Models**: representing data

**Collections**: smart arrays, they are filled with Models. so collections of data.

**ViewModel, Controller**

**Views**: things that draw the interface and allow the user to interact with the interface.

Routers: keeps track of the state of url, which in a way is like a view like thing.


##What Does Knockout JS Give Us

**Model View ViewModel**

**ViewModel**: Knockout's ViewModel is similar to the Octopus. It separates the Model and the View

**Declarative Bindings**: Bindings allow you to connect the View and ViewModel in a direct and simple way.

**Automatic UI Refresh**: Knockout's will update the View when the Model changes. And with the right declarative bindings, Knockout can update the Model when elements in the View change (such as input elements, checkboxes, etc).

**Dependency Tracking**: Knockout allows you to create a relationship between parts of the Model, and will automatically update Model data that depends on other Model data when that other Model data changes.


## Bindings and Views in Knockout

## Knockout Views Quiz

Q： What do you think data-bind='visible: hasClickedTooManyTimes' means?

- Every time this div is visible, the hasClickedTooManyTimes functions will run.
- When the user clicks the div, hasClickedTooManyTimes is set to true.
- **When hasClickedTooManyTimes is set to true, the div will be visible.**

Q: What do you think `<button data-bind='click: resetClicks'>...</button>` will do?

- **When the user clicks on the button, the resetClicks function will run.**
- When the user clicks on the button, a resetClicks variable will be set to 0.
- When the number of clicks is 0, the button is visible.


## Models in Knockout

    var favNum = ko.observable(42)
    favNum()
    //run
    42
you have to run a function in order to change some values.

    favNum(43)
    //run
    43

##Knockout Models Quiz

Previously, we'd store a number like this: **var myNum = 5;**

Q: How can we do it with Knockout & observables?

A: **var myNum = ko.observable(5);**


##Interview about Documentation

**Don't be afraid of looking things up, it's very important**

documentation is the most amazing thing when you start working on a project.

**reading documentation is a core thing that engineers do all the time**

When I first started programming, I had a huge resistance to reading documentation.

We look up stuff all the time and it's stuff from the most arcane randomness that you can think of all the way down to how are we gonna split a string and that comes up and if you don't have it on the top your head it's faster for you to go look up than it is to sit there and try and type bunch of things into the console and figure it out.

It seems almost like writing with English, so if you're writing a paper and you are looking up word for example and you look it up again and again and again, eventually it will get stuck in your brain, but the fact that you don't have it the second time doesn't reflect negatively on you as a human being.

As an engineer, your ability to be an engineer, to be an effective engineer is not that you have everything committed to memory. if you use sth enough, it will be in there.


## Smarter Arrays

Q: What are special arrays called in Knockout?

A: Observable Arrays

##Smart Models Work Differently

Q: You can create an observable array by:

- Running the observableArray() method on a native array
- **Storing the result of ko.observableArray() to a variable, optionally passing in a normal array as the initial state**
- Calling Unicorn.createObservableArray()

Q: You can add and remove things from the observableArray by:
- **Calling array methods(like pop() and push) directly on the observable array**
- Calling the native JS methods directly, but first you must retrieve the array
- Calling the native JS methods directly on the global Unicorn object


## Benefits of Smart Models

Q: Can you imagine any benefits of using this special array type, especially with regard to rendering performance?

- Knockout will handle the array performance more efficiently than native JavaScript methods
- **Knockout will update the changed data in the view, rather than re-rendering everything**
- Knockout will render rainbows everywhere, which will distract the user from long load times


## Similarities between jQuery and KnockOut

both are function objects with a bunch of keys and methods on it. 

--------------

##Building Something with Knockout（以下皆为实操）

####以下为实践部分，运用 Knockout JS 重新制作CatClicker App

app.js:

    var ViewModel = function() {
        this.clickCount = ko.observable(0);
        this.name = ko.observable('Tebby');
        this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
        this.imgAttribution = ko.observable('http://www.flickr.com/photos/big
        
        this.incrementCounter = function() {
            this.clickCount(this.clickCount() + 1);
            };
        
    }
    
    ko.applyBindings(new ViewModel());


even though the model is being defined inside the viewmodel, the functionality is separate.

knockout will handle the view to model and model to view synchronization for us. the only time we need to write view model methods are when we need to actually change sth ourselves.


##Cat Clicker HTML and Bindings

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Cat Clicker</title>
    </head>
    <body>
        <div>
        
            <h2 data-bind="text: name"></h2>
            <div data-bind="text: clickCount"></div>
            <img src="" alt="cute cat" data-bind="click: incrementCounter, attr: {src: imgSrc}">
            
        </div>
        <script src="js/lib/knockout-3.2.0.js"></script>
        <script src="js/app.js"></script>
    </body>
    </html>           


## Computed Observables

get the benefit of having a data object that computes itself based on other data that we were storing.

these are functions that are dependent on one or more other observables, and will automatically update whenever any of these dependencies change.

    firstName = "Ben"
    lastName = "Jaffe"
    fullName = function() {
                 return firstName + " " + lastName;
               };
              
in this case, fullName is a computed observables.

                 
##Computed Observables Quiz                 

Q: For which of these examples would we likely use a Computed Observable?

- List of cats
- **Full name for a cat (based on first and last)**
- Number of clicks for a cat
- Image URL for a cat
- **Cat Title (based on number of clicks)**


##Review of Terms

big picture review:

**Models:**

- **Observables**: variables that are storing in the model, but rather than being simple variables, we utilise knockout observables functions in order to keep tracks when things change.
 
- **Computed Observables**: are computed whenever they are accessed based on the value of other variables.

- **Observable Arrays**: very similar to observables, we want to use these whenever we have repeating elements.

**View:**

- **Bindings**: things tie View together with Models via ViewModel.


##Computed Observables in Practice

ko.computed

## Add Cat Levels to Cat Clicker

##Show Cats With Control Structures

**control flow**

The **foreach binding** duplicates a section of markup for each entry in an array, and binds each copy of that markup to the corresponding array item. **This is especially useful for rendering lists or tables**.


## Separating Out the Model

change app.js 和 相应的index.html部分

## 'with' and Binding Contexts

Knockout's documentation for the "with" binding

Knockout's documentation for binding contexts

**to make html more elegant.**

## How I Implemented "With"

**to make html more elegant.**

var self = this;

self.currentCat()


## Getting Ready To Add More Cats
## Adding More Cats

change the Cat function to make it smart

change the ViewModel function


**still have to do:**

- make the cats show up in a list
- make the currentCat change when you click on a cat in the list
- give yourself a high-five


###going through the documentation, learning things on your own, and trying things




============================

#Lesson4: Learning a New Codebase

**Backbone JS**

##Interview: Gaining Context

Q: What does it feel like when someone hands you a big mess?

A: It's a daunting task at first, because you have no idea what's going on. How are you going to get the right amount of context to accomplish the task that's been handed to you.

Q: How would you go about getting that context?

A: **The first thing I would do is try and track down what libraries or frameworks that application might be using.** And hopefully it's sth popular or sth well- documented. And I would just dive into the documentation of that library or that framework.

Q: Are you looking to get a lot of specific information, like really become an expert in this framework or are you looking for a big picture?

A: No, not at all. Just a **big picture**. Just kind of where is stuff at in this framework. What are the best practices that this framework establishes. Where do i need to look in the application code to get this problem solved.

**Pretty much all organizational libraries and frameworks are the same.** They all have models, they all have collections. they all call them different things. for example, Knockout calls them observable arrays rather than collections, or sth like that. 

My goal would just be to find out what does this framework call it and where is it at.

Q: What about your framework/library doesn't have good documentation?

A: you have to spend the time to read through the application code and just understand it. You should estimate the time requested for that task, be like five times as much as your original estimate.


##What’s Next (make a todo list app)

Todo MVC: todomvc.com

To-do MVC is actually a project where professional developers have written exactly the same to do application in all these different popular organizational libraries and frameworks. It's meant to let people see the differences between libraries and frameworks. Now given your knowledge of Knockout JS you could take a look at the entry under knockout and understand most of it pretty quickly if you apply yourself. 



## Exploring a New Codebase

1. Run the application
2. Explore the file structure
3. Look at what js files are loaded (look at the bottom of html file)
4. Figure out what the libraries do (google)


## Getting the Big Picture of our Library

Backbone.js documentation

**If we had to learn a library 100% before we could make any changes, that would be impractical and unsustainable.**

##Interview: Be Tofu

it's basically really important to have your one code base have one single accent for **consistency**.

because when you start working with the code, if you have to  shift your **mental model** about how this is written, every time you open up a file, or within a file, it's really hard.

A huge part of being a good engineer: not getting future you angry at present you. it's really hard, but that's absolutely the goal.

So consistency with a codebase even if it's not necessarily your specific style, it's really important.


## Exploring a Codebase

**Thought process is most important**

As we go through, think not only of how the code works, but how different changes would affect the behaviour of the applications. By constantly thinking about how we can change the application or break the application in different ways, it'll let us thinking more like the original developer was thinking.

So let's explore. First, we have index.html. At the very bottom, we have all of our script tags. All these custom script tags run in a particular order. A lot of times, the order of all of this does matter. The reason that app.js is the last is that it gives all of the other files a chance to get set up before the app actually gets kicked off.

Now look at models. A particular pattern: `var app = app || {};`, meaning if app exists, don't do anything. If app doesn't exist, set app equal to a new empty object. 

IIFEs (Immediate-Invoked Function Expressions) , what that means is, any variables that we declare inside of this function, don't pollute the global scope. They don't go up onto the window object, meaning they don't accidentally overwrite any variables that may already exist. 

Other files are the same pattern. So, as all of these files run, it creates an object(in this case, app) with all of these various properties on it, TodoView, appView, our router, our model, our collection, and finally at the very end, app.js runs (`new app.AppView();`).


Let's look at the index.html. The other thing that we previously saw was all of these bizzare script tags with type="text/template". And that's a chunck of html which is a template for sth that may repeat or be some kind of a dynamic view.



## Modifying a Feature

**Thought process is most important**

In what file(s) did you implement the change(s)?

- js/collections/todos.js
- js/models/todo.js
- js/views/app-view.js
- js/views/todo-view.js
- js/app.js
- **index.html (templates are here!)**


## Adding Additional UI

**The specific details of what code I wrote that doesn't matter. My thought process is the most important. figure out what you need and be ditective and figure out where it could best fit in.**

In what file(s) did you implement the change(s)?

- js/collections/todos.js
- js/models/todo.js
- js/views/app-view.js
- **js/views/todo-view.js**
- js/app.js
- **index.html (templates are here!)**

use dev tools to find the exact place you want to find.

I'm kind of intuiting of doing sth just by reading the code, when i first did it, i'd no idea if it was actually going to work. But because experimentation is cheap and there are no high stakes because of our version control, we can always revert our changes, I'm going to experiment and try it anyway.

i could also confirm the change you made in the documentation. events and an object literal. Just know that the documentation does exist, and if the documentation ever fails you, a Google search will actually do very well as well. Oftentimes, Google searches will link you more effectively to the part of the documentation that you need.


## Adding a New Feature

**Thought process is most important**

In what file(s) did you implement the change(s)?

- js/collections/todos.js
- **js/models/todo.js**
- js/views/app-view.js
- **js/views/todo-view.js**
- js/app.js
- **index.html (templates are here!)**

## More ideas

- Let the user set the priority status when creating the todo item
- Let users filter or sort by priority status
- Expand the priority feature to have more than two levels
- Add a recycle bin for recovering deleted todos
- Add colors, so people can associate different todos with each other
- Add labels for sorting and filtering

**Although it's cliche to say, practice does make perfect.**

You finally at the point where you can do these stuff completely on your own.

**So here's my challenge to you, try it, if you're feeling hesitation or trepidation, go ahead and change your attitude from "I don't know if I can do that" to "I know I can do that myself". It might just take me a little bit of time or I might need to do some research, and that right there, that change is the hardest part. It's changing your mind, you're not grappling with the code, or the technical problem, you're grappling with yourself. So, take your hesitation, throw it out the window, and do it. Start on the project, start solving the problem.**

###Two suggestions:

1. **Be a detective.** Remember that in the world of computer programming there is no magic at all. So any code you have and any problems that you have, are discoverable and understandable. You can go in and you change things. You can change the way they work, and you can fix them.  

2. **Write code everyday.** That's a challenge. John Resig, the original author of jQuery wrote, the feeling of making progress is just as important as making actual progress.

Keep the momentum up, keep building things and reading, and learning and exploring.














