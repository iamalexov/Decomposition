import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

const quotes = [
  {
    quote: "Hello world",
    author: "Alex",
  },
  {
    quote: "Never give up",
    author: "Ibrahim",
  },
];


// GET quote
app.get("/", (req, res) => {

  const randomIndex =
    Math.floor(Math.random() * quotes.length);

  res.json(quotes[randomIndex]);
});


// POST quote
app.post("/api/quotes", (req, res) => {

  const newQuote = req.body;

  quotes.push(newQuote);

  console.log(quotes);

  res.send("Quote added");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});