import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users.service";
import type { UserEntity } from "../../entities/users.entity";

export const updateUser = (usersService: UsersService) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;
      const userData: UserEntity = req.body;

      if (!idUser) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });
      }

      const updatedUser = await usersService.updateUser(idUser, userData);
      if (!updatedUser) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: "Usuário não encontrado." });
      }

      return res.status(StatusCodes.OK).json(updatedUser);
    } catch (error) {
      next(error);
    }
  };
