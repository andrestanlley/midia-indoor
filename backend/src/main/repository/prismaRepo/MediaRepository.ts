import { IMediaProps } from "@domain/entities/Media";
import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import IMediaRepository from "@domain/repositories/IMediaRepository";
import mediasDbToHttp from "./mappers/mediasDbToHttp";
import mediaListDbToHttp from "./mappers/mediaListDbToHttp";

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

	async deleteMedia(midiaId: string) {
		const medias = await this.prisma.media.delete({
			where: {
				id: midiaId,
			},
		});

		return mediasDbToHttp(medias);
	}
}
