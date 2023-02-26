import { MidiaRepository } from "@main/repository/prismaRepo/MidiaRepository";
import { prisma } from "@main/services/prismaService";

export const makeMidiaRepository = () => {
	return new MidiaRepository(prisma);
};
