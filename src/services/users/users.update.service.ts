import type { User } from "@prisma/client";
import type { UsersRepository } from "../../database/repositories/users";
import { UserEntity } from "../../entities/users.entity";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import { updateUserSchema, type UpdateUserDTO } from "../../dtos/users.dto";

export const update = (usersRepository: UsersRepository) =>
    async (idUser: string, data: UpdateUserDTO): Promise<User> => {
        try {
            const parsedData = updateUserSchema.parse(data);

            if (parsedData.password && parsedData.password.trim() !== "") {
                const saltRounds = Number.parseInt(process.env.SALT_ROUNDS || "10", 10);
                parsedData.password = await bcrypt.hash(parsedData.password, saltRounds);
            } else {
                delete parsedData.password;
            }
            const userEntity = new UserEntity(parsedData);

            const updatedUser = await usersRepository.updateUserRepository(idUser, userEntity);

            if (!updatedUser) {
                throw new AppError("User not found or update failed", StatusCodes.NOT_FOUND);
            }

            return updatedUser;
        } catch (error) {
            console.error(error);
            throw new AppError("Error updating user", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    };
