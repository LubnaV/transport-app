import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  names: String,
  username: String,
  password: String,
  longitude: Number,
  latitude: Number,
  emirate: String,
  phone_number: String,
  package: String,
  rides: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Ride' }]
});
const StudentModel = mongoose.model("students", StudentSchema);

export {StudentModel}