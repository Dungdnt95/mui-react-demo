import { db } from "../models/index.js";
import bcrypt from "bcryptjs";
import { userSingnUp, userSingnIn } from "../service/authService.js";

const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

const signup = async (req, res) => {
  try {
    const result = await userSingnUp(req.body);
    const { message, success, status } = result;
    res.status(status).send({
      success,
      message,
    });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

const signin = async (req, res) => {
  try {
    const result = await userSingnIn(req.body);
    const { status, message, success, data } = result;
    res.status(status).send({
      success,
      message,
      data,
    });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

export { signup, signin };
