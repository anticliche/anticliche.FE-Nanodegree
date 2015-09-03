#Course Summary


HTML and CSS are markup languages and the building blocks that make up the web. This course will teach you how to use them, but also much more than that. It is called "Not your Typical Intro..." because it does not follow the usual pattern of other courses and tutorials that you find on the Internet. Usually HTML and CSS is taught with a focus on language syntax. But knowing syntax alone does not enable you to create a webpage from a design. You need to know where to start and how to approach the task, in other words - you need to learn how to think like a front-end developer.

In this course you will **learn how to convert digital design mockups into static web pages**. We will teach you how to approach page layout, how to break down a design mockup into page elements, and how to implement that in HTML and CSS.

You will also learn about responsive design techniques, which are increasingly important in a world where mobile devices and TV screens are used more and more often to look for information and entertainment.

## Why Take This Course?

Front-end Web Developers must have **a fundamental understanding of HTML and CSS** which we’ll accomplish in this course by converting digital design mockups into static web pages. To build the web pages you will use HTML, CSS, and take advantage of the **Bootstrap**, the popular Twitter framework.

After completing this course you will be able to **build a responsive portfolio site**, with your own CSS framework, with the functionality to add your future projects to it. Most importantly, you will have **an understanding of the DOM and how HTML, CSS, and JavaScript all relate to each other**.

## Extra Readings

- **CSS reference**: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

- **A Complete Guide to Flexbox**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- **HTML Validation Service**: https://validator.w3.org/#validate_by_input

- **CSS Validation Service**: https://jigsaw.w3.org/css-validator/#validate_by_input

- **HTML 5.1 Document**: http://www.w3.org/TR/html51/

- **fonts**: http://www.google.com/fonts

- **Chrome developer tools keyboard shortcuts**: https://developer.chrome.com/devtools/docs/shortcuts#opening-devtools

- **bootstrap**: http://getbootstrap.com/

- **foundation**: http://foundation.zurb.com/

- **yaml**: http://www.yaml.de/

- **960 grid**: http://960.gs/

- **suzy**: http://susy.oddbird.net/

- **frameless**: http://framelessgrid.com/


-----------------------------------



#Lesson 1 - From Design to Code (HTML, CSS, and Boxes)

##Summary
Diligently employ a code/test/refine strategy as you precisely and deliberately translate initial design documents into static web pages. You'll also investigate the Document Object Model (DOM) and its implications for web development.

##The first step
Think of a website like a house.

- HTML: structure
- CSS:style
- JS:inteacitve components

##Exploring the web
use Chrome dev tool to observe wikipedia page:

- all element are rectangular
- you can read the same text as on the page

##Page structure

Tree like structure

##Summary of HTML
how html classifies page content, it tells the browser which part is the text, which part is the image and so on.

##Visual Styling
explore the style section of Chrome dev tool

##HTML-CSS-DOM

- HTLM, CSS: language, syntax+rules
- DOM: document object model <---elements in tree<---tag<---html

##Boxes everywhere
by unchecking the border radius shows the awesome power of style and represents everything on a web is a box. 

##Boxes, grids and rules
By thinking like boxes, we can easily rearrange the website.   

##Boxifying design
draw boxes to divide the mockup design

##Boxes to html
define boxes with div tag

think of class attributes as lebels on boxes
##Adding style

head tag is where to add the link of style file

    <!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <div class="title">My App</div>
        <div class="app">
            <div class="screenshot">image</div>
            <div class="description">text</div>
        </div>
    </body>
    </html>

##Uderstanding CSS
cascading style sheets
the most specific rule(cascading) is applied to every element.

##Styling up
      p {
      }
      
      .description {
          color: red;
      }

##Using semantic tags
change div tag to tags such as h1, h2, h3...

##The box revisited 
explore [The box model]("http://assignments.udacity-extras.appspot.com/courses/html-css/samples/box-model.html") using dev tools
focusing on the Computed tab
content, padding, border, margin

how many spaces the box will acctually take on the screen without recalcuting it everytime you change these values  

by writing the css file

##Positioning boxes

display:flex
flex stands for flexible boxes

##Adding image

##Code,test,refine
first, get the structure of the page right(by visually boxifying the design), then move on to work on the tags, if sth needs to be heading, make it so, then think about the size of the boxes, how big they should be, and then how to position them where you want on the screen.

