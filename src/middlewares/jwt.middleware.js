import jwt from "jsonwebtoken";
import { getUserByEmail } from "../database/users.database.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return {
        status: 400,
        message: "Header not found",
      };
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUserByEmail(payload.email);

    if (!user)
      return {
        status: 400,
        message: "Payload invalid",
      };
    else {
      req.user = payload.email;
      next();
    }
  } catch (error) {
    return {
      status: 500,
      message: "unknown error: userService[createUserService]",
    };
  }
};

export const validateToken = async (token) => {
  try {
    if (!token) {
      return {
        status: 401,
        message: "Token not found",
      };
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
};

export const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_TOKEN,
  });

  return token;
};
