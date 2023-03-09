import { prisma } from "@domain/useCases/prismaService";
import { UserRepository } from "@main/repository/prismaRepo/UserRepository";

export const makeUserRepository = () => {
	return new UserRepository(prisma);
};
