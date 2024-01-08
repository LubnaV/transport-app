import { login_POST, profile_GET } from "../controllers/driver.controller.js";
import { authMiddleware } from "../middlewares/auth.js";
import { driverCheckMiddleware } from "../middlewares/driverCheck.js";

const driverRoutes = (app) => {
  app.post("/driver/login", login_POST);
  app.get(
    "/driver/profile",
    [authMiddleware, driverCheckMiddleware],
    profile_GET
  );
};

export { driverRoutes };
