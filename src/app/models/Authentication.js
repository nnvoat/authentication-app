const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authenticationSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      maxLength: 255,
    },
    password: {
      type: String,
      required: true,
      maxLength: 255,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Authentication", authenticationSchema);
