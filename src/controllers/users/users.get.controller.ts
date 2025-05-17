import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users";

export const get = (usersService: UsersService) =>
    async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await usersService.getUsersService();
            return res.status(StatusCodes.OK).json(users);
        } catch (error) {
            next(error);
        }
    };
