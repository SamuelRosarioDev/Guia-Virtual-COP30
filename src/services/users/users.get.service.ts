import type { UsersRepository } from "../../database/repositories/users";
import type { UserEntity } from "../../entities/users.entity";

export const get = (usersRepository: UsersRepository) => 
  async (): Promise<UserEntity[]> => {
    const users = await usersRepository.getUsersRepository();
    return users;
  };
