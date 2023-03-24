import AppDataSource from "../data-source";
import Contact from "../entities/Contact.entity";

export const contactsRepository = AppDataSource.getRepository(Contact);
