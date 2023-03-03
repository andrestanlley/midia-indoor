import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import IMediaListRepository from "@domain/repositories/IMediaListRepository";
import mediaListDbToHttp from "./mappers/mediaListDbToHttp";

export class MediaListRepository implements IMediaListRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async getAll() {
		const medialist = await this.prisma.mediaList.findMany({
			include: {
				medias: true,
			},
		});

		return medialist.map(mediaListDbToHttp);
	}

	async createMediaList(name: string) {
		const mediaList = await this.prisma.mediaList.create({
			data: {
				id: randomUUID(),
				name,
			},
		});

		return mediaListDbToHttp(mediaList);
	}

	async deleteMediaList(mediaListId: string) {
		const mediaList = await this.prisma.mediaList.delete({
			where: {
				id: mediaListId,
			},
		});

		return mediaListDbToHttp(mediaList);
	}

	async findMediaList(id: string | null) {
		if (!id) return [];
		const mediaList = await this.prisma.mediaList.findFirst({
			where: {
				id,
			},
		});
		if (!mediaList) return [];
		return mediaListDbToHttp(mediaList);
	}

	async insertMediaToList(mediaListId: string, mediaId: string) {
		const mediaList = await this.prisma.mediaList.update({
			where: {
				id: mediaListId,
			},
			data: {
				medias: {
					connect: {
						id: mediaId,
					},
				},
			},
			include: {
				medias: true,
			},
		});

		return mediaListDbToHttp(mediaList);
	}
}