1. look for natural boxes
2. look for repeated styles & semantic elements
3. write your html
4. apply styles(from biggest to smallest)
5. fix things

##More on devtools
can be helpful during the code,test,refine routine. able to testify things without actually changing the html and css files.

##Comparing with the design
##Verifying HTML and CSS

##Lesson1 Practice 
learn from your favorite websites by using the chrome dev tools


----------------------------------


#Lesson 2 - Your Own Framework (CSS Frameworks, Responsive Layouts)

##Summary
Take pride in creating and personalising your own multi-platform, responsive CSS framework for publishing your professional portfolio projects to the web.

##Grid based design
##Building a framework 
almost every website follows some type of grid structure.

frameworks: collections of CSS classes that make page layout easy to implement

##Responsive web pages
resolution of screen in pixels
creating contents with the max-width 960px is pretty common.
respinsive: contents changing their width based on the width of their browsers.

##Defining the layout
demonstrating the layout by using lego bricks.

implementing reponsive design
don't use a fixed pixel size to determine the width of columns, use percentage. 

12 columns grid size allows for just enough customization.

##Creating the project

##From idea to code
which CSS classes should you create?

- .row of 100% page width
- columns of 1/12 - 12/12 page width

1/12=8.33%  2/12=16.66% ... 12/12=100%

##Framework version 01

##Negative space
use padding and margin to create negative space
margins let us put elements away from each other
paddings create space internally

##Overflows

##Media specific CSS
**media queries**: change CSS properties depending on device, screen size and color.

`@media only screen and (max-width: 300px) {
     p {
         background-color: blue;
     }
  }`

##CSS resetting
ensure users have same awesome experience regardless of browsers or operating systems.
css normalize

solution: `<link rel="stylesheet" src="//normalize-css.googlecode.com/svn/trunk/normalize.css"`

##Your problem has been solved before
somebody else has run into that same issue,
so checking sites like stackoverflow or searching around internet will most times yields the answer you're looking for.

##Applying the framework 
figure out the structure of your html

##Semantic structure
semantic tags include:
header 1-4: `<h1>`,`<h4>`
image: `<img>`
form: `<form>`

##Tuning the page
use placehold images
like: http://placehold.it/350x150

##Continuous improvement
changing background colors
get fonts at google(paste the font link into the head of html and paste the style you choose into the css)

##Code,test,refine,repeat
1. starting out by making the layout as much as the mockup as possible
2. once you have the layout, start customizing it



---------------------------

#Lesson 3 - Learning and Using Bootstrap (Bootstrap and Other Frameworks)

##Summary
Strategically investigate an existing professional CSS framework as you use it to build a website using responsive design principles while maintaining code readability.

##Site structure
With the design mockup, what steps can you complete now?

- create a folder structure for the project
- create a DOM tree for the page
- write HTML that defines the DOM

##Choosing a framework

- [bootstrap]("http://getbootstrap.com/")
- [foundation]("http://foundation.zurb.com/")
- [yaml]("http://www.yaml.de/")
- [960 grid]("http://960.gs/")
- [suzy]("http://susy.oddbird.net/")
- [frameless]("http://framelessgrid.com/")

##Reading documentation
[Bootstrap CSS Documentation]("http://getbootstrap.com/css/")

##Choosing features
customize: pick and choose just parts of the framework that we need

##Minified CSS files

##Exploring the Framework
grid system:

- Rows must be placed within a `.container` (fixed-width) or `.container-fluid` (full-width) for proper alignment and padding.
- Use rows to create horizontal groups of columns.
- Content should be placed within columns, and only columns may be immediate children of rows.

##Applying bootstrap grid system
very important!!! 在 chrome dev tools里动手操作，把html排版成mockup要求的样子。

##Responsive page
`<img src="..." class="img-responsive" alt="Responsive image">`

##Using bootstrap typography
read the CSS document

##Costom CSS for your site

##Watch a front end engineer do this 
apply what the bootstrap can do 

##Watch a front end engineer do this pt2
apply our own style
fonts...

模仿写作他的代码

an example:

    `body {

	 font-family: 'Lato', sans-serif;

	 color: #747704

	 font-weight: 300;
    }
  
    .text-muted {

	 color: #BCBBBB;
    }

    .text-thin {

	 font-weight: 100;

    }`

##A small taste of interactivity
modal

##Self-built framework vs existing
























































