// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as express from "express";
import { IContact, ICreatContact } from "../../interfaces/contact.interface";
import { IUserCreate, IUserLogin } from "../../interfaces/user.interface";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        email: string;
      };
      validate: IUserCreate | ICreatContact | IUserLogin | IContact;
    }
  }
}
