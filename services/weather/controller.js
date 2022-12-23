const about = require('./services/about');
const weather = require('./services/weather');

const controllers = {
    getIndex: (req, res) => {
        res.sendFile(__dirname + '/html/index.html');
    },
    getAbout: (req, res) => {
        about.get(req, res, (err, data) => {
            if (err)
                res.send(err);

            res.render("about.njk", data)
        });
    },

    getWeather: (req, res) => {
        weather.get(req, res, function(err, data) {
            if (err)
                res.send(err);
            res.render("weather.njk", {data: data, layout: 'layout.njk', title: data.cityName});
        });
    },
};

module.exports = controllers;