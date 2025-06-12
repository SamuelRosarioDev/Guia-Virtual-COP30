import { v4 as uuidv4 } from "uuid";
import { pool } from "../../connection";
import { TraderEntity } from "../../../entities/trader.entity";
import type { QueryResult } from "pg";
import { sql } from "../../../config/sqlTag";

export const create = () =>
    async ({ storeName, storeType, cpf, cnpj, linkMap, address, cep, userId }: TraderEntity): Promise<TraderEntity> => {

        const idTrader = uuidv4();
		const createdAt = new Date();
		const updatedAt = new Date();

        const query = sql`
            INSERT INTO traders (
                id_trader, store_name, store_type, cpf, cnpj, link_map, address, cep, "userId", "createdAt", "updatedAt"
                )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING id_trader, store_name, store_type, cpf, cnpj, link_map, address, cep, "userId", "createdAt", "updatedAt";
        `;

        const values = [idTrader, storeName, storeType, cpf, cnpj, linkMap, address, cep, userId, createdAt, updatedAt];

        const result: QueryResult = await pool.query(query, values);
        const insertedRow = result.rows[0];

        return new TraderEntity({
            idTrader: insertedRow.id_trader,
            storeName: insertedRow.store_name,
            storeType: insertedRow.store_type,
            cpf: insertedRow.cpf,
            cnpj: insertedRow.cnpj,
            linkMap: insertedRow.link_map,
            address: insertedRow.address,
            cep: insertedRow.cep,
            userId: insertedRow.userId,
        });
    };
