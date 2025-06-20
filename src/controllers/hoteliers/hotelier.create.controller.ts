import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { HoteliersDataDTO } from "../../dtos/hotelier.dto";
import type { HoteliersService } from "../../services/hoteliers";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { HotelierEntity } from "../../entities/hotelier.entity";

export const create = (hoteliersService: HoteliersService) => 
	async (req: BodyRequest<HoteliersDataDTO>, res: BodyResponse<HotelierEntity>, next: NextFunction) => {
	try {
		const hotelierData = req.body;
		const createdHotelier = await hoteliersService.createHotelierService(hotelierData);
		return res.status(StatusCodes.CREATED).json({data: createdHotelier, message: "Hotelier created successfully"});
	} catch (error) {
		next(error);
	}
};
