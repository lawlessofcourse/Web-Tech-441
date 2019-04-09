# WEEK 9/10 AJAX
### Michael Cassens - credit
## jQuery Plugins

Let’s switch gears now and utilize some of the jQuery plugins that are out there. What is a jQuery plugin? These are further abstractions of jQuery to make some effect. This means someone has created a custom function using jQuery and then all you have to do is reference the plugin and call the function to utilize it. That is a good thing! Let’s look at some examples:

There are ones that allow us to scroll through pictures in a different way.

[Tilted Scroll](http://www.thepetedesign.com/demos/tiltedpage_scroll_demo.html)

There are ones that do face detection.

[Face Detection](http://facedetection.jaysalvat.com/)

There are ones that help make our menus look a little nicer.

[Slinky Menu](https://github.com/alizahid/slinky)

Ones that help with lettering.

[Lettering](http://letteringjs.com/)

And ones that even help with popups so they look better and keep us on the page.

[Magnificient Popup](https://dimsemenov.com/plugins/magnific-popup/)

The are so many more and I encourage you to check them out as they will help you give your users an even richer experience. Many of them have demos and even though they might look a little complicated at first as you dig through them, you will realize that you know more than you think!

## Creating jQuery Plugins
How about if we want to make our own though? Even though it might sound daunting, it’s not too bad. Let’s look at a small example:
```jQuery
$.fn.bluey = function() {
    this.css( "background-color", "blue" );
};
```
What’s happening here is that a function is being defined with the ```$.fn``` and then it is named ```bluey```. Not sure if that is a word or not.. but hey why not?!

Then, the function is created with the ```function()``` and the css is being applied to whatever element will use the ```bluey``` function.

So, what does the whole page look like?
```HTML
<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        $.fn.bluey = function () {
            this.css("background-color", "blue");
        };

        $(function () {
            $("button").click(function () {
                $("#changeDiv").bluey();
            });

        });
    </script>
</head>
<body>
    <div id="changeDiv">Test information</div>
    <button id="btnSubmit">Click</button>
</body>
</html>
```
If you were to run this page, the background color of our div tag would turn blue when you click the button. Low and behold we have a new look based on our function.

We can have it apply to any tags we want. And we can add more changes to the same jQuery plugin function. It might look like this:
```HTML
<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $.fn.bluey = function () {
            this.css("background-color", "blue");
            this.css("color", "white");
            this.css("font-size", 24);
        };

        $(function () {
            $("button").click(function () {
                $("#changeDiv").bluey();
            });

        });
    </script>
</head>
<body>
    <div id="changeDiv">Test information</div>
    <button id="btnSubmit">Click</button>
</body>
</html>
```
Now, in order for this to work in a chaining situation and have it so that it survives in the real world, we have to make a couple of changes to the plugin. First, we have to return this. This will return the object so that more functions can be chained to our plugin. The function definition needs to be put into a Immediately Invoked Function Expression and then we need to pass the function jQuery so that it knows that it is a jQuery plugin and won’t conflict with anything else.

The new fully qualified jQuery plugin looks like this now:
```jQuery
(function($){
       $.fn.bluey = function () {
           this.css("background-color", "blue");
           this.css("color", "white");
           this.css("font-size", 24);
           return this;
      };
   }(jQuery));
```
What this means is that we can do something like this now:
```HTML
<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>

        (function($){
        $.fn.bluey = function () {
            this.css("background-color", "blue");
            this.css("color", "white");
            this.css("font-size", 24);
            return this;
        };
        }(jQuery));
        $(function () {
            $("button").click(function () {
                $("#changeDiv").bluey().fadeOut("slow").fadeIn("slow");
            });

        });
    </script>
</head>
<body>
    <div id="changeDiv">Test information</div>
    <button id="btnSubmit">Click</button>
</body>
</html>
```
At this point, you can create a simple jQuery plugin. C’mon that’s pretty cool!
