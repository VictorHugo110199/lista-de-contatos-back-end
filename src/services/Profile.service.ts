import { NotFoundError } from "../helpers/Errors.helper";
import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

export class ProfileService {
  async getLogedUser(id: string): Promise<IUser> {
    const user = await userRepository.findOne({
      where: { id: id },
      relations: { contacts: true },
    });

    if (!user) {
      throw new NotFoundError("Usuário não encontrado!");
    }

    return user;
  }
}
