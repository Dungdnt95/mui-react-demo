import { db } from "../models/index.js";
import { secret } from "../config/authConfig.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

const userSingnUp = async (data) => {
  try {
    let user = await User.create({
      username: data.username,
      email: data.email,
      password: bcrypt.hashSync(data.password, 8),
    });
    if (user) {
      if (data.roles) {
        let roles = await Role.findAll({
          where: {
            name: {
              [Op.or]: data.roles,
            },
          },
        });
        if (roles.length > 0) {
          await user.setRoles(roles);
        }
      } else {
        await user.setRoles([1]);
      }
      return { success: true, message: "User was registered successfully!" };
    }
  } catch (error) {
    console.log(`userSingnIn has error: ${error.message}`);
    return {
      status: 500,
      success: false,
      message: error.message,
    };
  }
};

const userSingnIn = async (data) => {
  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return {
        success: false,
        status: 404,
        message: "User not found",
        data: {},
      };
    }
    let passwordIsValid = bcrypt.compareSync(data.password, user.password);
    if (!passwordIsValid) {
      return {
        success: false,
        status: 401,
        message: "Invalid Password!",
        data: {},
      };
    }
    const token = jwt.sign({ id: user.id }, secret, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });
    var authorities = [];
    let roles = await user.getRoles();
    for (let i = 0; i < roles.length; i++) {
      authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }
    return {
      success: true,
      status: 200,
      message: "Login successfuly!",
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token,
      },
    };
  } catch (error) {
    console.log(`userSingnUp has error: ${error.message}`);
    return {
      status: 500,
      success: false,
      message: error.message,
      data: {},
    };
  }
};

export { userSingnUp, userSingnIn };
