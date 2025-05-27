import { type RequestHandler, Router } from "express";
import { UsersController } from "../controllers/users";
import { validador } from "../middlewares/validator.middleware";
import { createUserSchema, idUserSchema } from "../dtos/users.dto";
import { UsersFactory } from "../factories/users.factory";
import { ParamsType } from "../enums/paramstype.enum";

export const usersRoutes = Router();
const usersController = UsersController(UsersFactory.getServiceInstance());

usersRoutes.get("/", usersController.getUsersController as RequestHandler);
usersRoutes.post("/login", validador({ schema: createUserSchema, type: ParamsType.BODY }), usersController.loginController as unknown as RequestHandler);
usersRoutes.post("/", validador({ schema: createUserSchema, type: ParamsType.BODY, }), usersController.createUserController as RequestHandler);
usersRoutes.get("/:idUser", validador({ schema: idUserSchema, type: ParamsType.PARAMS, }), usersController.getUserByIdController as RequestHandler);
usersRoutes.put("/:idUser", validador({ schema: idUserSchema, type: ParamsType.PARAMS, }), usersController.updateUserController as RequestHandler);
usersRoutes.delete("/:idUser", validador({ schema: idUserSchema, type: ParamsType.PARAMS, }), usersController.deleteUserController as RequestHandler);