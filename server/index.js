import express from "express";
import cors from "cors";
import "dotenv/config";
import { db } from "./models/index.js";
import { userRoutes } from "./routes/userRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";
import { getDataExcelRoutes } from "./routes/getDataExcelRoutes.js";

const app = express();
// var corsOptions = {
//   origin: process.env.ORIGIN,
// };
const Role = db.role;

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });
// const initial = () => {
//   Role.create({
//     id: 1,
//     name: "user",
//   });

//   Role.create({
//     id: 2,
//     name: "moderator",
//   });

//   Role.create({
//     id: 3,
//     name: "admin",
//   });
// };


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
getDataExcelRoutes(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
