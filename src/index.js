const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");

const route = require("./routes/index.js");
const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use method override
app.use(methodOverride("_method"));

// Temple engine
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
