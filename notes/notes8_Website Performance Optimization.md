#Course Summary

You will learn how to optimize any website for speed by diving into the details of how mobile and desktop browsers render pages.

In this short course, you’ll learn about the Critical Rendering Path, or the set of steps browsers must take to convert HTML, CSS and JavaScript into living, breathing websites. From there, you’ll start exploring and experimenting with tools to measure performance and simple strategies to deliver the first pixels to the screen as early as possible. You’ll learn how to dive into recommendations from PageSpeed Insights and the Timeline view of Google Chrome’s Developer Tools to find the data you need to achieve immediate performance boosts!


##Why Take This Course?

From Ilya Grigorik's High Performance Browser Networking:

"The emergence and the fast growth of the web performance optimization (WPO) industry within the past few years is a telltale sign of the growing importance and demand for speed and faster user experiences by the users. And this is not simply a psychological need for speed in our ever accelerating and connected world, but a requirement driven by empirical results, as measured with respect to the bottom-line performance of the many online businesses:

Faster sites lead to better user engagement.
Faster sites lead to better user retention.
Faster sites lead to higher conversions.
Simply put, speed is a feature."


##Project

You will optimize an online portfolio for speed, which you can share with the world to showcase your skills!

Making a great first impression is absolutely key and an online portfolio can help you stand apart from the crowd. We’ll give you a template for a modern, mobile-friendly portfolio which you’ll be able to completely customize so that it shows off your work and your skills the way you want. But before you show it off to the world, you’ll practice your web performance skills by optimizing the portfolio to render as fast as possible.


##Overview

Throughout the course, you’ll build a performance toolbox to help you build faster website experiences by taking advantage of PageSpeed Insights recommendations and measuring page performance on mobile and desktop with Chrome Developer Tools.

This class contains an introductory lesson, two primary lessons and a final project. Before diving into optimizations, you’ll build an understanding of how browsers convert HTML, CSS and JavaScript into websites. Along the way, you’ll practice measuring performance using the same tools Google engineers use.

Then comes the really fun part: optimization! You’ll learn about easy-to-implement performance gains and develop a simple and powerful model for uncovering optimization opportunities.

You’ll put your newfound performance skillset to the test with the final project, where you’ll be optimizing your own online portfolio website!


##Extra Readings

- Remote Debugging on Android with Chrome: https://developer.chrome.com/devtools/docs/remote-debugging

- Device Mode & Mobile Emulation:
https://developer.chrome.com/devtools/docs/device-mode

- **Critical Rendering Path**:
https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en

- W3C: What is the Document Object Model?: http://www.w3.org/TR/DOM-Level-2-Core/introduction.html

- W3C: The HTML5 Specification: http://www.w3.org/TR/html5/

- Flushing the Document Early:
http://www.stevesouders.com/blog/2009/05/18/flushing-the-document-early/

- Releasing "Chunk Scatter", an HTTP chunked encoding analysis tool:
http://blog.cowchimp.com/chunk-scatter-http-chunked-response-analysis-tool/

- Performance profiling with the Timeline: https://developers.google.com/web/tools/profile-performance/evaluate-performance/timeline-tool

- Why do browsers match CSS selectors from right to left? : http://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left


- **Optimizing Content Efficiency**: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/?hl=en

- Mobile Analysis in PageSpeed Insights:
https://developers.google.com/speed/docs/insights/mobile

- How the Browser Pre-loader Makes Pages Load Faster: http://andydavies.me/blog/2013/10/22/how-the-browser-pre-loader-makes-pages-load-faster/







------------------

#Lesson 0: Getting Up and Running

You can’t optimize what you can’t measure, so in this lesson you’ll learn how to open Chrome Developer Tools to measure the performance of mobile and desktop websites.

##Introduction

Critical Rendering Path: the sequence of steps the browser goes through to render the page.

##Final project overview

##tech requirements
chrome and a mobile phone

##setup for mobile

##using dev tools on mobile

##mobile tools for iOS

##using screencast

 
 
 
 
----------------

#Lesson 1: The Critical Rendering Path

Optimizing any website’s performance requires a strong understanding of how browsers build websites from HTML, CSS and JavaScript. You’ll start by breaking down the Critical Rendering Path - the steps the browser has to take to render a page. You’ll get an understanding of how:

- HTML is converted to the **Document Object Model (DOM)**.
- CSS is converted to the **CSS Object Model (CSSOM)**.
- the browser runs **layout** to determine the position and size of elements before **painting** pixels on the screen.
Throughout the lesson, you’ll learn how to take advantage of the Timeline view in **Chrome Developer Tools** to measure each and every step’s performance on mobile and desktop.


