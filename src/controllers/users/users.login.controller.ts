import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { NextFunction } from "express";
import type { LoginProps } from "../../types/loginProps";

type LoginResponse = {
  _id?: string;
  name?: string;
  email?: string;
  typeUser?: string;
};

export const loginUser = (usersService: UsersService) =>
  async (req: BodyRequest<LoginProps>, res: BodyResponse<LoginResponse>, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const loginResult = await usersService.loginService({ email, password });

      res.cookie("token", loginResult.token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24, // 1 dia
      });

      const { token, ...userInfo } = loginResult;

      return res.status(StatusCodes.OK).json({
        data: userInfo,
        message: "Login successful",
      });
    } catch (error) {
      next(error);
    }
  };
