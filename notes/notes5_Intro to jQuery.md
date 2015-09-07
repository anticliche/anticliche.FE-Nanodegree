#Course Summary

jQuery is the most popular JavaScript library today, in use by over 60% of the top 100,000 most visited websites. This course will teach you how to use jQuery’s core features - DOM element selections, traversal and manipulation.

You'll also learn how to read and make sense of jQuery's documentation, making it easy for you to go beyond the methods taught in this class and take advantage of jQuery's full array of features!

In this course, you will learn how to use jQuery to select and navigate to DOM elements within your page, how to manipulate DOM elements by altering attributes, how to dynamically change content and how to add/remove DOM elements.

Most importantly, you'll practice making sense of jQuery's documentation so that you'll be able to go beyond what you learn here and take advantage of jQuery's full suite of features!

##Why Take This Course?

Due to jQuery’s popularity and ease of use, learning jQuery is a must for all front-end web developers. jQuery makes selecting DOM elements and manipulating them simple by providing a consistent API that works across all browsers.

Proficiency in using jQuery is an important skill that can speed up your development time and opens up a world of useful plugins.

##Extra reading:

- **The jQuery Homepage**: http://jquery.com/

- **jQuery's CDN**: http://jquery.com/download/#using-jquery-with-a-cdn

- **jQuery hosted by Google**: https://developers.google.com/speed/libraries/#jquery

- **Documentation on selectors**: http://api.jquery.com/category/selectors/

- **jQuery API Documentation**: http://api.jquery.com/

- **.toggleClass()**: http://api.jquery.com/toggleclass/

- **.next()**: http://api.jquery.com/next/

- **.attr()**: http://api.jquery.com/attr/

- **.css()**: http://api.jquery.com/css/ 

- **Documentation on .html()**: http://api.jquery.com/html/

- **Documentation on .text()**: http://api.jquery.com/text/

- **.val()**: http://api.jquery.com/val/

- **.remove()**: http://api.jquery.com/remove/

- **.append()**: http://api.jquery.com/append/

- **.prepend()**: http://api.jquery.com/prepend/

- **.insertBefore()**: http://api.jquery.com/insertBefore/

- **.insertAfter()**: http://api.jquery.com/insertAfter/

- **.each()**: http://api.jquery.com/each/



------------------

#Lesson 1: The Basics: the DOM, $ and Selectors

- The jQuery Object ($)
- Basic DOM Structure
- Selectors
- Filters

##Course introduction

60% of the top 100,000 websites.

jQuery.js is a JavaScript library which means it isn't a language on its own.

##Why does jQuery exist

jQuery exists just because manipulating the DOM with Vanilla JS isn't always easy.

Vanilla JS === Regular JS without jQuery.

Vanilla:

    var div = document.createNode('div');
    div.innerHTML = "Hello Udacity";
    var parent = document.querySelector('#parent')
    parent.appendChild(div);
    
jQuery:

    $('#parent').append("<div>Hello Udacity!</div>");
    
jQuery exists so that you can focus on UX, not browser compatibility.

##What is jQuery, actually

jQuery is simply a JavaScript object!

## The $ sign

with jQuery, $ sign is a pointer to the same JS object we saw before.
in the spirit to make code easy to write, $ sign is easier and faster to type than the whole word jQuery.

##How to use the $ sign

$ ---> jQuery collection (like an array but with additional methods)

`$(string)`  `$(function)`  `$(DOM Element)`  
`$.ajax()`

##Visualizing the DOM

like a family tree

##How is jQuery included in a page

hosting jQuery

- local:
 
        <script src='js/jquery.min.js'></script>

- jQuery official:
        
        <script src='//code.jquery.com/jquery-1.11.1.min.js'></script>
        
- content delivery network (like google):
 
        <script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
        
##Select by tags

jQuery makes it very easy to select specific elements in the DOM

we call the string a jQuery selector, in that it allows us to select a part of the DOM

`$('tag')`  `$('.class')`  `$('#id')`

example:
 
      var listElements;

      listElements = $('li');

##Select by classes

selecting tag is less than helpful

`$('.class')` for a more specific selector.
any valid css selector is also valid in jQuery.

example:
 
      var articleItems;

      articleItems = $('.article-item');

##Select by ID

IDs are specific to single elements

example:

      var nav;

      nav = $('#nav');
      

##Family tree revisited

jQuery gives us **DOM traversal methods** for moving around the DOM tree (navigating the DOM).

$('#Cameron').parent()
$('#Cameron').parents()
$('#Cameron').children()
$('#Cameron').find()
$('#Cameron').siblings()


     /*
     For this quiz, use articleList and DOM     navigation methods to collect articleList's
    sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

     You must use articleList to navigate to the element(s)!
    */

    // Start with these variable!
    var articleList, h1, kids, parents;

    articleList = $('.article-list');

    h1 = $('.article-list').siblings('h1'); // Your code goes here!

    kids = $('.article-list').find('*'); // Your code goes here!

    parents = $('.article-list').parents('div');// Your code goes here!

    console.log(articleList);
    console.log(h1);
    console.log(kids);
    console.log(parents);



----------------------


#Lesson 2: The Tricks: DOM Manipulation

- Reading jQuery Documentation
- Accessing HTML Attributes and Content
- Modifying HTML Attributes and Content
- Adding and Removing DOM Elements Iterating with .each()
- Using jQuery to run on DOM ready


##jQuery Documentation and you



