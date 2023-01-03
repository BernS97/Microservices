const express = require("express");
const bodyParser = require("body-parser")
const nunjucks = require("nunjucks")
const routes = require('./routes');
const path = require("path");

const host = "127.0.0.1";
const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

nunjucks.configure(__dirname+ '/templates', {
    autoescape:  true,
    express:  app
});

routes(app);

app.listen(port, host,() => {
    console.log(`Listening to port http://${host}:${port}`);
});