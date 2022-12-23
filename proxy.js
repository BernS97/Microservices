const {createProxyMiddleware} = require('http-proxy-middleware');
const bodyParser = require('body-parser')
const routeSpec = require("./routeSpec.json");

module.exports = function(app) {
    const setProxySettings = function(proxyReq, req) {
        if (req.body) {
            let bodyData = JSON.stringify(req.body);
            proxyReq.setHeader('Content-Type','application/json');
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
            proxyReq.write(bodyData)
            proxyReq.end();
        }
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    routeSpec.services.forEach(serviceSpec =>{
        serviceSpec.routes.forEach(route =>{
            const context = serviceSpec.baseRoute+route;
            app.use(context, createProxyMiddleware(context,{
                target: 'http://127.0.0.1:'+serviceSpec.port,
                logLevel:'debug',
                onProxyReq: setProxySettings,
            }))
        })
    })

};