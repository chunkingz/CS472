const express = require("express");
const app = express();
const c = require('./calculator');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './public');

app.get('/', (req, res) => {
    res.render('calculator');
});

app.post('/', (req, res) => {
    c.calculate(req, res);
});

app.listen(PORT, () => console.log(`Calculator server is running on port ${PORT}...`));

