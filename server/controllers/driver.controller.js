import { SECRET_KEY } from "../utils/auth.js";
import jwt from "jsonwebtoken";
import { DriverModel } from "../models/DriverModel.js";

const login_POST = async (req, res) => {
  try {
    const { username, password } = req.body;
    const driver = await DriverModel.findOne({ username: username });
    if (!driver) {
      return res.json("Driver not found");
    }

    if (driver.password !== password) {
      return res.json("Password incorrect");
    }

    const token = jwt.sign({ id: driver._id, isStudent: false }, SECRET_KEY);
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error logging in" });
  }
};

const profile_GET = async (req, res) => {
  try {
    const driverId = req.id; //getting back line 72
    const driver = await DriverModel.findById(driverId); //find student document from database with ID

    if (!driver) {
      return res.status(404).json("Driver not found");
    }

    res.status(200).json(driver);
  } catch (error) {
    console.log(error);
    res.status(500).json("Driver not found");
  }
};

export { login_POST, profile_GET };
