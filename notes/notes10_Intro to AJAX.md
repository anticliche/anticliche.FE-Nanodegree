#Course Summary

In this course you will learn how to make asynchronous requests with JavaScript (using jQuery’s AJAX functionality), and gain a better understanding of what’s actually happening when you do so. You will also learn how to use data APIs so you can take advantage of freely accessible data in your applications, including photo results, news articles and up-to-date data about the world around us.

As part of the course, you’ll be building a webapp that will help people learn about a place where they want to move! Your app will query the Google Streetview, Wikipedia and New York Times APIs!

##Why Take This Course?

User experience is vital to the success of your website or web app. It’s important that the user’s experience be smooth and free of jank, yet the application will have to do things that take a long time to complete. **AJAX allows app developers to interact with server-side APIs without pausing script execution or forcing the page to reload**.

Plus, learning how to query data APIs will open you to a tremendous amount of free data that’s freely accessible. Want to build a flight tracking app? How about a photo gallery with image search? Or what about a tweet viewer? Just find an API that provides the data you need, read the documentation and sample code, and query away!

If you want to build solid and fast web applications, knowing how to query servers using AJAX is a must.

##Prerequisites and Requirements

Intermediate proficiency with JavaScript (equivalent to having finished JavaScript Basics).
Familiarity with HTML/CSS.


##What Will I Learn?

**Syllabus**

###Inspiration

- What is AJAX?
- Why use an API?
- How can you identify AJAX requests in existing websites?

###Perspiration

- Clone the Move Planner repository
- Implement the Google Streetview API
- Implement the NY Times API
- Error handling normal AJAX requests
- Implement the Wikipedia API
- Error handling JSON-P requests

###Meditation

- What did you learn?
- How else can you apply AJAX to make speedy page loads?
- Go customize!


##Extra Readings

- jQuery.ajax(): http://api.jquery.com/jquery.ajax/

- Google's APIs: https://developers.google.com/apis-explorer/#p/

- Giant database of APIs: http://www.programmableweb.com/apis/directory

- JSON versus JSONP Tutorial - Live: http://json-jsonp-tutorial.craic.com/index.html




=================================

#Requests and APIs

## Pre-Introduction

Moder websites can load content without reloading. Developers have solved the challenge of loading information quickly and after the first page render in many ways. And one flexible and popular implementation relies on **AJAX requests, Asynchronous JavaScript And XML**, which allow for data to be received asynchronouly. Data that loads asynchronously can be requested late in the load process and the website should load acceptably with or without it.

**request page--->receive response(start load)--->AJAX request for resources--->first paint--->receive AJAX'd resources(paint AJAX'd resources)**


## Client Server Demonstration

when your browser make your request synchronously or without AJAX, it has to wait for responses before proceeding with the load. AJAX is special, because it allows these types of requests asynchronously, which means that they can happen in the background without blocking the rest of the page load.

call back: call those instructions when get the response back.


##AJAX Definition

**Asynchronous**

**JavaScript**

**And** 

**XML**

request

AJAX requests allow for content retrieval and display without reloading the webpage. Asynchronous in AJAX refers to the fact that the request doesn't block other events from happening. Instead, the page keeps on doing its thing and then only acts on the data when it gets returned by the server. 

AJAX requests occur in a number of different ways and with varying levels of difficulty. Some require an API key, others use O-off, and some don't use any authentication at all. And, the data returned by a different AJAX request differs too.

**AJAX Response**:
- Data
  - XML `<entry></entry>`
  - JSON `{property:data}`
  - HTML `<div></div>`

X in AJAX stands for XML which used to be the dominant hierarchical data format. But today, JSON is much more popular, in fact, most AJAX requests nowadays are actually AJEDGE request standing for Asynchronous JavaScript And JSON request, but it doesn't sound as nice so we still just call them AJAX. Embedded within AJAX responses, it's pretty common to see HTML, which websites can use to fill in part of the page.

in this course, have to try three different asynchronous request techniques. have to work with the Google Street View, Wikipedia, and New York Times APIs, all three of which work very differently.


## Async vs Synchronous Requests

Before we start diving into asynchronous requests, let's consider some real-world scenarios that might require one.

Remember, an asynchronous request can be fired off at any time (before or after a page has loaded) and the response to an asynchronous request often includes HTML that can be dynamically inserted into a page.

Facebook uses a lot of asynchronous requests so that the page almost never needs to refresh for users to see new content.

Take a moment to consider when Facebook might take advantage of asynchronous requests to load new content without refreshing the page. Think about user actions that might lead to asynchronous requests. For instance, when a user scrolls down in a business' page (like Udacity's Facebook page), new stories get inserted into the page which never needs to refresh to show new content (more on this specific example in a moment). This is an example of an asynchronous request.


**Facebook's Asynchronous Requests**

The following actions on Facebook could not happen without asynchronous requests:

- Scrolling down in the Newsfeed
- Posting a message on a friend's Timeline
- Clicking through a friend's pictures

- when you scroll down, new stories are automatically loaded.
- the page doesn't reload when you hit "Post".
- the page doesn't ever need to refresh when you are scrolling through a friend's picture.

**Facebook accomplishes this through the use of AJAX requests.**


## Facebook's AJAX request

## Necessary components of an AJAX request

Q: Which components are required for AJAX requests?
 
- URL string
- dataType string
- settings object
- seccess function

A: URL string

`jQuery.ajax(url[,settings])`
`jQuery.ajax([settings])`

In general, square brackets within documentation means that sth is optional.

