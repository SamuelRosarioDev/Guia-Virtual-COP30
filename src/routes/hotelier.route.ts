import { type RequestHandler, Router } from "express";
import { HotelierController } from "../controllers/hoteliers";
import { createHotelierSchema, idHotelierSchema } from "../dtos/hotelier.dto";
import { ParamsType } from "../enums/paramstype.enum";
import { HoteliersFactory } from "../factories/hotelier.factory";
import { authorizeUserOrAdmin } from "../middlewares/adminAndUser.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validador } from "../middlewares/validator.middleware";

export const hoteliersRoutes = Router();
const hoteliersController = HotelierController(HoteliersFactory.getServiceInstance());

hoteliersRoutes.get("/", /**authMiddleware, authorizeUserOrAdmin,**/ hoteliersController.getHoteliersController as RequestHandler);
hoteliersRoutes.post("/", validador({ schema: createHotelierSchema, type: ParamsType.BODY }), hoteliersController.createHotelierController as RequestHandler);
hoteliersRoutes.get("/:idHotelier", /**authMiddleware, authorizeUserOrAdmin,**/ validador({ schema: idHotelierSchema, type: ParamsType.PARAMS }), hoteliersController.getHotelierByIdController as RequestHandler);
hoteliersRoutes.put("/:idHotelier", authMiddleware, authorizeUserOrAdmin, validador({ schema: idHotelierSchema, type: ParamsType.PARAMS }), hoteliersController.updateHotelierController as RequestHandler);
hoteliersRoutes.delete("/:idHotelier", authMiddleware, authorizeUserOrAdmin, validador({ schema: idHotelierSchema, type: ParamsType.PARAMS }), hoteliersController.deleteHotelierController as RequestHandler);
