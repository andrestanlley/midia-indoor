import { TerminalRepository } from "../repository/prismaRepo/TerminalRepository";
import { prisma } from "../services/prismaService";

export const makeTerminalRepository = () => {
	return new TerminalRepository(prisma);
};
