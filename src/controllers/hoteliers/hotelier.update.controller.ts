import type { Hotelier } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdHotelierDTO } from "../../dtos/hotelier.dto";
import type { HotelierEntity } from "../../entities/hotelier.entity";
import type { HoteliersService } from "../../services/hoteliers";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const update = (hoteliersService: HoteliersService) => 
	async (req: ParamsRequest<IdHotelierDTO>, res: BodyResponse<Hotelier>, next: NextFunction) => {
	try {
		const { idHotelier } = req.params;
		const hotelierData: HotelierEntity = req.body;

		if (!idHotelier) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Hotelier ID is required." });

		const updateHotelier = await hoteliersService.updateHotelierService(idHotelier, hotelierData);

		return res.status(StatusCodes.OK).json({data: updateHotelier, message: "Hotelier updated successfully"});
	} catch (error) {
		next(error);
	}
};
