require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/users.routes");
const postRoutes = require ("./routes/post.router");

const { errorHandler } = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.use(errorHandler);

module.exports = app;
