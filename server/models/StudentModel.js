const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
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
