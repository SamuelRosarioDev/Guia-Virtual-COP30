import type { NextFunction } from "express";
import type { UsersDataDTO } from "../../dtos/users.dto";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { UsersService } from "../../services/users";
import type { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export const create = (usersService: UsersService) =>
    async (req: BodyRequest<UsersDataDTO>, res: BodyResponse<User>, next: NextFunction) => {
        try {
            const userData = req.body;
            const createdUser = await usersService.createUserService(userData);
            return res.status(StatusCodes.CREATED).json(createdUser);
        } catch (error) {
            next(error);
        }
    };
