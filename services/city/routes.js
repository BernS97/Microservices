const controller = require('./controller');
const routes = (app) => {
    app.route('/city/about').get(controller.getAbout);
    app.route('/city').post(controller.getCity);
}
module.exports = routes;