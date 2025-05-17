import type { UsersRepository } from "../../database/repositories/users";

export const getById = (usersRepository: UsersRepository) =>
  async (idUser: string) => {
    return await usersRepository.getUserByIdRepository(idUser);
  };
