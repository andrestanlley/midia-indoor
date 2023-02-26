import { MidiaListRepository } from "@main/repository/prismaRepo/MidiaListRepository";
import { prisma } from "@main/services/prismaService";

export const makeMidiaListRepository = () => {
	return new MidiaListRepository(prisma);
};
