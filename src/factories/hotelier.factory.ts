import { PrismaClient } from "@prisma/client";
import { createHoteliersRepository } from "../database/repositories/hoteliers";
import { createUsersRepository } from "../database/repositories/users";
import { HoteliersService } from "../services/hoteliers";

const prisma = new PrismaClient();

class HoteliersFactoryInternal {
    private hoteliersServiceInstance: HoteliersService | null = null;

    getServiceInstance(){
        if (this.hoteliersServiceInstance) {
            return this.hoteliersServiceInstance;
        }

        const usersRepository = createUsersRepository(prisma.user);
        const hoteliersRepository = createHoteliersRepository(prisma.hotelier);
        const service = HoteliersService(usersRepository, hoteliersRepository);
        this.hoteliersServiceInstance = service;

        return service;
    }
}

export const HoteliersFactory = new HoteliersFactoryInternal();