import { Router } from "express";
import { UsersController } from "../controllers/users.controller";
import { ParamsType, validador } from "../middlewares/validator.middleware";
import { createUserSchema } from "../dtos/users.dto";
import { UsersFactory } from "../factories/users.factory";
import type { RequestHandler } from "express";

export const usersRoutes = Router();

const usersController = new UsersController(UsersFactory.getServiceInstance());


usersRoutes.get("/", usersController.getAllUsers as RequestHandler);
usersRoutes.post(
  "/",
  validador({
    schema: createUserSchema,
    type: ParamsType.BODY,
  }),
  usersController.create as RequestHandler
);
