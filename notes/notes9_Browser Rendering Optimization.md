#Course Summary


Performance matters to users. Web developers need to build apps that react quickly and render smoothly.

Google performance guru Paul Lewis is here to help you destroy jank and create web apps that maintain 60 frames per second performance.

You'll leave this course with the tools you need to profile apps and identify the causes of jank. You'll explore the browser's rendering pipeline and uncover patterns that make it easy to build performant apps.

##Why Take This Course?

Demystifying the browser's rendering pipeline will make it easy for you to build high performance web apps. By following a few simple principles, you are capable of drastically reducing the browser's workload and time needed to render each frame.

You'll start by getting introduce to the individual steps of the rendering pipeline, beginning with parsing HTML and ending with painting pixels on the screen. Then you'll quickly dive into tooling with ample opportunities to practice profiling and debugging apps with Chrome Developer Tools.

The final project uses the Hacker News API and gives you an opportunity to show off everything you've learned as you turn an awful experience into a high performance web app!

##Extra readings

- Jank Free: http://jankfree.org/

- Introducing 'layout boundaries': http://wilsonpage.co.uk/introducing-layout-boundaries/

- CSS TRIGGERS:A GAME OF LAYOUT, PAINT, AND COMPOSITE.: http://csstriggers.com/

- Performance profiling with the Timeline: https://developer.chrome.com/devtools/docs/timeline

- Device Mode & Mobile Emulation: https://developer.chrome.com/devtools/docs/device-mode

- Using Web Workers: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

- The Basics of Web Workers: http://www.html5rocks.com/en/tutorials/workers/basics/

- BEM: Key concepts: https://en.bem.info/method/definitions/

- BEM and SMACSS: Advice From Developers Who’ve Been There: http://www.sitepoint.com/bem-smacss-advice-from-developers/

- How (not) to trigger a layout in WebKit: http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html








#Project

The News Aggregator App - Turn an unusable app into a high performance, 60 frame per second experience. You'll be given a news aggregator app that uses the Hacker News API to display the day's top stories. The news aggregator has lots of performance issues. You'll demonstrate your understanding of performance by destroying all the jank and creating an experience that users will love.


========================

#Lesson 1 - The Critical Rendering Path（基础: pipeline）

- You'll play Jank Invaders to develop your eye for jank!
- You'll learn how the browser turns HTML into pixels on the page
- You'll learn how different CSS styles affect the rendering pipeline differently.

##introduction

the background knowledge about the browser's rendering pipeline.


##Juddering

avoiding jutter is extremely important to users. 

bad performance kills good sites.

##Frames

Most devices today refresh their screen 60 times a second, which we measure in hertz(60Hz). And so match that we need to have 60 frames to put up. Most of time we'll refer to this as 60 frames a second or fps. If the browser is taking too long to make a frame, it will get missed out. The frame rate will drop and users will see stuttering. If it's really bad, then the whole screen can lock up, which is the worst.


## Milliseconds Per Frame Quiz

q: To render 60 frames every 1000ms, how much time is available to render a single frame?

a: 1000/60 = 16 ms


## What Goes Into One Frame

how the page is actually put together when it's first loaded.

Initially the browser makes a get request to a server. ( GET / HTTP/1.1 ). the server responds by sending some html. At this point, the browser does some pretty clever stuff with lookahead parsing. But what we care about is that it parses the document and gives us these nodes. In Chrome DevTools, you'll see it as **ParseHTML**. 

The next part of the process is to combine the DOM and CSS. In the tools you're going to see this as **Recalculate Styles**. And when combined, we get a new tree called the Render Tree. It's important to note that only elements that will actually be displayed on the page will make it into the render tree.

This is essentially a simplified view of where the critical rendering path optimization gets you.


## DOM, CSSOM, Render Tree

back to the rendering process of a single frame. once the browser knows which rules apply to an element, it can begin to calculate layout. Or in other words, how much space elements take up and where they are on the screen. Layout turns render tree into a collection of boxes. In the tooling you'll see this as **layout**. The web's layout model means that one element can affect others. So for example, the width of the body typically affects the children's widths and so on, all the way down the tree. So the process can be quite involved for the browser. So times you may hear layout called reflow. It's the same thing.

