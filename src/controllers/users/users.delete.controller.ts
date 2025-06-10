import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdUserDTO } from "../../dtos/users.dto";
import type { UsersService } from "../../services/users";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";
import type { UserEntity } from "../../entities/users.entity";

export const remove = (usersService: UsersService) => async (req: ParamsRequest<IdUserDTO>, res: BodyResponse<UserEntity>, next: NextFunction) => {
	try {
		const { idUser } = req.params;
		if (!idUser) return res.status(StatusCodes.BAD_REQUEST).json({ message: "User ID is required." });

		const deletedUser = await usersService.deleteUserService(idUser);

		return res.status(StatusCodes.OK).json({ data: deletedUser, message: "User deleted successfully" });
	} catch (error) {
		next(error);
	}
};
