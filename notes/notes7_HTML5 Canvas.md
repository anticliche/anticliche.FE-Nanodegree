#Course Summary

Canvas is an HTML5 element which gives you drawable surface inside your web pages you can control with JavaScript. Powerful enough to use for compositing images and even creating games.

In this course, through several sample projects, you’ll learn how to use the canvas; how to make compositions using shapes, images, and text; how to create effects and filters on images and how to create animations.

##Why Take This Course?

You should take this course if you want to move beyond static HTML tag content and build on your JavaScript skills to make interactive and engaging experiences. Maybe you want to start on the journey of creating a game or complex animations, maybe you want to create visually compelling compositions like infographs, or maybe you just want to make memes. Canvas to the rescue.

You’ll learn how the Canvas 2D API works and how to use it to create interesting applications. Each sample project will expose you to different aspects of HTML5 Canvas that you can use to make your own applications.


##Extra Readings

- CanvasRenderingContext2D.drawImage():
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

- HTML Canvas 2D Context:
http://www.w3.org/TR/2dcontext/

- Web colors:
https://en.wikipedia.org/wiki/Web_colors

- LET’S CALL IT A DRAW(ING SURFACE): http://diveintohtml5.info/canvas.html#text

- Seven grayscale conversion algorithms (with pseudocode and VB6 source code): http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/

- Manipulating video using canvas:
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas

- requestAnimationFrame for Smart Animating:
http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

- Developing HTML5 games (1hr video presentation):
http://www.html5gamedevelopment.com/html5-game-tutorials/2013-12-developing-html5-games-1hr-video-presentation



------------------

#Lesson 1: HTML5 Canvas Basics

In this lesson, we’ll discuss what the Canvas is, how it affects graphics in the browser and what makes it truly awesome. We’ll make compositions with text and images (e.g. memes) as we learn the API.

## Introduction

painting by using js code.

## somewhere cool

## Demo and Rationale

why build a meme generator?

have a website that you want to add some sort of chart or maps to. It is possible to do that with some artful positioning of HTML tags in CSS or even Flash, but it's much easier to do with Canvas. Canvas has a lot of functions that allow us to draw shapes, images, text, and patterns. and instead of working through a bunch of examples with charts and data, we thought it'd be fun to make some memes.

## Favorite Meme


## Creating a Canvas

    <html>
    <head>
    </head>
    <body>
      <canvas id="c" width="200" height="200"></canvas>
      <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");
        
        var image = new Image();
        
        image.onload = function() {
          console.log("Loaded image");
          ctx.drawImage(image, 0, 0, c.width, c.height);
        }  
        
        image.src = "fry_fixed.jpg";
        
      </script>
    </body>
    </html>  

canvas tag in html. the tag takes some width and height parameters to allocate some space on the web page for the canvas.

get an object that we can use for drawing. to use a canvas, we need to access it from our JS code.

we'll start by grabbing the canvas using the selector to get the canvas with the idea of C from the body. and then from the canvas, we need to grab its context. so to do that we'll simply call the method--getContext--on the canvas that we've created, and we have to pass in the parameter for 2d.


## Coordinate system

与十字坐标系不同的坐标系，y轴向下为正。


## Loading Images Code

images in javascript get loaded asynchronously, which means that we need to do work after it's loaded, so we'll set the onload function on the image object to what we've got here.


## Saving Images

    <html>
    <head>
    </head>
    <body>
      <canvas id="c" width="200" height="200"></canvas>
      <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");
        
        var image = new Image();
        
        image.onload = function() {
          console.log("Loaded image");
          ctx.drawImage(image, 0, 0, c.width, c.height);
          var savedImage = c.toDataURL();
          window.open(savedImage);
          }  
        
        image.src = "fry_fixed.jpg";
        
      </script>
    </body>
    </html>  


`var savedImage = c.toDataURL();`
toDataURL, created a text string that represents the photo. it can output a couple different image formats.

`window.open(savedImage);`
open the new image in a different window.


## Create a local web server(optional)

In the previous morsel, we received the following error message because we weren't directly hosting the images we wanted to display.

    Uncaught SecurityError: Failed to execute 'toDataURL' on

    'HTMLCanvasElement': Tainted canvases may not be exported.

There are couple of ways to get around this error and one (optionally) is to start a local web server.

**Using Python SimpleHTTPServer**

The simplest way is to use `SimpleHTTPServer` if you already have Python installed.

Python comes already installed on most Mac OS X and Linux computers. In a terminal window, change to the directory that has your HTML files and run the following command:

`python -m SimpleHTTPServer`

After it starts, you can navigate to http://0.0.0.0:8000/index.html

**Using MAMP / MAMP Pro**

