var imageNames = ["image1", "image2", "image3", "image4", "image5", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var blankImagePath = "images/gofish.jpg";
var firstNumber = -1;
var secondNumber = -1;
// JSON declaration
var player = {"firstname":"", "lastname":"", "age":"", "attempts": ""};

var attempts = 0;
// create a variable with the blank image name
// create a empty array for the actual images
var actualImages = [];

function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageNames.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageNames[i]).src= blankImagePath;
    }

}

function createRandomImageArray()
{
    // create an array of actual images
    var actualImagePath = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/boathouse.jpg"];
    // create another array to make sure the images only get added twice
    var count = [0,0,0,0,0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 12)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number)
{

    // make the second image appear
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];

    }
    else if(firstNumber < 0) // make the first image appear
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];

    }

    // check to see if the images do not match
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
        attempts += 1;
        return attempts;
    }
    // check to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
        attempts += 1;
        return attempts;
    }
}

function imagesDisappear()
{
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
    //console.log(firstName);
    player.firstname = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "HWExample.html";

    player.lastname = lastName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "HWExample.html";

    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "HWExample.html";
}

// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    //console.log(player.firstname);
}
function finish(){
  player.attempts = attempts;
  localStorage.setItem("playerInfo", JSON.stringify(player));
  window.location = "finished.html"
}
function endPage(){
  var playerInformation = localStorage.getItem("playerInfo");
  player = JSON.parse(playerInformation);
  document.getElementById("details").innerHTML = "Player" + player.firstname + player.lastname + " at age" + player.age + " finished in " + player.attempts + " attempts.";
}
