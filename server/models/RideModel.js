import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
  time: Date,
  toUni: Boolean,
  completed: Boolean,
  approved: Boolean
});
const RideModel = mongoose.model("rides", RideSchema);

export { RideModel };
