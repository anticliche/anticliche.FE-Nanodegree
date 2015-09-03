#Course Summary

Did you know that images account for more than 60% of the bytes on average needed to load a web page?

In this course you will learn how to work with images on the modern web, so that your images look great and load quickly on any device.

Along the way, you will pick up a range of skills and techniques to smoothly integrate responsive images into your development workflow. By then end of the course, you will be developing with images that adapt and respond to different viewport sizes and usage scenarios.


##Why Take This Course?

Quick load times and responsive content leads to higher conversions. There's much more to images on the web than <img>. Attributes like srcset, markup techniques using CSS, fonts, and inline images, and the brand new <picture> element are now available to help you create the best possible experience for your users. This course will help you ensure that you deliver the highest quality images with the fewest possible bytes.


##Extra readings

- **Early version of Amazon**:
https://blog.bufferapp.com/wp-content/uploads/2014/02/amazon.jpg

- **Early version of The Facebook**:
https://upload.wikimedia.org/wikipedia/en/f/f8/Thefacebook.png

- **Google Art Project: The Tower of Babel**:
https://www.google.com/culturalinstitute/u/0/asset-viewer/the-tower-of-babel/bAGKOdJfvfAhYQ?hl=en&projectId=art-project

- **HTTP Archive--Average bytes to open a web page**:
http://httparchive.org/interesting.php#bytesperpage

- **Google's overview of Chrome DevTools**:
https://developer.chrome.com/devtools

- **Figure tag**: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure

- **Getting started with Grunt**: http://gruntjs.com/getting-started

- **Grunt for People Who Think Things Like Grunt are Weird and Hard**: https://24ways.org/2013/grunt-is-not-weird-and-hard/

- **Generate multi-resolution images with Grunt**: http://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/

- **Grunt plugin for generating multiple images**: 
https://github.com/andismith/grunt-responsive-images

- **CSS Image Sprites**:
https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/CSS_Image_Sprites

- **How to Use Responsive Background Image Sprites – CSS Tutorial**:
http://blog.brianjohnsondesign.com/responsive-background-image-sprites-css-tutorial/

- **HTTP2 for front-end web developers**:
"In a nutshell, HTTP/2 will mean that requesting multiple files will be less costly: prepare to stop using spriting, concatenating and other HTTP/1 hacks!"
https://mattwilcox.net/web-development/http2-for-front-end-web-developers

- **How CSS affects load time**:
http://www.smashingmagazine.com/2013/04/build-fast-loading-mobile-website/

- **Unicode character sets**:
http://unicode-table.com/en/sets/

- **List of Unicode characters**:
https://en.wikipedia.org/wiki/List_of_Unicode_characters

- **More on meta tag charsets**:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta

- **Zocial**:
http://zocial.smcllns.com/

- **Font Awesome**:
http://fortawesome.github.io/Font-Awesome/

- **We Love Icon Fonts!**:
http://weloveiconfonts.com/

- **Icon fonts on CSS-Tricks**:
https://css-tricks.com/examples/IconFont/

- **Responsive Hero Images**:
http://blog.cloudfour.com/responsive-hero-images/

- **Srcset and sizes**:
http://ericportis.com/posts/2014/srcset-sizes/

- **Device pixel density list**:
http://pixensity.com/

- **High DPI Images for Variable Pixel Densities**:
http://www.html5rocks.com/en/mobile/high-dpi/

- **Working with h units**:
https://github.com/ResponsiveImagesCG/picture-element/issues/86

- **Built-in Browser Support for Responsive Images**:
http://www.html5rocks.com/en/tutorials/responsive/picture-element/

- **Picturefill--A RESPONSIVE IMAGE POLYFILL**:
http://scottjehl.github.io/picturefill/

- **Responsive Images Community Group**:
http://responsiveimages.org/


##Project

**The responsive blog project, part1 of 3**

1. make the `<img>`s fit within their containers
- make the containers a reasonable width(recommand 50em)
- resize and compress images such that they remain sharp but the size of the page drops below 1.5mb. make sure you use automation tools!
- optional: add captions


**The responsive blog project, part2 of 3**

1. replace the smiley face image with a unicode smiley face.
- replace the flourish with a markup techique or vector graphic.
- add social media icon for Twitter, Facebook, Google+ and Digg to the bottom of the page.
- optional: add your own SVG logo.

**The responsive blog project, part3 of 3**

