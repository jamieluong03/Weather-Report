let button = $(".btn");
let input = $("input");

button.on("click", function(){
    event.preventDefault();
    let cityInput = $("input").val();
    console.log(cityInput);

    // localStorage.setItem('city', JSON.stringify(cityInput));

    let newDiv = $("<div>");
    newDiv.attr('class', 'card');

    newDiv.text(cityInput);
    
    $("#cityList").prepend(newDiv);
    

    let API = "c04a879c0afe257f716ea92825ba01c6";
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + API;
    
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function(response) {
            console.log(response);

            let kelvin = response.main.temp;
            let humidity = response.main.humidity;
            let windSpeed = response.wind.speed;
            let temperature = 1.8 * (kelvin - 273) + 32;
            let iconValue = response.weather[0].icon;
            

            $("#cityName").text(cityInput.toUpperCase());
            $("img").attr('src', 'http://openweathermap.org/img/wn/'+ iconValue +'.png');
            $(".temp").text("Temperature(F): " + Math.round(10 * temperature )/10);
            $(".humidity").text("Humidity: " + humidity);
            $(".wind").text("Wind Speed: " + windSpeed);
            console.log(iconValue);
            
            let lat = response.coord.lat;
            localStorage.setItem('lat', lat);
            let lon = response.coord.lon;
            localStorage.setItem('lon', lon);

            console.log(lat, lon)
        });
    
    let latUV = JSON.stringify(localStorage.getItem('lat'));
    let lonUV = JSON.stringify(localStorage.getItem('lon'));
    console.log(latUV, lonUV);
    
    let UVUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latUV + "&lon=" + lonUV + "&appid=" + API;

    $.ajax({
        url: UVUrl,
        method: "GET"
    }).then(function(response){

    })
})

    


