 let bike = {
                "title" : "Rick and Morty",
                "type" : "Animation",
                "show" : [
                  "name",
                  "season" ,
                  "number",
                  "summary",
                ]
            }

        $(function () {
            $("button").click(function () {
                showBikeInfo();
            });

        });

        function showBikeInfo()
            {
                $("#bikeInformation").html("Title: " + bike.title
                + "<br>Type: " + bike.type +  "<br>Episodes:<br>" +
                bike.show[0].name + "<br>" + bike.show[0].season + "<br>" + bike.show[0].number + "<br>" + bike.show[0].summary);
            }
