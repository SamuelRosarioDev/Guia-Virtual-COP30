import { type RequestHandler, Router } from "express";
import { UsersController } from "../controllers/users";
import { createUserSchema, idUserSchema, loginSchema } from "../dtos/users.dto";
import { ParamsType } from "../enums/paramstype.enum";
import { UsersFactory } from "../factories/users.factory";
import { authorizeUserOrAdmin } from "../middlewares/adminAndUser.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validador } from "../middlewares/validator.middleware";

export const usersRoutes = Router();
const usersController = UsersController(UsersFactory.getServiceInstance());

usersRoutes.post("/", validador({ schema: createUserSchema, type: ParamsType.BODY }), usersController.createUserController as RequestHandler);

usersRoutes.get("/", authMiddleware, authorizeUserOrAdmin, usersController.getUsersController as RequestHandler);
usersRoutes.get("/:idUser", authMiddleware, authorizeUserOrAdmin, validador({ schema: idUserSchema, type: ParamsType.PARAMS }), usersController.getUserByIdController as RequestHandler);
usersRoutes.put("/:idUser", authMiddleware, authorizeUserOrAdmin, validador({ schema: idUserSchema, type: ParamsType.PARAMS }), usersController.updateUserController as RequestHandler);
usersRoutes.delete("/:idUser", authMiddleware, authorizeUserOrAdmin, validador({ schema: idUserSchema, type: ParamsType.PARAMS }), usersController.deleteUserController as RequestHandler);

// LOGIN ONLY
export const loginRoute = Router();
const loginController = UsersController(UsersFactory.getServiceInstance());

loginRoute.post("/", validador({ schema: loginSchema, type: ParamsType.BODY }), loginController.loginController as unknown as RequestHandler);