import type { Hotelier } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdHotelierDTO } from "../../dtos/hotelier.dto";
import type { HoteliersService } from "../../services/hoteliers";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const getById = (hoteliersService: HoteliersService) =>
	async (req: ParamsRequest<IdHotelierDTO>, res: BodyResponse<Hotelier>, next: NextFunction) => {
		try {
			const { idHotelier } = req.params;
			if (!idHotelier) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Hotelier ID is required." });

			const hotelier = await hoteliersService.getHotelierByIdService(idHotelier);

			return res.status(StatusCodes.OK).json({ data: hotelier, message: "Hotelier retrieved successfully" });
		} catch (error) {
			next(error);
		}
	};
