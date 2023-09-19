import { verifyToken, isAdmin, isModerator } from "../middlewares/authJwt.js";
import {
  moderatorBoard,
  adminBoard,
  userBoard,
  allAccess,
} from "../controllers/userController.js";

const userRoutes = (app) => {
  app.get("/api/test/all", allAccess);

  app.get("/api/test/user", [verifyToken], userBoard);

  app.get("/api/test/mod", [verifyToken, isModerator], moderatorBoard);

  app.get("/api/test/admin", [verifyToken, isAdmin], adminBoard);
};

export { userRoutes };
