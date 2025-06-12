import { v4 as uuidv4 } from "uuid";
import type { QueryResult } from "pg";
import { HotelierEntity } from "../../../entities/hotelier.entity";
import { pool } from "../../connection";
import { sql } from "../../../config/sqlTag";

export const create = () =>
	async ({ hotelName, totalQuantity, quantityOccupied, cnpj, linkMap, address, cep, userId }: HotelierEntity): Promise<HotelierEntity> => {

		const idHotelier = uuidv4();
		const createdAt = new Date();
		const updatedAt = new Date();

		const query = sql`
			INSERT INTO hoteliers (
				id_hotelier, hotel_name, total_quantity, quantity_occupied,
				cnpj, link_map, address, cep, "userId", "createdAt", "updatedAt"
			)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
			RETURNING id_hotelier, hotel_name, total_quantity, quantity_occupied,
						cnpj, link_map, address, cep, "userId", "createdAt", "updatedAt";
			`;

		const values = [
			idHotelier, hotelName, totalQuantity, quantityOccupied,
			cnpj, linkMap, address, cep, userId, createdAt, updatedAt
		];

		const result: QueryResult = await pool.query(query, values);
		const insertedRow = result.rows[0];

		return new HotelierEntity({
			idHotelier: insertedRow.id_hotelier,
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
