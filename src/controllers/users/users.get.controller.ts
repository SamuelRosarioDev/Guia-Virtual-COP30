import type { NextFunction } from "express";
import type { UsersService } from "../../services/users";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export const get = (usersService: UsersService) =>
    async (_req: BodyRequest<User>, res: BodyResponse<User[]>, next: NextFunction) => {
        try {
            const users = await usersService.getUsersService();
            return res.status(StatusCodes.OK).json(users);
        } catch (error) {
            next(error);
        }
    };
