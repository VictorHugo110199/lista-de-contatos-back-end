import { Router } from "express";
import { ProfileController } from "../controllers/Profile.controller";

import { UserController } from "../controllers/User.controller";
import { DataMiddleware } from "../middlewares/Data.middleware";
import { UserMiddleware } from "../middlewares/User.middleware";
import { UserSchemas } from "../schemas/Users.schema";

const userMiddleware = new UserMiddleware();
const userController = new UserController();
const userSchemas = UserSchemas;
const dataMiddleware = new DataMiddleware();
const profileController = new ProfileController();

export const profileRoutes = Router();

profileRoutes.get("/", userMiddleware.tokenExists, profileController.get);
