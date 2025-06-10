import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdUserDTO } from "../../dtos/users.dto";
import type { UsersService } from "../../services/users";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";
import type { UserEntity } from "../../entities/users.entity";

export const getById = (usersService: UsersService) => 
	async (req: ParamsRequest<IdUserDTO>, res: BodyResponse<UserEntity>, next: NextFunction) => {
	try {
		const { idUser } = req.params;
		if (!idUser) return res.status(StatusCodes.BAD_REQUEST).json({ message: "User ID is required." });

		const user = await usersService.getUserByIdService(idUser);

		return res.status(StatusCodes.OK).json({ data: user, message: "User retrieved successfully" });
	} catch (error) {
		next(error);
	}
};
