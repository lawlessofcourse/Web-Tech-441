# Week 13
## JSON Review  
JSON or JavaScript Object Notation is how we can store and transport information between our scripts. We have used this in a couple of assignments. Now you will create your own.
```HTML

{"bikes":[{"manufacturer" : "Santa Cruz",
    "      model" : "5010"},
        {"manufacture":"Specialized",
        "model":"Stump Jumper"}]}

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
Can you change the JSON above, update it to create new squares? Remember, start with just one square and then add more.
***
## Array Review
Creating an array should be second nature by now. I hope! Remember, there are two ways to create an array.
```JavaScript
var myArray = new Array();

var myArray = [];
```
What method do we use to add something to array?
```JavaScript
myArray.push(myelement);
```
How do we access or change elements in the array?
```JavaScript
var element = myArray[0]; // access an index in the array

myArray[0] = element; // change an index in the array
```
Can you use the array in your canvas? I would create a simple array instance and making sure you can make it appear in the canvas.
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
Alter the code above to make sure your array items appear in the canvas.

Combine the JSON that you created by creating objects from your class and adding them to your array. Then, make each of the indices in your array appear on your canvas.
***
## Collision Review
So, remember, we can use this collision method below.
```JavaScript
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
```
You will need to iterate over your array objects each time you move and check to see if you have collided with all the objects on the page. Give it a try!
