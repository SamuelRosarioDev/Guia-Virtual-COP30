import type { User } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdUserDTO } from "../../dtos/users.dto";
import type { UserEntity } from "../../entities/users.entity";
import type { UsersService } from "../../services/users";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const update = (usersService: UsersService) => async (req: ParamsRequest<IdUserDTO>, res: BodyResponse<User | { message: string }>, next: NextFunction) => {
	try {
		const { idUser } = req.params;
		const userData: UserEntity = req.body;

		if (!idUser) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });

		const updatedUser = await usersService.updateUserService(idUser, userData);
		if (!updatedUser) return res.status(StatusCodes.NOT_FOUND).json({ message: "Usuário não encontrado." });

		return res.status(StatusCodes.OK).json(updatedUser);
	} catch (error) {
		next(error);
	}
};
