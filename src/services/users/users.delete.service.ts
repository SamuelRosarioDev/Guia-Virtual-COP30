import { StatusCodes } from "http-status-codes";
import type { UsersRepository } from "../../database/repositories/users";
import { AppError } from "../../errors/app.error";
import type { UserEntity } from "../../entities/users.entity";

export const deleter =
  (usersRepository: UsersRepository) =>
  async (idUser: string): Promise<UserEntity> => {
    const user = await usersRepository.getUserByIdRepository(idUser);
    // Verifica se o usuário existe
    if (!user) throw new AppError("User not found", StatusCodes.NOT_FOUND);

    const deletedUser = await usersRepository.removeUserRepository(idUser);
    return deletedUser!;
  };
