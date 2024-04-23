import { createUserDB } from "../database/users.database.js";

export const createUserService = async (body) => {
  try {
    const newUser = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      password: body.password,
    };

    await createUserDB(newUser);
    return {
      status: 200,
      message: "¡User created successfully!",
    };
  } catch (error) {
    return {
      status: 500,
      message: "unknown error: userService[createUserService]",
    };
  }
};
