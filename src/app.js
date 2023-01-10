const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');

const apiRouter = require('./routers/apiRouter');
const viewRouter = require('./routers/viewRouter');

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use("/index", (req, res) => res.redirect("/"));

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.use("/bootstrap", express.static('node_modules/bootstrap/dist'));
app.use("/jquery", express.static('node_modules/jquery/dist'));
app.use(express.static('src/public'));

app.use('/api', apiRouter);
app.use('/', viewRouter);

app.use((req, res) => res.status(404).send('<h1>404 - Page not found, sorry!</h1> <a href="/">Go back</a>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));