 let show = {
                "title" : "Rick and Morty",
                "type" : "Animation",
                "genre" : ["Comedy", "Adventure", "Science-Fiction"],
                "episodes" : [
                    "Pilot",
                    "Lawnmower Dog",
                    "Anatomy Park",
                    "M. Night Shaym-Aliens!"
                ]
            }

        $(function () {
            $("button").click(function () {
                displayShowInfo();
            });

        });

        function displayShowInfo()
            {
                $("#bikeInformation").html("Title: " + show.title
                + "<br>Type:" + show.type + "<br>Genres: " + show.genre[0] + ", "
                + show.genre[1] + ", " + show.genre[2] + "<br>Episodes Available:<br>" +
                show.episodes[0] + "<br>" + show.episodes[1] + "<br>" + show.episodes[2] + "<br>" + show.episodes[3]);
            }
