import { Router } from "express";
import { baseRoutes } from "./base.route";
import { hoteliersRoutes } from "./hotelier.route";
import { tradersRoutes } from "./trader.route";
import { usersRoutes, loginRoute } from "./users.route";
import { authRoute } from "./auth.route";

export const routes = Router();
routes.use("/", baseRoutes);
routes.use("/auth", authRoute);
routes.use("/login", loginRoute);
routes.use("/user", usersRoutes);
routes.use("/trader", tradersRoutes);
routes.use("/hotelier", hoteliersRoutes);
