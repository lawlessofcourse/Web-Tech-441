# WEEK 9/10 AJAX

## AJAX
### aka Asynchronous JavaScript and XML
What is AJAX? AJAX stands for Asynchronous JavaScript and XML. Huh? Well, here’s the deal. All web pages are delivered synchronously. That means that you cannot do two things at the same. Or at least you weren’t able to before AJAX came along. Once AJAX arrived, it allowed us to send a request to the server and while that request was being processed and a response sent back, the end-user could be doing other things. This prevents the white screen of nothingness from happening especially when you are trying to bring in large datasets.

So, what are some of the benefits of AJAX in more defined way? W3Schools define them at this:

* Update a web page without reloading the page
* Request data from a server - after the page has loaded
* Receive data from a server - after the page has loaded
* Send data to a server - in the background
* This is an impressive list because they increase page * responsiveness and end-users are happy because of it!

What do these requests look like? Here is an example:
```
<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "bikeInfo.txt", true);
  xhttp.send();
}
</script>
```

In this script, the XMLHttpRequest object is created and then it tries to open the bikeInfo.txt page. Then, it sends the request to open that page. When a response comes back, the data will be read an displayed. In the background,the onreadstatechange changes, and checks to see if the readyState is done and a response is ready with the status set to OK. That is what the 4 and the 200 are. Then JavaScript assigns the response to the innerHTML of the div tag.

Here is a graphic of how it works from client to server and back.
***INSERT AJAX PHOTO***

Let’s look at a full example - remember, you will need a bikeInfo.txt in the same directory to see this work.
```
<!DOCTYPE html>
<html>

<head>
    <script>

        function showBikeInfo() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                document.getElementById("bikeInformation").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "bikeInfo.txt", true);
            xhttp.send();
        }
    </script>

    </head>

    <body>
        <div id="bikeInformation"></div>
        <button id="btnSubmit" onclick="showBikeInfo();">Show Information</button>
    </body>
</html>
```

To run this example, you will want to run it in FireFox as Chrome will give you a cross origin exception.

Keep in mind there are other messages that are returned as well for readyState:

readyState

* 0. request not initialized
* 1. server connection established
* 2. request received
* 3. processing request
* 4. request finished and response is ready

status returns the status-number of a request
* 200: “OK”
* 403: “Forbidden”
* 404: “Not Found”

AJAX can read all different types of files. We can access server files where the data returned is formatted as XML. XML files are fairly straightforward as they just describe the data with their tags, and they don’t display anything. Here is an example of some XML:
```
<CATALOG>
    <CD>
        <TITLE>Empire Burlesque</TITLE>
        <ARTIST>Bob Dylan</ARTIST>
        <COUNTRY>USA</COUNTRY>
        <COMPANY>Columbia</COMPANY>
        <PRICE>10.90</PRICE>
        <YEAR>1985</YEAR>
    </CD>
    <CD>
        <TITLE>Hide your heart</TITLE>
        <ARTIST>Bonnie Tyler</ARTIST>
        <COUNTRY>UK</COUNTRY>
        <COMPANY>CBS Records</COMPANY>
        <PRICE>9.90</PRICE>
        <YEAR>1988</YEAR>
    </CD>
</CATALOG>
```
The previous XML example just shows information about the some music albums. So, how does AJAX access this?

Here is an example:
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 5px;
        }
    </style>
    <script>
        function loadDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    showCatalogInfo(this);
                }
            };
            xhttp.open("GET", "catalog.xml", true);
            xhttp.send();
        }

        function showCatalogInfo(xml) {
            var i;
            var xmlDoc = xml.responseXML;
            var table = "<tr><th>Title</th><th>Artist</th></tr>";
            var x = xmlDoc.getElementsByTagName("CD");
            for (i = 0; i < x.length; i++) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
                    "</td></tr>";
            }
            document.getElementById("catalogInformation").innerHTML = table;
        }
    </script>
</head>

<body>
        <table id="catalogInformation"></table>
    <button id="btnSubmit" onclick="loadDoc();">Show Information</button>
</body>

</html>
```
If you looked through the for loop, the title and the artist are being accessed and displayed in the table. The table is being built for each row.

We can also read in a file that has JSON in it, and then display the information as we did before.

It would look something like this:
```
<!DOCTYPE html>
<html>

<head>
    <script>

        function showBikeInfo() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                var bike = JSON.parse(this.responseText);
                document.getElementById("bikeInformation").innerHTML = "Manufacturer: " + bike.manufacturer
                + "<br>Model:" + bike.model + "<br>First Name:" + bike.owner.firstName + "<br>Last Name:"
                + bike.owner.lastName + "<br>Sizes Available:<br>" +
                bike.sizes[0] + "<br>" + bike.sizes[1] + "<br>" + bike.sizes[2] + "<br>" + bike.sizes[3];
                }
            };
            xhttp.open("GET", "bike.json", true);
            xhttp.send();
        }
</script>

    </head>

    <body>
        <div id="bikeInformation"></div>
        <button id="btnSubmit" onclick="showBikeInfo();">Show Information</button>
    </body>
</html>
```
Now, the responseText is returning a JSON object just like one would receive from a server or some other data source. We can assign it to an object and then access the properties. So, how is this all done in JQuery?
