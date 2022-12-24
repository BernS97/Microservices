const express = require("express");
const nunjucks = require("nunjucks")
const proxy = require("./proxy/proxy")

const host = "localhost";
const port = 3000;
const app = express();

app.use(express.json());

nunjucks.configure('templates', {
    autoescape:  true,
    express:  app
});

proxy(app);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/html/index.html');
});

app.listen(port, host,() => {
    console.log(`Listening to port http://${host}:${port}`);
});