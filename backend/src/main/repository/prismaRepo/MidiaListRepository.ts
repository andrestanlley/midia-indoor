import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import IMediaListRepository from "@domain/repositories/IMediaListRepository";
import midiaListDbToHttp from "./mappers/midiaListDbToHttp";

export class MediaListRepository implements IMediaListRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async createMidiaList(name: string) {
		const midiaList = await this.prisma.mediaList.create({
			data: {
				id: randomUUID(),
				name,
			},
		});

		return midiaListDbToHttp(midiaList);
	}

	async deleteMidiaList(midiaListId: string) {
		const midiaList = await this.prisma.mediaList.delete({
			where: {
				id: midiaListId,
			},
		});

		return midiaListDbToHttp(midiaList);
	}

	async findMediaList(id: string | null) {
		if (!id) return [];
		const mediaList = await this.prisma.mediaList.findFirst({
			where: {
				id,
			},
		});
		if (!mediaList) return [];
		return midiaListDbToHttp(mediaList);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		const mediaList = await this.prisma.mediaList.update({
			where: {
				id: midiaListId,
			},
			data: {
				medias: {
					connect: {
						id: midiaId,
					},
				},
			},
			include: {
				medias: true,
			},
		});

		return midiaListDbToHttp(mediaList);
	}
}
