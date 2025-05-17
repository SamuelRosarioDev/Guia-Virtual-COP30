import type { CreateUsersDTO } from "../../dtos/users.dto";
import type { UsersRepository } from "../../database/repositories/users";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";
import { UserEntity } from "../../entities/users.entity";

export const create = (usersRepository: UsersRepository) =>
    async ({ name, email, password, phone, country, typeUser }: CreateUsersDTO) => {
        const foundUser = await usersRepository.getUserByIdRepository(email);
        if (foundUser) throw new AppError("Usuário já existe", StatusCodes.BAD_REQUEST);

        const userEntity = new UserEntity({ name, email, password, phone, country, typeUser });
        const createdUser = await usersRepository.createUserRepository(userEntity);
        return createdUser;
    };
