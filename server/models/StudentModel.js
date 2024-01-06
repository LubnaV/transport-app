const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  names: String,
  username: String,
  password: String,
  longitude: Number,
  latitude: Number,
  emirate: String,
  phone_number: String,
  package: String
});
const StudentModel = mongoose.model("students", StudentSchema);
exports.StudentModel = StudentModel;
