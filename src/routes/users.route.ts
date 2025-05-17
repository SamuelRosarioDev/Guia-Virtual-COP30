import { Router } from "express";
import { UsersController } from "../controllers/users";
import { validador } from "../middlewares/validator.middleware";
import { createUserSchema, idUserSchema } from "../dtos/users.dto";
import { UsersFactory } from "../factories/users.factory";
import type { RequestHandler } from "express";
import { ParamsType } from "../enums/paramstype.enum";

export const usersRoutes = Router();

const usersController = UsersController(UsersFactory.getServiceInstance());

usersRoutes.get("/", usersController.get as RequestHandler);
usersRoutes.post("/", validador({ schema: createUserSchema, type: ParamsType.BODY, }), usersController.create as RequestHandler);
usersRoutes.get("/:idUser", validador({ schema: idUserSchema , type: ParamsType.PARAMS, }), usersController.getById as RequestHandler);
usersRoutes.put("/:idUser", validador({ schema: idUserSchema, type: ParamsType.PARAMS, }), usersController.update as RequestHandler);
usersRoutes.delete("/:idUser", validador({ schema: idUserSchema, type: ParamsType.PARAMS, }), usersController.delete as RequestHandler);