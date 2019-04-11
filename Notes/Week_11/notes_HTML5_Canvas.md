# HTML5
## HTML5 Canvas
The HTML5 Canvas is a revolutionary tag element that provides a number of benefits such as:

* HTML Canvas Can be Animated
 * Canvas objects can move. Everything is possible: from simple bouncing balls to complex animations.

* HTML Canvas Can be Interactive
  * Canvas can respond to JavaScript events.
  *  Canvas can respond to any user action (key clicks, mouse clicks, button clicks, finger movement)

* HTML Canvas Can be Used in Games
  * Canvas’ methods for animations, offer a lot of possibilities for HTML gaming applications.

Let’s take a look at the most basic set up of the canvas. If you want the canvas to appear, you just need the canvas tag. It looks like this:
```HTML
<html>
    <head>
        <title>Canvas</title>
    </head>

    <body>
        <canvas id="myCanvas" height="600" width="800"></canvas>

    </body>
</html>
```
### How do we draw?
In order for us to interact with the canvas, we have to get the context of the canvas in 2d (3d requires a library and WebGL to help us).
```JavaScript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```
Now, we can draw something by adding these two lines. You should see a single blue square on your canvas.
```JavaScript
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(50, 50, 10, 10);
```
