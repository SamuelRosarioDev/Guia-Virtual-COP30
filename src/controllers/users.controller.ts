import type { NextFunction, Request, Response } from "express";
import type { UsersService } from "../services/users.service";
import type { CreateUsersDTO } from "../dtos/users.dto";
import { StatusCodes } from "http-status-codes";

export class UsersController {
    constructor(private usersService: UsersService) {}

    create = async (req: Request<unknown, unknown, CreateUsersDTO>, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUsersDTO = req.body;
            const createdUser = await this.usersService.create(userData);
            return res.status(StatusCodes.CREATED).json(createdUser);
        } catch (error) {
            next(error);
        }
    }

    getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await this.usersService.getAllUsers();
            return res.status(StatusCodes.OK).json(users);
        } catch (error) {
            next(error);
        }
    }
}
