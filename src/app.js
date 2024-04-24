// Dependencies
import express from "express";
import morgan from "morgan";
import cors from "cors";
import pkg from "../package.json" assert { type: "json" };

// Routes
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

// Enviroment
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

// Variables
app.set("pkg", pkg);

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    author: app.get("pkg").author,
    description: app.get("pkg").name,
    version: app.get("pkg").version,
  });
});

export default app;
