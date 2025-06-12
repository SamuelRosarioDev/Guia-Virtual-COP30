import { pool } from "../../connection";
import { TraderEntity } from "../../../entities/trader.entity";
import type { QueryResult } from "pg";
import { sql } from "../../../config/sqlTag";

export const create = () =>
    async ({ storeName, storeType, cpf, cnpj, linkMap, address, cep, userId }: TraderEntity): Promise<TraderEntity> => {

        const query = sql`
            INSERT INTO traders (store_name, store_type, cpf, cnpj, link_map, address, cep, "userId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING store_name, store_type, cpf, cnpj, link_map, address, cep, "userId";
        `;

        const values = [storeName, storeType, cpf, cnpj, linkMap, address, cep, userId];

        const result: QueryResult = await pool.query(query, values);
        const insertedRow = result.rows[0];

        return new TraderEntity({
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
