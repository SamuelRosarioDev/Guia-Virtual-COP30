import { type RequestHandler, Router } from "express";
import { TraderController } from "../controllers/traders";
import { idTraderSchema } from "../dtos/trader.dto";
import { validador } from "../middlewares/validator.middleware";
import { TradersFactory } from "../factories/trader.factory";
import { ParamsType } from "../enums/paramstype.enum";

export const tradersRoutes = Router();
const tradersController = TraderController(TradersFactory.getServiceInstance());

tradersRoutes.get("/", tradersController.getTradersController as RequestHandler);
tradersRoutes.post("/", validador({ schema: idTraderSchema, type: ParamsType.BODY }), tradersController.createTraderController as RequestHandler);
tradersRoutes.get("/:idTrader", validador({ schema: idTraderSchema, type: ParamsType.PARAMS }), tradersController.getTraderByIdController as RequestHandler);
tradersRoutes.put("/:idTrader", validador({ schema: idTraderSchema, type: ParamsType.PARAMS }), tradersController.updateTraderController as RequestHandler);
tradersRoutes.delete("/:idTrader", validador({ schema: idTraderSchema, type: ParamsType.PARAMS }), tradersController.deleteTraderController as RequestHandler);