MAMP is an integrated server environment containing executables for running a web server, a database, and several programming languages. MAMP stands for Mac OS X, Apache, MySQL, and PHP/Perl/Python. Though it was originally developed for the Mac, there are versions that run on Windows.

After installing MAMP, open it and start the server.

Go to settings and set the directory to where you have saved your HTML files.

Navigate to http://localhost:8888/MAMP/index.html



## Drawing rectangles

    <html>
    <head>
    </head>
    <body>
      <canvas id="c" width="200" height="200"></canvas>
      
      <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");
        
        ctx.fillRect(100, 100, 100, 100);
        
        ctx.strokeRect(50, 50, 50, 50);
        
      </script>
    </body>
    </html>  

filled rectangle and stroke rectangle 

filled rectangles are filled in with colors while stroke rectangles are not.


## More about Rectangles

We can use what we already know about rectangles to "erase" portions of a canvas using `fillRect` and setting the `fillStyle` to our background color. Your background color will likely be white. You haven't learned about `fillStyle` yet but trust me on this, that's how you set a color. So act surprised when it comes up again in a couple videos.

`clearRect` is an easier way to do the same thing without modifying the `fillStyle`. You'll learn more why changing the `fillStyle` isn't always the best option a bit later.

If you have a canvas `c` and given some code to draw a rectangle in a given color, you might write something like

    var c = document.querySelector("#c");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "blue";
    // Start at (0,0) and draw a 50px x 50px blue rectangle.
    ctx.fillRect(0,0,50,50);
    // Start at (0,0) and clear a 25px x 25px rectangle.
    ctx.clearRect(0,0,25,25);

If you want to erase the entire canvas, you could call `clearRect` with the dimensions of canvas as follows:

`ctx.clearRect(0, 0, c.width, c.height);`

A slightly shorter way to clear a full canvas is to change either the height or the width on the canvas:

`c.width = c.width;`

Doing so saves some keystrokes but may not be as readable to others who are viewing your code.

Use clearRect when you want to erase a portion of the canvas or object.


##Paths

    <html>
    <head>
    </head>
    <body>
      <canvas id="c" width="200" height="200"></canvas>
      
      <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");
        
        ctx.fillRect(100, 100, 100, 100);
        
        ctx.strokeRect(50, 50, 50, 50);
        
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(50, 50);
        ctx.lineTo(50, 10);
        ctx.lineTo(10, 10);
        ctx.fill();
        ctx.stroke();
        
        
      </script>
    </body>
    </html>  


## Moving Objects in a Canvas

So far, we’ve been drawing everything using exact coordinates. This is fine for a couple shapes but breaks down if you need to draw a bunch of objects.

Canvas2D allows you to translate (move), rotate, or scale objects.

**Scaling**

`scale(x,y)` multiplies the x and y values by a given factor so

`ctx.scale(2,3);`

will make all values twice as large on the x axis and three times as large on the y axis.

**Translation**

`translate(x,y)` moves all subsequent draw commands by x number of pixels on horizontally and y pixels vertically.

`ctx.translate(20,40);` moves all elements drawn after it 20 pixels to the rights and 40 pixels down.

**Rotation**

`ctx.rotate(angleRadians)` rotates an object a certain number of radians (generally) about its center. You probably may have learned about radians in school but here's a handy formula to convert a value from degrees to radians.

`radians = degrees * (Math.PI/180)`

Don't ask us why everything in Computer Graphics uses radians. We have no idea. :)

**Order of operations**

You should generally scale objects first, rotate them next, and then finally translate last. There are times when you'd want to rotate around an arbitrary point instead of an object's center, that's out of scope for this lesson.

It’s important to note that whatever transformations apply for all subsequent objects until you reverse them.


## Using Transformations


## Saving and Restoring Canvas State

Every canvas objects contains a stack of drawing states. Stacks are data structures that only let you push new items at one end. When you retrieve an item, it's the last item that was pushed or Last In-First Out(LIFO).

Let's see how this would work in code. Let's say you wanted to draw a couple rectangles in different colors. For this small example, we could get away with reassigning the `fillStyle` each time instead of using `save` and `restore`.

    var c = document.querySelector("#c");
    var ctx = c.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(0,0,50,50);

    ctx.fillStyle = "green"
    ctx.fillRect(100,100,10,10);

    ctx.fillStyle = "blue";
    ctx.fillRect(200,10,20,20);

This is better.

    var c = document.querySelector("#c");
    var ctx = c.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(0,0,50,50);

    // Save state with blue fill
    ctx.save();
    ctx.fillStyle = "green";
    ctx.fillRect(100,100,10,10);
    // Restore to blue fill
    ctx.restore();

    ctx.fillRect(200,10,20,20);

The canvas state can store:

