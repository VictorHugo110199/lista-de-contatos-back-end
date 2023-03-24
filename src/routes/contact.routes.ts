import { Router } from "express";
import { ContactController } from "../controllers/Contact.controller";
import { ContactSchemas } from "../schemas/Contact.schema";
import { DataMiddleware } from "../middlewares/Data.middleware";
import { UserMiddleware } from "../middlewares/User.middleware";

const dataMiddleware = new DataMiddleware();
const userMiddleware = new UserMiddleware();
const contactsController = new ContactController();

export const contactsRoutes = Router();

contactsRoutes.post(
  "/",
  dataMiddleware.ensureData(ContactSchemas.creat),
  userMiddleware.tokenExists,
  contactsController.post
);

contactsRoutes.patch(
  "/:id",
  dataMiddleware.ensureData(ContactSchemas.update),
  userMiddleware.tokenExists,
  contactsController.patch
);

contactsRoutes.delete(
  "/:id",
  userMiddleware.tokenExists,
  contactsController.delete
);

contactsRoutes.get("/", userMiddleware.tokenExists, contactsController.get);