##Critical Rendering Path Walkthrough

## 1. Converting HTML to the DOM

When you request a URL and hit Enter, the browser sends a request to the server. Once the browser receives the response, which is the HTML we see in the command line, it must somehow convert all of markup into something we see on the screen.

The browser follows a well-defined set of steps and it all starts with processing the HTML and building the DOM. The HTML specification contains a set of rules for how we should process the received data.

**characters--->tokens--->nodes--->DOM**

The text within the angle brackets has special meaning in HTML and it's set to be a tag. As a result, whenever we encounter a tag, the browser emits a token. In this case, it is the start tag HTML token. Next, we would get the StartTag, head token, and so on. This entire process is done by the tokenizer, and while the tokenizer is doing this work, there's another process that is consuming these tokens and is converting them to node objects. For example, we convert the first HTML token and create the HTML node. Then we consume the next token and create that node.

Is there a relationship between the nodes?

yes. notice that the tokenizer emits start and end tokens, which tells us the relationship between the nodes. The StartTag head token comes before EndTag HTML token, which tells that the head token is a child of html. Similarly, the meta and link nodes are children of the head node and so on. Eventually, once we consume all of the tokens, we arrive at the document object model, or simply DOM, which is a tree structure that captures the content and properties of the HTML and all the relationships between the nodes.

Actually, the browser constructs a DOM incrementally and you can take advantage of this to speed up the rendering of your pages. We can start building the DOM as soon as we have the HTML, and we don't have to wait for the entire HTML page to start building it. In fact, this is something that the Google search pages do really, really well.

## Fast Google Search Responses


## Exploring Timeline Traces


## 2. Converting CSS to the CSSOM

**characters--->tokens--->nodes--->CSSOM**

to identify valid tokens. the parser would convert the tokens to nodes.

all of visible content is part of body. also, the children of the body node inherit it's parent's styling rules, this is what we mean by cascading rules and cascading style sheets. css rules cascade down.

**We can't really use a partial CSSOM tree, because then it could lead us to use the wrong styles when we render the page. The browser blocks page rendering, until it receives and processes all of the CSS.** 

**CSS is render blocking.**

## Which styles render faster?

The more general selector is actually easier to evaluate so it is faster to render.

The more specific rule is more expensive 
because it has to traverse more nodes in the DOM tree.

Before you go all crazy and rewrite all of your rules, measure first. Chances are selector matching is not your performance model link. Measure first, optimize second. 

## Recalculating CSS Styles in DevTools

You can save timeline trace and load timeline trace. This is a really useful feature whenever you're debugging a site, and want to keep it for further analysis or if you need to share it with someone.

the **Recalculate Style** event in the devtools is where we convert the CSS response into the CSSOM. 

Before i rewrite all of my css rules, i should probably record the timeline and checkout how long this stuff is taking.
Measure first, then optimize if needed.


## 3. The Render Tree

We need to combine the DOM and the CSSOM trees into the render tree. 

One of the most important properties of the render tree is that **it only captures visible content** .

The render tree captures both the content and the style.

Combine the CSSOM with the DOM tree.


## 4. Layout

calculating positions and dimensions

the layout step: figure out where and how all the elements are positioned on the page.

calculate the pixel width of each element in render tree.


## Analyzing Layout in DevTools

how to go about optimizing for multiple times layout?

it really depends on the site, but a good rule of thumb is to batch updates to avoid having multiple layout events.


## 5. Time to Paint the Page!

Adding effects takes longer to paint.

## Analyzing Paint in DevTools

not all pixels cost the same to paint on the page.

anytime we want to update the render tree, there's a good chance we'll have to run layout, and the same applies for painting. the browser applies a lot of smarts and tried to repaint the minimum required area. but really it all depends on what kind of updates are being applied to the render tree. 

## Summarize the CRP

1. begin constructing the DOM by parsing HTML
2. request CSS & JS resources
3. Parse CSS and construct the CSSOM tree
4. execute JS
5. merge DOM and CSSOM into the render tree
6. run layout, paint

JS manipulates both the DOM and CSSOM, but otherwise, the render process's the same.

DOM construction can be incremental, and the response may not arrive all at once. So we may not finish constructing it all at once.

**The script is synchronous, and we can't execute it until we have the CSSOM.** So we'll need to create the CSSOM as soon as possible. **Completing the CSSOM will unblock the JavaScript engine**, so we'll be able to execute JS as soon as we've received it. Once the JS is finished, we can resume and finish constructing the DOM.


