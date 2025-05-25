import type { NextFunction } from "express";
import type { UsersService } from "../../services/users";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";
import type { IdUserDTO } from "../../dtos/users.dto";
import type { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export const getById = (usersService: UsersService) =>
    async (req: ParamsRequest<IdUserDTO>, res: BodyResponse<User | { message: string }>, next: NextFunction) => {
        try {
            const { idUser } = req.params;
            if (!idUser) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });

            const user = await usersService.getUserByIdService(idUser);
            if (!user) return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do usuário não encontrado." });

            return res.status(StatusCodes.OK).json(user);
        } catch (error) {
            next(error);
        }
    };
