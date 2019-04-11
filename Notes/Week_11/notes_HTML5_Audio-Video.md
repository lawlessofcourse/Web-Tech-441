# HTML5
## HTML5
HTML5 is just the next iteration of HTML. There are number of new tags used for specific purposes. There are semantic tags such as the ```header```, ```footer```, ```article```, and section tags which allow you to work with your layout in a more meaningful way.

There are some graphical tags such as ```svg``` and ```canvas``` which allow us to draw things to our web page.

There are media elements such as ```audio``` and `video` which allows to play music and video directly without using insecure and unsupported technologies like Flash or Java applets. It also means we can reduce iframes of streamed content if we want.

Finally, there are new form element attributes such as `number`, `date`, `time`, `calendar`, and `range`. This just adds more functionality to our forms without additional coding.

## Audio and Video
Two of the most exciting tags elements introduced in HTML5 is the audio and video tags. This allows us to embed audio and video just as easily as when we integrated images into our sites.

For Audio, the syntax is like this:
```HTML
<html>
    <head>
        <title>Audio/Video</title>
    </head>
    <body>
        <audio id="song" src="https://montana-media-arts.github.io/web-tech-Spring2019/data/Brahms.mp3" controls="controls">
        </audio>
        <br>
    </body>
</html>
```
As you can see the audio tag sets the src of the song and then plays the song. There is an attribute called controls which allow the basic controls to appear for the music player.

Similarly, the video controls works the same way. The syntax looks like this:
```HTML
<html>
    <head>
        <title>Audio/Video</title>
    </head>
    <body>

        <video id="film" src="https://montana-media-arts.github.io/web-tech-Spring2019/data/BOOM.mp4" type="video/mp4" controls="true">
        </video>

    </body>
</html>
```
### Change Source with Events
For audio it looks like this:
```JavaScript
var audio = document.getElementById("song");
    audio.src="https://montana-media-arts.github.io/web-tech-Spring2019/data/Schubert.mp3";
```
and for the video, it would like like this:
```JavaScript
var film = document.getElementById("film");
    film.src="https://montana-media-arts.github.io/web-tech-Spring2019/data/Cat.mp4";
```
So, if we put it all together now. The html file would look like this:
```HTML
<html>
    <head>
        <title>Audio/Video</title>
        <script src="main.js"></script>
    </head>
    <body>

        <audio id="song" src="https://montana-media-arts.github.io/web-tech-Spring2019/data/Brahms.mp3" controls="controls">
        </audio>
        <br>
        <video id="film" src="https://montana-media-arts.github.io/web-tech-Spring2019/data/BOOM.mp4" type="video/mp4" controls="true">
        </video>

        <p></p>
        <button onclick="updateAudio();">Change Audio</button>

        <p></p>
        <button onclick="updateVideo();">Change Video</button>

    </body>
</html>
```
While the JavaScript file would look like this:
```JavaScript
function updateAudio()
{
    var audio = document.getElementById("song");
    audio.src="https://montana-media-arts.github.io/web-tech-Spring2019/data/Schubert.mp3";
}

function updateVideo()
{
    var film = document.getElementById("film");
    film.src="https://montana-media-arts.github.io/web-tech-Spring2019/data/Cat.mp4";
}
```
### Changes with jQuery
We can do the same thing in jQuery like this:
```JavaScript
$(document).ready(function(){
    $("#audiochange").click(function(){
        updateAudio();
    });

    $("#videochange").click(function(){
        updateVideo();
    });
});


function updateAudio()
{
    $("#song").attr("src", "https://montana-media-arts.github.io/web-tech-Spring2019/data/Schubert.mp3");
}

function updateVideo()
{
    $("#film").attr("src", "https://montana-media-arts.github.io/web-tech-Spring2019/data/Cat.mp4");
}
```
and the HTML file would look something like this:
```HTML
<html>
    <head>
        <title>Audio/Video</title>
        <script src="libs/jquery.min.js"></script>
        <script src="scripts/main.js"></script>
    </head>
    <body>

        <audio id="song" src="https://montana-media-arts.github.io/web-tech-Spring2019/data/Brahms.mp3" controls="controls">
        </audio>
        <br>
        <video id="film" src="https://montana-media-arts.github.io/web-tech-Spring2019/data/BOOM.mp4" type="video/mp4" controls="true">
        </video>

        <p></p>
        <button id="audiochange">Change Audio</button>

        <p></p>
        <button id="videochange">Change Video</button>

    </body>
</html>
```
