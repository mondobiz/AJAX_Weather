console.log("it's working!")
function handleGetData(event) {
    event.preventDefault();
   
    const searchText = $("#search").val()
    $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=imperial&appid=492d5f7b301bdcc191c5b8b01d7a985a`
        })
        .then(
            (data) => {
                console.log(data);
                $("#weatherFor").text(data.name)
                $("#temperature").text(data.main.temp)
                $("#feelsLike").text(data.main.feels_like)
                $("#weather").text(data.weather[0].description)
            },
            (error) => {
                console.log("bad request: ", error)
            }
        )
}
$('form').on("submit", handleGetData)