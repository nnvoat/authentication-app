const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authenticationSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 255,
  },
  mail: {
    type: String,
    required: true,
    maxLength: 255,
  },
});

module.exports = mongoose.model("Authentication", authenticationSchema);
