import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users.service";

export const getUserById = (usersService: UsersService) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;
      if (!idUser) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });
      }

      const user = await usersService.getUserById(idUser);
      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do usuário não encontrado." });
      }

      return res.status(StatusCodes.OK).json(user);
    } catch (error) {
      next(error);
    }
  };
