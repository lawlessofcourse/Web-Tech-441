# WEEK 9/10 AJAX
## Michael Cassens - credit
## AJAX with jQuery

The previous examples were a little more complicated wouldn’t you agree? How does JQuery help us with that?

Let’s look at an example:
```HTML
<!DOCTYPE html>
<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $("button").click(function () {
                $("#bikeInformation").load("bikeInfo.txt");
            });
        });
    </script>
</head>

<body>
    <div id="bikeInformation">Nothing yet</div>
    <button>Get Bike Information</button>
</body>

</html>
```
The basic syntax of the JQuery AJAX call looks like this

``` jQuery
$(selector).load(URL,data,callback);
```
This means we can access elements using the jQuery selector, load some data from a URL, send data parameters, which are optional, and then add an optional callback function when the load is complete.

So, we could do something like this:
```HTML
<!DOCTYPE html>
<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $("button").click(function () {
                $("#bikeInformation").load("bikeInfo.txt", fadeText);
            });
        });

        function fadeText()
        {
            $("#bikeInformation").fadeOut("slow").fadeIn("slow");
        }
    </script>
</head>

<body>
    <div id="bikeInformation"></div>
    <button>Get Bike Information</button>
</body>

</html>
```
Here we are calling a function to be executed once the data has been retrieved and displayed. Cool eh?

There are even more jQuery functions that you can used, but I will refer you to W3Schools to check them out. [W3Schools jQuery AJAX](https://www.w3schools.com/jquery/jquery_ref_ajax.asp)