1. use <picture> with srcset to deliver images based on browser width and display density.
- add alt attributes to images with meaning.
- optional: try a new font and style the text better!

Don't forget to test on different devices and network settings!





---------------------------

#Lesson 1 - Getting up and running 

##Course introduction
the ability to embed images was the innovation really made the web takeoff. 

##Why responsive images
images take 62% of the web content.
improve user experiences 

"Create a product, don't re-imagine one for small screens, great mobile products are created, never ported."  ---- Brian Fling

##Intro to project


##Setting up your environment
dev tools
remote debugging on android with chrome

##Setup for mobile
##Using dev tools on mobile
##Mobile tools for iOS



--------------------------

#Lesson 2 - Units, Formats, Environment

##Summary

You can't optimize what you can't measure. In this lesson, you will start with comparing different kinds of images on the web and getting familiar with different units you can use to scale them.

You will also get a chance to set up your development environment so that responsive images become a painless part of your workflow.

At the end of the lesson, you will start working on the responsive blog project, where you have a chance to apply responsive image principles in a real-world scenario!

Topics covered:

- Sizing Images
- File Types
- Automation Tools

##Sizing intro

- resolution is too high
- not enough compression
- file is too big for mobile

automatic!
----------->

- resolution is just right
- perfect compression
- file is easily downloaded on mobile

##Spot the differences
图片大小不同，但有相同分辨率，那么图片的 compression level肯定不同。

##All about bits and pixels
Total bits = pixels x bits per pixel

less pixels x better compression = less bytes

##Requests and revenue
google:
0.4-->0.9 second increase
---> traffic and ad revenues down 20%

amazon:
every 100miliseconds increase
---> sales down 1%

