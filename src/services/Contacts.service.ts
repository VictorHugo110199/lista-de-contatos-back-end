import {
  UnauthorizedError,
  ConflictError,
  NotFoundError,
  BadRequestError,
} from "../helpers/Errors.helper";
import { instanceToInstance } from "class-transformer";
import { contactsRepository } from "../repositories/contacts.repository";
import {
  ICreatContact,
  IContact,
  IContactUpdate,
} from "../interfaces/contact.interface";
import { userRepository } from "../repositories/user.repository";

export class ContactService {
  async create(payload: ICreatContact, userId: string): Promise<IContact> {
    const { number, name, email } = payload;

    const foundUser = await userRepository.findOne({
      where: { id: userId },
    });

    const newContact = contactsRepository.create({
      name,
      number,
      email,
      user: { ...foundUser },
    });

    await contactsRepository.save(newContact);
    return newContact;
  }

  async delete(id: string, userId: string): Promise<number> {
    const contact = await contactsRepository.findOne({
      where: { id: id },
    });

    const user = await userRepository.findOne({
      where: { id: userId },
    });

    if (!contact) {
      throw new ConflictError("Contato não está ativo!");
    }

    if (contact.user.id !== user!.id) {
      throw new BadRequestError("Você só pode Alterar seus contatos!");
    }

    await contactsRepository.delete(contact.id);
    return 204;
  }

  async update(
    payload: IContactUpdate,
    id: string,
    userId: string
  ): Promise<IContact> {
    const { email, name, number } = payload;

    const foundUser = await userRepository.findOne({
      where: { id: userId },
    });

    const contact = await contactsRepository.findOne({
      where: { id: id },
    });

    if (!contact) {
      throw new NotFoundError("Contato não encontrado!");
    }
    if (contact.user.id !== foundUser!.id) {
      throw new BadRequestError("Você só pode Alterar seus contatos!");
    }

    const keys = Object.keys(payload);

    if (keys.includes("id") || keys.includes("user")) {
      throw new UnauthorizedError(
        "Não é possível atualizar os campos: User e Id"
      );
    }

    const updatedContact = contactsRepository.create({
      ...contact,
      email,
      name,
      number,
    });

    await contactsRepository.save(updatedContact);
    return instanceToInstance(updatedContact);
  }

  async get(): Promise<IContact[] | Object> {
    const contacts = await contactsRepository.find();

    return contacts;
  }
}
