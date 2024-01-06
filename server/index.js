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

    const token = jwt.sign({ studentId: student._id }, SECRET_KEY); //payload: { studentId: student._id }
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

async function authMiddleware(req, res, next) {
  const token = req.header("authorization"); //got token from user, Authorization is a Header from request
  if (!token) {
    console.log(1);
    return res.status(401).json({ message: "You are unauthorized" });
  }

  const payload = jwt.verify(token, SECRET_KEY); //getting back payload (student id)

  if (!payload) {
    console.log(2);
    return res.status(401).json({ message: "You are unauthorized" });
  }

  const studentId = payload.studentId;

  if (!studentId) {
    console.log(3);
    return res.status(401).json({ message: "You are unauthorized" });
  }
  req.studentId = studentId;
  next();
}

app.get("/getProfile", authMiddleware, async (req, res) => {
  try {
    const studentId = req.studentId; //getting back line 72
    const student = await StudentModel.findById(studentId); //find student document from database with ID

    if (!student) {
      return res.status(404).json("Student not found");
    }

    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json("Student not found");
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
