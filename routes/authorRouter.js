// routes/authorRouter.js
const { Router } = require("express");
const { getAuthorById } = require('../controllers/authorController');

const authorRouter = Router();

// authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/", (req, res) => {
  const { authorId } = req.params;
  console.log(req.params)
  res.send(`Author ID: ${authorId}`);
});
// authorRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
