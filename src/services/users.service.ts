import type { CreateUsersDTO } from "../dtos/users.dto";
import type { UsersRepository } from "../database/repositories/users.repository";
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";
import { UserEntity } from "../entities/users.entity";

export class UsersService {

    constructor(private usersRepository: UsersRepository) { }

    async create({ name, email, password, phone, country, typeUser }: CreateUsersDTO) {
        const foundUser = await this.usersRepository.findById(email);
        if (foundUser) throw new AppError("Usuário já existe", StatusCodes.BAD_REQUEST);
        
        const userEntity = new UserEntity({ name, email, password, phone, country, typeUser });
        const createdUser = await this.usersRepository.create(userEntity);
        return createdUser;
    }

    async getAllUsers() {
        const users = await this.usersRepository.index();
        return users;
    }

    async getUserById(idUser: string) {
        const user = await this.usersRepository.findById(idUser);
        return user;
    }

    async updateUser(idUser: string, data: UserEntity) {
        const userEntity = new UserEntity(data);
        const updatedUser = await this.usersRepository.update(idUser, userEntity);
        return updatedUser;
    }
    async deleteUser(idUser: string) {
        const user = await this.usersRepository.findById(idUser)
        if (!user) throw new AppError("Usuário não encontrado", StatusCodes.NOT_FOUND);
        const deletedUser = await this.usersRepository.delete(idUser);
        return deletedUser;
    }



}
