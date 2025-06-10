import type { UserEntity } from "../../entities/users.entity";
import type { UsersRepository } from "../../database/repositories/users";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";

export const getById = (usersRepository: UsersRepository) =>
  async (idUser: string): Promise<UserEntity> => {
    const user = await usersRepository.getUserByIdRepository(idUser);

    if (!user) throw new AppError("User not found", StatusCodes.NOT_FOUND);

    return user;
  };
