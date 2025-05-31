import type { User } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UsersDataDTO } from "../../dtos/users.dto";
import type { UsersService } from "../../services/users";
import type { BodyRequest, BodyResponse } from "../../types/request.type";

export const create = (usersService: UsersService) => async (req: BodyRequest<UsersDataDTO>, res: BodyResponse<User>, next: NextFunction) => {
	try {
		const userData = req.body;
		const createdUser = await usersService.createUserService(userData);
		return res.status(StatusCodes.CREATED).json({ data: createdUser, message: "User created successfully" });
	} catch (error) {
		next(error);
	}
};
