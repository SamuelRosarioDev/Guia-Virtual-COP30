import type { User } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdUserDTO } from "../../dtos/users.dto";
import type { UsersService } from "../../services/users";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const deleter = (usersService: UsersService) => async (req: ParamsRequest<IdUserDTO>, res: BodyResponse<User | { message: string }>, next: NextFunction) => {
	try {
		const { idUser } = req.params;
		if (!idUser) return res.status(StatusCodes.BAD_REQUEST).json({ message: "User ID is required." });

		const deletedUser = await usersService.deleteUserService(idUser);

		return res.status(StatusCodes.OK).json({ data: deletedUser, message: "User deleted successfully" });
	} catch (error) {
		next(error);
	}
};
