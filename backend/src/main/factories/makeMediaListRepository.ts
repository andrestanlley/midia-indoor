import { MediaListRepository } from "@main/repository/prismaRepo/MidiaListRepository";
import { prisma } from "@domain/useCases/prismaService";

export const makeMediaListRepository = () => {
	return new MediaListRepository(prisma);
};
