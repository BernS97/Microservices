const express = require("express");
const bodyParser = require("body-parser")
const nunjucks = require("nunjucks")
const routes = require('./routes');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

nunjucks.configure('templates', {
    autoescape:  true,
    express:  app
});

routes(app);

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});