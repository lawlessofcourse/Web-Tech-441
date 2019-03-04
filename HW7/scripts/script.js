// JavaScript Document
var myViewFinderArray = new Array();

var displayImages = ['images/Yak.jpg', 'images/ponies.jpg'];

function showImage(){
	document.getElementById('cover').style.display = 'block';
}
function hideImage(){
	document.getElementById('cover').style.display='none';
}

class ViewFinder
{
	constructor(title )
	{
		this.title = title;

	}

	toString()
	{
		return "Title: " + this.title;
	}

	get theTitle()
	{
		return this.title;
	}

}
function initializeArray()
{
		var myViewFinder = new ViewFinder("A good lookin' Yak");
		var myViewFinder1 = new ViewFinder("Some good lookin' ponies");
		myViewFinderArray.push(myViewFinder);
		myViewFinderArray.push(myViewFinder1);
}

function accessInformation()
{
	var x = Math.floor((Math.random()*2));
		document.getElementById("title").innerHTML = myViewFinderArray[x].toString();
		document.getElementById("Images").src = displayImages[x];
}