The next step in the process is talk about vector to raster. For example, the boxes we had before were vectors just shapes. But now what we need to do is fill in individual pixels. And that's what a rasterizer is for. The tooling is going to show you this as **paint**.

One of the rasterizer calls was called "draw bitmap". What we normally do is we send things like JPEGs, or PNGs or GIFs down the wire to our page. But what the browser has to do is decode these into memory. In the tooling, you'll see it as **Image Decode + Resize**. Potentially, we're doing sth like responsive web design. And so the image may also need resizing.

Painting, as you may have noticed just now, was done into a single surface. However, sometimes browsers make multiple surfaces called layers or compositor layers and it can paint into those individually. The process of handling these layers is shown in the tooling as **Composite Layers**.

And so now we've finished painting all the layers for our page. Painting actually happens into a grid of tiles. I mentioned it for completeness, but it's not sth we get to control as developers. 
All of this happened on the CPU. The layers themselves and their tiles will be uploaded to the GPU. Again this will be included in composite layers. And lastly, the GPU will be instructed to put the pictures up on the screen. And that in brief, is how we get from a single request all the way through to pixels on screen.


##Layout

The layout process is complicated and it's probably best to assume that the entire DOM is always in scope.

##Layout and Paint

**pipeline**:

JavaScript(CSS anims, web animation API) -->Style-->Layout-->Paint-->Composite

Normally you're going to use js to handle work that will result in visual changes whether is jQuery animate function, sorting dataset or adding DOM elements to the page. but you don't have to use js for your visual changes. in fact for many applications developers use CSS animations, transitions, even the new web animations API to make visual changes to their page.

now with that out of the way, we can talk about the pipeline a bit more. the changes we make in the JS section won't necessarily trigger every part of the pipeline. either, in fact, there're three ways the pipeline normally plays out for a given frame.

1. you make a visual change either with CSS or JS, browser must recalculate the styles of the elements that were affected. now if you change a layout property so that's one changing elements geometry, like width, height or position with relation to another elements, like left or top, the browsers will have to check all the other elements and reflow the page. Any affected areas will need to be repainted and the final painted elements only to be composited back together.

2. The second way the pipeline gets used is when you change a paint only property, like background-image, text-color or shadows. (This time we make the change, the styles are calculated. **we don't do layout because we didn't change the geometry of any elements**. We do paint and we do composite.)

3. The last way involves changing sth that requires neither layout nor paint,  just compositing. Compositing is where the browser puts the individual layers of the page together and that requires layer management to ensure we have the right layers and in the correct order.
So we make our change, we do style calculations but we only do composite. 

You probably noticed style was always included for each of those variations. different styles effect which parts of the pipeline we touch and therefore the performance characteristics of our apps.


##Rendering solution

On the screen resize event, the styles are actually applied through layout.
There are actually exceptions to the lack of style, however. 

If there was a resize handler that changes the style, or if a media query break point was hit, then the browser would actually have to recalculate styles.


##CSS Research 

Not all CSS is created equal, some CSS properties have much reaching consequence than others. Your CSS should trigger the least amount of work possible and that's gonna mean avoiding 'paint' or 'layout' whenever possible. `transform` and `opacity` are far away the best properties to change because they can be handled just by 'composite' if the element has its own layout.

 

##Outro

learned how the browser renders pixels from html, css and js.


======================


#Lesson 2 - App Lifecycles（基础：lifecycle）

- You'll learn how there are four distinct phases in an app's lifecycle: Response, Animation, Idle and Load (RAIL).
- You'll learn how your frame budget changes depending on where the user is in RAIL.
- You'll practice thinking through app workloads at different stages in RAIL.

##intro

take a step back to think at a high level about your app's life cycle as a whole. The goal is to make intelligent choices about when your app can and should do the heavy work to create a buttery smooth experience.

Should your goal be to make your app run at 60 frames per second all of the time?

the answer is no, actually not quite. It's important that you pick your battles a bit, and focus on the things that matter to your end users. 

When you think about it, there're actually four major areas of any web app's life cycle, and performance fits into them in very different ways.  


##RAIL

the four major areas of a web app's life cycle: RAIL.

RAIL：Response, Animations, Idle, and Load.

