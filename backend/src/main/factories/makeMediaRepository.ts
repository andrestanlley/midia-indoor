import { MediaRepository } from "@main/repository/prismaRepo/MediaRepository";
import { prisma } from "@domain/useCases/prismaService";

export const makeMediaRepository = () => {
	return new MediaRepository(prisma);
};
