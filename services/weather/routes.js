const controller = require('./controller');
const routes = (app) => {
    app.route('/weather/about').get(controller.getAbout);
    app.route('/weather').post(controller.getWeather);
}
module.exports = routes;