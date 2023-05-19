const express = require("express");
const app = express();
const session = require("express-session");
const PORT = 3000;
const oneDay = 1000 * 60 * 60 * 24;

// session middleware
app.use(
  session({
    secret: "numberQuizSecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./public");

const questions = [
  "3, 1, 4, 1, 5", // pi
  "1, 1, 2, 3, 5", // fibonacci
  "1, 4, 9, 16, 25", // squares
  "2, 3, 5, 7, 11", // primes
  "1, 2, 4, 8, 16", // powers of 2
];

const answers = [9, 8, 36, 13, 32];

app.get("/", (req, res) => {
  if ((!req.session.usersScore) && (!req.session.currentQuestion)) {
    req.session.usersScore = 0;
    req.session.currentQuestion = 0;
  }
  res.render("numberQuiz", {
    usersScore: req.session.usersScore,
    questionList: questions[req.session.currentQuestion],
  });
});

app.post("/", (req, res) => {
  const { answer } = req.body;

  if(String(answer).trim() == "" || answer == null || answer == NaN) {
    res.redirect("/");
  } else {

    if (answer == answers[req.session.currentQuestion]) {
      req.session.usersScore++;
    }
    req.session.currentQuestion++;

    if (req.session.currentQuestion < questions.length) {
      res.redirect("/");
    } else {
      res.render("result", {
        usersScore: req.session.usersScore,
        questionsLength: questions.length,
      });
    }
  }
});

app.get("/tryAgain", (req, res) => {
  req.session.usersScore = 0;
  req.session.currentQuestion = 0;
  res.redirect("/");
});

app.listen(PORT, () =>
  console.log(`Number Quiz server is running on port ${PORT}...`)
);
