var main = function () {



    $("#getWeatherButton").click(function () {



        /*$.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=38340,us&units=imperial&appid=120e3d3ff568c921ab96973a9b75f118",

            function (data) {

                var temp = data.main.temp;

                console.log(temp);

                $("#currentTemp").append(temp + " °F");

                $("#temp").append(temp + " °F");

            });*/





        $.ajax({

            url: 'https://api.darksky.net/forecast/b581b5c0fc48b3c8bafb217daf3096c1/35.4420477,-88.637395',

            data: {

                format: 'json'

            },

            error: function (error) {

                console.log(error);

            },

            dataType: 'jsonp',

            headers: {

                "Access-Control-Allow-Origin": "*"

            },

            success: function (data) {

                alert("success");

                var temp = data.currently.temperature;

                console.log(temp);

                $("#currentTemp").text(temp + " °F");



                var condition = data.currently.summary;

                console.log(condition);

                $("#currentCondition").text(condition);

            },



            type: 'GET'

        });





        /*$.ajax({

            method: "GET",

            url: "https://api.darksky.net/forecast/b581b5c0fc48b3c8bafb217daf3096c1/35.4420477,-88.637395",

            headers: {

                "Access-Control-Allow-Origin": "*"

            },

            //dataType: "jsonp",

            jsonpCallback: successCallback,

            success: successCallback,

            error: function (error) {

                console.log(error);

            }

        });



        var successCallback = function (data) {

                alert("success");

                var temp = data.currently.temperature;

                console.log(temp);

                $("#currentTemp").text(temp + " °F");



                var condition = data.currently.summary;

                console.log(condition);

                $("#currentCondition").text(condition);

            };*/

        //$.get("https://api.darksky.net/forecast/b581b5c0fc48b3c8bafb217daf3096c1/35.4420477,-88.637395", function (data) {

        //console.log(data);

        //});



        /*$.getJSON("https://api.darksky.net/forecast/b581b5c0fc48b3c8bafb217daf3096c1/35.4420477,-88.637395",

            function (data) {

                alert("test");

                var temp = data.currently.temperature;

                console.log(temp);

                $("#currentTemp").text(temp + " °F");

            });*/

    });

}



$(document).ready(main);



var result = {

    "coord": {

        "lon": -88.64,

        "lat": 35.44

    },

    "weather": [{

        "id": 804,

        "main": "Clouds",

        "description": "overcast clouds",

        "icon": "04d"

    }],

    "base": "stations",

    "main": {

        "temp": 284.15,

        "pressure": 1016,

        "humidity": 87,

        "temp_min": 284.15,

        "temp_max": 284.15

    },

    "visibility": 16093,

    "wind": {

        "speed": 1.5,

        "deg": 140

    },

    "clouds": {

        "all": 90

    },

    "dt": 1479216900,

    "sys": {

        "type": 1,

        "id": 1683,

        "message": 0.1718,

        "country": "US",

        "sunrise": 1479213060,

        "sunset": 1479250042

    },

    "id": 4628695,

    "name": "Henderson",

    "cod": 200

}