import type { User } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users";
import type { BodyRequest, BodyResponse } from "../../types/request.type";

export const get = (usersService: UsersService) => async (_req: BodyRequest<User>, res: BodyResponse<User[]>, next: NextFunction) => {
	try {
		const users = await usersService.getUsersService();
		return res.status(StatusCodes.OK).json(users);
	} catch (error) {
		next(error);
	}
};
