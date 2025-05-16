import { Router } from "express";
import { baseRoutes } from "./base.route";
import { usersRoutes } from "./users.route";

export const routes = Router();
routes.use("/", baseRoutes);
routes.use("/users", usersRoutes);
