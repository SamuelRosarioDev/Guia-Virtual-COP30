import { type RequestHandler, Router } from "express";
import { validador } from "../middlewares/validator.middleware";
import { ParamsType } from "../enums/paramstype.enum";
import { HotelierController } from "../controllers/hoteliers";
import { HoteliersFactory } from "../factories/hotelier.factory";
import { idHotelierSchema } from "../dtos/hotelier.dto";

export const hoteliersRoutes = Router();
const hoteliersController = HotelierController(HoteliersFactory.getServiceInstance());

hoteliersRoutes.get("/", hoteliersController.getHoteliersController as RequestHandler);
hoteliersRoutes.post("/", validador({ schema: idHotelierSchema, type: ParamsType.BODY }), hoteliersController.createHotelierController as RequestHandler);
hoteliersRoutes.get("/:idHotelier", validador({ schema: idHotelierSchema, type: ParamsType.PARAMS }), hoteliersController.getHotelierByIdController as RequestHandler);
hoteliersRoutes.put("/:idHotelier", validador({ schema: idHotelierSchema, type: ParamsType.PARAMS }), hoteliersController.updateHotelierController as RequestHandler);
hoteliersRoutes.delete("/:idHotelier", validador({ schema: idHotelierSchema, type: ParamsType.PARAMS }), hoteliersController.deleteHotelierController as RequestHandler);
