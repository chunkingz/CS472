const express = require("express");
const cors = require('cors');
const app = express();
const word = require('./word');
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    word.analyzeWord(req, res);
});

app.listen(PORT, () => console.log(`WAP English dictionary server is running on port ${PORT}...`));

