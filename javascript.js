// global variables
let button = $(".btn");
let input = $("input");


// submit button function
button.on("click", function(){
    event.preventDefault();

    // clears the <img> before inputting a new icon with new city
    $("img").attr('src', '');
    let cityInput = $("input").val();

    // console.log(cityInput);

    // creating divs and prepend every time a new value is inputted
    let newDiv = $("<div>");
    newDiv.attr('class', 'card m-1 p-3');
    newDiv.text(cityInput);
    $("#cityList").prepend(newDiv);
    
    // let API = "c04a879c0afe257f716ea92825ba01c6";
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=c04a879c0afe257f716ea92825ba01c6";
    
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function(response) {
            // console.log(response);

            // key variables for the first ajax function
            let temperature = response.main.temp;
            let humidity = response.main.humidity;
            let windSpeed = response.wind.speed;
            let iconValue = response.weather[0].icon;
            let currentDay = moment().format('L');
            console.log(temperature)
            
            // putting information into divs
            $("#cityName").text(cityInput.toUpperCase());
            let imgTag = $("<img>");
            imgTag.attr('src', 'http://openweathermap.org/img/wn/'+ iconValue +'.png');
            $(".temp").text("Temperature(F): " + Math.round(10 * temperature )/10);
            $(".humidity").text(`Humidity: ${humidity} %`);
            $(".wind").text("Wind Speed: " + windSpeed + "MPH");
            console.log(moment().format("MMM Do YY"));
            $("#cityName").append(imgTag);
            $("#currentDay").text(currentDay);


            
            // grabbing latitude and longitude
            // let lat = response.coord.lat;
            // localStorage.setItem('lat', lat);
            // let lon = response.coord.lon;
            // localStorage.setItem('lon', lon);
            // console.log(lat, lon)

            // grabbing the city ID
            let cityID = response.id;
            localStorage.setItem('cityID', cityID)
            // console.log(response.id);
        });
    
    // let latUV = JSON.stringify(localStorage.getItem('lat'));
    // let lonUV = JSON.stringify(localStorage.getItem('lon'));
    // console.log(latUV, lonUV);
    let locationID = localStorage.getItem('cityID');

    let fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + locationID + "&units=imperial&appid=c04a879c0afe257f716ea92825ba01c6";

    $.ajax({
        url: fiveDayURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        // first forecast
        let tempKelvinOne = response.list[0].main.temp;
        let tempOne = Math.round(10 * tempKelvinOne )/10;
        let humidityOne = response.list[0].main.humidity;
        let iconOne = response.list[0].weather[0].icon;
        let dayOne = moment().add(1, 'days').format('L');

        $(".firstTemp").text("Temp(F): " + tempOne);
        $(".firstHumidity").text(`Humidity: ${humidityOne} %`);
        let firstImg = $("<img>").attr('src', 'http://openweathermap.org/img/wn/'+ iconOne +'.png');
        $("#first").prepend(firstImg);
        $("#dayOne").text(dayOne);

        
        // second forecast
        let tempKelvinTwo= response.list[9].main.temp;
        let tempTwo = Math.round(10 * tempKelvinTwo )/10;
        let humidityTwo = response.list[9].main.humidity;
        let iconTwo = response.list[9].weather[0].icon;
        let dayTwo = moment().add(2, 'days').format('L');


        $(".secondTemp").text("Temp(F): "+ tempTwo);
        $(".secondHumidity").text(`Humidity: ${humidityTwo} %`);
        let secImg = $("<img>").attr('src', 'http://openweathermap.org/img/wn/'+ iconTwo +'.png');
        $("#second").prepend(secImg);
        $("#dayTwo").text(dayTwo);


        // third forecast
        let tempKelvinThree= response.list[18].main.temp;
        let tempThree = Math.round(10 * tempKelvinThree )/10;
        let humidityThree = response.list[18].main.humidity;
        let iconThree = response.list[18].weather[0].icon;
        let dayThree = moment().add(3, 'days').format('L');


        $(".thirdTemp").text("Temp(F): "+ tempThree);
        $(".thirdHumidity").text(`Humidity: ${humidityThree} %`);
        let thirdImg = $("<img>").attr('src', 'http://openweathermap.org/img/wn/'+ iconThree +'.png');
        $("#third").prepend(thirdImg);
        $("#dayThree").text(dayThree);

        
        // four forecast
        let tempKelvinFour= response.list[27].main.temp;
        let tempFour = Math.round(10 * tempKelvinFour )/10;
        let humidityFour = response.list[27].main.humidity;
        let iconFour = response.list[27].weather[0].icon;
        let dayFour = moment().add(4, 'days').format('L');


        $(".fourthTemp").text("Temp(F): "+ tempFour);
        $(".fourthHumidity").text(`Humidity: ${humidityFour} %`);
        let fourthImg = $("<img>").attr('src', 'http://openweathermap.org/img/wn/'+ iconFour +'.png');
        $("#fourth").prepend(fourthImg);
        $("#dayFour").text(dayFour);


        // five forecast
        let tempKelvinFive= response.list[36].main.temp;
        let tempFive = Math.round(10 * tempKelvinFive )/10;
        let humidityFive = response.list[36].main.humidity;
        let iconFive = response.list[36].weather[0].icon;
        let dayFive = moment().add(5, 'days').format('L');


        $(".fiveTemp").text("Temp(F): "+ tempFive);
        $(".fiveHumidity").text(`Humidity: ${humidityFive} %`);
        let fiveImg = $("<img>").attr('src', 'http://openweathermap.org/img/wn/'+ iconFive +'.png');
        $("#five").prepend(fiveImg);
        $("#dayFive").text(dayFive);

    })
})


    


