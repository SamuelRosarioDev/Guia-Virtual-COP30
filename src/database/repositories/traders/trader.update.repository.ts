import { pool } from "../../connection";
import { sql } from "../../../config/sqlTag";
import { TraderEntity } from "../../../entities/trader.entity";

export const update = () =>
	async (idTrader: string, traderEntity: TraderEntity): Promise<TraderEntity | null> => {
		//[SQL]
		const query = sql`
                UPDATE users SET
                    store_name = COALESCE($2, store_name),
                    store_type = COALESCE($3, store_type),
                    cpf = COALESCE($4, cpf),
                    cnpj = COALESCE($5, cnpj),
                    address = COALESCE($6, address),
                    link_map = COALESCE($7, link_map),
                    cep = COALESCE($8, cep),
                    "updatedAt" = NOW()
                WHERE id_trader = $1
                RETURNING id_trader, store_name, store_type, cpf, cnpj, address, link_map, cep, "createdAt", "updatedAt";
            `;
		//[SQL]

		const values = [
			idTrader,
			traderEntity.storeName ?? null,
			traderEntity.storeType ?? null,
			traderEntity.cpf ?? null,
			traderEntity.cnpj ?? null,
			traderEntity.address ?? null,
			traderEntity.linkMap ?? null,
			traderEntity.cep ?? null,
			traderEntity.updatedAt ?? null,
		];

		const result = await pool.query(query, values);

		if (result.rowCount === 0) return null;

		const row = result.rows[0];

		return new TraderEntity({
			idTrader: row.id_trader,
			storeName: row.store_name,
			storeType: row.store_type,
			cpf: row.cpf,
			cnpj: row.cnpj,
			address: row.address,
			linkMap: row.link_map,
			cep: row.cep,
			userId: row.userId,
			createdAt: row.createdAt,
			updatedAt: row.updatedAt,
		});
	};
