import type { UsersRepository } from "../../database/repositories/users";
import { UserEntity } from "../../entities/users.entity";

export const update = (usersRepository: UsersRepository) =>
  async (idUser: string, data: UserEntity) => {
    const userEntity = new UserEntity(data);
    const updatedUser = await usersRepository.updateUserRepository(idUser, userEntity);
    return updatedUser;
  };
