import { MidiaRepository } from "@main/repository/prismaRepo/MidiaRepository";
import { prisma } from "@domain/useCases/prismaService";

export const makeMediaRepository = () => {
	return new MidiaRepository(prisma);
};
