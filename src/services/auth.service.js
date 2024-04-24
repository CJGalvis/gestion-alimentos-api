import { getUserByEmail, comparePassword } from "../database/users.database.js";
import { generateToken } from "../middlewares/jwt.middleware.js";

export const loginService = async (body) => {
  try {
    const { email, password } = body;

    const user = await getUserByEmail(email);

    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    console.log(user.password, password);
    // Validar si la contraseña es correcta
    const isAuth = await comparePassword(user.password, password);

    if (!isAuth) {
      return {
        status: 403,
        message: "User or password invalid",
      };
    }

    // Creación de token y envío de respuesta
    const payload = JSON.parse(JSON.stringify(user, ["dni"]));
    const token = generateToken(payload);

    return {
      status: 200,
      token,
    };
  } catch (error) {
    return {
      status: 500,
      error,
    };
  }
};
