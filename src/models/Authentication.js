const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authenticationSchema = new Schema({});

module.exports = mongoose.model("Authentication", authenticationSchema);