LIAR: Load, Idle, Animations, and Response. 


## Load and Idle

essentially you want your initial load to be done in **one second**. after an app's loaded, it's normally idle, it's waiting for a user to interact. And this is our opportunity to deal with things that we deferred to meet that one second load time. Normally, these idle blocks are around **50 miliseconds** long. Althogh you may have several of them in one go, these idle blocks are fantastic times to get some heavy lifting done so that when the user interacts things are nice and snappy.

##Idle time quize

q: which tasks should you handle during the post-load idle state?

a: image assets, videos, comments section

In order for the app to even work, you've got to deliver the basic critical functionality, so this shouldn't be coming after the load, also news texts should be there as soon as the first pixels are being painted. Everything else though can come later. 

user action could actually still happen during the post load idle state. in a moment you learn that you only have one hundred milliseconds to respond to those actions. this makes it all the more important to keep the post load test you're performing to **50 milliseconds** chunks.

##RAIL Response

**100 milliseconds**, so a tenth of a second after someone presses sth on screen before they notice any lag. So if you could respond to all user input in that time, you're good to go. That's great if the thing they did was to say, toggle a check box or tap a button. and you show a single change, like a selected state. 

But there's **another version** of this which is more challenging, which is that the user does sth that requires animation. **The most challenging performance issues always come out of the need to hit 60 frames a second**. Which is either interactions that stick to the user's finger or transitions and animations. For those we have a limit of **16 miliseconds**, which is one second or a thousand milliseconds divided by 60. In reality, we actually have less than 16 milliseconds, because the browser has overhead. so really we get around 10 to 12 milliseconds.


**Response: 100ms**

**Animate: 16ms**

**Idle: 50ms**

**Load: 1 second**


## RAIL - Animations Part 1

so some user interactions need 60 frames a second, so do transitions and animations.

there are many ways to tackle animations and it completely depends on your project.

**FLIP: First Last Invert Play**


##RAIL - Animations Part 2

解释了源码，怎样实现的。


## Rendering Animations Quiz

q: Paul applied opacity and transform changes to reverse the animation. What steps in the rendering pipeline did he trigger?

a: Composite.


## Interactions and Animations Quiz

q: what kind of interactions require 60fps animations?

a: spinners, pinching, opening comments, scrolling, pull-to-refresh, drag-n-drop, side memu slide

**Anything that involves movement or finger on screen interactions will need to run at 60 frames per second.**


## RAIL Thresholds Review

LIAR stands for load, idle, animations and responsiveness. During the load stage you have about one second or a thousand milliseconds to render the page before the app no longer feels responsive, and user's attention level falls. Download and render your critical resources here.

After loading, the app is idle, and this is a great time to do non-essential work to ensure that whatever interactions occur after this period will feel instantaneous. Your app's idle time should be broken down into 50 milliseconds chunks so that you can stop when the user starts interacting.

**During the animation stage, such as when users are scrolling or animations are occuring, you only have 16 milliseconds to render a frame. This is when 60 frames per second is absolutely critical.**

Lastly, there's the reponse period. The human mind has about 100 milliseconds' grace period before an interaction with the site feels laggy and janky. That means your app needs to respond to user input in some way within a 100 milliseconds. **Using this time wisely is absolutely critical for setting up difficult animations that run at 60 frames a second.**


## Outro

At this point, you know what you can afford to do and when you can do it, which it pretty handy.

One thing to bear in mind is just because you can, say, paint or do layouts or even run JS, doesn't mean you have an unlimited budget. Layouts and style calculation times for example, both depend on the number of elements that are affected.

One of the ways you can keep that time down is to reduce the number of elements on which they have to work.

Now that you have a better idea of how to think about your app as a whole. It's time to drill into the specifics of resolving performance issues.





===========================


#Lesson 3 - Weapons of Jank Destruction（过渡：tools, find causes of junk）

- You'll learn how to make sense of the Timeline panel in Chrome DevTools.
- You'll practice profiling a few different apps to find the source of jank.

##intro

##devtools

##the timeline in depth

##Reading the Timeline Quiz

##一系列 using devtools to spot jank 的 quiz


##outro



========================


#Lesson 4 - JavaScript（详解1）

