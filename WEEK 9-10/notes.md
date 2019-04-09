# WEEK 9/10 AJAX

### JSON Review
Before we look at how to access data using AJAX, we will review JSON. Recall JSON stands for JavaScript Object Notation. This way we can store data as an object.

Remember, JSON is a standardized method for storing and transporting unordered collections of data. This data is stored through name:value pairs or key:value. Furthermore, the values in JSON data can be;

* strings
* numbers
* booleans
* arrays
* or other nested JSON objects

JSON Objects, once in JavaScript (i.e. after being sent over from an API on a remote server), appear as JS objects. As such, they can be traversed and manipulated using standard JS object notation and techniques.

As an example, the following code creates a JS Object, which is also valid as JSON.

```
let bike = {
    "manufacturer" : "Santa Cruz",
    "model" : "5010",
    "owner" : {
        "firstName" : "Bob",
        "lastName" : "Jones"
    },
    "sizes" : [
        "small",
        "medium",
        "large",
        "x-large"
    ]
}```
Once this object is bound to the variable bike, we can navigate through it and access its unique values.

The following example creates the same object as above, but also demonstrates how to access values within the object.
```
<html>
    <head>
        <script>
            let bike = {
                "manufacturer" : "Santa Cruz",
                "model" : "5010",
                "owner" : {
                    "firstName" : "Bob",
                    "lastName" : "Jones"
                },
                "sizes" : [
                    "small",
                    "medium",
                    "large",
                    "x-large"
                ]
            }

            function showBikeInfo()
            {
                document.getElementById("bikeInformation").innerHTML = "Manufacturer: " + bike.manufacturer
                + "<br>Model:" + bike.model + "<br>First Name:" + bike.owner.firstName + "<br>Last Name:"
                + bike.owner.lastName + "<br>Sizes Available:<br>" +
                bike.sizes[0] + "<br>" + bike.sizes[1] + "<br>" + bike.sizes[2] + "<br>" + bike.sizes[3];
            }
        </script>
    </head>

    <body>
        <div id="bikeInformation"></div>
        <button id="btnSubmit" onclick="showBikeInfo();">Show Information</button>
    </body>
</html>```
