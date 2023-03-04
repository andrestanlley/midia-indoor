import { IMediaProps } from "@domain/entities/Media";
import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import IMediaRepository from "@domain/repositories/IMediaRepository";
import mediasDbToHttp from "./mappers/mediasDbToHttp";
import mediaListDbToHttp from "./mappers/mediaListDbToHttp";
import IID from "@main/interfaces/IID";

export class MediaRepository implements IMediaRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async getAll() {
		const medias = (await this.prisma.media.findMany()).map(mediasDbToHttp);
		return medias;
	}

	async createMedia({ name, filename }: IMediaProps) {
		const medias = await this.prisma.media.create({
			data: {
				id: randomUUID(),
				name,
				filename,
			},
		});

		return mediasDbToHttp(medias);
	}

	async insertMediaToList(
		mediaListId: string,
		mediasToConnect: IID[],
		mediasToDisconnect: IID[]
	) {
		const queryObject: any = {};
		if (mediasToConnect.length) {
			queryObject["connect"] = mediasToConnect;
		}
		if (mediasToDisconnect.length) {
			queryObject["disconnect"] = mediasToDisconnect;
		}
		console.log(queryObject);
		const medias = await this.prisma.mediaList.update({
			where: {
				id: mediaListId,
			},
			data: {
				medias: queryObject,
			},
			include: {
				medias: true,
			},
		});

		return mediaListDbToHttp(medias);
	}

	async deleteMedia(midiaId: string) {
		const medias = await this.prisma.media.delete({
			where: {
				id: midiaId,
			},
		});

		return mediasDbToHttp(medias);
	}
}