## Analyzing the Entire CRP in DevTools

## CRP Wrap Up




---------------------

#Lesson 2: Optimizing the CRP

You’ll explore easy HTML, CSS and JavaScript optimizations with significant performance implications, some of which are as simple as adding a single attribute to an HTML tag! Along the way, you’ll be developing the skills to help you diagnose opportunities for optimizations, including:

- building **quick and dirty** diagrams of the Critical Rendering Path.
- identifying **three key metrics** to triangulate potential performance bottlenecks.


## 1. Optimizing the DOM

The DOM and CSSOM are uaually the steps that are the worst offenders and make your page render very slow.

reduce the file size of html:

- minify
- compress
- cache

## When will the page render?

As soon as the browser has the CSS and builds the CSSOM

## 2. Unblocking CSS with Media Queries

to unblock css, sometimes to split the css into multiple files.

`<link rel="stylesheet" href="style.css">`

`<link rel="stylesheet" href="style-print.css" media="print"`

## Which stylesheets are render blocking?

Rendering on a smartphone, portrait orientation.

1. `<link href="style.css" rel="stylesheet">`

2. `<link href="style.css" rel="stylesheet" media="screen">`

3. `<link href="portrait.css" rel="stylesheet" media="orientation:landscape">`
 
4. `<link href="print.css" rel="stylesheet" media="print">`

Only 1 and 2 are render blocking.


## 3. JavaScript and the CRP

JavaScript can manipulate both the DOM and the CSSOM  

optimizing js could be an entire course.

## 3.1 External JavaScript Dependencies

DOM --> JavaScript -->DOM

JavaScript is said to be **parser blocking**, because it blocks DOM construction when we encounter the script tag.

    <p>
         Awesome page
         <script src="write.js"></script>
         is awesome
    </p>
    
    
    <p>
         Awesome page
         <script>
            document.write(" with JavaScript ");
         </script>
         is awesome
    </p>            

Inlining the JavaScript would help limit the requests. But, there's some downsides as well. For example, if you use the same code on multiple pages, then that will be redundant code in all those pages. So there are tradeoffs here.


## More on JavaScript Dependencies

p { color: black }

    <style scr="style.css" /> 
    <p>
         Awesome page
         <script>
           var e = document.getElementsByTagName("p")[0];
           e.style.color = "red";
         </script>
         is awesome
    </p>
    
What if CSS style sheet arives after the script is already executed and sets the color to red?  Would the browser be smart enough to figure out which color to use?

Yes, it would.
The browser requests the HTML, and as soon as it gets the response, it starts building the DOM. It then discovers the CSS and sends the request. Then, the parser continues and finds the script tag, at which point it has a block. It doesn't know what the script is going to do because the script may want to try accessing the CSS properties. So it blocks the script execution until the CSS arrives and we build the CSS object Model. Only then can we run the JavaScript and then finish building the DOM.

So **CSS blocks rendering and it blocks JavaScript execution**. It is why optimizing CSS is so important.        


## What optimizations would you try?

    <html>
      <head>
        <meta name="viewport" content="width=device-width">
        <link href="style.css" rel="stylesheet">
        <script>
          report_visit_to_analytics();
        </script>
      </head>
      <body>
        <p>
          Hello <span>web performance</span> students!
        </p>
        <div><img scr="awesome-photo.jpg"></div>
      </body>
    </html>
    
How can we optimize the CRP?

Inline CSS. Analytics shouldn't block render.             


## 3.2 Async JavaScript

Some script don't modify the DOM or the CSSOM. and they shouldn't block rendering. And Analytics is a great example. One stratege would be to load the script after the page is loaded. So when the browser fires the onload event. And we could execute the script then.

The browser fires an on load event when the page is finished loading. And you can wait for that and then execute your script then. 

       window.onload = load;
     </script>
    </head>
    <body>


The load event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.

This on load technique is a good one to have in your back pocket, but there's actually an even simpler strategy that we can use. All we need is an extra attribute on the script tag.

    <html>
      <head>
        <meta name="viewport" content="width=device-width">
        <link href="style.css" rel="stylesheet">
        <script src="analytics.js" async></script>
      </head>
      <body>
        <p>
          Hello <span>web performance</span> students!
        </p>
        <div><img scr="awesome-photo.jpg"></div>
      </body>
    </html>

pull out the analytics code into a seperate file:
 
    report_visit_to_analytics();

**`async` attribute has two important properties.**

