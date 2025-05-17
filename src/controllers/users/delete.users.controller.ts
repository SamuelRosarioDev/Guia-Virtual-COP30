import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users.service";

export const deleteUser = (usersService: UsersService) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser } = req.params;

      if (!idUser) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });
      }

      const deletedUser = await usersService.deleteUser(idUser);
      if (!deletedUser) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do usuário não encontrado." });
      }

      return res.status(StatusCodes.OK).json(deletedUser);
    } catch (error) {
      next(error);
    }
  };
