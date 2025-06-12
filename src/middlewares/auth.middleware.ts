import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import type { AuthUser } from "../types/authUser.type";
import { verifyToken } from "../utils/jwt.util";
import type { UserType } from "../enums/users.enum";
import { pool } from "../database/connection";
import { sql } from "../config/sqlTag";

export const authMiddleware: RequestHandler = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null; // Aceita Token via Bearer
        const token = tokenFromHeader || req.cookies.token; // Aceita Token via Cookie

        if (!token) {
            res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token não fornecido" });
            return;
        }

        const decoded = verifyToken(token) as { idUser: string } | null;
        if (!decoded) {
            res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token inválido ou expirado" });
            return;
        }

        const userQuery = await pool.query(
            sql`SELECT 
                u.*,
                h.id_hotelier as "hotelier.idHotelier",
                h.hotel_name as "hotelier.hotelName",
                h.total_quantity as "hotelier.totalQuantity",
                h.quantity_occupied as "hotelier.quantityOccupied",
                h.cnpj as "hotelier.cnpj",
                h.link_map as "hotelier.linkMap",
                h.address as "hotelier.address",
                h.cep as "hotelier.cep",
                t.id_trader as "trader.idTrader",
                t.store_name as "trader.storeName",
                t.store_type as "trader.storeType",
                t.cpf as "trader.cpf",
                t.cnpj as "trader.cnpj",
                t.link_map as "trader.linkMap",
                t.address as "trader.address",
                t.cep as "trader.cep"
            FROM users u
            LEFT JOIN hoteliers h ON u.id_user = h."userId"
            LEFT JOIN traders t ON u.id_user = t."userId"
            WHERE u.id_user = $1`,
            [decoded.idUser]
        );

        if (userQuery.rows.length === 0) {
            res.status(StatusCodes.UNAUTHORIZED).json({ message: "Usuário não encontrado" });
            return;
        }

        const dbUser = userQuery.rows[0];

        const authUser: AuthUser = {
            idUser: dbUser.id_user,
            name: dbUser.name,
            email: dbUser.email,
            password: dbUser.password,
            phone: dbUser.phone,
            country: dbUser.country,
            typeUser: dbUser.type_user as UserType,
            isAdmin: dbUser.is_admin,
            hotelier: dbUser["hotelier.idHotelier"] ? {
                idHotelier: dbUser["hotelier.idHotelier"],
                hotelName: dbUser["hotelier.hotelName"],
                totalQuantity: dbUser["hotelier.totalQuantity"],
                quantityOccupied: dbUser["hotelier.quantityOccupied"],
                cnpj: dbUser["hotelier.cnpj"],
                linkMap: dbUser["hotelier.linkMap"],
                address: dbUser["hotelier.address"],
                cep: dbUser["hotelier.cep"],
            } : undefined,
            trader: dbUser["trader.idTrader"] ? {
                idTrader: dbUser["trader.idTrader"],
                storeName: dbUser["trader.storeName"],
                storeType: dbUser["trader.storeType"],
                cpf: dbUser["trader.cpf"],
                cnpj: dbUser["trader.cnpj"] ?? undefined,
                linkMap: dbUser["trader.linkMap"],
                address: dbUser["trader.address"],
                cep: dbUser["trader.cep"],
            } : undefined,
        };

        req.user = authUser;
        next();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Erro no middleware de autenticação" });
    }
};