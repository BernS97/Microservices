const controller = require('./controller');
const routes = (app) => {
    app.route('/').get(controller.getIndex);
    app.route('/about').get(controller.getAbout);
    app.route('/weather').post(controller.getWeather);
}
module.exports = routes;