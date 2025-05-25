import type { NextFunction } from "express";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { HoteliersService } from "../../services/hoteliers";
import type { Hotelier } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export const get = (hoteliersService: HoteliersService) =>
    async (_req: BodyRequest<Hotelier>, res: BodyResponse<Hotelier[]>, next: NextFunction) => {
        try {
            const hoteliers = await hoteliersService.getHotelierService();
            return res.status(StatusCodes.OK).json(hoteliers);
        } catch (error) {
            next(error);
        }
    };