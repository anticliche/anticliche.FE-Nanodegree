#Course Summary

In this course you'll learn the fundamentals of responsive web design with Google's Pete LePage! You'll create your own responsive web page that works well on any device - phone, tablet, desktop or anything in between.

You’ll start by exploring what makes a site responsive and how some common responsive design patterns work across different devices. From there, you’ll learn how to create your own responsive layout using the viewport tag and CSS media queries. As you proceed, you’ll experiment with major and minor breakpoints, and optimizing text for reading.

This course consists of 5 lessons. The first one is an overview of responsive design and introduces the way you’ll need to shift your thinking as you go from desktop first design, to responsive design. Lessons 2, 3, 4 and 5 will cover the important theoretical concepts of responsive design, and include plenty of hands-on exercises implementing what you’ve learned.

##Why Take This Course?

The way people browse the web is changing quickly - fewer and fewer users access the web at a desk in front of a large monitor with a keyboard and mouse. The web is increasingly being enjoyed on phones, tablets, wearables, TVs and everything in between. By designing a site to be responsive, it will look good and work well no matter what device your users have in front of them.

Throughout this course, you'll work through a project creating a home town website that works well on phones, tablets and desktop displays.

##Extra readings

Google's web fundamentals: 
https://developers.google.com/web/fundamentals/?hl=zh-cn

https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/

http://joelsaupe.com/programming/multiple-line-ellipsis-css/


##Project

###Building the home town app, part1 of 3

1. Add a <meta> viewport to the page with initial scale set.
2. Ajust CSS and markup so that everything displays in a single column. Use relative widths so that things strech to fit across any viewport width.
3. Make sure your touch targets are easy to hit.
4. Test your site across different viewports. Try it on different phones, tablets, and desktops.

###Building the home town app, part2 of 3

1. Pick a set of breakpoints and use one of the patterns that you learned to style the page so that it works across different devices.
2. Test on multiple phones, tablets and browser window sizes and adjust your breakpoints until you're happy.

###Building the home town app, part3 of 3

