import type { NextFunction, Request, Response } from "express";
import type { UsersService } from "../services/users.service";
import type { CreateUsersDTO } from "../dtos/users.dto";
import { StatusCodes } from "http-status-codes";
import type { UserEntity } from "../entities/users.entity";
import type { BodyRequest } from "../types/request.type";

export class UsersController {
    constructor(private usersService: UsersService) { }
    // Criar um usuário
    create = async (req: BodyRequest<CreateUsersDTO>, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUsersDTO = req.body;
            const createdUser = await this.usersService.create(userData);
            return res.status(StatusCodes.CREATED).json(createdUser);
        } catch (error) {
            next(error);
        }
    }
    // Listar todos os usuários
    get = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await this.usersService.getAllUsers();
            return res.status(StatusCodes.OK).json(users);
        } catch (error) {
            next(error);
        }
    }
    // Listar um usuário pelo ID
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { idUser } = req.params;
            if (!idUser) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });

            const user = await this.usersService.getUserById(idUser);
            if (!user) return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do usuário não encontrado." });

            return res.status(StatusCodes.OK).json(user);
        } catch (error) {
            next(error);
        }
    };

    // Atualizar um usuário
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { idUser } = req.params;
            const userData: UserEntity = req.body;

            if (!idUser) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });

            const updatedUser = await this.usersService.updateUser(idUser, userData);

            if (!updatedUser) return res.status(StatusCodes.NOT_FOUND).json({ message: "Usuário não encontrado." });

            return res.status(StatusCodes.OK).json(updatedUser);
        } catch (error) {
            next(error);
        }
    };
    // Deletar um usuário
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { idUser } = req.params;

            if (!idUser) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });

            const deletedUser = await this.usersService.deleteUser(idUser);

            if (!deletedUser) return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do usuário não encontrado." });

            return res.status(StatusCodes.OK).json(deletedUser);
        } catch (error) {
            next(error);
        }
    }

}
