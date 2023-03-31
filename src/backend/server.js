import express from "express";
import ejs from "ejs";
const app = express();

app.listen(5080);
app.set("view engine", "ejs");
app.set("views", "./src/template");
app.use(express.static("./public"));

// Route for startpage
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Routes for /highscores
app.get("/highscores", (req, res) => {
  const highscores = [];

  //TODO : Code that filters the database of highscores and
  // returns the 10 fastest ones.

  res.render("highscores.ejs", { highscores });
});
// POST sends a new highscore to be added
app.post("/highscores", (req, res) => {
  const newHighscore = {};

  // TODO: Check format of req.body
  // Add req.body to database

  res.status(201).send(newHighscore);
});
// /word
// GET sends a random word (default is 5 characters and unique letters)
app.get("/word", (res, req) => {
  const word = "";
  // Code to randomize a word from an array.

  // TODO: add querystrings.

  // Querystrings

  // length=number
  // the desired length of the word
  // unique=boolean
  // wether all letters have to be unique or not

  res.status(200).send(word);
});

// Gives 404 response and appropriate text for any requests not in the middleware stack
app.use((req, res, next) => {
  res.status(404).send("No such content!");
});
