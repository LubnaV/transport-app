const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { StudentModel } = require("./models/StudentModel");
const { DriverModel } = require("./models/DriverModel");

const SECRET_KEY = "secretkey";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/login");

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const student = await StudentModel.findOne({ username: username });
    if (!student) {
      return res.json("Student not found");
    }

    if (student.password !== password) {
      return res.json("Password incorrect");
    }

    const token = jwt.sign({ studentId: student._id }, SECRET_KEY);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

app.post("/driverLogin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const driver = await DriverModel.findOne({ username: username });
    if (!driver) {
      return res.json("Driver not found");
    }

    if (driver.password !== password) {
      return res.json("Password incorrect");
    }

    const token = jwt.sign({ driverId: driver._id }, SECRET_KEY);
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error logging in" });
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
