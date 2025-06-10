import type { QueryResult } from "pg";
import { HotelierEntity } from "../../../entities/hotelier.entity";
import { pool } from "../../connection";
import { sql } from "../../../config/sqlTag";

export const create = () =>
	async ({ hotelName, totalQuantity, quantityOccupied, cnpj, linkMap, address, cep, userId, }: HotelierEntity): Promise<HotelierEntity> => {

		const query = sql`
			INSERT INTO hoteliers (hotel_name, total_quantity, quantity_occupied, cnpj, link_map, address, cep, userId)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
			RETURNING hotel_name, total_quantity, quantity_occupied, cnpj, link_map, address, cep, userId;
		`;

		const values = [hotelName, totalQuantity, quantityOccupied, cnpj, linkMap, address, cep, userId,];

		const result: QueryResult = await pool.query(query, values);
		const insertedRow = result.rows[0];

		return new HotelierEntity({
			hotelName: insertedRow.hotel_name,
			totalQuantity: insertedRow.total_quantity,
			quantityOccupied: insertedRow.quantity_occupied,
			cnpj: insertedRow.cnpj,
			linkMap: insertedRow.link_map,
			address: insertedRow.address,
			cep: insertedRow.cep,
			userId: insertedRow.userId,
		});
	};
