import { Router } from "express";

import { UserController } from "../controllers/User.controller";
import { DataMiddleware } from "../middlewares/Data.middleware";
import { UserMiddleware } from "../middlewares/User.middleware";
import { UserSchemas } from "../schemas/Users.schema";

const userMiddleware = new UserMiddleware();
const userController = new UserController();
const userSchemas = UserSchemas;
const dataMiddleware = new DataMiddleware();

export const userRoutes = Router();

userRoutes.post(
  "/",
  dataMiddleware.ensureData(userSchemas.create),
  userMiddleware.emailExists,
  userController.create
);

userRoutes.get("/", userMiddleware.tokenExists, userController.getUsers);

userRoutes.get(
  "/:id",
  userMiddleware.tokenExists,
  userController.getUsersBysId
);

userRoutes.patch(
  "/:id",
  dataMiddleware.ensureData(userSchemas.update),
  userMiddleware.tokenExists,
  userMiddleware.verifyUser,
  userMiddleware.verifyUserLogged,
  userController.update
);

userRoutes.delete(
  "/:id",
  userMiddleware.tokenExists,
  userMiddleware.verifyUser,
  userMiddleware.verifyUserLogged,
  userController.delete
);
