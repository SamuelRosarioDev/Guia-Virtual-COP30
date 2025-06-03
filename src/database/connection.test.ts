import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/app.error";

const prisma = new PrismaClient();

export async function Connection() {
	try {
		await prisma.$connect();
		console.log("✅ Conectado ao PostgresSQL com sucesso!");
	} catch (error) {
		throw new AppError(`❌ Error: ${error}`, StatusCodes.INTERNAL_SERVER_ERROR);
	} finally {
		await prisma.$disconnect();
	}
}

Connection();
