const axios = require("axios")
const apiKey = "6141811a6136148a00133488eadff0fb"

const weather = {
    get: (req, res, callback) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+ req.body.cityName + "&appid="+apiKey+"&units=celsius"
        axios.get(url).then((response,)=>{
            if (response.status === 200) {
                const data = {
                    temperature : response.data.main.temp,
                    weatherDes : response.data.weather[0].description,
                    imageURL : "http://openweathermap.org/img/wn/"+ response.data.weather[0].icon + "@2x.png",
                    cityName : response.data.name,
                }
                callback( false, data );
            } else {
                console.log(response.status + response.statusText);
                callback( true, {weather: -1});
            }
        });
    }
};

module.exports = weather;