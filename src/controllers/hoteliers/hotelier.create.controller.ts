import type { NextFunction } from "express";
import type { HoteliersDataDTO } from "../../dtos/hotelier.dto";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { HoteliersService } from "../../services/hoteliers";
import type { Hotelier } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export const create = (hoteliersService: HoteliersService) =>
    async (req: BodyRequest<HoteliersDataDTO>, res: BodyResponse<Hotelier>, next: NextFunction) => {
        try {
            const hotelierData = req.body;
            const createdHotelier = await hoteliersService.createHotelierService(hotelierData);
            return res.status(StatusCodes.CREATED).json(createdHotelier);
        } catch (error) {
            next(error);
        }
    };