var der;

$(document).ready(function() {
  $("button").click(function() {
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
      result += val +"<br>";
    }
    if (key === 'summary') {
      result += "Summary: "+ val + "<br>";
      //$("#colThree").append("<br>" + "Summary:" + val);
    }
    if (key === 'season') {
      result +="Season " + val + "<br>";
    }
    if (key === 'number') {
      result += "Episode " + val + "<br>";
      
    }
    $("div").append(result);
  });
}

//funtion showData()

/* function fadeText()
{
$("#bikeInformation").fadeOut("slow").fadeIn("slow");
}
*/
