import { IMediaProps } from "@domain/entities/Media";
import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import IMediaRepository from "@domain/repositories/IMediaRepository";
import mediasDbToHttp from "./mappers/mediasDbToHttp";

export class MediaRepository implements IMediaRepository {
	constructor(private readonly prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async getAll() {
		const medias = (await this.prisma.media.findMany()).map(mediasDbToHttp);
		return medias;
	}

	async update({ expiresIn, id }: IMediaProps) {
		const media = await this.prisma.media.update({
			where: {
				id,
			},
			data: {
				expiresIn: new Date(expiresIn),
			},
		});

		return mediasDbToHttp(media);
	}

	async createMedia({ name, filename, expiresIn, size }: IMediaProps) {
		const medias = await this.prisma.media.create({
			data: {
				id: randomUUID(),
				name,
				filename,
				expiresIn,
				size,
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
