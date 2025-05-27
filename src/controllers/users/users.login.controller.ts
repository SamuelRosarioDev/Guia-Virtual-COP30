import type { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { UsersService } from "../../services/users";
import type { BodyRequest, BodyResponse } from "../../types/request.type";

type LoginResponse = {
	message: string;
	logged?: {
		_id: string;
		name: string;
		email: string;
	};
};

export const loginUser = (usersService: UsersService) => async (req: BodyRequest<User>, res: BodyResponse<LoginResponse>) => {
	try {
		const { email, password } = req.body;

		const loggedUser = await usersService.loginService({ email, password });

		res.cookie("token", loggedUser.token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 24 * 60 * 60 * 1000,
			sameSite: "lax",
		});

		return res.status(StatusCodes.OK).json({
			message: "Login realizado com sucesso",
			logged: {
				_id: loggedUser._id,
				name: loggedUser.name,
				email: loggedUser.email,
			},
		});
	} catch (error) {
		console.error("Erro no login:", error);
		return res.status(StatusCodes.BAD_REQUEST).json({ message: "Falha no login" });
	}
};
