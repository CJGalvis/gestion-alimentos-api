import { loginService } from "../services/auth.service.js";
export const loginController = async (req, res) => {
  try {
    const response = await loginService(req.body);
    res.status(response.status).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
