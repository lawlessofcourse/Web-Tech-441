//create array that match image tags
var imageId=["image1", "image2", "image3", "image4"];
//create variable with the blank image
var blankImage = "images/gofish.jpg";
//create empty array for non-empty images
var showImages = new Array();

function printBlanks()
{
  //call random image funtion
  createRandomImageArray();
  // create a for loop to loop throught image options
  for(var i = 0; i < imageId.length; i++)
  {
    //iterate throught the image tag ids and sets the source
    document.getElementById(imageId[i]).src = blankImage;
  }
}

function createRandomImageArray()
{
  //create array of images
  var imagePath = ["images/dog.jpg", "images/tiger.jpg"];
  //create another array to make sure the images only get added twice
  var count = [0,0];
  //create a while statement to check to see if our actual image array is full
  while(actualImages.length < 4)
  {
    //get a random number between 0 and the total number of images that we can choose from
    var randomNumber = Math.floor(Math.random() * imagePath.length);
    //create an if statement that says if the total number added is less than 2, then add the image to the actual array
    if(count[randomNumber]<2)
    {
      actualImages.push(actualImagePath[randomNumber]);
      //add one to the array that makes sure only two images can be added
      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}

function flipImage(number)
{
  document.getElementById(imageId[number]).src = showImages[number];
  //changes image based on what number was pressed
}
