#Course Summary

Have you been dabbling with JavaScript but find your files keep turning into a mess of spaghetti code? Do you find yourself copying and pasting lines of code over and over throughout your application? Surely there’s a better way, right?

Yes, there is a better way -- object-oriented programming will allow you to build websites using reusable blocks of code known as libraries, similar to using bricks to build a house. This course is designed to teach web developers how to utilize the various object-oriented programming features within JavaScript, and more importantly, how to write reusable and maintainable libraries that will make your life easier.

##Why Take This Course?

As a Front-End Web Developer, JavaScript is one of the most important languages in your toolbox. A strong foundation in the language’s features empowers you to write efficient and performant web applications. In this course you’ll explore a variety of ways to write object-oriented code in JavaScript.

You’ll build a variety of JavaScript objects and explore how their different inheritance models affect your code’s execution and in-memory model. You’ll use these features to write memory efficient code and seek simplicity and modularity in your own code.

##What Will I Learn?

**Projects**

Use your object-oriented JavaScript skills to develop a performant, organized and easily maintainable version of the classic arcade game, Frogger.



--------------

#Lesson 1: Scopes and Closures （范围 和 闭包）

##Summary

We’ll start by discussing JavaScript’s functional variable scoping features, including lexical scopes (variable availability as you write your code) and dynamics scopes (variable availability as your code actively runs). We’ll then discuss closures, an often misunderstood but incredibly useful feature available in only a handful of languages, including JavaScript.

##Scopes and Closures

We're gonna start off by talking about scopes and closures, since you really need to fully understand those aspects of functions and variable access (scopes and closures) before we can move on to more advanced topics.

Then we'll discuss the parameter "this" and prototype delegation, which are the two main language features allowing for object-oriented JavaScript.

Finally, we'll cover a number of different ways that you can write JS, classes and subclasses.

By the end of this, you'll have a strong understanding of JS's object-oriented features and how the code you write impacts the interpreters in memory model as your code is executing.

##1. Scopes: an example

##Lexical Scope
lexical scope describes the regions in your source code, where you can refer to a variable by name without getting access errors. It only concerns the area of your code where different variables names will have meaning.
In simple programs without a function at all, there is exactly one scope which is called the global scope. Every variable in such a program would be stored there. In some JS environments, global scope is shared across different files as a way for any part of the program to interact with any other part.
Global variables are the easiest, since there's nowhere in your code that you couldn't access them.