##you.toggleClass() quiz

    /*
    For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
    */

    // don't change this variable!
    var featuredArticle;

    featuredArticle = $('.featured');

    featuredArticle.toggleClass('featured'); // your code starts here!


##Toggling Classes quiz

    /*
    For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

    You must use jQuery's toggleClass method!
    */

    // don't change these variable!
    var article2, article3;

    // your code goes here!

    article2 = $('.featured');
    article3 = article2.next();

    article2.toggleClass('featured');
    article3.toggleClass('featured');


`.toggleClass( className )`:
Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.


##Changing attributes quiz


     /*
    For this quiz, set the href of the <a> in the first nav item to "#1".

    You must use jQuery's attr() method!
    */

    // Start with this variable!
    var navList;

    // your code goes here!

    navList = $('.nav-list'); 

    firstItem = navList.children().first();

    link = firstItem.find('a');

    link.attr('href', '#1');

    // or another way!

    navList = $('.nav-list');

    firstItem = navList.children().first().find('a').attr('href','#1');


##Modifying CSS Quiz

changing css with js or jquery means adding inline css. this isn't a good way of building a site, but sometimes it's needed. 
in the real world, you should always think about whether you should the problem with css or jquery.

    /*
    For this quiz, change the font-size of all the article-items to 20px!

    You must use jQuery's css() method!
    */

    // Start with this variable!
    var articleItems;

    // your code goes here!
    articleItems = $('.article-item').css("font-size","20px");


##Pulling HTML and Text


##Collecting Values Quiz

    /*
    For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

    The starter code below creates an event listener that will run any time the input changes.
    For more on events, check the instructor notes.
    */

    $('#input').on('change', function() {
    var val, h1;
    // Your code goes here!
    val = $('#input').val();
   
    h1 = $('.articles').children('h1');
   
    h1.text(val);
    });

##Removing DOM Elements Quiz

    /*
    For this quiz, remove the <ul> from the first article item!

    You must use jQuery's remove() method.
    */

    // Start with this variable!
    var articleItems;

    articleItems = $('.article-item').find('ul').remove(); // your code goes here!

##Adding DOM elements

JS is a great power of manipulating DOM, however with great power comes confusing syntax, it can be tricky.

JS add DOM:

    var div = document.createNode('div');
    div.innerHTML = "Hello Udacity";
    var parent = document.querySelector('#parent');
    parent.appendChild(div);
    
jQuery: four different methods of creating and adding new DOM nodes. 

`.append()` `.prepend()` add children elements
`.insertBefore()`  `.insertAfter()` add siblings elements


##Appending child elements

    var firstArticleItem;
    
    firstArticleItem = $('.article-item').first();
    
    firstArticleItem.append('<img src="http://placepuppy.it/200/300">');
    firstArticleItem.append('<img src="http://placepuppy.it/200/300">');


##Build a DOM (Family) Tree Quiz

    /*
    For this quiz, you'll need to add to the DOM tree that already exists.

    '#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
    of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
    */

    // Your code goes here!
    var family1, family2, bruce, madison, hunter;

    family1 = $('#family1');
    
    family2 = $('<div id="family2"><h1>Family2</h1></div>');
    
    bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
    
    madison = $('<div id="madison"><h3>Madison</h3></div>');

    hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

    family2.insertAfter(family1);
    family2.append(bruce);
    bruce.append(madison);
    bruce.append(hunter);	


##Iterating with each quiz

    $('.example').each(function(){
          $(this).text(); //returns text of each element
    });

quiz:

    
    function numberAdder() {
        var text, number;
        
        text = $(this).text();
        
        number = text.length;
        
        $(this).text(text + " " + number);
    }
    
    $('p').each(numberAdder);

##Why Use jQuery?

- fast selection
- easy DOM manipulation
- cross-browser compatibility


## $(function) Quiz


A function passed into the jQuery object runs on `document.ready`, which occurs after the DOM has been loaded.

**Why is this useful?**

External JavaScript files in the `<head>` of a document are generally downloaded earlier than JavaScript files included in the `<body>`. JavaScript files are also executed immediately at their location in the document, which means they can't access any DOM elements that come after their `<script>` tag in the DOM. This leads to some interesting situations.

Imagine you're building a website and you've got a script you want to run against some DOM elements in the page. If you include your script in the `<head>` normally, it will run as soon as it's downloaded, which will occur before the DOM has built the elements you want your script to run against. So your script wouldn't be able to do anything.

You could include your script at the bottom of the `<body>`, but that would mean that the download could potentially start later in the load process, slowing down the initial page render.

So what can you do?

Pass your function into the jQuery object, like so:

    function someFunction() {
         // Do interesting things
    }
    $(someFunction)
or

     $(function(){
         // Do interesting things
     })

Now, you can include your script in the <head> and it won't run until the DOM has been built and the elements that you want to manipulate are on the page.

**solution**:

So here's my answer:

    $(function() {
      $('img').attr('src', 'http://placepuppy.it/350/150');
    })

I'm simply starting with the jQuery object and passing it an anonymous function.

The anonymous function changes the `src` of the one `img` on the page to the URL provided. (Remember, `$('img')` grabs all of the images on the page, so this is a very bad selector. It works in this case because there's only one `<img>`, but normally you should use a much more specific selector.)

If I hadn't wrapped my `.attr()` function in the jQuery object, it would run as soon as it's loaded in the `<head>` of the document, which occurs before the `<img>` tag appears on the page. So nothing would happen.

But by wrapping it up in the jQuery object, it runs when the DOM is ready and I get to see a cute puppy instead!


















