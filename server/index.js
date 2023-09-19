import express from "express";
import cors from "cors";
import "dotenv/config";
import { db } from "./models/index.js";
import { userRoutes } from "./routes/userRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";

const app = express();

db.sequelize.sync({ force: false });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
userRoutes(app);
authRoutes(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
