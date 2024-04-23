import { createUserService } from "../services/users.service.js";

export const createUser = async (req, res) => {
  try {
    const response = await createUserService(req.body);
    res.status(response.status).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUsers = (req, res) => {
  res.send("get all users.");
};

export const getUserById = (req, res) => {
  res.send(`user: ${req.params.id}`);
};

export const deleteUser = (req, res) => {
  res.send(`update user: ${req.params.id}`);
};

export const updateUser = (req, res) => {
  res.send(`delete user: ${req.params.id}`);
};
