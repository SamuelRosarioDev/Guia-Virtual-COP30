import { type RequestHandler, Router } from "express";
import { TraderController } from "../controllers/traders";
import { createTraderSchema, idTraderSchema } from "../dtos/trader.dto";
import { ParamsType } from "../enums/paramstype.enum";
import { TradersFactory } from "../factories/trader.factory";
import { authorizeUserOrAdmin } from "../middlewares/adminAndUser.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validador } from "../middlewares/validator.middleware";

export const tradersRoutes = Router();
const tradersController = TraderController(TradersFactory.getServiceInstance());

tradersRoutes.get("/", authMiddleware, tradersController.getTradersController as RequestHandler);
tradersRoutes.post("/", validador({ schema: createTraderSchema, type: ParamsType.BODY }), tradersController.createTraderController as RequestHandler);
tradersRoutes.get("/:idTrader", authMiddleware, authorizeUserOrAdmin, validador({ schema: idTraderSchema, type: ParamsType.PARAMS }), tradersController.getTraderByIdController as RequestHandler);
tradersRoutes.put("/:idTrader", authMiddleware, authorizeUserOrAdmin, validador({ schema: idTraderSchema, type: ParamsType.PARAMS }), tradersController.updateTraderController as RequestHandler);
tradersRoutes.delete("/:idTrader", authMiddleware, authorizeUserOrAdmin, validador({ schema: idTraderSchema, type: ParamsType.PARAMS }), tradersController.deleteTraderController as RequestHandler);
