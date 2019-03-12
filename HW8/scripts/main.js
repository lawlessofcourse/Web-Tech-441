var dogSelector = "#dog";
var allImages = new Array();
var counter = 0;
var other = 0;
class DogInfo{
    constructor(selector, imagePath, artistName)
    {
        this.selector = selector;
        this.imagePath = imagePath;
        this.artistName = artistName;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }
    get theArtist(){
        return this.artistName;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath + ":" + this.artistName;
    }
}

function initializeArray()
{
    var img = new DogInfo("#imgId", "images/WP.jpg", "unknown1");
    var img1 = new DogInfo("#imgId", "images/WP1.jpg", "unknown2");
    var img2 = new DogInfo("#imgId", "images/WP2.jpg", "unknown3");
    var img3 = new DogInfo("#imgId", "images/WP3.jpg", "unknown4");
    var img4 = new DogInfo("#imgId", "images/WP4.jpg", "unknown5");
    allImages.push(img);
    allImages.push(img1);
    allImages.push(img2);
    allImages.push(img3);
    allImages.push(img4);

}

$(document).ready(function(){
    console.log(allImages[0].toString());
    console.log(allImages[0].theSelector);
    console.log(allImages[0].theImagePath);
    console.log( allImages[0].theArtist.toString());
    //$(allImages[0].theSelector).src = allImages[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
      //setInterval(changeImages, 5000);
  //  $(allImages[counter].theSelector).attr("src", allImages[counter].theImagePath).fadeOut(2000);
    $("button").click(function(){
      //$(allImages[0].theSelector).attr("src", allImages[0].theImagePath).fadeOut();
      $(allImages[4].theSelector).attr("src", allImages[4].theImagePath).fadeIn(2000).fadeOut(2000, function(){
        $(allImages[3].theSelector).attr("src", allImages[3].theImagePath).fadeIn(2000).fadeOut(2000, function(){
          $(allImages[2].theSelector).attr("src", allImages[2].theImagePath).fadeIn(2000).fadeOut(2000, function(){
            $(allImages[1].theSelector).attr("src", allImages[1].theImagePath).fadeIn(2000).fadeOut(2000, function(){
              $(allImages[0].theSelector).attr("src", allImages[0].theImagePath).fadeIn(2000).fadeOut(2000);
            });
          });
        });
      });
        // $(allImages[other].theSelector).attr("src", allImages[other].theImagePath).fadeOut(500, function(){
        //   $(allImages[counter].theSelector).attr("src", allImages[counter].theImagePath).fadeIn(2000);
        // });
        // $(allImages[0].theSelector).attr("src", allImages[0].theImagePath);
        // $(allImages[other].theSelector).attr("src", allImages[other].theImagePath).fadeOut(500, function(){
        //   $(allImages[counter].theSelector).attr("src", allImages[counter].theImagePath).fadeIn(2000);
        // });
        // for(i=0; i<allImages.length; i++){
        // $(allImages[i].theSelector).attr("src", allImages[i].theImagePath).fadeToggle(2000);
        // //document.getElementByClass("stuff").innerHTML= allImages[i].theArtist.toString();
        // }
        setInterval(changeImages, 5000);
        //$(allImages[counter].theSelector).attr("src", allImages[counter].theImagePath);
        //$(".suh").css({"background-image": "url('../images/WP.jpg')"})
        $("#square").css({'background': 'blue'});
        $(".stuff").fadeIn();

        $("#third").toggle();
        setInterval(moveSquare, 10000);

       // $(allImages[0].theSelector).fadeOut().fadeIn();

    });

});

function moveSquare()
{
    $("#square").animate({left:25}).animate({top:0}).animate({top:900});
}
function changeImages(){

}
