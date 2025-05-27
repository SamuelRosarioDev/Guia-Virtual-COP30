import type { Hotelier } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdHotelierDTO } from "../../dtos/hotelier.dto";
import type { HoteliersService } from "../../services/hoteliers";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const deleter = (hoteliersService: HoteliersService) => async (req: ParamsRequest<IdHotelierDTO>, res: BodyResponse<Hotelier | { message: string }>, next: NextFunction) => {
	try {
		const { idHotelier } = req.params;
		if (!idHotelier) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });

		const deletedHotelier = await hoteliersService.deleteHotelierService(idHotelier);
		if (!deletedHotelier) return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do usuário não encontrado." });

		return res.status(StatusCodes.OK).json(deletedHotelier);
	} catch (error) {
		next(error);
	}
};
