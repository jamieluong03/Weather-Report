// global variables
let button = $(".btn");
let input = $("input");

// submit button function
button.on("click", function(){
    event.preventDefault();
    let cityInput = $("input").val();
    console.log(cityInput);

    // localStorage.setItem('city', JSON.stringify(cityInput));
    // creating divs and prepend every time a new value is inputted
    let newDiv = $("<div>");
    newDiv.attr('class', 'card');
    newDiv.text(cityInput);
    $("#cityList").prepend(newDiv);
    
    // let API = "c04a879c0afe257f716ea92825ba01c6";
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=c04a879c0afe257f716ea92825ba01c6";
    
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function(response) {
            console.log(response);

            // key variables for the first ajax function
            let kelvin = response.main.temp;
            let humidity = response.main.humidity;
            let windSpeed = response.wind.speed;
            let temperature = 1.8 * (kelvin - 273) + 32;
            let iconValue = response.weather[0].icon;
            
            // putting information into divs
            $("#cityName").text(cityInput.toUpperCase());
            $("img").attr('src', 'http://openweathermap.org/img/wn/'+ iconValue +'.png');
            $(".temp").text("Temperature(F): " + Math.round(10 * temperature )/10);
            $(".humidity").text("Humidity: " + humidity);
            $(".wind").text("Wind Speed: " + windSpeed);
            console.log(iconValue);
            
            // grabbing latitude and longitude
            // let lat = response.coord.lat;
            // localStorage.setItem('lat', lat);
            // let lon = response.coord.lon;
            // localStorage.setItem('lon', lon);
            // console.log(lat, lon)

            // grabbing the city ID
            let cityID = response.id;
            localStorage.setItem('cityID', cityID)
            console.log(response.id);
        });
    
    // let latUV = JSON.stringify(localStorage.getItem('lat'));
    // let lonUV = JSON.stringify(localStorage.getItem('lon'));
    // console.log(latUV, lonUV);
    let locationID = localStorage.getItem('cityID');

    let UVUrl = "https://api.openweathermap.org/data/2.5/forecast?id=" + locationID + "&appid=c04a879c0afe257f716ea92825ba01c6";

    $.ajax({
        url: UVUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);

        // let dates = response.list[i].dt_txt;
        let tempKelvin = response.list[i].main.temp;
        let tempFive = Math.round(10 * tempKelvin )/10;
        let humidityFive = response.list[i].main.humidity;

        // console.log(dates);
        console.log(tempFive);
        console.log(humidityFive);
        for (var i = 0; i < response[5]; i++){
          
            
            let newDates = $("<div>")
            newDates.attr('class', 'card');
            newDates.text(dates);
            $("#fiveDay").append(newDates);

            let newTempFive = $("<div>")
            newTempFive.attr('class', 'card');
            newTempFive.text(tempFive);
            $("#fiveDay").append(newTempFive);

            let newHumidityFive = $("<div>")
            newHumidityFive.attr('class', 'card');
            newHumidityFive.text(humidityFive);
            $("#fiveDay").append(newHumidityFive);

            
           
        }
    })
})


    