(视频中用绿色覆盖面积表示）

##Variable access

A new lexical scope is created every time you type out a function definition. The function definition spans from the letter 'f' all the way down to the end curly brace.

The two curly braces around the function's body enclosed the area of the code where different access rules will apply. 
（视频中用红色面积覆盖 function 大括号内）to represent the region that will have new rules, and that we would thus consider a different lexical scope.
Once you've made a new lexical scope by defining a function, it has a few more limits than the lexical scope around it.
The varibles defined in the inner scope can not be referred to from outside that scope.
The tightest scope function available has access to all the outer functions.

##Scoping limitations

function 内 定义新variable 不要忘记 添加 var declaration，否则 variable 将会被自动添加入 global scope，而不是 assignment 所在的那个 scope
leaving the var keyword off is more often done by accident than on purpose.

Also note, that unlike a lot of other languages, not all curly braces in JS are relevant for scoping. Blocks on if statements or while statements and other looping constructs like that, do not create new scopes.
only function statements create a scope.

##Execution contexts

another name: in-memory scopes

We're done listing out the lexical scopes in this program. we've seen how to differentiate one lexical scope from another, and we've learn the rules that govern them.

Now, it's the different usage of scope.
When a program runs, it builds up storage systems for holding the variables and their values. These in-memory scope structures are called execution contexts.

##Execution contexts vs. Lexical scopes

in the execution contexts, they are built as the code runs, not as it's typed.
The rules govern which variables a program has access to at different points during the execution.

##In-memory data stores

As the program runs, it will building up internal data stores for keeping track of all the variables that are available to different function objects.

##In-memory scopes vs in-memory objects

dispite the similarity, in-memory scopes and in-memory objects live in completely different worlds that almost never interact.

for instance, you will never store an array full of contexts, even though you can do so with objects. You can't iterate over the variable names in an execution context, the way you would over the keys in an objects. So even though they are both key value data storage constructs, you're going to be interacting with the two in completely different ways.

##Predicting execution context output

（见视频图示）

##Building multiple execution scopes

（见图示，blue scopes, red scopes and green scopes）

##Continuing output predictions
##Finishing our predictions

（见图示）

creating two equivalent looking functions, but have different identities, is exactly like what happens when you see an array literal appearing within a function definition.

    var makeArray = function() {
      return [];
    };
    var array1 = makeArray();
    var array2 = makeArray();
    log(array1 === array2); //False


##2. Closures

**A closure is just any function that somehow remains available after those outer scopes have returned.**

##Retaining access to functions

these techniques could be used to retain access to the saga function objects after the newSaga calls that created them had returned?

- passing to setTimeout
- returing saga from newSaga
- saving saga to a global var


##predicting code output

    var sagas = [];
    var hero = aHero();
    var newSaga = function() {
      var foil = aFoil();
      sagas.push(function() {
         var deed = aDeed();
         log(hero+deed+foil);
      });
    };
    newSaga();
    sagas[0]();
    sagas[0]();
    newSaga();
    
what will be stored in the sagas array as a result of the call to .push() ?

a function object.
The `function() { ... }` syntax returns a function object, which is `push`ed onto the end of the `sagas` array.

##predicting execution contexts

When we invoke sagas[0], a blue box should appear in our diagram（见视频） somewhere, Where would you expect it to appear?

inside the red box. if it's inside the green box but outside the red box, the `foil` variable wouldn't be accessible from the new context.
The context for a function will always be created as a child of the context that it was defined within.

##predicting closure output(1)(2)(3)(4)(5)

a new context always gets created in the same context as its function was defined within.

##predicting execution contexts(2)

##predicting closure output(6)


##Outro

it's really understanding what the interpreter is doing when it executes my code and understanding variable scope and closures, really helps me in writing concise applications that other developers can easily read through and understand. How can our students use these features to their advantage in writing our own code?

It should become much clearer when we get to later lessons, where we start writing functions that would return objects with methods on them. Meaning, functions that are stored as properties of the object. 
But more generally, any time you see a function with an input parameter that's quite static. Meaning, you don't expect the parameter to take on a new value every time you call the function.
That's an opportunity to re-factor your code,  such that you store the value in a variable from an outer scope. 
Because of the way closures work, the inner function will always have access to the outer scope variable even after the outer function returns.


#Lesson 2: The Keyword “this”

**本课理解难度较大**

You’ll start your dive into JavaScript object-oriented features by first discovering the parameter “this”. You’ll learn how the value of “this” is determined within various code structures and why it might be a lot easier to think of “this” as a parameter rather than a keyword.

##Intro

every oject oriented language has a way to dynamically refer to the current object. In JS, we use 'this'. The parameter 'this' is easily the most widely misunderstood aspect of the language. But it's actually pretty easy to use. If you're thinking about it in the right way.
It behaves almost exactly like a normal parameter, with a couple of exceptions. Parameters are those words that we see between parenthesis in a function definition. So there's really just two major differences between a regular parameter and 'this'. 

**you go about binding values to the parameter 'this' a bit differently from how you bind values to other parameters.**

There's about 5 different ways to do that.


##Defining the keyword 'this'

'this' is an identifier to get the value bound to it, much like a variable. but instead of identifing the values explicitly in your code, this gets bound to the correct object automatically.
mostly, the rules for how the interpreter determines what the correct binding is, resemble the rules for positional function parameters. 

the differences between positional function parameters and the keyword 'this' are designed to support your intuition about which object should be focal when you're invoking a method or constructor. 



##What is 'this' not bound to?

    var obj = {
        fn : function(a,b) {
           log(this);
        }
    };
    
    var ob2 = {method:obj.fn};
    
    obj.fn(3,4);
    
- ...the function object 'this' appears within
- ..."an new instance of" the function 'this' appears within (*genarally)
- ...an object that happens to have that function as a property
- ...the object created by the literal 'this' appears within
- ...an "execution context" or "scope" of that function call

（详情见视频图示）


##What is 'this' bound to?

    obj.fn(3,4);

- ...the object found **to the left of
the dot** where the containing function is called.     
    
**The object that a function is looked up upon when it's being invoked, that object is what the keyword, this, will be bound to.** 


##Predicting parameter output

    var fn = function(one, two) {
      log(one, two);
    };
    
q: what is the parameter "two" bound to?
a: there is no binding for the second parameter or any positional parameters until this function gets called.

##Predicting parameter output(2)

     var fn = function(one, two) {
      log(one, two);
     };
     var r={},（红色）g={},（绿色）b={};（蓝色）
     
     fn(g,b);

q: what will be logged?
a: {},（绿色）{}（蓝色）

##Predicting 'this' output

the keyword 'this' behaves like a parameter in most of the important ways. 

the intuition that you've built up around how to pass values into a function and how they'll get bound to the arguments being passed in at call time. 

all those same intuitions will hold true for the parameter 'this'.

     var fn = function(one, two) {
      log(this, one, two);
     };
     var r={}, g={}, b={};
     
     fn(g,b);
     
     // ? , {} , {}
q: what will be logged?     
     
a: this is a trickier question than it seems, i'd like to put it on hold for a moment. Before we dig into this particular function indication, it will help us to investigate the more common usage of the keyword this, which is as a parameter of a method indication.  

##Predicting 'this' output(2)

    var fn = function(one, two) {
      log(this, one, two);
     };
     var r={}, g={}, b={};
     r.method = fn; 
     
     //to call this function as a method, we first need to add that function as a property of an object. in this case, we'll make it a property of the red object.
     
     r.method(g,b);
     
     //now, when i call the function, i can do it immediately after a dot access on that object.

     // ? , {}, {}
q: what object will 'this' refer to?
a: red {}

in additon to the two parameters being passed between parentheses, which of course get bound to the input parameters, one and two.
I'm now passing a third parameter by calling that function on the right side of a dot access for property look up. The value that appears on the left of that dot will automatically be given the name, this, inside of that function invocation.


##Predicting 'this' output(3)

     var fn = function(one, two) {
      log(this, one, two);
     };
     var r={}, g={}, b={};
     r.method = fn; 
     
     fn(g,b);
     //if there is no dot, then how can we determine what the parameter 'this' would be bound to?
     
     // ? , {} , {}
q: what will be logged?

a: `<global>`, when you don't have a dot to help you pass a specific binding for the keyword 'this', JS binds 'this' by default to the global object. 

This can be seen as similar to the fact that JS binds undefined to positional parameters when we call the function without enough inputs. So if we had passed no inputs in between these parenthses, we would expect one and two to be undefined.

A similar line of reasoning leads us to the conclusion that the default object of global would be bound to this whenever we don't have a dot. The dot is the mechanism by which we pass in a binding for the keyword 'this'. So without a dot, you can expect some default value to get bound to the parameter 'this'.


##Predicting 'this' output(4)

what if you wanted to call a function and it didn't happen to be stored as a property of the object that you want the parameter 'this' to be bound to?
 
    var fn = function(one, two) {
      log(this, one, two);
    };
    var r={}, g={}, b={};
    r.method = fn; 
    
    fn.call(r,g,b); 
    // {}, {}, {}
    
    
imagine the function looks great but the keyword 'this' is supposed to refer to a specific object. and that specific object doesn't have this function as a property.
if the function isn't stored as a property, there's no key you can use on that object in order to access the function.
Besides the left of the dot rule that we just described, there's actually another way to specify the value that you'd like the parameter 'this' to get bound to.
By using a function's `.call` method, we get to override the default binding to global and override the left of the dot rule. 
In this case, we'll pass in any value we want and it'll get bound to the keyword 'this'.
When using the `.call` we pass in one extra value at the beginning of the argument list. And that value will be bound to the parameter 'this'.


What would happen if we used `.call` on a function that was also being accessed as a property?

     var fn = function(one, two) {
      log(this, one, two);
     };
     var r={}, g={}, b={}, y={};
     r.method = fn; 
     
     r.method.call(y,g,b);
     // ??? , {} , {}
     
q: what will be logged?

a: yellow {}

the use of `.call` overrides the method access rules, so 'this' will get bound to the yellow object.


##Predicting 'this' output(5)

    var fn = function(one, two) {
      log(this, one, two);
    };
    var r={}, g={}, b={}, y={};
    r.method = fn; 
 
    setTimeout(fn, 1000);
    
    //    , ??? , ???
    
    
One of the most confusing things for a lot of people about the parameter, 'this', is how it will get bound within functions when they get passed as call backs.

In this example where we pass our function to setTimeout, which will call the function for us a second later.    
    
we aren't provide any values that could be passed as arguments to our call back function fn. So it seems hard to imagine that this code will work as we want it to.

q: what will be those positional parameters going to be bound to ?

hint: you can't tell what value a function's parameter will be bound to, until you look at the specific indication of that function. So we need to go looking for the indication of the fn function.

a: looking at this code alone, it would be hard to answer the question of how our callback will get called since we can't see the function indication here. In order to answer this question, we actually need to look at either the source code or the documentation for setTimeout. 

##Deconstructing setTimeout

take a look at how setTimeout might be implemented if it was written natively in JS and we could go read the file somewhere. we'll pretent that it's defined in a file somewhere called timers.js:

    var setTimeout = function (cb, ms) {
      waitSomehow (ms);
      cb (?); //   ...?
    };
what values is setTimeout likely to pass along to your callback function? since setTimeout has no way of knowing what values you wanted passed to your function, perhaps it would be forced to simply invoke it with no parameters at all. 

     //    , ??? , ??? 

q: If that would be the case, what will be shown in the last positions of the log output？

a: `undefined`

when no values are passed to a function invocation, the parameters get bound to the values undefined.
 
##Predicting 'this' output(6)   

    var fn = function(one, two) {
      log(this, one, two);
    };
    var r={}, g={}, b={}, y={};
    r.method = fn; 
 
    setTimeout(fn, 1000);
    
    // ???  , undefined , undefined
 
    timers.js:
    var setTimeout = function (cb, ms) {
      waitSomehow (ms);
      cb (); //   maybe?
    };
    
what would u expect the parameter 'this' to get bound to?

firstly:

q: restate the simplified rule for determining what the parameter `this` gets bound to:________

a: we're supposed to find call time, look for a dot, and look to the left of that dot.

then: 

q: what would u expect the parameter 'this' to get bound to?

a: as with determining the parameter bindings, we needed to look at the last line of the code in setTimeout where cb gets invoked. Looking there, we would notice that there is no dot, and so the rule about our default case is being exercised. 

So lastly, we should make an effort to predict what we actually expect to get logged as the binding for the parameter 'this' within our function.

lastly:

q: what gets logged?

a: the global object.

    // <global> , undefined, undefined

as with the positional parameters, no value is supplied for the parameter 'this', since there is no property access being done to get access to this callback function. And the hypothetical version of setTimeout isn't being written to use some mechanism, like dot call.


##Predicting 'this' output(7) 

    var fn = function(one, two) {
      log(this, one, two);
    };
    var r={}, g={}, b={}, y={};
    r.method = fn; 
 
    setTimeout(r.method, 1000);
    
    // ???  , undefined , undefined
 
    timers.js:
    var setTimeout = function (cb, ms) {
      waitSomehow (ms);
      cb (); //   maybe?
    };
   
    // ??? , undefined, undefined

since no values were passed in between the parentheses on the line where we call the call back, the positional parameters will still be undefined.
furthermore, the setTimeout function wasn't passed any of the color values that might have been passed to the call back and so the body of setTimeout wouldn't have any way of knowing what values you wanted passed in.


'this' would still be bound for its default value: the global object.
remember where we have to look to determine the binding for the parameter 'this', it isn't in the function definition nor is it where the function is looked up on the object. The important moment is where the function has actually invoked. 

generally people find it tempting to imagine that (r.method) since we did a property lookup on the red object. 

perhaps that look up event would have some bearing on the keyword 'this' inside the function but this moment is irrelevent since only the moment of call time influences how the parameter 'this' would get bound.

Just as in the previous example, where we passed in `fn` instead of `r.method`, the last line of setTimeout is still a free function invocation and not a method invocation with the dot. Therefore 'this' would still be bound to its default value: the global object. 


##Predicting 'this' output(8) 

The problem of losing parameter bingdings is pretty widespread since any function like setTimeout that takes another function as a callback may actually call that function differently than you expected. Call back functions are inherently designed so that they will be invoked by the system you pass them to. Thus, you generally have very little control over what the bindings will be for the parameter of the function that you passed in. 

For this reason, you need to be careful about all the parameter bindings, including the parameter 'this', whenever you pass a function as an input to another function. Despite the fact that you see an object on the left of the dot when you pass the function in, this object will not be passed along as the binding for the parameter 'this', when the system you passed it to eventually calls your callback function. 

One way to pass the callback without complicating the parameter binding situation is to pass a different function, one that doesn't receive any parameters at all, including 'this'.

    setTimeout(function(){
           
               }, 1000);
               
    // (inert function, does nothing)

Then you just make room in the body of that function for your custom code.
And inside that area, you reference your method and then you can do the indication yourself, passing along whichever bindings you want for the parameter 'this'.

    setTimeout(function(){
                 
                 r.method()
           
               }, 1000);
               
    // {} , undefined, undefined


we talked a lot about the keyword this, where it appears within a function. And some value may have been passed in to be bound to it. But what would happen if we saw the keyword 'this' appearing in the global scope, not inside the body of any functions at all? 

Taking a step back for a moment, we should first consider what we expect to happen when we access parameters outside of the function scope that they were defined within. What would we expect to happen with this attempt to log the one variable?

     log(one);

answer: throws an error!


##Predicting 'this' Output with 'new'
   
     log(this);
     
     // <global>
     
in the more modern spectification of the language it has been removed.
  
    
    var fn = function(one, two) {
      log(this, one, two);
    };
    var r={}, g={}, b={}, y={};
    r.method = fn; 
    
    new r.method(g,b);
    
    // ??? , {} , {}

q: what will be logged?

a: for reasons that can only become clear after a much longer discussion of JS class patterns, the keyword 'this' will actually get bound to an entirely new object that gets created automatically in the background as a result of the keyword 'new' having appeared.   
In support of certain object-oriented paradigms, another object will be generated every time you make a call to that function with the keyword 'new' in front of it.     
     


##Outro

**The keyword 'this' makes it possible for us to build just one function object and use that as a method on a bunch of other objects.** And every time we call the method, it'll have access to whatever object it's being called on. 
This can be really useful for conserving memory, and it's only possible because we have the access to the parameter 'this'.



-----------------------

#Lesson 3: Prototype Delegation

##Summary:
You’re probably using one of JavaScript’s inheritance models already: prototype delegation! In this lesson you’ll learn more about this unique feature of JavaScript, how JavaScript uses this feature internally and how you can take advantage of it to maximize your application’s memory footprint.


##Prototype Chains

Prototype chains are a mechanism for making objects that resemble other objects. 
When you want objects to have all the same properties, either to save memory or to avoid code duplication, you might decide to copy every property over from one object to another. But as an alternative, JS provides the option of prototype chains. This makes one object behave as if it has all the properties of the other object, by delegating the failed lookups from the first object to the second one.

##Property lookup
##1-time property copying

    var gold = {a:1};
    log(gold.a); // 1
    log(gold.z); // undefined
    
    var blue = extend({}, gold);
    
although the effect of this copy operation on the blue object will last indefinitely. It's important to remember that the copying happens just at one moment during the program's execution. It is not an ongoing copying back and forth behavior that keeps the two objects in sync. 

The copying process is now complete and won't be repeated. So if our program later goes on to modify gold or blue, we'd probably only expect them to have the 'a' property in common after those modifications.

##Predicting Prototype Delegation

    var gold = {a:1};
    log(gold.a); // 1
    log(gold.z); // undefined
    
    var blue = extend({}, gold);
    blue.b = 2;
    log(blue.a); // 1
    log(blue.b); // 2
    log(blue.z); // undefined
    
    var rose = Object.create(gold);
    rose.b = 2;
    log(rose.a); // 1
    
    
**one-time property copying vs. ongoing lookup-time delegation**    


##Predicting Undefined Property Lookups

    var rose = Object.create(gold);
    rose.b = 2;
    log(rose.a); // 1
    log(rose.b); // 2
    log(rose.z); // undefined


##Property Lookup on Cloned Objects

The main difference between this two different techniques(one-time property copying, ongoing lookup-time delegation):

relates to what moment you would expect the value present on gold to influence either of the other two objects.
Is that moment a single moment of copying or does it happen at every look up event?

Modifying the gold object reveals an interesting difference between these 2 techniques.

    gold.z = 3; 
    log(blue.z); // undefined


##Property Lookup of Delegated Objects

    gold.z = 3; 
    log(rose.z); // 3 

##The object prototype

There is a top-level object that every JavaScript object eventually delegates to. This is where all the basic methods are provided for all objects. We call it the object prototype because it provides the shared properties are all objects in the entire system. That way, when you ask an object for its `.toString` property, you get access to a function that can do the appropriate work. once you access the function, you can immediately call it and the object that you did the property look up on will appear to the left of the dot at that functions call time.

Thanks to the way that the parameter 'this' works, the shared function will work as expected with the 'this' keyword bound to the Rose object even though the `.toString` method was technically stored way up on the object prototype.

    rose.toString(); 


##Constructor property

top level objects:
 
    {       toString:  {f} ,
      hasOwnproperty:  {f} ,
         constructor:  {f} ,
             ...           }
             
One of the most useful properties is `.constructor`, which makes it easy to tell what function was used to create a certain object.


##Array Prototype

If you don't take any special steps, most new objects that you create will delegate to the Object prototype, but some of the special objects that you can make in JS have extra features above and beyond the basic characteristics of all objects. 

Arrays, for example, have methods like `.indexOf` and `.slice`. Those array methods are stored in another prototype called the Array prototype. Since arrays behave a little differently from objects, the Array prototype even has its own version of some of the standard methods like toString.

The array prototype in turn delegates to the Object prototype so that the non-unique parts of an array can be inherited from the Object prototype.


    {      slice:   {f} , 
        toString:   {f} ,
     constructor: Array ,
                ...     }
                
    [ 0 : '1st' ,    [ 0 : 'one' ,
      1 : '2nd' ,      1 : 'two' ,
      length: 2 ]      length: 2 ]
      

##Conclusion - Prototype Chains

be able to use the prototype chains to make objects that look very similar to other objects. Which is a useful technique for code sharing and saving memory.



-------------------

#Lesson 4: Code Reuse

##Summary:
There are numerous ways to write concise, maintainable and reusable code in JavaScript and you’ll practice a number of them in this lesson. We’ll start writing a library using basic functions and learn the decorator pattern. Then, we’ll refactor this library into the functional, prototypal and pseudoclassical inheritance models. Finally, we’ll explore sub-classing -- coding objects that directly inherit from objects we’ve previously defined.


#4.1: Object Decorator Pattern

##Code reuse

when writing software, code reuse is the practice of writing generalized code that can be relied upon to address a variety of similar goals. Whenever you notice that two parts of your code have similarities, there's an opportunity to factor out the similar aspects of it into some reusable library code. So that you won't have to repeat yourself in either of the two original places.

##Example of Code Reuse

when you're writing a software, reuse code is the practice of writing generalized code that can be relied upon to address a variety of different goals. whenever you notice that two parts of your code have similarities, there's an opportunity to factor out the similar aspects of it into some reusable library code so that you won't have to repeat yourself in either of the two original places.

##Programming our game

sample here is ridiculously over simplified.

run.js:

    var amy = {loc:1};
    amy.loc++;
    var ben = {loc:9};
    ben.loc++;

two parts to factor out:

1. repeatedly building objects that look pretty similar.
2. incrementing the location property of those objects.

##Functions

library.js:

    var move = function(car){
      car.loc++;
    };

this function object is what operates on those two simple car objects and modifies those `.log` property.

what is improved?

there are two important differences of why its valuable to factor repeated code like that.

##Benefits of refactoring code

1. its rarely the case that any piece of logic is so simple. you probably don't want to retype it over and over. By abstracting it out into a function, it makes much simplier...
  
        var move = function(car) {
          removeCarFromScreen(car.loc);
          addDustSwirlToScreen(car.loc);
          car.loc++;
          addCarToScreen(car.loc);
        };
  
2. more important reason is to improve your experience of refactoring your code down the line.  只需在library.js文件里修改function，便可自动同步到run.js中涉及到这个function的所有部分。

##Decorator functions

run.js:

    var amy = carlike({}, 1);
    move(amy);
    var ben = carlike({}, 9);
    move(ben);
    
library.js:

    var carlike = function(obj,loc){
       obj.loc = loc;
       return obj;
    };
    
    var move = function(car){
       car.loc++;
    };
    
the 'carlike' function here would qualify as a decorator, it's common to use adjectives as your names of decorator functions.


##Adding methods to constructors 

run.js:

    var amy = carlike({}, 1);
    amy.move();
    var ben = carlike({}, 9);
    ben.move();

library.js:

    var carlike = function(obj,loc){
       obj.loc = loc;
       obj.move = move;
       return obj;
    };
    
    var move = function(car){
        this.loc++;
    };

Decorator can add more than just simple properties like this number, remember functions are properties too. Maybe we prefer to call the move function using method calling syntax which means we would look it up as a property of amy, before invoking it on amy. If we want to do this, we're going to have to refactor our code again so 


##Predicting the Value of 'this'

the parameter 'this' in the move function is going to bound to `ben`


##Recap of the 'this' parameter

    var ob1 = {};
    var ob2 = {};
    ob1.example = function(arg1){
      log(this, arg1);
    };
    ob1.example(ob2); // logs ob1 and ob2
    
    
## Refactoring to Consolidate Code

    var carlike = function(obj, loc) {
      obj.loc = loc;  
      obj.move = function() {
        this.loc++;
      };  
      return obj;
    };
    

    var amy = carlike({}, 1);
    amy.move();
    var ben = carlike({}, 9);
    ben.move();


## Predicting Strict Comparison of Objects

    var makeAnObject = function(){
      return {example: 'property'};
    };
    var ob1 = makeAnObject();
    var ob2 = makeAnObject();
    log(ob1 === ob2);
    // what do you think?
    
answer: false

Even though the same exact line of codes was used to generate the two different objects, they are themselves different objects.Changes you make to one object will not have any effect on the other object because they have different identities. They are as different as two real world identical twins. Identical twins look the same, but certainly each one has its own identity. The two objects even start out by having all the same properties, but no matter how similar they are in structure they will always be two different objects their whole life.


##Strict Comparison of Returned Functions

    var makeAnObject = function(){
      return function(){};
    };
    var ob1 = makeAnObject();
    var ob2 = makeAnObject();
    log(ob1 === ob2);
    // what do you think?

q: what if the maker function returned a function? Would you expect the two results to be the exact same object?

a: false

Just like in the previous version of the code, which generates two different plane objects, this new code will generate different function objects every time makeAnObject gets run.


## Refactoring the .move() Method

    var carlike = function(obj, loc) {
      obj.loc = loc;  
      obj.move = function() {
        obj.loc++;
      };  
      return obj;
    };
    

    var amy = carlike({}, 1);
    amy.move();
    var ben = carlike({}, 9);
    ben.move();
   
instead of referring to the parameter 'this' which gets bound to a new value every time `move` is invoked we could instead refer to the closure variable `obj` each time we call the `carlike` function a new closure scope is created and therefore the `obj` variable will always prefer to exactly one car object

## Conclusion - Object Decorator Pattern

At this point, we're completely done with our exploration of different versions of the object decorator pattern. Generally, you would use the decorator pattern to add some functionality to an object that already had some functionality in it at that point.


#4.2 Functional Classes

class is a powerful form of functions that can be used to manufacture fleets of similar objects.

##Decorator code vs Classes

The only difference between the decorator code and a class is that a class builds the object that it's going to augment, whereas a decorator accepts the object it's going to augment as an input. 

So if we move the object creation into the carlike function and remove the obj function parameter in favor of declaring a local variable, then we would have what's known as a class, and we would give it a different sort of name to reflect that fact. 

So a class is a construct that is capable of building a fleet of similar objects that all conform to roughly the same interface. It's conventional to name class with a capitalized noun, the functions that produce these fleets of similar objects are called Constructor Functions. Because their job is to construct the objects that will qualify as members of the class. 

So to recap, the class is the notion of a category of things you'd like to build and all of the entailed code that supports that category. Whereas the constructor is simply the function that you use to produce a new instance of that class. The objects that get returned from these instructor function invocations, those are called instances, instance of the class. So when we call a Constructor Function in order to create an instance, that operation is known as Instantiating.

     var Car = function(loc) {
      obj = {loc: loc};  
      obj.move = function() {
        obj.loc++;
      };  
      return obj;
     };
    

    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();


## Reducing duplicity

    
     var Car = function(loc) {
      var obj = {loc: loc};  
      obj.move = move;
      return obj;
     };
     
     var move = function(){
       this.loc++;
     };  

    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();

## Functional shared patterns

    var Car = function(loc) {
      var obj = {loc: loc};  
      extend(obj, methods);
      return obj;
    };
     
    var methods = {
      move: function(){
         this.loc++;
     },
     on : function(){ /*...*/ },
     off: function(){ /*...*/ }
    };

##Adding methods to classes

    var Car = function(loc) {
      var obj = {loc: loc};  
      extend(obj, Car.methods);
      return obj;
    };
     
    Car.methods = {
      move: function(){
         this.loc++;
      }
    };
    
##Property access

Functions are just specialised objects. But in addition to the fact that functions have the power of being invoked, functions are also capable of storing properties just like any other object.

      
Invoking a function has no interaction with any of the properties of that function.

All we've done is moved our methods object out of the global scope. And there's nothing special about Car.methods. Other than that, it's conveniently tucked away as a property of Car.

##Conclusion

functions are extremely important in JS and they create the core of JavaScript classes. 

a JavaScript class is really just a function that's capable of creating many similar objects.


#4.3 Prototypal Classes

##Improving performance

    var Car = function(loc) {
      var obj = {loc: loc};  
      extend(obj, Car.methods);
      return obj;
    };
     
    Car.methods = {
      move: function(){
         this.loc++;
      }
    };
    
    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();
  
using prototype chains to achieve the same thing that this code achieves.

the way prototypes work: any object can be made to delegate its failed property lookups to another object.

## One option for Improving Performace

one option is, instead of using extend to copy all of the methods over, we might be able to use the prototype object to store all the shared methods and make our instances delegate to that shared prototype object.

## Delegation Relationships

    var Car = function(loc) {
      var obj = Object.create( ? );  
      obj.loc = loc;
      return obj;
    };
     
    Car.methods = {
      move: function(){
         this.loc++;
      }
    };
    
    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();

Q: what do we need to pass in the ? position, in order to set up the right delegation relationship?

A: **Car.methods**

If we use `Car.methods` as the prototype for new instance, then failed property look ups to those instances, will fall through to `Car.methods`. And thus every instance will appear to have a `.move method`. That means, we can get rid of the `extend(obj, Car.methods);` line entirely. We do still need to make sure this load property gets added to our new object, since it's no longer in line as part of an object literal. We're instead using the `Object.create` syntax.

As of this change, we've arrived at the completed prototypal pattern of writing class.


## Constructor Prototypes

The step for making the class in this prototypal pattern are pretty clear. All you need is a function that allows you to make instances, a line in that function that generates the new instance object, a delegation from the new object to some prototype object, and some logic for augmenting the object with properties that make it unique from all the other objects of the same class.

Whenever a function is created, it'll have an object attached to it, that you can use as a container for methods just in case you plan on using that function, to build instances of a class.

The provided container object: `Car.prototype`.

    var Car = function(loc) {
      var obj = Object.create(Car.prototype);  
      obj.loc = loc;
      return obj;
    };
     
    Car.prototype.move = function(){
         this.loc++;
    };
    
    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();

##How prototypes affect in-memory model

## .prototype vs .method

Using the key `.prototype` here, instead of the key `.method` is purely cosmetic.

## .prototype ambiguity

## .prototype.constructor

## instanceof operator



#4.4 Pseudoclassical Patterns

##Introduction

    var Car = function(loc) {
      var obj = Object.create(Car.prototype);  
      obj.loc = loc;
      return obj;
    };
     
    Car.prototype.move = function(){
         this.loc++;
    };
    
    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();

the pattern we'll about to build is called pseudoclassical because it attempts to resemble the class systems from other languages by adding a thin layer of syntactic conveniences. If we plan on making a lot of classes in our program and we do, there's a lot of code in the library.js file that would get repetitive to repeat every time, perhaps the language could do more of those steps automatically somehow. 

`var obj = Object.create(Car.prototype);` and `return obj;` look likely to be repeated in every prototypal class. After all, a prototypal class needs some object that it can operate on and then, it needs to make sure that, that object delegates to some prototype object and lastly, of course, it needs to return that object.

## Constructor Mode

    var Car = function(loc) {
     
     "this = Object.create(Car.prototype);"
      
      this.loc = loc;
     
     "return this;"
    
    };
     
    Car.prototype.move = function(){
         this.loc++;
    };
    
    var amy = new Car(1);
    amy.move();
    var ben = new Car(9);
    ben.move();


To alleviate all of that typing, JS provides the keyword `new`. Whenever we choose to use the keyword `new` in front of a function invocation, our function is going to run in a special mode called Constructor Mode. In that mode, we can expect a lot of repetitive work to be done automatically.

Constructor mode: it's a way for your interpreter to insert a few lines of operations into your code because it knows that you're going to need them to be done whenever you're instantiating a new object. It temporarily makes your function run as if there was some extra code at the begining and end. Even though you will never have typed that code. The operation it's going to insert are basically doing the same work as the lines you're likely to write in your prototypal classes.

So because we're using the keyword `new`, we can expect the invocation of car to run with these extra operations inserted at the begining and at the end.

    var Car = function(loc){
      this.loc = loc;
    };
    car.prototype.move = function(){
      this.loc++;
    };

    var amy = new Car(1);
    amy.move();
    var ben = new Car(9);
    ben.move();


##Difference between patterns

the pseudo-classical version is really just a thin layer of syntactic convenience over top of the prototypal pattern. 

In fact, the primary difference between these two patterns is the number of performance optimizations that the JS engines have implemented, that only apply when you're using the pseudo-classical pattern.


## Styles of writing classes

    var Car = function(loc){
      this.loc = loc;
    };
    car.prototype.move = function(){
      this.loc++;
    };

this code, like many class patterns in JS, has two distinct and very different sections. This will be true of every pseudo classical, prototypal, and functional shared class that you write.

In one section, you will find you're specifying how all the instances of a class should be similar. In the case of pseudoclassical pattern, these similarities are generally stored as properties of the prototype object.

In the other section, you'll be writing code that specifies how each instance should be different from all the other instances. As with most programming languages, this will take place inside the body of the Constructor Function, and it'll allow us to specify how one instance of the class will be different from another instance of the class.
All of the work that gets done to specify that Amy and Ben have unique locations is done inside that Constructor Function.

These distinction would be very important when discussing subclassing.


## Conclusion

which pattern should be using or which one is best?

there just isn't an answer to this question. As an language, JS takes remarkably few stances and tends to make the internal features visibly available to the programmer to play with. So rather than rights and wrong, there are really only techniques and options.

What we can do though is discuss the advantages and disadvantages of the different techniques to help inform the decisions that we will make about which patterns to use on a case by case basis.


#4.5 Superclass and subclasses

##Introduction

the slightly more advanced code-sharing technique: subclassing.

the pseudo-classical pattern is a lot more widely documented on the internet than the functional pattern that we're about to explore here.


##Building Similar Objects

library.js:

     var Car = function(loc) {
      obj = {loc: loc};  
      obj.move = function() {
        obj.loc++;
      };  
      return obj;
     };
    
run.js:

    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();
    var cal = Car(2);
    cal.move();

A class works great when you want to produce a fleet of similar objects as with the target code in this run.js example. But what if you wanted a second category of objects that was vaguely similar to this Car category?


##Manually Duplicating Code

library.js:

     var Van = function(loc) {
      obj = {loc: loc};  
      obj.move = function() {
        obj.loc++;
      };  
      obj.grab = function{ /*...*/ };
      return obj;
     };
     
      var Cop = function(loc) {
      obj = {loc: loc};  
      obj.move = function() {
        obj.loc++;
      };  
      obj.call = function(){ /*...*/ };
      return obj;
     };
    
run.js:

    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();
    var cal = Car(2);
    cal.move();
    cal.call();

As soon as we write any code that relies on the differences that exist between a regular car and a cop car, then we have a bit of a problem. We can't really add a cal method to every car instance because we don't really think that non-cop cars deserve that method. 

One naive solution would be to copy all of the code from the car class into a second class and then re-factor it. We'd probably give the two functions different names to reflect that they are different classes. Then in each function, we would add the code that would make that particular class different from the other. In this case, imagine that the grab method is something only vans should be able to do, because it's the way in which the van is going to be able to attack the player. By constract, this cal method is something that's only available to cops. Because it represents the way in which the player can get access to help from a cop.

This solution works, but there's a lot of duplicated code here.


## Refactoring Into a Superclass

library.js:
   
    var Car = function(){
      var obj = {loc: loc};  
      obj.move = function() {
        obj.loc++;
      }; 
      return obj;
    };  

    var Van = function(loc) {
      var obj = Car(loc);  
      obj.grab = function{ /*...*/ };
      return obj;
     };
     
    var Cop = function(loc) {
      var obj = Car(loc);  
      obj.call = function(){ /*...*/ };
      return obj;
     };
    
run.js:

    var amy = Car(1);
    amy.move();
    var ben = Car(9);
    ben.move();
    var cal = Car(2);
    cal.move();
    cal.call();

What if we make a function that does all of that work up front and then we just let the Van and Cop class do a tiny bit of customization for whatever is left to make them different from regular cars. We would call this new function we're building a superclass. That term includes the word 'class', because this function will be creating a lot of similar objects and it includes the word 'super', because these other classes will use the output from the superclass as their starting point.

We have two complete subclass functions and one superclass constructor function that creates a bit of a starting point for each of those subclasses to build on top of.


##Outro

In addiction to providing a basis for the Van and the Cop constructor functions, the Car function is also a full-fledged class itself.


#4.6 Pseudoclassical Subclasses

## Pseudoclassical Subclasses


run.js:
 
    var zed = new Car(3);
    zed.move();
    
    var amy = new Van(9);
    amy.move();
    amy.grab();

library.js:
 
    var Car = function(loc){
      this.loc = loc;
    };
    Car.prototype.move = function(){
      this.loc++;
    };
    
## Building Out a Subclass
## Incorrect Solutions

1.
    
    var Van = function(loc){
      this.loc = loc;
    };

problem: if you ever change how instantiation works, you would have to remember to change both places. furthermore, the logic here is quite simple, that's just for the purpose of our example. In most classes, there's going to be a lot more code in a super class constructor that you would have to repeat in the subclass.

We'd really like to simply run the Car function in the middle of the Van function. But in such a way that it modifies the new Van instance that's being created.   
    
2.
   
    var Van = function(loc){
      new Car(loc);
    };

problem: What would you expect the effect of this technique to be on your in-memory model? The answer is that if we tried to call the Car function with the keyword 'new', it's going to have the effect of creating another new instance object, in addition to the one that got created in Rhonda JS, as a result of calling new Van.


## 'this' in Superclass using 'new'
 
    var Car = function(loc){
      this.loc = loc;
    };
    Car.prototype.move = function(){
      this.loc++;
    };
  
    
    var Van = function(loc){
      new Car(loc);
    };

q: what object will `this` refer to within the `Car` function as a result of being called within the `Van` constructor?

a: a new instance of `Car`

because `Car` is being invoked with the keyword `new`.

## 'this' in Superclass without using 'new'

    var zed = new Car(3);
    zed.move();
    
    var amy = new Van(9);
    amy.move();
    amy.grab();


    var Car = function(loc){
      this.loc = loc;
    };
    Car.prototype.move = function(){
      this.loc++;
    };
  
    
    var Van = function(loc){
      "this = Object.create(Van.prototype);"
       Car(loc);
    };

q: In this situation, what would you expect the keyword `this` to be referring to as a result of being invoked on this line "this = Object.create(Van.prototype);" ?

a: global

because this `Car(loc)` function is being invoked as a free function invocation. you would actually wind up with a global loc variable pointing to number 9 and your Van instance would be completely unaffected by any code within the Car function.


## .call()'s First Argument

    var zed = new Car(3);
    zed.move();
    
    var amy = new Van(9);
    amy.move();
    amy.grab();


    var Car = function(loc){
      this.loc = loc;
    };
    Car.prototype.move = function(){
      this.loc++;
    };
  
    
    var Van = function(loc){
      "this = Object.create(Van.prototype);"
       Car.call(???, loc);
    };

So for going to run the car function, we just need to make sure that runs in the right context. Luckily, we have a way of running functions in whatever context we choose. The `.call` method of any function allows us to run that function exactly the context we want it to. It basically means that the parameter 'this' is going to behave even more similarly to a positional function parameter. 

Now we just have to decide what value to pass as our first argument so the car can run in the right context.

a: `this`. we want to call this Car function in the same context as the new Van instance that's been created right there(`this=Object.create(Van.prototype);`). Since that's being stored in the parameter `this`, we can just pass `this` along and run the Car function in the same context as the Van function is being called.

We can get rid of this pretend line of code(`this=Object.create(Van.prototype);`), because it was only there to remind us what was going to take place as a result of using the keyword `new`.

    var zed = new Car(3);
    zed.move();
    
    var amy = new Van(9);
    amy.move();
    amy.grab();


    var Car = function(loc){
      this.loc = loc;
    };
    Car.prototype.move = function(){
      this.loc++;
    };
  
    
    var Van = function(loc){
       Car.call(this, loc);
    };
    
    
  
 This is exactly how we want to call the Car function from within the Van function such that it operates on the right context. But people seem to find this line of code extremely confusing.   


##Using .call()

      Car.call(this, loc);

the goal in this line is to invoke the car function such that its parameter `this` is bound to the Van instance and to do that we are also gonna have to use the keyword `this` inside the Van function, since it's bound to the right object in there. 

At the heart of this confusion is the fact that there are two different parameters in two different scopes both of which are given the name `this`, but we must keep in mind that the parameter `this` behave just like other positional parameters to functions. Even though the two variables share the same name we think of them as different, because they're in different scopes, the shared name is incidental. and this line merely passes along the binding from one function to another. The same is true of the parameter `this`. It's just being passed in a bit different way. 


## Subclass Property Prototype Delegation
    
    var zed = new Car(3);
    zed.move();
    
    var amy = new Van(9);
    console.log(amy.loc);
    amy.move();
    amy.grab();


    var Car = function(loc){
      this.loc = loc;
    };
    Car.prototype.move = function(){
      this.loc++;
    };
      
    var Van = function(loc){
       Car.call(this, loc);
    };
    
   
Would you expect the lookup for amy.loc to work correctly now?

    console.log(amy.loc);

a: yes

##Subclass Method Prototype Delegation

Would you expect the lookup for amy.move to work correctly now?

    amy.move();

a: no. In its current state, the code would break when it hits the line calling `amy.move()`. That's because the movement method is only available on `Car.prototype` and the amy object doesn't delegate to car prototype


## Constructor Prototype Delegation

q: if any delegates to `Van.prototype`, then what does `Van.prototype` itself delegate to?

a: `Van.prototype` delegates to `Object.prototype` which means that amy doesn't have any relationship at all with `Car.prototype`. And so, amy won't have any of these methods available just because they're made available on `Car.prototype`.


##Subclass Prototype Delegation

    var zed = new Car(3);
    zed.move();
    
    var amy = new Van(9);
    console.log(amy.loc);
    amy.move();
    amy.grab();


    var Car = function(loc){
      this.loc = loc;
    };
    Car.prototype.move = function(){
      this.loc++;
    };
      
    var Van = function(loc){
       Car.call(this, loc);
    };
    Van.prototype._proto_ = Car.prototype;


so far, the differentiation code in the subclass will call out the differentiation code available in the superclass. But due to the fact we're using prototype chains to implement an inheritance, we also need to wire up the subclass prototype to the superclass prototype, to allow the similarity code to be inherited as well. 

Amy does delegate to Van.prototype, but neither amy nor Van.prototype have any relationship with Car.prototype yet. In order to set up that relationship, we want to make it so that Van.prototype delegates to Car.prototype. This is how we are going to make the shared methods available from Car onto Van. If we succeed, then a lookup to amy.move will fall through the amy object, and up to the Van prototype, which will fail. And finally, fall all the way through to the Car prototype. Ideally, we would be able to update Van.prototype such that it would delegate it's failed lookups to Car.prototype.

In memory, we would expect it to work rather like this: The Van.prototype object should be made to delegate all the way up to the Car.prototype object. In this way, it would be very similar to car instances, because both would delegate failed lookups to the Car prototype property.

But this actually isn't allowed in the official version of the language. Instead, we're going to have to overwrite the originally provided prototype object with the brand new object that we create.

So what object exactly do we want to be assigning in place of the old Van.prototpe object?

    var Van = function(loc){
       Car.call(this, loc);
    };
    Van.prototype = 
    
It might surprise you that pseudo-classical subclasses will work just fine after a reassignment like this. And that's because the instance delegation is set up only when the constructor actually runs. This prototype replacement happens right alongside the constructor definition and so that's plenty of time before we actually instantiate any objects.

People ofter propose that Van.prototype could simply be made to equal Car.prototype.

    Van.prototype = Car.prototype;
    
But remember, JS doesn't do any copying when you assign one variable or property to be equal to another one. If that was the case, then it would be impossible to add any methods to the Car prototype that weren't also on the Van prototype and vice versa.

    Van.prototype = Object.create(Car.prototype);
  
If we want Van.prototype to be an object that delegates to Car.prototype, we only need to pass it into the Object.create function and generate a new object that delegates there.


## Incorrect Subclass Prototype Delegation

    Van.prototype = Object.create(Car);
    
    Van.prototype = new Car();
  
this won't work because car instances themselves are supposed to delegate to car.prototype. This is an example of a much larger problem that should be aware of. People are forever tempted to conflate a constructor function and it's companion prototype object. But the two serve very different purposes. Perhaps the most common mistake, is attempting to instantiate the superclass constructor as a method of creating sth that delegates to its prototype.


## Using Object.create()

## Subclass Prototype Constructor Property

    var zed = new Car(3);
    zed.move();
    
    var amy = new Van(9);
    console.log(amy.loc);
    amy.move();
    amy.grab();


    var Car = function(loc){
      this.loc = loc;
    };
    Car.prototype.move = function(){
      this.loc++;
    };
      
    var Van = function(loc){
       Car.call(this, loc);
    };
   
    Van.prototype = Object.create(Car.prototype);
    
    Van.constructor
    
    Van.prototype.grab = function(){ /*...*/ };
   

##Subclass Constructor Delegation

    console.log(amy.constructor);
    
What would be logged by this line?

a: Car

The amy object doesn't have a local `.constructor` property, but amy does delegate to `Van.prototype`. `Van.prototype` is a brand new object that has been set up to delegate to `Car.prototype`. That brand new object does not have its own `.constructor` property, much like any object coming out about `.create` should not. At best, it is an object to the delegates to an object that has its own `.constructor` property. `Car.prototype` has a `.constructor` property because every single `.prototype` object that comes for free with the function when it's created is given one of these `.constructor` properties pointing back to the original function. 


## Proper Subclass Constructor Delegation

What code could you add to resolve this issue?

    var Van = function(loc){
       Car.call(this, loc);
    };
   
    Van.prototype = Object.create(Car.prototype);
    
    "Van.prototype.constructor = Van;"
    
    Van.prototype.grab = function(){ /*...*/ };

a: `Van.prototype.constructor = Van;`


## Psuedoclassical Subclassing Outro

you've learned a lot of different code reuse patterns, including functions, decorators and all the major class patterns provided natively by JS, as well as their corresponding subclassing techniques.

## Outro

learned about the most important and difficult languages features in JavaScripts, including scopes, closures, keyword 'this', and prototype chains.

Also learned a lot of code reuse patterns that are built on top of these features, such as function decorators, and all of the major classing and subclassing patterns that are available within JavaScript.


















 