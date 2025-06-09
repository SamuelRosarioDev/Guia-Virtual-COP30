import { sql } from "../../../config/sqlTag";
import { pool } from "../../connection";
import { UserEntity } from "../../../entities/users.entity";

export const remove = () =>
	async (idUser: string): Promise<UserEntity | null> => {
		//[SQL]
		const query = sql`
			DELETE FROM users
			WHERE id_user = $1
			RETURNING id_user, name, email, password, phone, country, type_user, is_admin, "createdAt", "updatedAt"
		`;
		//[SQL]

		const result = await pool.query(query, [idUser]);

		if (result.rowCount === 0) return null;

		const row = result.rows[0];

		return new UserEntity({
			idUser: row.id_user,
			name: row.name,
			email: row.email,
			password: row.password,
			phone: row.phone,
			country: row.country,
			typeUser: row.type_user,
			isAdmin: row.is_admin,
			createdAt: row.createdAt,
			updatedAt: row.updatedAt,
		});
	};
