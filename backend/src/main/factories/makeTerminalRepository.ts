import { TerminalRepository } from "../repository/prismaRepo/TerminalRepository";
import { prisma } from "../../domain/useCases/prismaService";

export const makeTerminalRepository = () => {
	return new TerminalRepository(prisma);
};