First, it tells the browser that it does not have to block DOM construction, when it encounters the script tag. As a result, the browser dispatches the script request, and continues parsing the DOM. 

Second, the execution of the script also does not block on the CSS object model. So if the script is avaiable before the CSSOM is ready, it can still be executed right there and then. 

The browser will download and execute the script but it won't block the parser, and it won't block on CSS.

You can't put an async attribute on an inline script. Inline scripts will always block on the CSSOM. With one exception. If you put your JS above your CSS, then it will execute without blocking on CSS.

    <script>...</script>
    <link href="style.css" rel="stylesheet">


## Pick the JavaScript Approach

- **Blocking**: `<script src="anExteralScript.js"></script>`
- **Inline**: `<script>document.write("this is an inline script")</script>`
- **Async**: `<script async src="anExternalScript.js"></script>`


## 4. General Strategies and CRP Diagrams

- **Minify, Compress, Cache**:
  HTML, CSS, JavaScript
 
- **Minimize** use of **render blocking** resources (CSS):
  1. Use media queries on `<link>` to unblock rendering
  2. Inline CSS

- **Minimize** use of **parser blocking** resources (JS):
  1. Defer JavaScript execution
  2. Use `async` attribute on `<script>` 

**That is three main patterns:**

1. Minimize bytes
2. reduce critical resources(css:media queries, js:async)
3. shorten CRP length

##CRP Diagrams with External CSS

##the CRP metrics

1. **number of critical resources**
2. **total critical bytes**
3. **minimum critical path length (roundtrips)**


##CRP Metrics Discussion

We have these three buckets, the number of critical resources, the number of critical bytes and path length, illustrates that there's really no one golden rule. For example, if I eliminate the number of critical resources, I would also probably reduce the number of bytes. And likewise if I started compressing, caching and minifying, I could also reduce the number of bytes.

##Calculate the CRP Metrics 

The browser can download both the css and js files in parallel, so it reduces the critical render path length.

Note that knowing the critical path length allows us to get a quick approximation of the best case scenario for time to first render! Best of all, we can get this estimate by quickly inspecting the HTML markup.

##What strategies would you try?

Which optimization strategies should we consider?

first of all, we have an external CSS file which we need to construct the CSSOM. So if inline that, then that could save a lot of time. Same goes for JavaScript. If inline that, then we could skip the request. And in fact, if inline both, then that's even better because the critical path length will be one. As soon as I have the HTML file, I have everything I need. 

Just be careful when you apply them. Remember that inlining a lot of JS and CSS, especially when those resources can be used between multiple pages, can lead to a lot of overhead. 

Speaking of which, I guess, I don't know of this applies to this exact case, but if I knew what was inside the CSS and JavaScript files, then I could also consider adding a media type to the CSS or making the script async. For CSS, I want to make sure the styles are actually required to render the page. If they're not being used, I could add an appropriate media tag attribute and unblock rendering. Also, it's pretty much the same idea for JS. If the script is not manipulating or accessing the DOM or CSSOM, then I could add an async attribute, which would unblock DOM construction. 


## Can you Calculate CRP Metrics from HTML?


## The Preload Scanner

To optimize the case of **multiple CSS or JS files**, the browser has a special process called a **Preload Scanner**, which peaks ahead in the document, and tries to discover critical CSS and JS files. 

So even though the parser is blocked, we can discover the js files and initiate downloads for critical resources. 

So instead of waiting to build the CSSOM and run JS before requesting the next JS, the Preload Scanner finds the next JS and requests it while the parser is blocked.

## Draw a CRP Diagram - Easy

One of the best things about doing **the critical rendering path analysis** is you can get a pretty good estimate for **how long the page will take to render**.

Once have **the critical rendering path diagram** I don't even have to profile my page. Well, I do need to profile my page for other bottlenecks, but what i mean is that i can see all the dependencies in my critical rendering path diagram and get a good idea of how long my page is going to take to render.

With a little bit of practice, you can just take a look at the HTML and figure out what the critical rendering path is. 


## Draw a CRP Diagram - Hard

real website analysis by observing chrome dev tools.


## The Final Project Overview

Sum up optimizing the critical rendering path, as having three main objectives.

1. reducing the number of critical bytes
2. reducing the number of critical resources
3. shortening the critical path length

Your job is to make the critical rendering path as small and as short as possible.


This course teaches you how to render the first frame quickly, but what about all the frames that follow? Take Browser Rendering Optimization with Cameron and Paul Lewis to learn how to build apps that run at 60 frames per second!



















