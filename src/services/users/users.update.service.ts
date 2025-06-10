import type { UsersRepository } from "../../database/repositories/users";
import { UserEntity } from "../../entities/users.entity";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import { updateUserSchema, type UpdateUserDTO } from "../../dtos/users.dto";

export const update = (usersRepository: UsersRepository) =>
    async (idUser: string, data: UpdateUserDTO): Promise<UserEntity> => {
        try {
            const parsedData = updateUserSchema.parse(data);

            const originalUser = await usersRepository.getUserByIdRepository(idUser);

            if (!originalUser) {
                throw new AppError("User not found", StatusCodes.NOT_FOUND);
            }

            if (parsedData.password && parsedData.password.trim() !== "") {
                const saltRounds = Number.parseInt(process.env.SALT_ROUNDS || "10", 10);
                parsedData.password = await bcrypt.hash(parsedData.password, saltRounds);
            } else {
                delete parsedData.password;
            }

            const updatedUserData = {
                ...originalUser,
                ...parsedData,
            };

            // Cria entidade com os dados completos
            const userEntity = new UserEntity(updatedUserData);

            // Chama o repositório para atualizar no banco
            const updatedUser = await usersRepository.updateUserRepository(idUser, userEntity);

            if (!updatedUser) {
                throw new AppError("User not found or update failed", StatusCodes.NOT_FOUND);
            }

            return updatedUser;
        } catch (error) {
            throw error
        }
    };
