import { IMediaProps } from "@domain/entities/Media";
import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import IMidiaRepository from "@domain/repositories/IMediaRepository";
import midiasDbToHttp from "./mappers/midiasDbToHttp";
import midiaListDbToHttp from "./mappers/midiaListDbToHttp";

export class MidiaRepository implements IMidiaRepository {
	prisma: PrismaClient;

	constructor(prismaClient: PrismaClient) {
		this.prisma = prismaClient;
	}

	async getAll() {
		const medias = (await this.prisma.media.findMany()).map(midiasDbToHttp);
		return medias;
	}

	async createMedia({ name, filename, type }: IMediaProps) {
		const midias = await this.prisma.media.create({
			data: {
				id: randomUUID(),
				name,
				filename,
				type,
			}
		});

		return midiasDbToHttp(midias);
	}

	async insertMidiaToList(midiaListId: string, midiaId: string) {
		const midias = await this.prisma.mediaList.update({
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

		return midiaListDbToHttp(midias);
	}

	async deleteMedia(midiaId: string) {
		const midias = await this.prisma.media.delete({
			where: {
				id: midiaId,
			},
		});

		return midiasDbToHttp(midias);
	}
}
