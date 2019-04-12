var der;
(function($) {
  $.fn.blackbg = function() {
    this.css("background-color", "black");
    this.css("color", "white");
    this.css("font-size", 24);
    this.css("text-align", "center");
    this.css("background-blend-mode", "overlay");
    this.css("opacity", "0.75");
    return this;
  };
}(jQuery));

(function($) {
  $.fn.bgImage = function() {
    this.css("background-image", "url('./images/RickandMorty.jpg')");
    this.css("background-position", "center");
    this.css("background-size", "fit");
    this.css("background-repeat", "repeat");
    return this;
  };
}(jQuery));

$(document).ready(function() {
  $("button").click(function() {
    $("body").bgImage().fadeIn("fast");
    $("#showInfo").blackbg().fadeIn("slow");
    $("#btnSubmit").fadeOut("fast");
    $.getJSON("./data/shows.json", function(data) {

      objectCheck(data);

    });
  });
});

function objectCheck(data) {
  $.each(data, function(key, val) {

    var result = "";
    if (typeof val === 'object') {
      //  $("div").append("<br>" + key + ": ");
      objectCheck(val);

    }
    if (key === 'name') {
      //  objectCheck(val);
      result += val + "<br>";
    }
    if (key === 'summary') {
      result += "Summary: " + val + "<br>";
      //$("#colThree").append("<br>" + "Summary:" + val);
    }
    if (key === 'season') {
      result += "Season " + val + "<br>";
    }
    if (key === 'number') {
      result += "Episode " + val + "<br>";

    }
    $("#showInfo").append(result);
  });
}

//funtion showData()

/* function fadeText()
{
$("#bikeInformation").fadeOut("slow").fadeIn("slow");
}
*/
