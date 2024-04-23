import UserModel from "../models/user.model.js";

export const createUserDB = async (data) => {
  const encryptedPassword = await UserModel.encryptPassword(data.password);
  data.password = encryptedPassword;
  const newUser = new UserModel({ ...data });
  return await newUser.save();
};
