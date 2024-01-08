import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  number: String,
  emirate: String,
  number_plate: String
});
const DriverModel = mongoose.model("drivers", DriverSchema);

export {DriverModel}