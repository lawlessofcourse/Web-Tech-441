# Week 13
## Continuation, Extension, and Assimilation
This week we are going to work on continuing the work that we began with the Canvas element. If you recall, we have worked with classes, objects, jQuery, JSON, displaying, moving and colliding with other objects. We will also use the array data structure to keep track of our objects. So, how are we going to do this? We are going to practice and practice some more!
***
## Canvas element review
Remember the ```canvas``` element? Here is what it looks like.
```HTML
<html>
    <head>
        <title>Canvas</title>
         <style>
        #myCanvas{
            border:black;
            border-style: solid;
            border-width: 2px;

        }
    </style>
    </head>

    <body>
        <canvas id="myCanvas" height="600" width="800"></canvas>

    </body>
</html>
```
***
## Canvas Movement
What about moving our element on the canvas? Do you remember how? Let’s start with this.
```HTML
<html>
    <head>
        <title>Canvas</title>
         <style>
        #myCanvas{
            border:black;
            border-style: solid;
            border-width: 2px;

        }
    </style>
    </head>

    <body>
        <canvas id="myCanvas" height="600" width="800"></canvas>
        <script>
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var x = 50;
            var y = 50;
            ctx.fillStyle = "#0000FF";
            drawSquare();
            setInterval(update, 1000);

            function update()
            {

                drawSquare();
            }

            function drawSquare()
            {
                ctx.fillRect(x, y, 20, 20);
            }

        </script>
    </body>
</html>
```
Now, you need to add the key events to make sure you can move the square around. Give it a try!
***
## Class and Object Review
Recall, the Key Events can implemented using the following jQuery events
```JavaScript
$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
}
```
And we are back to this! How do we create classes and objects again? Start with this.
```HTML
<html>
    <head>
        <title>Canvas</title>
         <style>
        #myCanvas{
            border:black;
            border-style: solid;
            border-width: 2px;

        }
    </style>
    </head>

    <body>
        <canvas id="myCanvas" height="600" width="800"></canvas>
        <script>
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var x = 50;
            var y = 50;
            ctx.fillStyle = "#0000FF";
            drawSquare();
            setInterval(update, 1000);

            function update()
            {

                drawSquare();
            }

            function drawSquare()
            {
                ctx.fillRect(x, y, 20, 20);
            }

        </script>
    </body>
</html>
```
