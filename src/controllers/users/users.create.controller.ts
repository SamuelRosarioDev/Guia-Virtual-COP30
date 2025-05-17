import type { NextFunction, Response } from "express";
import type { CreateUsersDTO } from "../../dtos/users.dto";
import type { BodyRequest } from "../../types/request.type";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users";

export const create = (usersService: UsersService) =>
    async (req: BodyRequest<CreateUsersDTO>, res: Response, next: NextFunction) => {
        try {
            const userData = req.body;
            const createdUser = await usersService.createUserService(userData);
            return res.status(StatusCodes.CREATED).json(createdUser);
        } catch (error) {
            next(error);
        }
    };
