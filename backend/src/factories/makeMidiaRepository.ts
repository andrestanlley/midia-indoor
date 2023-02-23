import { MidiaRepository } from "../repository/MidiaRepository";
import { prisma } from "../services/prismaService";

export const makeMidiaRepository = () => {
	return new MidiaRepository(prisma);
};