- The current transformation matrix (rotation, scaling, translation)
- `strokeStyle`
- `fillStyle`
- `font`
- `globalAlpha`
- `lineWidth`
- `lineCap`
- `lineJoin`
- `miterLimit`
- `shadowOffsetX`
- `shadowOffsetY`
- `shadowBlur`
- `shadowColor`
- `globalCompositeOperation`
- `textAlign`
- `textBaseline`
- The current clipping region


##Colors

      ctx.strokeStyle = "#33CC33";
      
      ctx.strokeRect(50, 50, 100, 100);
      ctx.beginPath();
      ctx.moveTo(75, 75);
      ctx.lineTo(125, 125);
      ctx.lineTo(125, 75);
      
      ctx.fillStyle = "blue";
      ctx.fill();


## Drawing Text

      ctx.strokeStyle = "#33CC33";
      
      ctx.strokeRect(50, 50, 100, 100);
      ctx.beginPath();
      ctx.moveTo(75, 75);
      ctx.lineTo(125, 125);
      ctx.lineTo(125, 75);
      
      ctx.fillStyle = "blue";
      ctx.fill();

      ctx.strokeText("HELLO UDACITY!", 50, 10);


## Meme maker programming



## Lesson recap







-----------------


#Lesson 2: From Pixels to Animation

In this lesson, we’ll learn about how images are stored by the Canvas2D context, how to modify them on a pixel level by applying various effects and filters, and how to create animations.


## Silent Film Vignette

canvas is the visual only video that doesn't provide sound.

Instructor Notes

Don't worry if you can't follow all the code in these links right now. Try to look at them from a high level and don't worry about the syntax too much.

Tanner Helland outlines a bunch of different algorithms for computing grayscale here in pseudocode and Visual Basic. Mozilla has a great tutorial on using how to do a green screen effect.


## What is a pixel?

pixels make up the data of a photo. every color imaginable can be represented a combination of red, green, and blue.

depending on the type of image you are  storing on your computer, you might also have an additional alpha channel that stored how solid or transparent the final color will be.


## Filters and Effects

## Canvas 2D Image Data Quiz

The image backing a canvas is represented in JS with an Image Data object. 

It contains values for the width, and height of the source image in pixels, along with the data array containing the red, green, blue and alpha values for each pixel.

Image data:

- width
- height
- data (Uint8ClampedArray)

the data property is usually represented by a U int 8 Clamped Array:

- U means the array is unsigned or contained only positive values.
- int 8 indicates that it will store 8-bit numbers. 8-bit positive numbers range from 0 to 255.

it's one giant list you have to parse when you apply effects.

We can retreat or modify the image data by calling one of these functions.

- createImageData: initialize a blank image data object that you can modify.
- getImageData: 
- putImageData:
the later two will retrive or store data to a backing canvas.

**Working with ImageData**

1) Create a Canvas2DRenderingContext
2) Call getImageData to retrieve the pixels in the canvas
3) Change every 10th pixel to a solid green color

Hint:Colors values range from 0-255

    
        <script type="text/javascript">   
         var canvas = document.querySelector("canvas");
         var ctx = canvas.getContext("2d");
         // Get Image Data object
         var data = ctx.getImageData(0, 0, 400, 400);
        
         function paintGreen(imageData) {
           var numPixels = imageData.data.length /4;
           for (var i = 0; i < numPixels; i++) {
             if (i % 10 === 0) {
               imageData.data[i * 4 + 1] = 255;
               imageData.data[i * 4 + 3] = 255;
             }
           }
           ctx.putImageData(imageData, 0, 0);
         }  
          
         paintGreen(data);
        </script>
        
- `var data = ctx.getImageData(0, 0, 400, 400);` 
pixel data is stored in one large list without any real seperation between pixels.         
       
- `var numPixels = imageData.data.length /4;`        
if we know how many components are in each pixel, we can use that data to figure out the number of pixels stored in the array. ( 4 components of each pixel)  

- `imageData.data[i * 4 + 1] = 255;`
Once we have that number we can change the appropriate pixel component. 

- `imageData.data[i * 4 + 3] = 255;`
The tricky part is you can't just set the green element. You also have to set the alpha channel to a non zero value as well.


##Grayscale Quiz

    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    
    var image = new Image();
    image.onload = function() {
      ctx.drawImage(image, 0, 0);
      //makeGrayScale();
    }  

    image.src = "vincealongi-seascape.jpg"

    var makePixelGrayScale = function (r, g, b, a) {
      var y = (0.3 * r) + (0.59 * g) + (0.11 * b);
      return {r: y, g:y, b:y, a:y};
    }  

    function makeGrayScale() {
      var r, g, b, a;
      var imageData = ctx.getImageData(0, 0, 640, 426);
      var numPixels = imageData.data.length /4;
      for (var i = 0; i < numPixels; i++) {
        r = imageData.data[i * 4 + 0];
        g = imageData.data[i * 4 + 1];
        b = imageData.data[i * 4 + 2];
        a = imageData.data[i * 4 + 3];
        pixel = makePixelGrayScale(r, g, b, a);
        imageData.data[i * 4 + 0] = pixel.r;
        imageData.data[i * 4 + 1] = pixel.g;
        imageData.data[i * 4 + 2] = pixel.b;
        imageData.data[i * 4 + 3] = pixel.a;
      }
      ctx.putImageData(imageData, 0, 0);
    }
   

