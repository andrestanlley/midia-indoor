import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import IMediaListRepository from "@domain/repositories/IMediaListRepository";
import mediaListDbToHttp from "./mappers/mediaListDbToHttp";
import { IMediaProps } from "@domain/entities/Media";

export class MediaListRepository implements IMediaListRepository {
	constructor(private readonly prisma: PrismaClient) {
		this.prisma = prisma;
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

	async insertMediaToList(
		mediaListId: string,
		mediasToConnect: IMediaProps[],
		mediasToDisconnect: IMediaProps[]
	) {
		const mediaList = await this.prisma.mediaList.update({
			where: {
				id: mediaListId,
			},
			data: {
				medias: {
					connect: mediasToConnect,
					disconnect: mediasToDisconnect,
				},
			},
			include: {
				medias: true,
			},
		});

		return mediaListDbToHttp(mediaList);
	}
}
