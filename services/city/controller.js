const about = require('./services/about');
const city = require('./services/city');

const controllers = {
    getAbout: (req, res) => {
        about.get(req, res, (err, data) => {
            if (err)
                res.send(err);

            res.render("about.njk", data)
        });
    },

    getCity: (req, res) => {
        city.get(req, res, function(err, data) {
            if (err)
                res.send(err);
            res.render("city.njk", {data: data, layout: 'layout.njk', title: req.body.cityName, cityName: req.body.cityName});
        });
    },
};

module.exports = controllers;