##Relative sizing 
max-width: 100% is your friend!
two images side by side:relative sizing
    
     img {
        width: 50%;
     {
     
use width calc in dev tools:
  
     img {
        margin-right: 10px;
        max-width: 426px;
        width: calc((100% - 10px)/2);
     }  
  
last-of-type:
   
     img: last-of-type {
        margin-right: 0;
     }
     
##Calc solution
写的code和solution完全一致，但得不到正确答案，不知哪里出了问题。

    body {
      margin: 0;
    }
    img {
      float: left;
      margin-right: 10px;
      width: calc((100% - 20px)/3);
    }
    img: last-of-type {
      margin-right: 0;
    }


Note: There MUST be a space on each side of the + and - operators. (A space is not required around * and / as the problem is an ambiguity around negation.) For example: calc(100px - 10%) will work. calc(100px-10%) will not.


##Landscape and portrait

##Less well known CSS units
 
 `element.style {
     height: 100vh;
  }`
  
100vh: 100% of the viewport height

 `element.style {
     width: 100vmin;
     height: 100vmin;
  }`
  
width: 100vmax; width: 100vmax;

##Raster and vector

栅格图： a dot matrix data structure representing a generally rectangular grid of pixels, or points of color, viewable via a monitor, paper, or other display medium. 

矢量图：the use of geometrical primitives such as points, lines, curves, and shapes or polygons—all of which are based on mathematical expressions—to represent images in computer graphics.

png vs svg

Vector images can be scaled infinitely, which means that it'll be sharp and clear even on a 50m banner!


##File formats
JPEG SVG      , PNG好于jpg

Image formats: https://litmus.com/blog/png-gif-or-jpeg-which-ones-should-you-use-in-email

Image optimization: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization

More about WebP: https://developers.google.com/speed/webp/?csw=1

Browser support for WebP: http://caniuse.com/#feat=webp


##Spot the differences between images

there's no need to send images with natural resolutions higher than their display resolutions(unless you need to scale up for high DPI devices).

If the images had the same resolution with different file sizes, then compression might be correct.


##Compression, optimization and automation

ImageMagick:

- ImageMagick
- Simple ImageMagick installer for Mac
- GraphicsMagick (a fork of ImageMagick)

Grunt:

- Getting started with Grunt
- Grunt for People Who Think Things Like Grunt are Weird and Hard
- Generate multi-resolution images with Grunt
- grunt-responsive-images plugin for generating multiple images
- grunt-respimg plugin for a responsive image workflow

Files used in scripting examples:

- convert.sh (includes instructions)
- Gruntfile.js
- Imager.js: responsive image loading developed for BBC News

Image processing tools:

- ImageOptim (Mac only)
- Trimage - Similar to ImageOptim (Windows, Mac, Linux)
- ImageAlpha

----------------------

#Lesson 3 - Images with Markup

##Summary

Not all graphics need to be .JPGs or .PNGs. This lesson dives into using markup techniques like CSS and icon fonts to create responsive graphics. While markup techniques are awesome because they are natively responsive, they are often extremely lightweight, requiring a fraction of the bytes of traditional images!

At the end of the lesson, you will replace extraneous images with markup techniques and take advantage of font icons to add social media icons to the responsive blog project!

Topics covered:

- CSS Techniques
- Inlining Images
- Unicode
- Icon fonts

##Text problems
the quality isn't good and text can't be found by search engine.
不用图片，或少量使用图片，但同样可以起到了视觉美化的效果，通过css effects, web fonts, beautiful typographic.

sometimes the best image is no image at all.

##CSS techniques
CSS shadows cause latency, so use them sparingly.

##CSS background images

##Symbol characters
checkout the images as fonts

Unicode standard defines the universal charecter sets. 

Here's a big list of unicode characters.
http://unicode-table.com/en/#control-character


##Icon fonts

Icon Fonts Websites:

**Zocial**

add in html:

    <style>
      @import url(http://weloveiconfonts.com/api/?family=zocial);

      {class*="zocial-"]:before {
         display: inline-block;
         font-family: 'zocial', sans-serif;
         text-shadow: 3px 3px 3px #aaa;
         width: 20vw;
      }
     
    <body>
    
       <li class="zocial-twitter">Twitter</li>
       <li class="zocial-flickr">Flickr</li>
       <li class="zocial-last.fm">Last.fm</li>
       <li class="zocial-reddit>Reddit</li>
    

- meta tag charsets.
  https://developer.mozilla.org/en-US/docs/Web/  HTML

- Zocial:
  http://zocial.smcllns.com/

- Font Awesome:
  http://fortawesome.github.io/Font-Awesome/

- We Love Icon Fonts!:
  http://weloveiconfonts.com/

- Icon fonts on CSS-Tricks:
  https://css-tricks.com/examples/IconFont/


##Inlining images with SVG and data URIs

talking about text, if you really want to reduce the number of file requests your page makes, you can inline images using code.
Two ways to do that SVG and DataURL

Data URL:

  `<img src="data:image/svgtxml;base 64,[data]">`
  
The full version is around 5 thousand charectors.

You can inline your images in your html, but SVG and Data Url can also be inlined in CSS.  
 


##Image Handling Techniques

- external: (advantage: could be used on multiple pages) 
  `<img src="file.png">`

- inline: (advantage: reduces requests!) 
  `<img src="data:image/png;base64,.../>`

- raster image

- vector image, like material design icon

- `<i class="fa fa-youtube-play"></i>`
  
  `.fa {`
  
  `color: pink;`
  
  `}`
  
Thinking through your image options in different situations.

-------------

#Lesson 4 - Full Responsiveness

##Summary

Here comes the full monty! In this lesson, you will make your images fully responsive using the new <picture> element! Along the way, you will use the srcset and sizes attributes. You will also learn the importance of alt attributes for your visually impaired users.

At the end of this lesson, you will make the blog project fully responsive, as you implement <picture> to display beautiful images across a range of device widths and pixel ratios.

Topics covered:

- `<picture>`
- `sizes` attribute
- `srcset` attribute
- `alt` attributes


##Responding to Screen Capability & View

the problems of css media queries

Srcset and sizes:
http://ericportis.com/posts/2014/srcset-sizes/

##Srcset

example:

`<img scr="wallaby_1x.jpg" srcset="wallaby_1x.jpg 1x, 
wallaby_2x.jpg 2x" alt="Wallaby">`

**Syntax**

There are two flavors of `srcset`, one using `x` to differentiate between device pixel ratios (DPR), and the other using `w` to describe the image's width.

**Reacting to Device Pixel Ratio**

`<img src="image_2x.jpg" srcset="image_2x.jpg 2x, image_1x.jpg 1x" alt="a cool image">`

Set `srcset` equal to a comma separated string of `filename multiplier` pairs, where each multiplier must be an integer followed by an `x`.

For example, `1x` represents 1x displays and `2x` represents displays with twice the pixel density, like Apple's Retina displays.

The browser will download the image that best corresponds to its DPR .

Also, note that there's a src attribute as a fallback.

**Reacting to Image Width**

`<img src="image_200.jpg" srcset="image_200.jpg 200w, image_100.jpg 100w" alt="a cool image">`

Set `srcset` equal to a comma separated string of `filename widthDescriptor` pairs, where each `widthDescriptor` is measured in pixels and must be an integer followed by a `w`. Here, the widthDescriptor gives the natural width of each image file, which enables the browser to choose the most appropriate image to request, depending on viewport size and DPR. (Without the `widthDescriptor`, the browser cannot know the width of an image without downloading it!)

Also, note that there's a `src` attribute as a fallback.


Srcset and sizes:
http://ericportis.com/posts/2014/srcset-sizes/

Device pixel density list:
http://pixensity.com/list/phone/

High DPI Images for Variable Pixel Densities:
http://www.html5rocks.com/en/mobile/high-dpi/#toc-tech-overview


##Sizes attribute

example:

`<img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" sizes="50vw"
alt="Wallaby" />`

**Image Width with sizes**

What if the image won't be displayed at the full viewport width? Then you need something more than `srcset`, which assumes the image will be full viewport width.

Add a `sizes` attribute to the image with a media query and a `vw` value. `srcset` and `sizes` together tell the browser the natural width of the image, and how wide the image will be displayed relative to viewport width. Knowing the display width of the image and the widths of the image files available to it, the browser has the information it needs to download the image with the right resolution for its needs that is as small as possible. And it can make this choice early in the page load while the HTML is still being parsed.

**srcset with sizes Syntax**

Here's an example:

    <img  src="images/great_pic_800.jpg"
          sizes="(max-width: 400px) 100vw, (min-width: 401px) 50vw"
          srcset="images/great_pic_400.jpg 400w, images/great_pic_800.jpg 800w"
          alt="great picture">

`sizes` consists of comma separated `mediaQuery width` pairs. `sizes` tells the browser early in the load process that the image will be displayed at some `width` when the `mediaQuery` is hit.

In fact, if `sizes` is missing, the browser defaults `sizes` to `100vw`, meaning that it expects the image will display at the full viewport width.

`sizes` gives the browser one more piece of information to ensure that it downloads the right image file based on the eventual display width of the image. Just to be clear, it does not actually resize the image - that's what CSS does.

In this example, the browser knows that the image will be full viewport width if the browser's viewport is 400px wide or less, and half viewport width if greater than 400px. It knows that it has two image options - one with a natural width of 400px and the other 800px.



##The picture element

    <picture>
      <source srcset="kittens.webp" type="image/webp">
      <source srcset="kittens.jpeg" type="image/jpeg">
      <img src="kittens.jpg" alt="Two grey tabby kittens">
    </picture>

`source` element provides optional file sources, if the browser can use the first source well, otherwise it keeps looking down the list. browers choose depending on device capabilities.



##The full monty

in the responsive world, choosing images to suit the viewing context, art direction, can be 
accomplished pretty easily with the picture element.

     <picture>
       <source 
         media="(min-width: 1000px)"
         srcset="kookaburra_large_1x.jpg 1x, kookaburra_large_2x.jpg 2x">
       <source
         media="(min-width: 500px)"
         srcset="kookaburra_medium_1x.jpg 1x, kookaburra_medium_2x.jpg 2x">
       <img src="kookaburra_small.jpg"
         alt="The kookaburra">
     </picture>
 
 
         
-------------------


#Summary

- img

        img {
   
        max-width: 100%;
   
        }

- article

        article {
   
        width: 50em;
   
        }

- use automation tools to reduce the size of the page bytes: grunt

- `<meta charset="utf-8">`
- unicode: `&#9786`
- icon:
  
        <style type="text/css">
   
         @import url(http://weloveiconfonts.com/api/?family=zocial);

          [class*="zocial-"]:before {
         
           display: inline-block;
         
           font-family: 'zocial', sans-serif;
         
           text-shadow: 3px 3px 3px #aaa;
         
           width: 20vw;
     
          }
          
        <footer>
    
         <li class="zocial-twitter"></li> 
         <li class="zocial-digg"></li> 
         <li class="zocial-facebook"></li> 
         <li class="zocial-googleplus"></li>
        
        </footer>
          
- sources, srcset, sizes, picture:
        
        <picture>
          
          <source media="(min-width:750px)" srcset="images/horses-1600_large_2x.
          
          jpg 2x, images/horses-800_large_1x.jpg" />
          
          <source media="(min-width: 500px)" srcset="images/horses_medium.jpg" />
          
          <img src="images/horses_small.jpg" alt="Horses in Hawaii">
          
        </picture> 
          
   





























