const axios = require("axios")
const city = {
    get: (req, res, callback) => {
        const options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
            params: {namePrefix: req.body.cityName},
            headers: {
                'X-RapidAPI-Key': '44c70163e5msh483eff061a3c85ep1c3e25jsnb25fa3d04c8a',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            if (response.status === 200) {
                callback( false, response.data.data );
            } else {
                console.log(response.status + response.statusText);
                callback( true, {city: -1});
            }
        }).catch(function (error) {
            console.error(error);
        });
    }
};

module.exports = city;