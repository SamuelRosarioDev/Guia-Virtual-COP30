import type { User } from "@prisma/client";
import type { UsersRepository } from "../../database/repositories/users";

export const get = (usersRepository: UsersRepository) =>
    async (): Promise<User[]> => {
        const users = await usersRepository.getUsersRepository();
        return users;
    }

