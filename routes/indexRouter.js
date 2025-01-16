// routes/authorRouter.js
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Index"));

indexRouter.get("/about", (req, res) => res.send("About"));

indexRouter.get("/contact", (req, res) => res.send("Contact"));

indexRouter.post("/contact", (req, res) => res.send("Contact Added"));

module.exports = indexRouter;