you actually can call an ajax request without passing in anything to it. but, that would be kind of pointless, because while it would succeed, it wouldn't go anywhere. So you're not really doing much of a request. In terms of real world requests, most post requests will probably have a url and some data with them. Because in a post request, you're usually sending off data. 

And GET request, in the real world, generally have a url along with some type of call back function and some optional data passed along with the GET request.

But the only thing that's really necessary to send off a functional Ajax request is a url string.


## API Inspiration

**definition**: an application programming interface (API) is a set of routines, protocols, and tools for building software applications. An API expresses a software component in terms of its operations, inputs, outputs, and underlying types. An API defines functionalities that are independent of their respective implementations, which allows definitions and implementations to vary without compromising the interface. A good API makes it easier to develop a program by providing all the building blocks. A programmer then puts the blocks together.

We just looked at facebook and twitter who **use their own internal APIs to resolve new data for their users**.

This is really cool, but unless you're already working for a giant web app, you probably don't have a massive internal database of cool information you can query asynchronously. But luckily, there are tons of APIs available on the web that readily serve up interesting information. And they're usually free to use, so long as you aren't making thousands of requests per hour.


##API Brainstorm

Q: What APIs do you want to try? List them below.

A: Google Streetview, Wikipedia, NYTimes

This is really awesome.
This is the kind of brainstorm that leads to new businesses and pushes the web forward as a whole. Seriously, doing sth new or combining old pieces of information in new ways is how the internet and technology gets pushed further along.



====================

#Building the move planner app

## Requests with jQuery

Performing Ajax request that work properly in every browser is a big pain in the butt, luckily, we can use jQuery's Ajax method and leave some of the drudgery of supporting all browsers to jQuery. 

It's important to know that it's extremely common for developers to use libraries to write Ajax calls. There's no problem with using libraries to simplify the code you have to write, especially with sth like Ajax. 

In order to use jQuery, we need to use jQuery objects. and to do that, we'll be using syntax like this:

    function loadData() {
      
        var $body = $('body');
        var $wikiElem = $('#wikipedia-links');
        var $nytHeaderElem = $('#nytimes-header');
        var $nytElem = $('#nytimes-articles');
        var $greeting = $('#greeting');
        
within script.js. we're creating a few variables over here each of which has a dollar sign in front of them to tell this object is a jQuery object.

We'll be using two different methods for Ajax request:

- jQuery.ajax()
- jQuery.getJSON()

Both methods take some url and then some optional parameters.


##Loading Streetview

Can you make a Google Street View image appear in the background? All you need to do is append an <img> with the correct src.

## NYT API Key

The NYTimes provides an Artical Search API that polls articles from 1851 to today. This request will be a bit more complicated than simply creating a URL string for an image tag. To start, we'll need an API key. Many APIs want you to use a special name called an API key to identify yourself when you access their data.

Another thing you'll sometimes run into is authentication, services like Facebook and Twitter use OAuth to authenticate users. The only one people with accounts to be able to get data, since that data is often not publicly accessible. 


##NYT Implementation


## NYT Error

Error Handling NY Times Articles

Can you build error handling for your NY Times AJAX request? Try chaining the jQuery.error() method to the end of your AJAX request call to handle failing requests.

If the AJAX request fails, at least the page won't look broken.


##CORS

In the next parts of the lesson, you will run into an issue that deals with Cross-Origin Resource Sharing (CORS).

tl;dr CORS works around a sometimes overly-strict browser policy meant to protect servers from malicious requests. CORS is enabled on the server-side, so you won't generally need to worry about it for your code. You do need to know about it though, since some APIs support it, and some do not.

**What is CORS and why are we using it?**

CORS works around the same-origin policy. The same-origin policy was implemented by web browsers to prevent malicious scripts from untrusted domains from running on a website. In other words, it ensures sure that scripts from one website can't insert themselves into another.

For example, the same-origin policy keeps the bad guys’ JavaScript from somehow running on your bank’s website and stealing your information.

Over time, developers realized that this policy was too strict, and often got in the way of legitimate use-cases. There are many reasons to serve content from multiple domain origins, and so developers found a way around it.

Developers that maintain server-side APIs can enable CORS on their servers to disable the same-origin policy. CORS is a relatively recent feature added to browsers. When certain headers are returned by the the server, the browser will allow the cross-domain request to occur.

For APIs that don't support CORS, you may need to use another method. The other way around the same-origin policy is JSON-P. JSON-P is a unique trick to allow cross-domain requests. Many APIs allow you to provide a callback function name, and they will generate a JavaScript file that passes the data into that function when it gets run in your browser.

This isn't the simplest thing to implement cleanly, but if you're using jQuery to create your AJAX requests, using JSON-P is as simple as adding an extra property to the options object that you pass into the AJAX method. You'll be doing this very soon, and I promise it's not as scary as it sounds. :)

**The nitty gritty of JSON-P**

Your application loads up a script from the other domain using a simple <script> tag. Once the script has been received, that code gets run by your browser. All the code does is build the data object you requested as a simple JavaScript object, and runs the callback function (that you told the server to use) with the object (your data) as a parameter.

You’ll need to refer to the documentation for any data API’s you want to use, and figure out if the API supports CORS or if you need to use JSON-P.

##Wikipedia API

## Error Handling with JSON P

##Debugging

**If sth doesn't look right on your page, going to dev tools and opening up the Network tab is a great place to get started.**


## Speeding up the First Render

Steps for rendering the app:

1. request generic HTML 
2. request unique HTML
3. render generic HTML
4. render unique HTML

Generic HTML: refers to HTML and CSS that would be used for any user.  

Unique HTML: refers to the HTML content that's specific to a user. 
















