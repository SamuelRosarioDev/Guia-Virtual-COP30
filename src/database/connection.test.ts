import { PrismaClient } from "@prisma/client";
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

export async function Connection() {
	try {
		await prisma.$connect();
		console.log("✅ Conectado ao SQL Server com sucesso!");
	} catch (error) {
		throw new AppError(`❌ Error: ${error}`, StatusCodes.INTERNAL_SERVER_ERROR);
	} finally {
		await prisma.$disconnect();
	}
}

Connection();
