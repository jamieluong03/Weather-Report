let button = $(".btn");
let input = $("input");

// button.on("click", function(){
//     // let cityInput = $("input").val();
//     // let cities = JSON.parse(localStorage.setItem('city', JSON.stringify(cityInput)));
//     // console.log(cityInput);

//     // let li = $("<li>");
//     // let ul = $("ul")

   
// })

    let cityName = 'London';
    let API = "c04a879c0afe257f716ea92825ba01c6";
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + API;
    
    $.ajax({
        url: weatherURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);

        });





// every time user enters a city, create a new li and add to div
{/* <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div> */}