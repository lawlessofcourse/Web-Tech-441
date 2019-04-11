# HTML5
## HTML5 Draw

In the last section we look at how we could make a simple square appear. But how do we animate something like that? What if I wanted the square to move left and right? What about up and down? What would you do?

We might try something like this:
```HTML
<html>
    <head>
        <title>Canvas</title>
    </head>
    <style>
        #myCanvas{
            border:black;
            border-style: solid;
            border-width: 2px;

        }
    </style>
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
### Streaking
Not that kind of streaking! Get your head out of the gutter!

Now, as you can see, this does draw, but we have a problem. It’s a streaking problem. So, we need to refresh the background and then draw our square to the screen. In p5 or processing, you can just say background and provide a color like black, but here you have call clearRect which essentially, removes all elements from a rectangle. It looks like this:
```JavaScript
ctx.clearRect(0,0,800,600);
```
Smooth Movement
There is still something not quite right. It’s sort of jerky. So, to smooth things out, we need to create a framerate so that it refreshes the screen nicely. So, if you divide the time you have as your interval (in this case 1000), by the framerate you want, you will get nice smooth movement and the final code looks like this:
```JavaScript
setInterval(update, 1000/60);
```
## Key Events
In the last section, we looked at moving items across the screen. If you can do that, then you can move something with a key event too. Let’s use our code frome before to draw a blue square:
```HTML
<html>
    <head>
        <title>Canvas</title>
    </head>
    <style>
        #myCanvas{
            border:black;
            border-style: solid;
            border-width: 2px;

        }
    </style>
    <body>
        <canvas id="myCanvas" height="600" width="800"></canvas>

        <script>
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var x = 50;
            var y = 50;
            ctx.fillStyle = "#0000FF";
            drawSquare();

            function drawSquare()
            {
                ctx.clearRect(0,0,800,600);
                ctx.fillRect(x, y, 20, 20);
            }

        </script>
    </body>
</html>
```
### KeyEvents
Should we use WASD or arrows? Or both? Let’s start with WASD.

You may recall that all keys (input) have to get translated for the computer to be able to know which key was pressed. For example, we know that M was pressed or Q. Did you know that each of those keys are mapped to a certain number and those numbers are stored as 0’s and 1’s so the computer knows what do to with them? Cool huh?

In JavaScript and jQuery, we have to either use their key’s number or try and compare the actual letter.
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
Remember this? It’s back! This allows us to check for key events on anything that might be on the page. Then, we can get the letter that was pressed and do something.

Need a hint - read below

So, let me ask you this. If I wanted to go up, which letter would I press? w right? Which value would I need to change? x or y? If you answered y, you are correct! What do I need to do to y to make the shape move up? Do I need to add to it or subtract from it? Keep in mind that 0,0 is in the upper left hand corner. If you answered subtract from y, you were correct!

So, the function might be like this:
```JavaScript
function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
    }
    drawSquare();
}

function moveUp()
{
    y-=10;
}
```
Did you notice I put the drawSquare function in after the if statement? Why did I need to do that?
## HTML5 Collisions
With any game, you need to be able to handle collisions. We are going to use a really simple box collider. It basically checks the corners of the boxes to see if they are overlapping. If they are, then it returns true, else it returns false. Keep in mind, collision can be more precise but it takes more processing because of all the points that must be checked. Also, collision must be checked whenever something moves.

Here is our collision code:
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
Now, wait a minute.. you might have thought that objects were going away.. but what if I told you that you could create an object out of each of your squares (assuming you have at least two). Then, you can send your objects into this function and it will check to see if you have collided or not.
