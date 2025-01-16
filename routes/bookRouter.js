// routes/authorRouter.js
const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All Books"));

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Reserve ${bookId} now`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`${bookId} Reserved`);
});

module.exports = bookRouter;