- You'll optimize JavaScript to hit 60fps during animations.
- You'll move expensive JavaScript operations off the main thread and into Web Workers.
- You'll debug a janky copy of a production quality app - the QR Snapper.


##intro

let's take stock of where you are in your 60 frames a second journey:

1. what goes into a frame
2. how different styles affect the pipeline.
3. how to prioritize your performance work based on LIAR.
4. the application life cycle and chrome dev tools timeline

Now step into the common causes of jank that crop up time and time again. use dev tools to find those problems, fix them, and test the results. be starting at the begining of the pipeline with JS.

## Just in Time

Javascript compilers 
just in time

the first thing you need to know about js, is that the code you write, isn't actually the code that runs.

it comes about because of the fact that modern js engines recompile your code to sth that can run more quickly. it's done through a Just In Time compiler, or JIT.
A JIT compiler will optimize the JS bit by bit as it runs, and it's a brilliant but extremly complex engine. For as developers, what that means is that there's no way to look at JS and know exactly what code will run in the engine.

Micro-optimizations come about when you try to write code that you think would be a little bit faster for a browser to run. But the thing is, we don't know how the JS engine is going to treat these two pieces of code. So there's no point in guessing. Any micro-optimization you write should be a last resort, once you've exhausted all your other options. In short, what I'm saying is don't spend your time comparing similar pieces of JS in this way.


## Optimizing JS for Animations Quiz

Response  -100ms

Animation -16ms

Idle      -50ms

Load      -1000ms


Think back to the different stages of RAIL. Each stage has a different window of time to execute JS without incurring a user experience penalty. That is to say, you have a small amount of time to execute JS, and if all of it happens before the window of time is over, the app will still feel snappy and smooth.

Looking at the timeframe for an animation, you realistically only have about ten milliseconds to do everything you need to do to prepare the frame, which includes running layout, compositing, and paint.


Q: you have 10ms to prepare every frame. How do you make sure JS is out of the way as much as possible?

A: execute JS as early as possible every frame.


##requestAnimationFrame

**requestAnimationFrame is an API that will schedule your JS to run at the right point of every frame.**

**request animation frame should be your go-to-tools for creating animations**. 

nobody likes to be interrupted in the middle of a task and the browser is no different. Remember how little time the browser has to render the frame at 60 frames a second, that is 16ms a frame. Realistically though there's some overhead to running a frame and the browser house housekeeping to do. so we should aim for about 10 ms instead. 

The JS part of your frame should typically be kept around 3 to 4 ms at most, because there's going to be other work like style calculations, layer management and compositing will come afterwards.

Request animation frame shedule js to run at the earliest possible moment in each frame. that gives the browser as much time as possible to run your code, then style, then the layout, paiting and compositing.

A lot of older code around the web that is used for animation uses `setTimeout` or `setInterval`, because back in the day, that's all there was. In fact, jQuery still uses setTimeout for its animations today. The problem with both of these functions is that the JS engine pays no attention to the rendering pipeline when sheduling these. They are good functions to use when you want to wait some time to relapse or do some repeated task every so often, but they're not a good fit for animations. 

This is how to use request animation frame. you make a call to it and tell which function you wanted to call. That gets called when you do your animation and at the end of it, you shedule the next one. the browsers take care when it should run and how. 

    function animate() {
    
        // Do sth super rad here.
        
        requestAnimationFrame(animate);
    }    

    requestAnimationFrame(animate);


## JavaScript Profile

It's easy for JS to take quite some time to run, especially if you are using frameworks and libraries because they will need some time to do their work. Whether that's organizing views in your app or handling callbacks or perhaps, even analyzing data.

JavaScript profile tells us not just that I spent time in JS, but which functions, where and for how long. The JS profile is a great tool to use when you know that you have long-running JS.


##Long Running JS Quiz

##Web Workers Quiz

**需要另外学习，看文档，比较难以理解**

