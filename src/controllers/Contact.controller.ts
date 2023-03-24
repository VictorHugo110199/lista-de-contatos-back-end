import { Request, Response } from "express";
import {
  ICreatContact,
  IContact,
  IContactUpdate,
} from "../interfaces/contact.interface";
import { ContactService } from "../services/Contacts.service";

export class ContactController {
  async post(req: Request, res: Response) {
    const payload: ICreatContact = req.body;

    const userId = req.user.id;

    const contact = await new ContactService().create(payload, userId);

    return res.status(201).json(contact);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.user.id;

    const status = await new ContactService().delete(id, userId);

    return res.sendStatus(status);
  }

  async patch(req: Request, res: Response) {
    const payload: IContactUpdate = req.body;
    const { id } = req.params;
    const userId = req.user.id;

    const data = await new ContactService().update(payload, id, userId);

    return res.status(200).json(data);
  }

  async get(req: Request, res: Response) {
    const data = await new ContactService().get();

    return res.status(200).json(data);
  }
}