1. Update the sports table with your favorite sports team (make sure it's responsive!).
2. Double check your text. Is it too long? If so, make it fit more naturally.
3. Add a minor breakpoint if possible.
4. Try replacing a few of the images with responsive images. Check out the responsive images section of Web Fundamentals using the link: https://developers.google.com/web/fundamentals/media/images/
5. Share your final project in the forums.





--------------------------------


#Lesson 1 - Why Responsive?

##Summary
What is responsive web design and why is it important? What kinds of devices should we be targeting with our design? How can we best leverage the different capabilities of each device to provide great experiences to users? You’ll also make sure that your development environment is ready to go.

Topics covered:

- What is responsive design?
- Why does responsive design work for any device?
- Remote debugging and emulation in the browser

##Sites on mobile
##Share responsive sites
example: alistapart.com (a great resourse for web developers who want to stay on top of the game)

##Intro to project
RWD is an art, not a science, so there is no "right" solution.
Thinking responsively.

##Pan,zoom,touch,ick
example: google.com/finance in mobile phone

##Emulators,simulators and real devices
test your sites on different devices

an emulator（仿真器）:
https://www.browserstack.com/

##Setting up chrome dev tools
set the width, height, a device pixel ratio and the user agent

##Remote debugging intro

##Setup for mobile
turn on the developer mode in ur android device:
settings-->about device-->click on build number 7 times 
turn on usb debugging:
developer options-->usb debugging

##Using dev tools on mobile
open up chrome://inspect/ in laptop
-->connect mobile device and laptop through usb-->confirm allow usb debugging

inspect the pages that are running on ur mobile device 

主旨：将移动设备的界面转移到电脑上操作

##Mobile tools for iOS


---------------------------------

#Lesson 2 - Starting Small

##Summary 

The best way to get started is to start small and build up. In this lesson, we’ll cover the key components that make a site great on a small screen, including setting the viewport, adding content and sizing the content to the viewport. You’ll start the home town site project, by making sure that it looks good on a small screen.

Topics covered:

- Why start small and build up?
- What is the viewport?
- Sizing content the content to the viewport
   - avoiding static sized items
- Touch targets, and why they should be large

##Defining the viewport

##Pixels, pixels and more pixels
hardware pixels
device independent pixels (dip)

the chromebook browser has a viewport of 1280 dips and 2560 hardware pixels.

font boosting

device pixel ratio = hardware pixels / dip

The viewport and the device pixel ratio are both likely causes for the differences between devices.

##Calculate DPR
##Calculate CSS pixels

##How wide is the viewport 
viewport width = physical pixels / DPR

##Setting the viewport
add the following code to the head of the page:

`<meta name="viewport" content="width=device-width, initial-scale=1">`

##Large fixed width elements
since CSS pixels varies so widely across all there different devices, you shouldn't count on a specific viewport width for your content to render well.
so use relatively positions instead of absolute positions, such as width: 100%

##Max-width on elements
CSS does allow contents to overflow a container.

add this code to css file:

    img, embed,
     object, video {
      max-width: 100;
    }

##Tap target sizes
our fingers are about 45 pixels,
so the tap target should be at least 48 pixels width and 48 pixels height.

    nav a, button {
       min-width: 48px;
       min-height: 48px;
    }
   
##Start small
prioritized content
design small to large
code small to large
(small devices to large devices)
performance matters

##Project part 1
Building the home town app, part1 of 3

1. Add a <meta> viewport to the page with initial scale set.
2. Ajust CSS and markup so that everything displays in a single column. Use relative widths so that things strech to fit across any viewport width.
3. Make sure your touch targets are easy to hit.
4. Test your site across different viewports. Try it on different phones, tablets, and desktops.





------------------------


#Lesson 3 - Building Up

##Summary
Once you’ve got a page optimized for small screens, it’s time to start thinking about how they’ll look on larger screens. Learn how to use CSS media queries to add breakpoints that change the layout depending on the screen size or other device characteristics.

Topics covered:

- CSS media queries
- What is a breakpoint, and how to choose one
- Using the CSS flexbox to modify layout


##Intro
thinking responsively meanings thinking about the user experience for every device.
picking the right design pattern(layout). 

##Basic media query 
media query provides an easy logic to apply different styles depending on device charecters.

way 1:(many small files, many http requests)

`<link rel="stylesheet" media="screen and (min-width: 500px)" href="patterns.css">`

only applys when the screen is over 500px.

way 2: (few http requests, but the files tend to be a little bigger)

    @media screen and (min-width: 500px) {
    
      body { background-color: green; }
 
    }
 
no way 3, for perf matters

`@import url("no.css") only screen and
  (min-width: 500px);`

min-width, max-width, these two are often been used.

##Breakpoints

##Picking breakpoints
look at the content to find right breakpoints

- start from the smallest
- open chrome dev tools to show the pixels

##Complex media queries

example:

`@media screen and (min-width: 301px)
 and (max-width: 600px) { 
 }`
 
##Grids
fruid grids
grids based layouts
like: bootstrap

##Flexbox intro
one of the most powerful tools to be used in layouts
its ability to fill the space that are available, if an element has extra room around it will expand to fit, or if its crowded, elements will shrink.

##Flexbox container
`display: flex`

the default of flexbox lies in a row, we can use `flex-wrap: wrap;` to let elements inside to wrap to the next line.

##Flex item
change the order of elements using the css order attribute

    @media screen and (min-width: 700px) {
     .dark_blue { order: 4; }
     .light_blue { order: 5; }
     .green { order: 2; }
     .orange { order: 3; )
     .red { order: 1; }
    }

##Deconstructing a flexbox layout

    .container {
    
     display: flex;
    
     flex-wrap: wrap;
   
    }
 
set the order and width of each element to meet the mockup requirment.

    header { width: 100%; order: 1; }
   
    .red { width: 50%; order: 2; }
   
    .orange { width: 50%; order: 3; }
   
    footer {width: 100%; order: 4; }
   
    .light_blue { width: 20%; order: 5; }
   
    .dark_blue { width: 60%; order: 6; }
   
    .green { width: 20%; order: 7; }`


-------------------------------

#Lesson 4 - Common Responsive Patterns

##Summary
Now that you’ve got the basics of responsive design down, you’ll learn about and practice some of the common layout design patterns used across sites. You'll also iterate on the home town site project, creating breakpoints for tablet and desktop layouts using the patterns from this lesson.

Topics covered:

- Mostly fluid pattern
- Column drop pattern
- Layout shifter pattern
- Off canvas pattern

##Intros to patterns

- Mostly fluid pattern
- Column drop pattern
- Layout shifter pattern
- Off canvas pattern

##Pattern - column drop

     .container {
      display: flex;
      flex-wrap: wrap;
     }
   
     .box {
      width: 100%;
     }
   
     @media screen and (min-width: 450px) {
       .dark_blue {
        width: 25%;
      }
      .light_blue {
        width: 75%;
      }
     }
     
      @media screen and (min-width: 550px) {
        .dark_blue, .green {
          width: 25%;
       }
       .light_blue {
         width: 50%;
       }
      }
     
##Pattern - mostly fluid

     .container {
      display: flex;
      flex-wrap: wrap;
     }

     .box {
      width: 100%;
     }
     
     @media screen and (min-width: 450px) {
       .light_blue, .green {
         width: 50%;
       }
     }
     
     @media screen and (min-width: 550px) {
       .dark_blue, .light_blue {
         width: 50%;
       }
       .green, ,red, .orange {
         width: 33.333333%;
       }
     }
     
     @media screen and (min-width: 700px) {
       .container {
         width: 700px;
         margin-left: auto;
         margin-right: auto;
       }
     }

##Pattern - layout shifter 

     .container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
     }

     .box {
      width: 100%;
     }
     
     @media screen and (min-width: 500px) {
       .dark_blue {
         width: 50%;
       }
       .container2 {
         width: 50%;
       }
     }
     
     @media screen and (min-width: 600px) {
       .dark_blue {
         width: 25%;
         order: 1;
       }
       .container2 {
         width: 50%;
       }
       .red {
         width: 25%;
         order: -1;
       }
     }

##Pattern - off canvas 
places less frequently used contents, for example navigation or add menues of screen, only showing them if the screen is large enough.

      nav {
        width: 300px;
        height: 100%;
        position: absolute;
        transform: translate(-300px, 0);
        transition: transform 0.3s ease;
      }
      nav.open {
        transform: translate(0, 0);
      }
      
      @media screen and (min-width: 600px) {
        nav {
          position:relative;
          transform: translate(0, 0);
        }
        body {
          display: flex;
          flex-flow: row nowrap;
        }
        main {
          width: auto;
          flex-grow: 1;
        }
      }
      
##Project update pt2

Building the home town app, part2 of 3

1. Pick a set of breakpoints and use one of the patterns that you learned to style the page so that it works across different devices.
2. Test on multiple phones, tablets and browser window sizes and adjust your breakpoints until you're happy.

 

 
--------------------------------

#Lesson 5 - Optimizations

Learn strategies for minor breakpoints used to adjust the margins or padding on an element, or increase the font size to make it feel more natural in the layout. You’ll also learn about strategies for dealing with tables and optimal text readability. At the end of the lesson, you'll iterate for the last time on the home town site, adding minor breakpoints to really make the experience stand out.

Topics covered:

- Minor break points

- Optimizing text layout
    - font size
    - optimal line length

- Responsive tables, and strategies for dealing with them       
     

##Images
using the same images but changing the resolution


##Responsive tables intro
tables overflows the screen in small devices

- hidden columns
- no more tables
- contained tables

##Responsive tables - hidden columns
the biggest problem: hiding content for the user

    @media screen and (max-width: 499px) {
      .gametime {
        display: none;
      }
    }

##Responsive tables - no more tables

##Responsive tables - contained scrolling

    div. contained_table {
      width: 100%;
      overflow-x: auto;
    }


##Fonts
measure: the length of a line of text
45-90 charecters per line  65 for web

use measures as a factor for picking breakpoints

    .goodFonts {
       font-size: 16px;
       line-height: 1.2em;
    }


##Minor breakpoints

     @media screen and (min-width: 450px) and (max-width: 550px)
       body { font-size: 1em; }
       
        .seven-day-fc .temp-low,
        .seven-day-fc .temp-high {
          display: inline-block;
          width: 30%;
        }
        .seven-day-fc .icon {
          width: 60px; 
          height: 60px;
        }
     }      
     

##Final projects updates

Building the home town app, part3 of 3

1. Update the sports table with your favorite sports team (make sure it's responsive!). **{tables}**
2. Double check your text. Is it too long? If so, make it fit more naturally. **{optimal line length}** **(未完成）**
3. Add a minor breakpoint if possible. **{minor breakpoints}**
4. Try replacing a few of the images with responsive images. Check out the responsive images section of Web Fundamentals using the link: https://developers.google.com/web/fundamentals/media/images/
**{images}** **（未完成）**
5. Share your final project in the forums.


In the [Downloadables]("https://www.udacity.com/api/nodes/3484399460/supplemental_media/rwdf-l5-solutionzip/download") section, you can find a link to a zip file with our solution to the project.

How did the ellipsis happen? [Here's a trick]("https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/") for adding an ellipsis to a single line, and [here's a trick]("http://joelsaupe.com/programming/multiple-line-ellipsis-css/") for adding an ellipsis when you have multiple lines. These can be tricky. It took a bit of trial-and-error on my part before I was happy with the result.

