web workers provide interface for spawning scripts to run in the background. normally websites run in a single thread running on the operating system. web workers allow you to run JS in a totally different scopes in the main window and on a totally separate operating system. Whatever work's happening in the main thread in the main window won't affect or be affected by the worker thread. and of course the opposite is true. whatever is happening in the worker thread won't affect or be affected by the main window. But the two can send messages back and forth. This means that you can **isolate long-running JS inside a worker thread** and allow the main thread to run free unimpeded. What's really cool though is that the web worker in the main thread can communicate with each other. Altogether web workers are incredibly valuable strategy for running long running code that does not create any jank on the main threat.   

Essentially you need to create a separate JS file.

`var w = newWorker('worker.js');`


##JS Memory Management


JS's memory management approach. JS is garbage collected, which means for us developers we don't need to worry about pointers, deleting objects or how to handle local variable.

**memory leak**

If you find that you're missing frames because of garbage collection, then there are some fabulous resorts you can use to learn more about patterns and practices that will help you avoid creating too much garbage.


##A Snappier QR Code App Pt. 1 Quiz

Refactor the QR Code App with `requestAnimationFrame`.

Build and run: gulp serve.


##A Snappier QR Code App Pt. 2 Quiz

Use this web worker: app/scripts/qrworker.js

Create web worker in: QRCodeManager

Send data to worker from: detectQRCode

Remove unnecessary scripts from: index.html



##Outro



===========================


#Lesson 5 - Styles and Layout（详解2）

- You'll learn how accessing the wrong CSS properties at inopportune moments can create loads of extra work for the browser.
- You'll debug multiple instances of one of the nastiest performance problems - Forced Synchronous Layout.

##The Cost of Style Changes Quiz

Q: How does the performance cost of Recalculate Styles scale with the number of elements affected by a style change?

A: The cost of recalculate styles scales linearly with the number of elements.


## Selector Matching

selector matching is the process of figuring out whether some styles should actually apply to any given DOM element.

if you have a large number of elements affected by a style change, then the complexity of the selected can really start to matter.

One approach that works very well is BEM, or block, element, modifier. And it's a way of writing your CSS. It uses single class names to style elements. And not only does it provide more modular, reusable, and readable styles, it is advantageous to performance, since class matching is often the fastest selector to match for modern browsers.

You can use any number of methodologies for keeping your CSS tidy. So if BEM isn't your thing there are plenty of others you can try. The key thing is, where you can, keep your selector matching simple.


## Recalculate Styles

3 ways to make recalculate styles more efficient:

1. reduce affected elements (fewer changes to render tree)
2. reduce selector complexity (use fewer tags & class names to select elements)
3. do both

 
##Layout Thrashing

forced synchronous layout occurs when you ask a browser to run layout first inside the JS section and then recalculate styles, and then run layout again. 

There are a few different properties that when accessed will cause layout.


##Stopping FSL Strategy Quiz

Q: What can reasonably be done to avoid Forced Synchronous Layout?

1. Never read layout properties with JS
2. Read layout properties then batch style changes
3. In loops, change styles then read layout properties.
4. Never change styles with JS

A: 2. Batch your style changes and avoid running layout as much as possible



janky: 
      
     divs.forEach(function(elem, index, arr) {
       if (elem.offsetHeight < 500) {
         elem.style.maxHeight = '100vh';
       }
     })
     
silky:

     if(elem.offsetHeight < 500) {
       divs.forEach(function(elem, index, arr) {
         elem.style.maxHeight = '100vh';
       })
     }

the silky one only reads a layout property once at the beginning and then batch changes all the styles afterwards.
This is a pretty simple fix that will give you a big performance win                  


## Causes of Forced Synchronous Layout

offset width triggered the forced synchronous layout when interleaved with style changes.

there are other properties will cause similar issues when called at the wrong time.

essentially it's any property for which a browser must run layout. anything to do with geometric information like positions and dimensions that can cause forced synchronous layout to happen.


##Stop FSL


##Outro

Earlier, we discussed how you don't always touch every part of the rendering pipeline. In fact, the workload depends very heavily on exactly which properties you change. 

often people ask me whether they should animate styles with JS or CSS, which one is faster? And honestly, it rarely matters. most of the time the speed is the same. The reason is that changing, say, width incurs the cost of layout no matter how you do it. that's true whether you did it in JS or CSS. If you change width, height, top, left, you're going to trigger layout. If you trigger layout, you're going to trigger paint. paint is super expensive, especially on a mobile device. And you can't trigger layout without triggering paint.

