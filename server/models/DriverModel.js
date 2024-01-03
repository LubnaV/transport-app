const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const DriverModel = mongoose.model("drivers", DriverSchema);
exports.DriverModel = DriverModel;
