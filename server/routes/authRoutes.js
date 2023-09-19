import {
  checkDuplicateEmail,
  checkRolesExisted,
} from "../middlewares/verifySignUp.js";
import { signup, signin } from "../controllers/authController.js";

const authRoutes = (app) => {
  app.post(
    "/api/auth/signup",
    [checkDuplicateEmail, checkRolesExisted],
    signup
  );

  app.post("/api/auth/signin", signin);
};
export { authRoutes };
