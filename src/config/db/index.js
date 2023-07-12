const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect(
      "mongodb+srv://admin:XeFS1N7sRYCven9p@cluster0.5fhbiop.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected successfully!");
    })
    .catch((err) => {
      console.log("Connect failure!");
    });
}

module.exports = { connect };
