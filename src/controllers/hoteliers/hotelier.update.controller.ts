import type { Hotelier } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdHotelierDTO } from "../../dtos/hotelier.dto";
import type { HotelierEntity } from "../../entities/hotelier.entity";
import type { HoteliersService } from "../../services/hoteliers";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const update = (hoteliersService: HoteliersService) => async (req: ParamsRequest<IdHotelierDTO>, res: BodyResponse<Hotelier | { message: string }>, next: NextFunction) => {
	try {
		const { idHotelier } = req.params;
		const hotelierData: HotelierEntity = req.body;

		if (!idHotelier) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do hoteleiro é obrigatório." });

		const updateHotelier = await hoteliersService.updateHotelierService(idHotelier, hotelierData);
		if (!updateHotelier) return res.status(StatusCodes.NOT_FOUND).json({ message: "Hoteleiro não encontrado." });

		return res.status(StatusCodes.OK).json(updateHotelier);
	} catch (error) {
		next(error);
	}
};
