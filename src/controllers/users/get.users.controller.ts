import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users.service";

export const getUsers = (usersService: UsersService) =>
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await usersService.getUsers();
      return res.status(StatusCodes.OK).json(users);
    } catch (error) {
      next(error);
    }
  };
