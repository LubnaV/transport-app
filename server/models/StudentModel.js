const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const StudentModel = mongoose.model("students", StudentSchema);
exports.StudentModel = StudentModel;
