import type { Hotelier } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { HoteliersService } from "../../services/hoteliers";
import type { BodyRequest, BodyResponse } from "../../types/request.type";

export const get = (hoteliersService: HoteliersService) => 
	async (_req: BodyRequest<Hotelier>, res: BodyResponse<Hotelier[]>, next: NextFunction) => {
	try {
		const hoteliers = await hoteliersService.getHotelierService();
		// Check if any hoteliers were found
		return res.status(StatusCodes.OK).json({ data: hoteliers, message: "Hoteliers retrieved successfully" });	
	} catch (error) {
		next(error);
	}
};
