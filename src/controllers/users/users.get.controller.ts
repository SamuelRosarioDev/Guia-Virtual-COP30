import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { UserEntity } from "../../entities/users.entity";

export const get = (usersService: UsersService) => async (_req: BodyRequest<UserEntity>, res: BodyResponse<UserEntity[]>, next: NextFunction) => {
	try {
		const users = await usersService.getUsersService();
		return res.status(StatusCodes.OK).json({ data: users, message: "Users retrieved successfully" });
	} catch (error) {
		next(error);
	}
};
