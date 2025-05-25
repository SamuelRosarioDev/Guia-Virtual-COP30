import type { NextFunction } from "express";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";
import type { HoteliersService } from "../../services/hoteliers";
import type { Hotelier } from "@prisma/client";
import type { IdHotelierDTO } from "../../dtos/hotelier.dto";
import { StatusCodes } from "http-status-codes";

export const getById = (hoteliersService: HoteliersService) =>
    async (req: ParamsRequest<IdHotelierDTO>, res: BodyResponse<Hotelier | { message: string }>, next: NextFunction) => {
        try {
            const { idHotelier } = req.params;
            if (!idHotelier) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do usuário é obrigatório." });

            const hotelier = await hoteliersService.getHotelierByIdService(idHotelier);
            if (!hotelier) return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do usuário não encontrado." });

            return res.status(StatusCodes.OK).json(hotelier);
        } catch (error) {
            next(error);
        }
    };