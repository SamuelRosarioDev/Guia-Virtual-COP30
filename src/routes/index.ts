import { Router } from "express";
import { baseRoutes } from "./base.route";
import { usersRoutes } from "./users.route";
import { tradersRoutes } from "./trader.route";
import { hoteliersRoutes } from "./hotelier.route";

export const routes = Router();
routes.use("/", baseRoutes);
routes.use("/users", usersRoutes);
routes.use("/traders", tradersRoutes);
routes.use("/hoteliers", hoteliersRoutes);