## Play with Pixel Manipulation 
      
      
## Playing Videos with Canvas

These kinds of effects get more interesting when your source material is a set of moving pictures. The effects that we're doing on single images can be done in real time while showing a movie.

    <html>
      <head> </head>
      <body>
      <video id="v" controls loop src="HOTRODS.mp4>
       </video>
       <canvas id="c"></canvas>
       <script type="text/javascript">
         var canvas = document.querySelector("canvas");
         var ctx = canvas.getContext("2d");
       
         document.addEventListener
       ('DOMContentLoaded', function() {
           var v = document.querySelector('#v');
           var canvas = document.querySelector('#c');
           var ctx = canvas.getContext('2d');
           
           v.addEventListener
         ('loadedmetadata', function() {
            canvas.width = this.videoWidth;
            canvas.height = this.videoHeight;
           });
           
           var draw = function() {
             canvas.getContext('2d').drawImage(v, 0, 0);
           }
           
           v.addEventListener('play', function() {
           if (v.paused || v.ended) return;
           });
           
         });   
         
         
      </body>
    </html>    


our video can be any given size, so hard coding dimension is not optimal. Luckily for us, the video tag has a loaded metadata event that we can subscribe to and set the width and the height. 

Like loaded metadata, the play event tells us when the user has started playing the video. If the video isn't paused or ended, it's going to execute this draw funciton, which tells it to draw the image to the canvas.


## requestAnimationFrame

While we could solve our problem by calling our draw function with setInterval or setTimeout, the better way is to use requestAnimationFrame.

requestAnimationFrame, only sends a request if the last frame is already finished drawing, or the window is actively being viewed.

setInterval and setTimeout, execute no matter what. So if your drawing takes a really long time to finish a single frame, and your interval is really small, it can cause your browser to slow down or crash. So when add a call to requestAnimationFrame, after this drawImage call here. It makes sure the canvas gets updated.


           var draw = function() {
             canvas.getContext('2d').drawImage(v, 0, 0);
             requestAnimationFrame(draw);
           }


## The Game Loop / Processing User Input

Playing a video in a canvas using `requestAnimationFrame` is just one of the many interactive things you can do.

To create more complex applications, we have to think more about not only the things we are displaying to the user on-screen but also any input (keyboard, mouse, audio) the user might generate that we need to process.

The game loop is a sequence of events that run continuously while an app or game is being used. `requestAnimationFrame` handles most of the heavy lifting in that it ensures that your app runs as close to 60 frames per second as possible while the app is being actively viewed.

Assuming we have already creating the functions we plan to call, a fleshed out game loop could look something like this.

    function draw() {
    // request to execute this function at the next earliest convenience
    requestAnimationFrame(draw);
    processInput();
    moveObjectsAndEnemies();
    drawAllTheThings();
    }


**Processing Keyboard Input**

While it isn't too difficult to process keyboard presses by hand, I rather stand on the shoulders of giants and use open source projects that have perfected a library serving the thing I want to do. One such library is Kibo.

Kibo allows you to reference keys by their common names('a', '3', 'up') instead of their keycodes greatly simplifying your code. You can also attach events to pressing or releasing a key as well as modifier keys or wildcards.

    var k = new Kibo();
    k.down(['up', 'w'], function() {
       // Do something cool on the canvas
    });

    k.up(['enter', 'q'], function() {
       // Do other stuff.
    });

**Processing Mouse Input**

Like many other DOM elements, the canvas can accept `click` and `mousedown` events. We do however have to do a little work to figure out where exactly in the canvas the user has clicked. Mouse click events return `clientX` and `clientY` positions that are global to the browser window. Every element knows where it is positioned relative to the browsers (0,0) position (`offsetLeft` and `offsetTop`).

To get the canvas-relative of a click, you need to subtract the `offsetLeft` and `offsetTop` values from `clientX` and `clientY`. Check out the example code below.

    var c = document.querySelector("canvas");

    function handleMouseClick(evt) {
        x = evt.clientX - c.offsetLeft;
        y = evt.clientY - c.offsetTop;
        console.log("x,y:"+x+","+y);
    }
    c.addEventListener("click", handleMouseClick, false);


## You're done






















