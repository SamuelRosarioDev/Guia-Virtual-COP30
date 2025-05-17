import type { UsersRepository } from "../../database/repositories/users";

export const get = (usersRepository: UsersRepository) =>
    async () => {
        return await usersRepository.getUsersRepository();
    };
