import UserModel from "../models/user.model.js";

export const createUserDB = async (data) => {
  const encryptedPassword = await UserModel.encryptPassword(data.password);
  data.password = encryptedPassword;
  const newUser = new UserModel({ ...data });
  return newUser.save();
};

export const getUserByEmail = (email) => {
  return UserModel.findOne({ email });
};

export const comparePassword = async (password, compare) => {
  return UserModel.comparePassword(password, compare);
};
