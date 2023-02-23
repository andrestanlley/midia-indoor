import { MidiaListRepository } from "../repository/MidiaListRepository";
import { prisma } from "../services/prismaService";

export const makeMidiaListRepository = () => {
	return new MidiaListRepository(prisma);
};
