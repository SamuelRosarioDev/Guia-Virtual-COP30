import { sql } from "../../../config/sqlTag";
import { UserEntity } from "../../../entities/users.entity";
import { pool } from "../../connection";

export const get = () =>
	async (): Promise<UserEntity[]> => {
		//[SQL]
		const query = sql`SELECT * FROM users`;
		//[SQL]
		const result = await pool.query(query);

		return result.rows.map(row => new UserEntity({
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
		}));
	};
