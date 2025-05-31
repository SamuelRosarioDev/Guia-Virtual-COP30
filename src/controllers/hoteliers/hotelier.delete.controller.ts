import type { Hotelier } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdHotelierDTO } from "../../dtos/hotelier.dto";
import type { HoteliersService } from "../../services/hoteliers";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const deleter = (hoteliersService: HoteliersService) => 
	async (req: ParamsRequest<IdHotelierDTO>, res: BodyResponse<Hotelier>, next: NextFunction) => {
	try {
		const { idHotelier } = req.params;
		// Valida se o ID do hotelier foi fornecido
		if (!idHotelier) return res.status(StatusCodes.BAD_REQUEST).json({ message: "User ID is required." });

		const deletedHotelier = await hoteliersService.deleteHotelierService(idHotelier);
		// Verifica se o hotelier foi encontrado e deletado e retorna uma mensagem de sucesso
		return res.status(StatusCodes.OK).json({data: deletedHotelier, message: "Hotelier deleted successfully"});
	} catch (error) {
		next(error);
	}
};
