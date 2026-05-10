import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

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

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  res.json(quotes[randomIndex]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});