import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { studentRoutes } from "./routers/student.router.js";
import { driverRoutes } from "./routers/driver.router.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/login");

studentRoutes(app)
driverRoutes(app)

app.listen(3001, () => {
  console.log("server is running");
});