be careful about what styles you change and when. In the app life cycle, LIAR, you can afford to do these expensive style changes in the load, idle, and response times but not during animations. during animations you'll want to avoid layout and paint if at all possible, just because they're normally too expensive to fit into the short time you have available.



===================

#Lesson 6 - Compositing and Painting（详解3）

- You'll practice profiling layer and paint performance with the paint profiler tool in the DevTools Timeline.
- You'll manage and optimize layers to reduce the number of steps the browser needs to take to render each frame.
- You'll demonstrate everything you've learned about performance as you de-jankify the News Aggregator App!


##intro

paint is one of the fastest ways to kill your frames per second.

##paint rectangles

##paint profile

##compositing

## Conceptual Question about Layers Quiz

layers are a common concept in image manipulation software. layers are used to make it easy to separate and edit different parts of drawings. 
being able to control several parts of the image individually makes it much easier to put together sth complex.

## Composite Layers

in dev tools, there's 2 records relating to layers or composite layers. the first one is **update layer tree** which happens when chrome's internal engine called blink figures out what layers are needed for the page. It looks at the styles of the elements and tries to figure out what order everything should be in and how many layers it needs. **Composite layers** is the other record, where the browser is now putting the page together to send to the screen. The more layers you have the more time will be spent in layer management and compositing. **So there's a trade-off between reducing paint time and increasing layer management time**.


## Managing Layers 1,2

how do we make one of those layers?

in chrome and firefox, you can use the will-change CSS property to tell the browser to expect visual changes. It can choose to put the element on a new composite layer. in this case, we have will-change transform, and that tells the browser that we intend to change the browser that we intend to change the element transform at some point, and such prepare for that it creates a new layer. instead of transform you could also put left, top, width or height or any visual property.

    .circle {
       will-change: transform;
    }   

in safari or older browsers：

    .circle {
       transform: translate Z(0);
    }   

will-change is a hint the browser can ignore and that gives the browser more options. it's better to let the browser decide what to do where you can. with will-change, it gives it a hint but leading it decide what to do with it.


promoting elements to layers can be super awesome for avoiding paint problems, especially those related to movement or opacity changes.

if you change a visual property though, like say for instance, text color or shadows, promoting an element won't help in any way, because you'll still have to paint it. So make sure only using layer promotion when it makes sense.


##Will-change quiz

##Your Compositing Budget

layer management and compositing are not free. so this is a balancing act. there's no magic number of layers that you should aim for, but you are shooting for no more than two milliseconds in update layer tree and two milliseconds in compositing for 60 frames per second critical work, like animations. The key is knowing about the trade-offs and finding the right numbers for your own projects. 


##Layer Counting Quiz

if you promote an element to a layer, you need to be careful because you could accidentally create a lot of other layers with it due to overlap. 

The paint profile gives you awesome way to keep track of the layers that you're creating. the main thing is try to balance the compositing time and layer management with time that you spend in other part of the pipeline 

Applying `will-change: transform;` to all other elements might seem appealing but it's gonna send your memory usage and compositing time through the roof. in the end you might cause more problems than you solve, which is especially a problem on mobile.


## Painting and Compositing Quiz


##Make Some Quizzes


##The final project 

##Course Outro







===============================



#Summary
-----------

##Two basic concepts of web performance

###1. Rendering path of a single frame or the pipe line

**ParseHTML ---> Recalculate styles ---> layout ---> paint --->composite layers(layers)**

or:

**JavaScript(or CSS Anims, Web Animation API) ---> Style ---> layout ---> paint ---> composite**

JS is yellow in TL

Style and layout are purple in TL

Paint and composite are green in TL



###2. App's life cycle

**LIAR:**

load (1000 ms)

idle (50 ms)

**animations** (16 ms, or 60fps)

response (100 ms)


##Performance problems and solutions

1. **Long running JavaScript**: 
    - `requestAnimationFrame`
    - web workers
2. **Selector complexity and forced sychronous layout (FSL)**:
    - BEM
    - read layout properties then batch style changes
3. **Layer management (trade-off between reducing paint time and increasing layer management time)**:
    - will-change: transform;
    - transform: translate Z(0);


















