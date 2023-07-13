const express = require("express");
const path = require("path");

const route = require("./routes/index.js");
const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
